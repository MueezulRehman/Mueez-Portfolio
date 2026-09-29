import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as profile, d as strengths, f as summaries, o as languages, t as SiteShell } from "./site-shell-DIkdqKk7.mjs";
import { t as Section } from "./section-buCRjLgO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CNYNUaVH.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "About",
			title: profile.legalName,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg text-muted",
					children: profile.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						profile.location,
						" · ",
						profile.availability
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-3xl space-y-5 text-muted",
					children: summaries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s }, s.slice(0, 32)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted",
					children: [
						"Currently learning ",
						profile.learning.join(" and "),
						". ",
						profile.interest
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Strengths",
			title: "How the work actually looks.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-8 md:grid-cols-2",
				children: [
					["Backend", strengths.backend],
					["Frontend", strengths.frontend],
					["Database", strengths.database],
					["Deployment / production", strengths.production]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: v
					})]
				}, k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Languages",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-border px-4 py-2 text-sm",
					children: [
						l.name,
						" — ",
						l.level
					]
				}, l.name))
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
