import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as strengths, a as environment, c as goals, d as languages, g as skillGroups, h as projects, i as education, l as gtsArchitectureNotes, m as profile, n as achievements, o as freelance, p as personal, s as germany, t as SiteShell, u as jobs, v as summaries, y as unknowns } from "./site-shell-BIQA-h1g.mjs";
import { t as Section } from "./section-CWEewN7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-DJ0vqrne.js
var import_jsx_runtime = require_jsx_runtime();
function ArchivePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Complete record",
			title: "Every professional detail in one place.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-muted",
				children: "Full identity from all conversations — career, SaaS, GTS, Germany, education, personal projects, and notes that still need confirmation. Nothing dropped."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Personal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "glass grid gap-4 rounded-lg p-6 text-sm md:grid-cols-2",
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
						k: "Aliases",
						v: profile.aliases.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Location",
						v: profile.locations.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Age note",
						v: profile.ageNote
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
						k: "Website",
						v: profile.website
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "Freelance brand",
						v: profile.freelanceBrand
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						k: "CV headline",
						v: profile.cvHeadline
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Summaries",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass space-y-4 rounded-lg p-6 text-sm leading-relaxed text-muted",
				children: summaries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s }, s.slice(0, 24)))
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
			eyebrow: "Achievements",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-3 rounded-lg p-6 text-sm text-muted",
				children: achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Skills",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6",
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
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Work history",
			children: jobs.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass mb-4 rounded-lg p-6",
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
				className: "glass mb-6 rounded-lg p-6",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Germany plan",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: germany.destination }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: germany.roles.join(" · ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: germany.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Freelance",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-lg p-6 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-fg",
					children: freelance.brand
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: freelance.fiverr.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Environment",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "glass grid gap-3 rounded-lg p-6 text-sm md:grid-cols-2",
				children: environment.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
					k: e.item,
					v: e.detail
				}, e.item))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Goals",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-2 rounded-lg p-6 text-sm text-muted",
				children: goals.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: g }, g))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Personal / creative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-2 rounded-lg p-6 text-sm text-muted",
				children: personal.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: g }, g))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Engineering strengths",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass space-y-3 rounded-lg p-6 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: strengths.backend }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: strengths.frontend }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: strengths.database }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: strengths.production }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: strengths.product })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "GTS architecture notes",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-2 rounded-lg p-6 text-sm text-muted",
				children: gtsArchitectureNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Still to confirm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "glass space-y-2 rounded-lg p-6 text-sm text-muted",
				children: unknowns.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
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
