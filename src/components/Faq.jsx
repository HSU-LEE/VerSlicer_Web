import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <h2 className="section-title section-title--center">{t.faq.title}</h2>
        <div className="faq__list">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden />
                </button>
                {isOpen && <p className="faq__answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
