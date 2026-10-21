import { asset } from "../constants/assets";
import CodeBlock from "../components/CodeBlock";

// Inline markup: **bold**, `code`, [text](url). "#/slug" links stay in the wiki.
const INLINE = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

export function headingId(text) {
  return "h-" + text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
}

function Heading({ level, text }) {
  const Tag = `h${level}`;
  const id = headingId(text);
  return (
    <Tag className={`wiki-h${level}`} id={id}>
      {text}
      <a
        href="#/"
        className="wiki-anchor"
        aria-hidden
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ¶
      </a>
    </Tag>
  );
}

export function Inline({ text }) {
  const out = [];
  let last = 0;
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = m.index;
    if (m[1]) out.push(<strong key={key}>{m[1]}</strong>);
    else if (m[2]) out.push(<code key={key} className="wiki-code">{m[2]}</code>);
    else {
      const internal = m[4].startsWith("#");
      out.push(
        <a
          key={key}
          href={m[4]}
          {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {m[3]}
        </a>
      );
    }
    last = INLINE.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ b }) {
  switch (b.t) {
    case "h2":
      return <Heading level={2} text={b.x} />;
    case "h3":
      return <Heading level={3} text={b.x} />;
    case "p":
      return <p><Inline text={b.x} /></p>;
    case "ul":
    case "ol": {
      const List = b.t;
      return (
        <List className="wiki-list">
          {b.items.map((item, i) => (
            <li key={i}><Inline text={item} /></li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="wiki-table-wrap">
          <table className="wiki-table">
            <thead>
              <tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}><Inline text={cell} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "code":
      return <CodeBlock lines={b.x.split("\n")} />;
    case "note":
      return (
        <blockquote className={`wiki-note wiki-note--${b.kind}`}>
          <strong className="wiki-note__label">{b.label}:</strong>
          <p><Inline text={b.x} /></p>
        </blockquote>
      );
    case "img":
      return (
        <figure className="wiki-figure">
          <img src={asset(`assets/wiki/${b.src}.jpg`)} alt={b.cap} loading="lazy" />
          <figcaption>{b.cap}</figcaption>
        </figure>
      );
    default:
      return null;
  }
}

export default function Blocks({ blocks }) {
  return blocks.map((b, i) => <Block key={i} b={b} />);
}
