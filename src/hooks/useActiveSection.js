import { useEffect, useState } from "react";

function getScrollAnchor() {
  const navH = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-h")
  );
  return window.scrollY + (Number.isFinite(navH) ? navH : 64) + 8;
}

function sectionTop(el) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function resolveActive(ids) {
  const anchor = getScrollAnchor();
  let active = ids[0] ?? "";

  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && sectionTop(el) <= anchor) active = id;
  }

  return active;
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const update = () => setActive(resolveActive(ids));

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, [ids.join(",")]);

  return active;
}
