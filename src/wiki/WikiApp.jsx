import { useEffect, useMemo, useState } from "react";
import LangToggle from "../components/LangToggle";
import { asset } from "../constants/assets";
import { GITHUB_URL } from "../constants/links";
import { useLanguage } from "../i18n/LanguageContext";
import Blocks, { headingId } from "./Blocks";
import { wiki } from "./content";

function slugFromHash() {
  return window.location.hash.replace(/^#\/?/, "");
}

function pageText(page) {
  return [page.title, page.subtitle, ...page.blocks.map((b) => JSON.stringify(b))]
    .join(" ")
    .toLowerCase();
}

function scrollToHeading(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Home({ w }) {
  return (
    <div className="wiki-home">
      <h2 className="wiki-home__welcome">{w.home.welcome}</h2>
      <div className="wiki-home__banner">
        <p>{w.home.banner}</p>
        <a href="#/quick-start" className="btn btn--primary btn--sm">{w.home.bannerCta}</a>
      </div>
      <div className="wiki-home__grid">
        {w.groups.map((g) => (
          <section key={g.title} className="wiki-home__card">
            <h3>{g.title}</h3>
            <ul>
              {g.pages.map((p) => (
                <li key={p.slug}>
                  <a href={`#/${p.slug}`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function WikiApp() {
  const { lang } = useLanguage();
  const w = wiki[lang];
  const [slug, setSlug] = useState(slugFromHash);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setSlug(slugFromHash());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const pages = w.groups.flatMap((g) => g.pages.map((p) => ({ ...p, group: g.title })));
  const page = pages.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = page ? `${page.title} | ${w.title}` : w.title;
  }, [page, w.title]);

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () => (q ? new Set(pages.filter((p) => pageText(p).includes(q)).map((p) => p.slug)) : null),
    [q, lang]
  );

  const toc = page ? page.blocks.filter((b) => b.t === "h2") : [];

  return (
    <div className={`wiki-shell${menuOpen ? " menu-open" : ""}`}>
      <header className="wiki-top">
        <button
          type="button"
          className="wiki-top__menu"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <a href="#/" className="wiki-top__brand">
          <img src={asset("assets/images/favicon.png")} alt="" width="24" height="24" />
          <span>{w.title}</span>
        </a>
        <input
          type="search"
          className="wiki-top__search"
          placeholder={w.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={w.searchPlaceholder}
        />
        <div className="wiki-top__actions">
          <a href={asset("")} className="wiki-top__site">{w.backToSite}</a>
          <LangToggle />
        </div>
      </header>

      <aside className="wiki-drawer">
        <a href="#/" className={`wiki-drawer__home${page ? "" : " active"}`}>{w.homeLabel}</a>
        {w.groups.map((g) => {
          const shown = g.pages.filter((p) => !matches || matches.has(p.slug));
          if (!shown.length) return null;
          return (
            <div key={g.title} className="wiki-drawer__group">
              <p className="wiki-drawer__group-title">{g.title}</p>
              {shown.map((p) => (
                <a key={p.slug} href={`#/${p.slug}`} className={page?.slug === p.slug ? "active" : ""}>
                  {p.title}
                </a>
              ))}
            </div>
          );
        })}
        {matches && matches.size === 0 && <p className="wiki-drawer__empty">{w.noResults}</p>}
      </aside>
      <div className="wiki-scrim" onClick={() => setMenuOpen(false)} aria-hidden />

      <main className="wiki-main">
        <nav className="wiki-crumbs" aria-label="Breadcrumb">
          <a href="#/" aria-label={w.homeLabel}>⌂</a>
          {page && (
            <>
              <span>/</span>
              <span>{page.group}</span>
              <span>/</span>
              <span className="wiki-crumbs__current">{page.title}</span>
            </>
          )}
        </nav>

        <div className="wiki-pagehead">
          <h1>{page ? page.title : w.home.title}</h1>
          <p>{page ? page.subtitle : w.home.subtitle}</p>
        </div>

        <div className="wiki-content">
          <article className="wiki-body">
            {page ? (
              <>
                <Blocks blocks={page.blocks} />
                {!page.noEndNotes && (
                  <>
                    <h2 className="wiki-h2" id="end-notes">
                      {w.endNotes.title}
                      <a href="#/" className="wiki-anchor" onClick={(e) => { e.preventDefault(); scrollToHeading("end-notes"); }}>¶</a>
                    </h2>
                    {w.endNotes.body.map((x) => <p key={x}>{x}</p>)}
                  </>
                )}
              </>
            ) : (
              <Home w={w} />
            )}
            {(!page || page.noEndNotes) && (
              <p className="wiki-source">
                {w.sourceNote}{" "}
                <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noopener noreferrer">GitHub Issues</a>
              </p>
            )}
          </article>

          {toc.length > 1 && (
            <nav className="wiki-toc" aria-label={w.onThisPage}>
              <p className="wiki-toc__title">{w.onThisPage}</p>
              {toc.map((b) => (
                <a
                  key={b.x}
                  href="#/"
                  onClick={(e) => { e.preventDefault(); scrollToHeading(headingId(b.x)); }}
                >
                  {b.x}
                </a>
              ))}
              {!page.noEndNotes && (
                <a href="#/" onClick={(e) => { e.preventDefault(); scrollToHeading("end-notes"); }}>
                  {w.endNotes.title}
                </a>
              )}
            </nav>
          )}
        </div>
      </main>
    </div>
  );
}
