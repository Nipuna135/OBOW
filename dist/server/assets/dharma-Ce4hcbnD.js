import { T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { c as createLucideIcon, l as lotusImg, m as meditationImg } from "./router-DHWao1k0.js";
import { t as templeImg } from "./temple-BGhwjdSs.js";
import { c as communityImg } from "./community-BPbLFYMp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
const articles = [{
  tag: "Meditation",
  title: "The Breath as Refuge",
  time: "6 min read",
  img: lotusImg,
  type: "article"
}, {
  tag: "Wisdom",
  title: "Understanding the Four Noble Truths",
  time: "12 min read",
  img: templeImg,
  type: "article"
}, {
  tag: "Compassion",
  title: "Metta in a Time of Division",
  time: "8 min read",
  img: communityImg,
  type: "article"
}, {
  tag: "Practice",
  title: "Walking Meditation: A Beginner's Guide",
  time: "5 min read",
  img: meditationImg,
  type: "article"
}, {
  tag: "Talk",
  title: "On Impermanence — Bhikkhu Anālayo",
  time: "48 min",
  img: templeImg,
  type: "video"
}, {
  tag: "Audio",
  title: "Guided Loving-Kindness Meditation",
  time: "20 min",
  img: lotusImg,
  type: "audio"
}];
const iconMap = {
  article: FileText,
  video: Video,
  audio: Headphones
};
function DharmaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-20 pb-12 px-6 text-center bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "Dharma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-primary", children: "Teachings of the Path" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light", children: "Articles, audio meditations, and recorded talks — a living library of wisdom freely shared." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center mb-12", children: ["All", "Meditation", "Wisdom", "Compassion", "Practice", "Audio", "Video"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 py-2 rounded-full text-sm border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all", children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: articles.map((a) => {
        const Icon = iconMap[a.type];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl mb-5 shadow-soft relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.img, alt: a.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: a.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "· ",
              a.time
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-primary group-hover:text-maroon-deep transition-colors", children: a.title })
        ] }, a.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto bg-gradient-maroon rounded-3xl p-12 md:p-16 text-primary-foreground grid md:grid-cols-[auto_1fr_auto] gap-8 items-center shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs uppercase tracking-widest mb-2", children: "Daily Practice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl", children: "Guided Meditation Library" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/70 text-sm", children: "Free audio sessions in English, Sinhala, and Thai." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3 rounded-full bg-gradient-gold text-accent-foreground font-medium hover:shadow-glow transition-all", children: "Listen Now" })
    ] }) })
  ] });
}
export {
  DharmaPage as component
};
