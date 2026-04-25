import { T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { c as createLucideIcon, L as Link, l as lotusImg, m as meditationImg } from "./router-DHWao1k0.js";
import { h as heroImg } from "./hero-Bb5ERkKp.js";
import { c as communityImg } from "./community-BPbLFYMp.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$1);
const __iconNode = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = createLucideIcon("earth", __iconNode);
const pillars = [{
  icon: BookOpen,
  title: "Dharma",
  desc: "Timeless teachings, meditation guides, and the path of wisdom.",
  to: "/dharma"
}, {
  icon: Earth,
  title: "Global Community",
  desc: "Connect with practitioners across continents and traditions.",
  to: "/about"
}, {
  icon: CalendarDays,
  title: "Events & Forums",
  desc: "International gatherings, retreats, and Dharma dialogues.",
  to: "/events"
}, {
  icon: CirclePlay,
  title: "Media",
  desc: "Talks, gallery, and a living archive of Dharma transmissions.",
  to: "/media"
}];
const teachings = [{
  tag: "Meditation",
  title: "The Stillness Beneath the Storm",
  excerpt: "On returning to the breath when the world feels heavy.",
  img: lotusImg
}, {
  tag: "Wisdom",
  title: "Interbeing: We Are Made of Each Other",
  excerpt: "A reflection on dependent origination in daily life.",
  img: meditationImg
}, {
  tag: "Compassion",
  title: "Metta for a Wounded World",
  excerpt: "Practising loving-kindness as a global responsibility.",
  img: communityImg
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[92vh] min-h-[640px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Golden sunrise over misty Buddhist mountains", width: 1920, height: 1280, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-8", children: "Dharma · Compassion · Unity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.05]", children: [
          "One Buddha",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic text-gradient-gold", children: "One World" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg md:text-xl text-foreground/75 font-light max-w-2xl mx-auto leading-relaxed", children: "Uniting the world through the Dharma — a global sangha sharing wisdom, compassion, and the path of awakening." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dharma", className: "px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all inline-flex items-center justify-center gap-2 group", children: [
            "Explore Teachings",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-8 py-4 rounded-full border border-primary/30 bg-background/60 backdrop-blur text-primary font-medium hover:bg-primary/5 transition-all", children: "Join the Community" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "Four Pillars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-primary", children: "A Path Walked Together" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: "Four streams flowing into one ocean — the foundations of our shared journey." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: pillars.map(({
        icon: Icon,
        title,
        desc,
        to
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/60 shadow-soft hover:shadow-glow transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-gradient-warm flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary", size: 24, strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-primary mb-3", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-xs uppercase tracking-widest text-accent inline-flex items-center gap-2", children: [
          "Discover ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12, className: "group-hover:translate-x-1 transition-transform" })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-3", children: "Featured Teachings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-primary", children: "Words That Quiet the Mind" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dharma", className: "text-primary hover:text-accent inline-flex items-center gap-2 text-sm font-medium", children: [
          "View all teachings ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: teachings.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden rounded-2xl mb-5 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent mb-2", children: t.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-primary leading-snug group-hover:text-maroon-deep", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t.excerpt })
      ] }, t.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: communityImg, alt: "Global Dharma forum", loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 bg-background/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest text-primary", children: "Featured Event" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-4", children: "12 — 15 May 2026 · Kandy, Sri Lanka" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-primary leading-tight", children: "Global Dharma Forum 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "A four-day international gathering bringing together monastics, scholars, and lay practitioners from every continent. Together we will explore how the Dharma can respond to the deepest questions of our time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all", children: "Event Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "px-6 py-3 rounded-full border border-border text-primary text-sm font-medium hover:bg-secondary transition-all", children: "Register Interest" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto bg-gradient-maroon rounded-3xl p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "One Buddha One World" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-4xl md:text-6xl leading-tight", children: [
          "Join the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "Global Movement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-primary-foreground/80 max-w-2xl mx-auto", children: "Receive teachings, meditation guides, and event invitations. Walk this path with practitioners from every corner of the world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "your@email.com", className: "flex-1 px-5 py-3.5 rounded-full bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-medium hover:shadow-glow transition-all", children: "Subscribe" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
