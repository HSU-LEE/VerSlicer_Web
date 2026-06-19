import { useLanguage } from "../i18n/LanguageContext";
import CodeBlock from "./CodeBlock";

export default function InstallGuide() {
  const { t } = useLanguage();
  const ig = t.install;

  return (
    <section className="section install" id="install">
      <div className="container">
        <h2 className="section-title">{ig.title}</h2>
        <p className="section-desc">{ig.desc}</p>
        <div className="install__layout">
          <div>
            <h3 className="install__sub">{ig.requirementsTitle}</h3>
            <ul className="req-list">
              {ig.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
            <p className="install__note">{ig.buildNote}</p>
            <ol className="steps-list">
            {ig.steps.map((step, i) => (
              <li key={step.title} className="steps-list__item">
                <span className="steps-list__num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
            </ol>
          </div>
          <CodeBlock lines={ig.codeLines} />
        </div>
      </div>
    </section>
  );
}
