import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function CodeBlock({ lines }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const text = lines.join("\n");

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-panel">
      <div className="code-panel__bar">
        <span className="code-panel__label">Terminal</span>
        <button type="button" className="code-panel__copy" onClick={copy}>
          {copied ? t.common.copied : t.common.copy}
        </button>
      </div>
      <pre className="code-block">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className={
                line.startsWith("#")
                  ? "code-comment"
                  : line.startsWith('"')
                    ? "code-string"
                    : ""
              }
            >
              {line}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
