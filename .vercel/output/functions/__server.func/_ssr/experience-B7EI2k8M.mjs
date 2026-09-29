import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell, u as jobs } from "./site-shell-BIQA-h1g.mjs";
import { t as Section } from "./section-CWEewN7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-B7EI2k8M.js
var import_jsx_runtime = require_jsx_runtime();
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Experience",
		title: "Work history, intern to independent SaaS.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-5",
			children: jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass rounded-lg p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-primary",
						children: job.period
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl",
						children: job.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: job.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: job.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l border-glass-edge pl-4 text-sm leading-relaxed text-muted",
							children: p
						}, p))
					})
				]
			}, job.company))
		})
	}) });
}
//#endregion
export { ExperiencePage as component };
