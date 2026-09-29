import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as profile, o as freelance, t as SiteShell } from "./site-shell-BIQA-h1g.mjs";
import { t as Section } from "./section-CWEewN7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D0OxwdKV.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Contact",
		title: "Let’s talk about production Laravel work.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-xl rounded-lg p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted",
				children: [
					"Based in ",
					profile.location,
					". ",
					profile.availability,
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 space-y-1",
						children: profile.emails.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${e}`,
							className: "block min-h-11 text-lg underline-offset-4 hover:underline",
							children: e
						}, e))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${profile.phoneDisplay.replace(/\s/g, "")}`,
							className: "text-lg",
							children: profile.phoneDisplay
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: ["Local: ", profile.phoneLocal]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "Website"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.website,
							className: "text-lg underline-offset-4 hover:underline",
							target: "_blank",
							rel: "noreferrer",
							children: "gts-spc.com"
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: "LinkedIn"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-lg",
						children: profile.linkedin
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: "Freelance brand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-lg",
							children: freelance.brand
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted",
							children: freelance.fiverr.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						})
					] })
				]
			})]
		})
	}) });
}
//#endregion
export { ContactPage as component };
