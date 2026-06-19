const base = import.meta.env.BASE_URL;

export function asset(path) {
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}
