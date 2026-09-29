import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as jobs, c as profile, d as strengths, f as summaries, i as gtsArchitectureNotes, l as projects, n as achievements, o as languages, t as SiteShell, u as skillGroups } from "./site-shell-DIkdqKk7.mjs";
import { t as Section } from "./section-buCRjLgO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-DRbNRK1K.js
var import_jsx_runtime = require_jsx_runtime();
function ArchivePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Complete record",
			title: "Every professional detail in one place.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-muted",
				children: "This page keeps the full profile — personal, skills, history, projects, GTS architecture notes — without dropping parts. Use it as a source document."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Personal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-4 text-sm md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Legal name",
						v: profile.legalName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Name",
						v: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Role",
						v: profile.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Location",
						v: profile.location
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Availability",
						v: profile.availability
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Emails",
						v: profile.emails.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Phone",
						v: `${profile.phoneDisplay} / ${profile.phoneLocal}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "LinkedIn",
						v: profile.linkedin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Professional start",
						v: profile.startedProfessional
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Experience",
						v: profile.years
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Learning",
						v: profile.learning.join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Direction",
						v: profile.interest
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Summaries",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-sm leading-relaxed text-muted",
				children: [
					summaries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s }, s.slice(0, 24))),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.headline }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.positioning })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Achievements",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3 text-sm text-muted",
				children: achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Skills",
			children: [skillGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 text-sm font-medium text-fg",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: g.items.join(" · ")
				})]
			}, g.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: ["Languages: ", languages.map((l) => `${l.name} (${l.level})`).join(" · ")]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Work history",
			children: jobs.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: j.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-primary",
						children: [
							j.period,
							" · ",
							j.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted",
						children: j.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
					})
				]
			}, j.company))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Projects",
			children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mb-12 border-t border-border pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-primary",
						children: [
							p.tag,
							" · ",
							p.period,
							" · ",
							p.role
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: p.summary
					}),
					p.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: para
					}, para.slice(0, 28))),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted",
						children: p.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", b] }, b))
					})
				]
			}, p.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Engineering strengths",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: strengths.backend
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: strengths.frontend
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: strengths.database
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: strengths.production
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "GTS architecture notes",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm text-muted",
				children: gtsArchitectureNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
			})
		})
	] });
}
function Item({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs uppercase tracking-widest text-primary",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-muted",
		children: v
	})] });
}
//#endregion
export { ArchivePage as component };
