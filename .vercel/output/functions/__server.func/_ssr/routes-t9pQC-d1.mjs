import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as MapPin } from "../_libs/lucide-react.mjs";
import { f as metrics, g as skillGroups, h as projects, m as profile, n as achievements, t as SiteShell, u as jobs } from "./site-shell-BIQA-h1g.mjs";
import { t as Section } from "./section-CWEewN7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-t9pQC-d1.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = projects.filter((p) => p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 pb-8 pt-16 md:px-8 md:pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary",
						children: "Laravel · PHP · SaaS · Logistics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-4xl font-display text-4xl leading-[1.12] md:text-6xl",
						children: profile.legalName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl text-muted md:text-2xl",
						children: profile.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
						children: profile.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
						children: profile.positioning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 16,
									className: "text-primary"
								}), profile.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-hair" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.availability })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/work",
								className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-fg",
								children: ["View work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "glass inline-flex min-h-11 items-center rounded-md px-5 text-sm",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/archive",
								className: "inline-flex min-h-11 items-center rounded-md px-5 text-sm text-muted",
								children: "Full profile"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-4",
				children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-lg px-5 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-primary md:text-3xl",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: m.label
					})]
				}, m.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Featured",
			title: "Work that proves the profile.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: p.slug },
					className: "group glass rounded-lg p-6 transition-colors hover:border-primary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-primary",
							children: p.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: p.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 inline-flex items-center gap-2 text-sm text-fg",
							children: ["Case study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "transition-transform group-hover:translate-x-0.5"
							})]
						})
					]
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Experience",
			title: "From intern to independent SaaS.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-4",
				children: jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "glass rounded-lg p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: job.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl",
							children: job.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: job.title
						})
					]
				}, job.company))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/experience",
				className: "mt-8 inline-flex items-center gap-2 text-sm text-primary",
				children: ["Full timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Skills",
			title: "A stack used on live business software.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: skillGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-lg p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-medium uppercase tracking-widest text-muted",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-glass-edge px-2.5 py-1 text-xs text-fg",
							children: item
						}, item))
					})]
				}, g.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Results",
			title: "Facts only — no inflated numbers.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass max-w-3xl space-y-4 rounded-lg p-6 text-muted",
				children: achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l border-primary/50 pl-4",
					children: a
				}, a))
			})
		})
	] });
}
//#endregion
export { Home as component };
