import { useLanguage } from "../i18n/LanguageContext";

export default function Vision() {
  const { t } = useLanguage();
  const v = t.vision;

  return (
    <section className="section vision" id="vision">
      <div className="container vision__inner">
        <h2 className="section-title section-title--center">{v.title}</h2>
        {v.intro && <p className="vision__intro">{v.intro}</p>}
        <ol className="steps-flow">
          {v.steps.map((step, i) => (
            <li key={step.title} className="steps-flow__item">
              <span className="steps-flow__num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
