import { J as notFound, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as gtsArchitectureNotes, l as projects, t as SiteShell } from "./site-shell-DIkdqKk7.mjs";
import { n as Route } from "./router-DoHZXTYY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-BnY3bNG8.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { slug } = Route.useParams();
	const project = projects.find((p) => p.slug === slug);
	if (!project) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " All work"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-xs uppercase tracking-[0.18em] text-primary",
				children: project.tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl md:text-5xl",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					project.role,
					" · ",
					project.period
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: project.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-md border border-border px-2 py-1 text-xs",
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-lg leading-relaxed text-muted",
				children: project.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-5 text-[0.95rem] leading-relaxed text-muted",
				children: project.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para.slice(0, 40)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Scope in detail"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: project.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l border-primary/40 pl-4 text-sm leading-relaxed text-muted",
					children: b
				}, b))
			}),
			project.slug === "gts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Architecture rules from the live system"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: gtsArchitectureNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm leading-relaxed text-muted",
					children: n
				}, n))
			})] }) : null
		]
	}) });
}
//#endregion
export { ProjectPage as component };
