import { asset } from "../constants/assets";
import { useLanguage } from "../i18n/LanguageContext";
import { GITHUB_RELEASES_URL, GITHUB_URL } from "../constants/links";
import ScreenFrame from "./ScreenFrame";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <header className="hero" id="product">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__headline">{h.headline}</h1>
          <p className="hero__motto">{h.motto}</p>
          <p className="hero__lead">{h.lead}</p>
          <div className="hero__cta">
            <a
              href="https://github.com/HSU-LEE/VerSlicer/releases"
              className="btn btn--primary btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.downloadBtn}
            </a>
            <a
              href="https://github.com/HSU-LEE/VerSlicer"
              className="btn btn--outline btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.githubBtn}
            </a>
          </div>
          <ul className="hero__stats" aria-label="Features">
            {h.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__visual-inner">
            <ScreenFrame
              className="screen-frame--hero"
              src={asset("assets/images/screen-smart-print.png")}
              alt="VerSlicer Smart Print"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
