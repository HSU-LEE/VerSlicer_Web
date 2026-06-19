import { useLanguage } from "../i18n/LanguageContext";
import ScreenFrame from "./ScreenFrame";

export default function LocalAi() {
  const { t } = useLanguage();
  const l = t.localAi;

  return (
    <section className="section local-ai" id="local-ai">
      <div className="container feature-row">
        <div className="feature-row__visual">
          <ScreenFrame src="/assets/images/screen-ai-coach.png" alt="AI Coach" />
        </div>
        <div className="feature-row__copy">
          <h2 className="section-title">{l.title}</h2>
          <div className="prose">
            <p>{l.p1}</p>
            <p>{l.p2}</p>
          </div>
          <ul className="check-list">
            {l.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
