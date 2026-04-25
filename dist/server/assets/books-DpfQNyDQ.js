import { T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { b as booksImg } from "./router-DHWao1k0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const books = [{
  title: "The Path to Awakening",
  author: "Bhikkhu Bodhi",
  category: "Foundation"
}, {
  title: "Heart of the Dhamma",
  author: "Ajahn Chah",
  category: "Practice"
}, {
  title: "Sutta Nipāta — A Translation",
  author: "Various",
  category: "Scripture"
}, {
  title: "Loving-Kindness in Daily Life",
  author: "Sharon Salzberg",
  category: "Compassion"
}, {
  title: "On Mindfulness",
  author: "Thich Nhat Hanh",
  category: "Meditation"
}, {
  title: "The Four Noble Truths",
  author: "Walpola Rahula",
  category: "Foundation"
}];
function BooksPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-20 pb-12 px-6 text-center bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "Library" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-primary", children: "Books & Publications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light", children: "A growing library of Buddhist texts, freely offered in the spirit of dāna." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: books.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/60 hover:shadow-soft transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] overflow-hidden rounded-xl mb-5 bg-gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: booksImg, alt: b.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent mb-2", children: b.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-primary leading-snug", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "by ",
        b.author
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-5 text-sm text-primary hover:text-accent font-medium", children: "Read free →" })
    ] }, b.title)) }) })
  ] });
}
export {
  BooksPage as component
};
