import { useLanguage } from "../i18n/LanguageContext";

export default function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section className="section ecosystem" id="ecosystem">
      <div className="container">
        <h2 className="section-title section-title--center">{t.ecosystem.title}</h2>
        <div className="eco-grid">
          {t.ecosystem.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="eco-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="eco-card__title">{item.title}</h3>
              <p className="eco-card__desc">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
