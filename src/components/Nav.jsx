import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { NAV_ACTIVE_MAP, NAV_LINKS, SECTION_IDS } from "../i18n/translations";
import { useActiveSection } from "../hooks/useActiveSection";
import { GITHUB_RELEASES_URL, GITHUB_URL } from "../constants/links";
import GitHubIcon from "./GitHubIcon";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const navActive = NAV_ACTIVE_MAP[active] ?? active;
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="container nav__inner">
          <a href="#product" className="nav__brand" onClick={closeMenu}>
            <img src="/assets/images/favicon.png" alt="" width="28" height="28" />
            <span>VerSlicer</span>
          </a>
          <ul className="nav__links">
            {NAV_LINKS.map(({ href, key, id }) => (
              <li key={key}>
                <a href={href} className={navActive === id ? "active" : ""}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__actions">
            <LangToggle />
            <a
              href={GITHUB_URL}
              className="nav__github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={GITHUB_RELEASES_URL}
              className="btn btn--primary btn--sm nav__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.download}
            </a>
            <button
              className="nav__menu-btn"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(({ href, key }) => (
          <a key={key} href={href} onClick={closeMenu}>
            {t.nav[key]}
          </a>
        ))}
        <a
          href={GITHUB_URL}
          className="mobile-menu__github"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <GitHubIcon size={18} />
          GitHub
        </a>
        <a
          href={GITHUB_RELEASES_URL}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {t.nav.download}
        </a>
        <div className="mobile-menu__lang">
          <LangToggle />
        </div>
      </div>
    </>
  );
}
