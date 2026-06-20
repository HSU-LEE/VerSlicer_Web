import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Results() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(0);
  const items = t.results.items;
  const current = items[active];
  const cardRefs = useRef([]);

  useEffect(() => {
    setActive(0);
  }, [lang]);

  useEffect(() => {
    cardRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  return (
    <section className="section results" id="features">
      <div className="container">
        <h2 className="section-title section-title--center">{t.results.title}</h2>
        <p className="section-desc section-desc--center">{t.results.desc}</p>

        <div className="chat-demo">
          <div className="chat-demo__header">
            <span className="chat-demo__dots">
              <span />
              <span />
              <span />
            </span>
            <span className="chat-demo__label">{t.results.chatLabel}</span>
          </div>
          <div className="chat-demo__body">
            <div className="chat-demo__msg chat-demo__msg--user" key={`u-${active}`}>
              <span>{current.example}</span>
            </div>
            <div className="chat-demo__msg chat-demo__msg--ai" key={`a-${active}`}>
              <span>{current.reply}</span>
            </div>
          </div>
        </div>

        <p className="results__scroll-hint">{t.results.scrollHint}</p>

        <div className="results__carousel">
          <div className="results__grid">
            {items.map((item, i) => (
              <button
                type="button"
                key={item.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`result-card${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <h3 className="result-card__title">{item.title}</h3>
                <p className="result-card__desc">{item.desc}</p>
                <span className="result-card__example">{item.example}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="results__pager" aria-hidden>
          {items.map((item, i) => (
            <span key={item.title} className={active === i ? "active" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
