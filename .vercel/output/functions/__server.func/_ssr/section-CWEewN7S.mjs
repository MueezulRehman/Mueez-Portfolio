import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./site-shell-BIQA-h1g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-CWEewN7S.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, eyebrow, title, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: cn("mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}) : null,
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-10 max-w-3xl font-display text-3xl md:text-4xl",
				children: title
			}) : null,
			children
		]
	});
}
//#endregion
export { Section as t };
