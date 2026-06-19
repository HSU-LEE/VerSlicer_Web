import { useLanguage } from "../i18n/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "ko" ? "active" : ""}
        onClick={() => setLang("ko")}
      >
        KO
      </button>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
