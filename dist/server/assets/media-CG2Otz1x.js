import { T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { c as createLucideIcon, m as meditationImg, l as lotusImg, b as booksImg } from "./router-DHWao1k0.js";
import { t as templeImg } from "./temple-BGhwjdSs.js";
import { c as communityImg } from "./community-BPbLFYMp.js";
import { h as heroImg } from "./hero-Bb5ERkKp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode);
const videos = [{
  title: "Opening of the Global Dharma Forum",
  duration: "3:42",
  img: templeImg
}, {
  title: "Teaching on Sunyata — Bhante Sujato",
  duration: "52:18",
  img: meditationImg
}, {
  title: "Voices of the Sangha",
  duration: "8:24",
  img: communityImg
}];
const gallery = [lotusImg, templeImg, meditationImg, communityImg, heroImg, booksImg];
function MediaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-20 pb-12 px-6 text-center bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "Media" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-primary", children: "A Living Archive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light", children: "Moments, teachings, and reflections from our global sangha." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-10", children: "Featured Videos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden rounded-2xl shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.img, alt: v.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-maroon-deep/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-accent-foreground shadow-glow group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 24, fill: "currentColor" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-background/80 backdrop-blur px-2.5 py-1 rounded text-xs text-primary", children: v.duration })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-xl text-primary", children: v.title })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-10", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-2xl shadow-soft ${i % 5 === 0 ? "row-span-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Gallery image ${i + 1}`, loading: "lazy", className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }, i)) })
    ] }) })
  ] });
}
export {
  MediaPage as component
};
