import { useLanguage } from "../i18n/LanguageContext";

const CONTACT_EMAIL = "harry.srobot.2011@gmail.com";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <p className="footer__license">{f.license}</p>
        <p className="footer__upstream">{f.upstream}</p>
      </div>
    </footer>
  );
}
