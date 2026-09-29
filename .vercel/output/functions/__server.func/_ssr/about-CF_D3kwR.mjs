import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as strengths, d as languages, i as education, m as profile, s as germany, t as SiteShell, v as summaries } from "./site-shell-BIQA-h1g.mjs";
import { t as Section } from "./section-CWEewN7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CF_D3kwR.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "About",
			title: profile.legalName,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-lg text-muted",
						children: profile.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: profile.aliases.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							profile.location,
							" · ",
							profile.ageNote,
							" · ",
							profile.availability
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-3xl space-y-5 text-muted",
						children: summaries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s }, s.slice(0, 32)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted",
						children: [
							"Currently learning ",
							profile.learning.join(", "),
							". ",
							profile.interest
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Strengths",
			title: "How the work actually looks.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					["Backend", strengths.backend],
					["Frontend", strengths.frontend],
					["Database", strengths.database],
					["Deployment / production", strengths.production],
					["Product thinking", strengths.product]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-lg p-6",
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
			eyebrow: "Germany",
			title: "Where this is going.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: germany.destination
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: germany.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-glass-edge px-3 py-1 text-xs",
							children: r
						}, r))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2 text-sm text-muted",
						children: germany.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Education",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-3 rounded-lg p-6 text-sm text-muted",
				children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: e }, e))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Languages",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-3",
				children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "glass rounded-md px-4 py-2 text-sm",
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
