import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CWHMerU4.js";
import { c as createLucideIcon } from "./router-DHWao1k0.js";
import { M as MapPin } from "./map-pin-CVvEf4gU.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-20 pb-12 px-6 text-center bg-gradient-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lotus-divider text-xs uppercase tracking-[0.4em] text-accent mb-6", children: "Welcome" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-primary", children: "Join the Sangha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light", children: "We welcome you with open hearts. Reach out, share a question, or simply say hello." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-2", children: "Reach Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "May our paths cross in peace." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: [{
          Icon: Mail,
          label: "Email",
          value: "sangha@onebuddhaoneworld.org"
        }, {
          Icon: MapPin,
          label: "Headquarters",
          value: "Kandy, Sri Lanka"
        }, {
          Icon: Globe,
          label: "Languages",
          value: "English · සිංහල · ไทย"
        }].map(({
          Icon,
          label,
          value
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gradient-warm flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground mt-1", children: value })
          ] })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-soft", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lotus-divider text-xs uppercase tracking-[0.3em] text-accent mb-6", children: "Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl text-primary", children: "Thank you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Your message has reached the sangha. We will respond with care." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl text-primary mb-6", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, maxLength: 100, className: "mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, maxLength: 255, className: "mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, maxLength: 1e3, rows: 5, className: "mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-accent transition-colors resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all", children: "Send Message" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
