import { T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { c as createLucideIcon, a as bhantesImg, m as meditationImg } from "./router-DHWao1k0.js";
import { t as templeImg } from "./temple-BGhwjdSs.js";
import { M as MapPin } from "./map-pin-CVvEf4gU.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const ndevent = "/assets/Irrg-HkLxaMim.jpg";
const featured = {
  title: "“One Buddha One World” International Organization",
  date: "31st May 2025",
  location: "Kandy, Sri Lanka",
  description: "“One Buddha One World” International Organization, Officially Established in Sri Lanka...",
  img: bhantesImg
};
const pastEvent = {
  title: "Inauguration Ceremony of One Buddha One World",
  date: "29 May – 3 June 2025",
  location: "Sigiriya, Sri Lanka",
  description: "The grand inauguration ceremony was held in Sigiriya, Sri Lanka, marking the official founding of the One Buddha One World international Buddhist organization — uniting monastics and laypeople from across the globe under one shared vision of the Dharma.",
  img: ndevent
  // swap with your inauguration photo
};
const events = [{
  date: "08 Jun 2026",
  title: "Vesak Global Meditation",
  location: "Online · Worldwide",
  img: meditationImg
}, {
  date: "22 Jul 2026",
  title: "Mindfulness in Action Retreat",
  location: "Chiang Mai, Thailand",
  img: templeImg
}, {
  date: "14 Sep 2026",
  title: "Youth Dharma Gathering",
  location: "Colombo, Sri Lanka",
  img: bhantesImg
}, {
  date: "03 Nov 2026",
  title: "Interfaith Compassion Dialogue",
  location: "Geneva, Switzerland",
  img: templeImg
}];
function EventsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-20 pb-12 px-6 text-center bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-primary", children: "Gather in the Dharma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light", children: "International forums, retreats, and community gatherings around the world." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl overflow-hidden shadow-soft border border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] lg:aspect-auto lg:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.img, alt: featured.title, loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs uppercase tracking-widest", children: "Featured Forum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-primary mt-5 leading-tight", children: featured.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16, className: "text-accent" }),
            " ",
            featured.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-accent" }),
            " ",
            featured.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, className: "text-accent" }),
            " 150+ expected participants"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/80 leading-relaxed", children: featured.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all", children: "Read More" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-10", children: "Past Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center bg-card rounded-3xl overflow-hidden shadow-soft border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 md:p-14 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs uppercase tracking-widest", children: "Past Event" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-primary mt-5 leading-tight", children: pastEvent.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16, className: "text-accent" }),
              " ",
              pastEvent.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-accent" }),
              " ",
              pastEvent.location
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/80 leading-relaxed", children: pastEvent.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all", children: "Read More" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] lg:aspect-auto lg:h-full order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: pastEvent.img, alt: pastEvent.title, loading: "lazy", className: "w-full h-full object-cover" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-10", children: "Upcoming Gatherings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-[120px_1fr_auto] gap-6 items-center p-5 rounded-2xl bg-card border border-border/60 hover:border-accent/60 hover:shadow-soft transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-[120px] aspect-[4/3] md:aspect-square overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, loading: "lazy", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: e.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-primary mt-1", children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-muted-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
            " ",
            e.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-5 py-2.5 rounded-full border border-border text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all", children: "Details" })
      ] }, e.title)) })
    ] }) })
  ] });
}
export {
  EventsPage as component
};
