// Block constructors for wiki pages; rendered by Blocks.jsx.
export const block = {
  h2: (x) => ({ t: "h2", x }),
  h3: (x) => ({ t: "h3", x }),
  p: (x) => ({ t: "p", x }),
  ul: (items) => ({ t: "ul", items }),
  ol: (items) => ({ t: "ol", items }),
  table: (head, rows) => ({ t: "table", head, rows }),
  code: (x) => ({ t: "code", x }),
  img: (src, cap) => ({ t: "img", src, cap }),
  note: (kind, label, x) => ({ t: "note", kind, label, x }),
};
