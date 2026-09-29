import { S as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as projects, t as SiteShell } from "./site-shell-DIkdqKk7.mjs";
import { t as Section } from "./section-buCRjLgO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-BdINF_NK.js
var import_jsx_runtime = require_jsx_runtime();
function WorkLayout() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/work") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		eyebrow: "Selected work",
		title: "Projects ordered by depth, not a random list.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-10 max-w-2xl text-muted",
			children: "The homepage should make it clear in 10–15 seconds: Mueez is a Laravel/PHP developer who builds real business systems. These case studies prove it."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5",
			children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work/$slug",
				params: { slug: p.slug },
				className: "rounded-lg border border-border bg-surface p-6 hover:border-primary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: p.tag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: p.period
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: p.summary
					})
				]
			}, p.slug))
		})]
	}) });
}
//#endregion
export { WorkLayout as component };
