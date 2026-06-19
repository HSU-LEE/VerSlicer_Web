import { asset } from "../constants/assets";
import { useLanguage } from "../i18n/LanguageContext";
import ScreenFrame from "./ScreenFrame";

export default function Familiar() {
  const { t } = useLanguage();
  const f = t.familiar;

  return (
    <section className="section familiar" id="familiar">
      <div className="container feature-row feature-row--reverse">
        <div className="feature-row__visual">
          <ScreenFrame src={asset("assets/images/screen-workflow.png")} alt="VerSlicer workflow" />
        </div>
        <div className="feature-row__copy">
          <h2 className="section-title">{f.title}</h2>
          <div className="prose">
            <p>{f.p1}</p>
            <p>{f.p2}</p>
          </div>
          <ul className="tag-list">
            {f.features.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
