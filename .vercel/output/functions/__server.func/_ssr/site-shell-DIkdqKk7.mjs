import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-DIkdqKk7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	legalName: "Muhammad Mueez Ul Rehman",
	name: "Mueez Ul Rehman",
	role: "Laravel & PHP Full-Stack Developer",
	headline: "I build reliable, scalable web applications and business management systems using Laravel, PHP, MySQL, JavaScript, and modern web technologies.",
	positioning: "Laravel & PHP Full-Stack Developer building scalable business, logistics, HRM, e-commerce, and management systems.",
	location: "Mandi Bahauddin, Punjab, Pakistan",
	availability: "Open to remote & relocation",
	emails: ["mueezulrehman20@gmail.com", "mueez12m@gmail.com"],
	phoneDisplay: "+92 342 6088427",
	phoneLocal: "03426088427",
	linkedin: "Mueez Ul Rehman",
	startedProfessional: "May 2024",
	years: "2+ years professional (3+ including internships)",
	learning: ["React.js", "German A1"],
	interest: "Growing toward opportunities in Germany / Ausbildung"
};
var summaries = [
	"Full-stack developer with 3+ years of experience building production-grade web applications. Started as an Android/Java intern and transitioned into Laravel/PHP development. Currently working independently on freelance client projects across logistics, ERP, HRM, and e-commerce domains.",
	"Specializes in designing and delivering complex multi-branch business systems with strong focus on data integrity, financial controls, role-based access, and clean architecture. Has successfully delivered live systems used in Pakistan, UAE, Oman, and Brazil.",
	"Started professional development work around May 2024. Main positioning: Laravel & PHP Full-Stack Web Developer | MySQL | REST APIs | JavaScript | Bootstrap | Git.",
	"Works independently on freelance client projects. Comfortable taking systems through development → deployment → maintenance — not only Laravel syntax, but production environments."
];
var achievements = [
	"Delivered production systems across 4 countries (Pakistan, UAE, Oman, Brazil) with zero critical post-launch bugs.",
	"Progressed from Android development to core Laravel contributor across ERP, HRM, e-commerce, and logistics domains.",
	"Independently architected and developed a complex multi-branch logistics + finance platform used by a real Oman-based transport company.",
	"Designed professional financial workflows including vendor payables, customer receivables, currency snapshots, and audit trails.",
	"Functions as Lead Software Developer on the GTS platform (from March 2026), maintaining production business software used for real operational workflows."
];
var skillGroups = [
	{
		title: "Backend",
		items: [
			"PHP",
			"Laravel",
			"REST APIs",
			"MVC architecture",
			"Authentication & RBAC",
			"Validation",
			"Eloquent ORM",
			"Middleware",
			"Migrations",
			"Email systems",
			"File handling",
			"Reporting",
			"Business logic"
		]
	},
	{
		title: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"JavaScript (ES6)",
			"Bootstrap 5",
			"Tailwind CSS",
			"Alpine.js",
			"jQuery",
			"AJAX",
			"Blade",
			"Livewire",
			"React.js — learning"
		]
	},
	{
		title: "Mobile",
		items: [
			"Java",
			"Android SDK",
			"XML Layouts"
		]
	},
	{
		title: "Database",
		items: [
			"MySQL / SQL",
			"Relational database design",
			"Foreign keys",
			"Relationships",
			"Migrations",
			"Query optimization",
			"Data validation",
			"Company/user-based data separation",
			"Schema design"
		]
	},
	{
		title: "Tools",
		items: [
			"Git",
			"GitHub",
			"Composer",
			"Postman",
			"XAMPP",
			"phpMyAdmin",
			"VS Code",
			"Vite",
			"DomPDF",
			"Laravel Excel",
			"Apache",
			"Hostinger",
			"Namecheap"
		]
	},
	{
		title: "Engineering",
		items: [
			"Database design",
			"API integrations",
			"Authentication & authorization",
			"Performance optimization",
			"Testing & debugging",
			"Security / cybersecurity interests",
			"System integration",
			"Production Laravel deployments",
			"Domains / subdomains",
			".env and production debugging"
		]
	}
];
var languages = [
	{
		name: "Urdu",
		level: "Native"
	},
	{
		name: "English",
		level: "Professional"
	},
	{
		name: "German",
		level: "Beginner / A1 — learning"
	}
];
var metrics = [
	{
		value: "2+",
		label: "Years professional development"
	},
	{
		value: "4",
		label: "Countries with live systems"
	},
	{
		value: "Mar 2026",
		label: "GTS logistics platform"
	},
	{
		value: "Laravel",
		label: "Primary stack"
	}
];
var projects = [
	{
		slug: "gts",
		name: "Global Transport Services — GTS",
		tag: "Logistics & freight platform",
		featured: true,
		period: "January 2026 – Present (Lead Software Developer from March 2026)",
		role: "Lead Software Developer · Freelance",
		stack: [
			"Laravel 12",
			"PHP 8.3",
			"MySQL",
			"Blade",
			"RBAC",
			"DomPDF"
		],
		summary: "Multi-branch transport, fleet, and freight-forwarding platform for Global Transport Services, Oman. Production software used for real operational and financial workflows.",
		body: [
			"Company: Global Transport Services, Oman. Platform: Laravel-based logistics and transport management system. Role: Lead Software Developer. Working on this system since March 2026, with freelance engagement from January 2026 to present.",
			"GTS uses two related but separate operational areas. Trips are used for domestic fleet transport — a vehicle movement performed by a driver and truck, keeping transport, payment, delivery-note, maintenance, and trip-report behavior. Shipments are used for freight-forwarding and clearing-agent work: sea import, sea export, air import, air export, road transit, and logistics jobs. A shipment is the customer freight job, not one vehicle movement. It may contain multiple containers, packages, house bills, legs, documents, charges, vendor costs, and transport legs.",
			"A shipment may create or link to one or more domestic Trips when GTS performs local delivery or collection. A Trip is never required for an international shipment handled entirely by external carriers.",
			"Import and export shipments have a branch-scoped accounts-payable workflow. Saving a shipment with a vendor assignment creates a linked AP draft. Estimated costs remain provisional. Finance captures supplier invoice number, invoice date, and due date. Payments cannot exceed outstanding balance. Vendor bills are reviewed at Accounts Payable. All shipment, vendor, bill, and payment queries remain branch-scoped. Vendor bills and payments are separate from domestic trip payments.",
			"Vendor cost (buy) is what GTS pays a supplier. Customer charge (sell) is what GTS bills the customer. Adding a vendor never automatically creates a customer invoice line. Adding a buy cost never automatically becomes a sell amount. Only a deliberate customer charge becomes revenue. Profit is revenue excluding VAT minus vendor and operational costs minus government charges treated as cost.",
			"The system preserves transaction currency and branch reporting currency (OMR). Every money line is intended to store original amount, currency, exchange-rate snapshot (OMR per 1 unit of source currency), and server-calculated OMR base amount. Client-side totals are display-only.",
			"Technical work included race-condition safe unique ID generation for trucks (GTS-TRK-YYYY-XXXX) and drivers (DRI-YYYY-XXXX / DRV-XXXX), firstOrCreate / updateOrCreate hardening, unique constraints, branch isolation (GTS, GT-Line), and financial immutability for posted invoices and bills."
		],
		bullets: [
			"Full-stack Laravel development, system maintenance, technical management, database management, performance optimization, security, API development/integrations, bug fixing, and technical support",
			"Transport / trip management, driver management, vehicle / fleet management, customer management, financial / expense tracking, reporting, document management",
			"Fleet, driver, and trip CRUD with RBAC",
			"Cashbook with voucher approval",
			"FIFO payment settlement system",
			"Trip records: container numbers, BL numbers, booking numbers, loading/unloading destinations, port of discharge, container rent, advance diesel, balance amounts",
			"Extra charges: declaration, ROP inspection fees, empty-return fees, container storage, delay charges, toll charges, port appointment, gateway, yard, crane loading/offloading, shifting container, waiting charges, port storage, doctor inspection",
			"Cash / Credit payments, credit duration, payment notes",
			"Trip reports, monthly reports, printable report / invoice-style interfaces",
			"Currencies: OMR, AED, USD, SAR with exchange rates",
			"Waiting-days calculation from start/end dates × charge per day",
			"Shipment types: import_sea, export_sea, import_air, export_air, logistics, transit",
			"Shipment workspace concepts: parties, routing/legs, master and house bills, containers/packages, documents, customs, vendor services, customer charges, linked domestic trips, profitability, activity history",
			"Charge Master as the controlled rate catalog (buy rate, sell rate, VAT, government-charge flags, job type filtering, FCL/LCL)",
			"Customer invoices: Draft → Approved → Issued, receipts, branded PDF/email, Accounts Receivable",
			"Vendor bills: internal AP numbers (AP-YYYY-XXXX) vs vendor invoice numbers, payments, statements, Accounts Payable",
			"Operational vs financial close as separate concepts",
			"Planned / in progress: financial dashboards, operational alerts, driver/mobile UX, advanced reporting, notifications, integrations, appointment scheduling, container lifecycle, document checklists, atomic sequence numbering, shipment table separation from transport_records"
		]
	},
	{
		slug: "hrm",
		name: "HRM & Payroll Management System",
		tag: "HR · payroll · attendance",
		featured: true,
		period: "Epikod era · 2024–2026",
		role: "Laravel contributor",
		stack: [
			"Laravel",
			"PHP",
			"MySQL",
			"Blade"
		],
		summary: "Business HRM system covering employees, attendance, payroll, company settings, and internal project assignment — not a basic CRUD demo.",
		body: ["Built and worked on a Laravel HRM system with company-based employee management, attendance workflows, salary handling, and a projects module assigned to employees and users.", "This demonstrates business application development: multi-company data, attendance rules, and operational status tracking."],
		bullets: [
			"Employee profiles and company-based employee records",
			"Roles and permissions",
			"Attendance statuses: Present, Punched in, Leave, Early leave, Arrived late, Auto punched out, Weekend, Absent",
			"Late reasons, early-leave reasons, break management",
			"Monthly attendance overview",
			"Payroll / salary-related information",
			"Company IDs, company settings, company logos, company-specific employee data",
			"Projects module statuses: Pending, In progress, On hold, Under review, Completed, Cancelled"
		]
	},
	{
		slug: "epicstore",
		name: "EpicStore — E-commerce Platform",
		tag: "Commerce",
		featured: true,
		period: "Epikod · Estore contribution",
		role: "Laravel contributor",
		stack: [
			"Laravel",
			"MySQL",
			"Blade",
			"Sessions"
		],
		summary: "Transactional Laravel storefront with products, variants, cart, checkout, orders, and customer profiles.",
		body: ["Worked on a Laravel e-commerce application called EpicStore / Estore. Demonstrates complete transactional web applications, not just admin panels.", "Implemented pricing logic with helpers such as PriceHelper and models such as ProductVariant."],
		bullets: [
			"Products and product variants",
			"Variant pricing",
			"Product images",
			"Discounts and countdown / discount logic",
			"Shopping cart",
			"Authentication and sessions",
			"Checkout and orders",
			"Order confirmation emails",
			"Customer profiles and profile pictures",
			"Browsing history",
			"Database relationships"
		]
	},
	{
		slug: "skyline",
		name: "Skyline Intermodal",
		tag: "Logistics quotes",
		featured: true,
		period: "Client engagement · Laravel 12",
		role: "Full-stack Laravel developer",
		stack: [
			"Laravel 12",
			"PHP 8.3+",
			"MySQL"
		],
		summary: "Quote and tracking platform for Skyline Intermodal Inc., including production deployment on real hosting.",
		body: ["Laravel 12 application with PHP 8.3+, MySQL, custom authentication, admin/client roles, quote requests, tracking numbers, status management, email notifications, and database management.", "Worked around deployment and domain configuration: Namecheap, hosting, .env, database configuration, and production deployment. This shows experience taking systems through development → deployment → maintenance."],
		bullets: [
			"Custom authentication",
			"Admin and client roles",
			"Quote requests",
			"Tracking numbers",
			"Status management",
			"Email notifications",
			"Namecheap, hosting, .env, production Laravel deployments"
		]
	},
	{
		slug: "attendance",
		name: "Student Attendance & Reporting System",
		tag: "Education reporting",
		featured: false,
		period: "Client / product work",
		role: "Laravel developer",
		stack: [
			"Laravel",
			"MySQL",
			"DomPDF",
			"Laravel Excel"
		],
		summary: "Reporting-heavy attendance application with monthly overviews and PDF/Excel exports.",
		body: ["Student attendance system demonstrating reporting-heavy applications used by institutions."],
		bullets: [
			"Student management",
			"Attendance tracking",
			"Monthly attendance overview",
			"Attendance reports",
			"PDF exports",
			"Excel exports"
		]
	},
	{
		slug: "ummeed",
		name: "Ummeed Education / Umeed Sanstha",
		tag: "School / LMS",
		featured: false,
		period: "Epikod · May 2024–Jan 2026",
		role: "Contributor",
		stack: [
			"Laravel 10",
			"MySQL",
			"Vite"
		],
		summary: "Education and school-management Laravel application with authentication and application structure for learning workflows.",
		body: ["Laravel 10 setup for Ummeed Education / Umeed Sanstha school management system. Worked with Laravel, MySQL, Vite, authentication/application structure, and education-related functionality."],
		bullets: [
			"Laravel 10 + MySQL + Vite",
			"Authentication and application structure",
			"School management / education-related functionality"
		]
	},
	{
		slug: "medcon",
		name: "MedConHoreValida — Exam & Q&A Platform",
		tag: "Education · Brazil",
		featured: false,
		period: "Epikod · Brazil client",
		role: "Contributor · reporting",
		stack: ["Laravel", "MySQL"],
		summary: "Examination / student Q&A platform for a Brazil client, with category-organized questions and admin reporting.",
		body: ["MedConHoreValida exam platform (Brazil). Admin creates answers. Questions/answers are organized into categories. Students/users interact with the information. Admin can manage and report the data. Particular work on the reporting side of the application."],
		bullets: [
			"Admin-created answers",
			"Questions and answers organized into categories",
			"Student / user interaction",
			"Admin management and reporting"
		]
	},
	{
		slug: "uae-cost",
		name: "UAE Construction Cost Tracker",
		tag: "Construction · finance",
		featured: false,
		period: "Epikod",
		role: "Contributor",
		stack: ["Laravel", "MySQL"],
		summary: "Construction cost-tracking application for a UAE client, part of multi-country delivery.",
		body: ["Worked on a UAE construction cost tracker as a contributor at Epikod, alongside other international client systems."],
		bullets: ["Construction cost tracking", "Client work in the UAE"]
	},
	{
		slug: "stameco",
		name: "Stameco Engineering — Portfolio Site",
		tag: "Client website",
		featured: false,
		period: "Alongside GTS · 2026",
		role: "Freelance developer",
		stack: ["Laravel / modern web"],
		summary: "Building the portfolio website for Stameco Engineering alongside GTS work.",
		body: ["Also building Stameco Engineering's portfolio site while delivering the GTS logistics platform."],
		bullets: ["Client portfolio website", "Delivered in parallel with GTS"]
	},
	{
		slug: "toolgenie",
		name: "ToolGenie Android App",
		tag: "Android",
		featured: false,
		period: "Xyron Technologies · May 2023–Apr 2024",
		role: "Android Developer Intern",
		stack: [
			"Java",
			"Android SDK",
			"XML Layouts"
		],
		summary: "Seven utility tools in one Android application — the start of the professional path.",
		body: ["Developed ToolGenie at Xyron Technologies: an Android application containing 7 utility tools in a single app. Worked with Java, Android SDK, and XML layouts. This internship is where the path from Android/Java into Laravel/PHP began."],
		bullets: ["7 tools in one app", "Java, Android SDK, XML layouts"]
	}
];
var jobs = [
	{
		company: "GTS — Oman logistics client (freelance)",
		period: "January 2026 – Present",
		title: "Lead Software Developer (from March 2026)",
		points: [
			"Fleet / driver / trip CRUD, RBAC, cashbook with voucher approval, FIFO payment settlement system.",
			"Also building Stameco Engineering's portfolio site.",
			"Full-stack Laravel development, system maintenance, technical management, database and performance optimization, security, APIs, bug fixing, and support.",
			"Transport, driver, vehicle, customer, financial, reporting, and document modules.",
			"Multi-branch isolation, unique ID hardening, vendor AP vs customer AR, Charge Master, shipment workspace."
		]
	},
	{
		company: "Epikod",
		period: "May 2024 – January 2026",
		title: "Intern → Contributor",
		points: [
			"Umeed Sanstha school management system.",
			"UAE construction cost tracker.",
			"MedConHoreValida exam platform (Brazil).",
			"Internal HRM system.",
			"Contributed to Estore / EpicStore e-commerce."
		]
	},
	{
		company: "Xyron Technologies",
		period: "May 2023 – April 2024",
		title: "Android Developer Intern",
		points: ["ToolGenie Android app — 7 tools in one app.", "Java, Android SDK, XML layouts."]
	}
];
var strengths = {
	backend: "Laravel + PHP + MySQL. Particularly comfortable with MVC, controllers, models, Eloquent relationships, migrations, validation, middleware, authentication, role-based access, database queries, APIs, email systems, file handling, reporting, and business logic.",
	frontend: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Blade, Livewire. Currently expanding into React.js.",
	database: "Practical experience with MySQL, relational design, foreign keys, relationships, migrations, query optimization, data validation, and company/user-based data separation.",
	production: "XAMPP, Apache, PHP versions, Vite, .env, MySQL hosting, Hostinger, Namecheap, production Laravel deployments, domains/subdomains, database configuration, production debugging."
};
var gtsArchitectureNotes = [
	"Trips ≠ Shipments. Domestic trips remain the vehicle movement module. Shipments are freight jobs.",
	"Do not store vendor costs only inside the shipment creation form. Vendor assignment, vendor cost, vendor bill, and vendor payment are separate layers.",
	"Customer receivable path: Shipment → customer charge lines → customer invoice → receipt → receivable balance.",
	"Vendor payable path: Shipment → vendor service request → estimated cost → approved cost → vendor bill → vendor payment → payable balance.",
	"Invoice privacy: vendor identity and internal notes never appear on customer invoices by default.",
	"Branch ownership is authoritative. Child records inherit parent shipment branch. Cross-branch access requires explicit head-office permission.",
	"Posted finance is immutable. Drafts may be corrected or cancelled. Approved/issued/paid records use cancellation, void, or credit/debit adjustment with audit.",
	"Histories are append-only.",
	"Money is calculated on the server. Browser values are previews.",
	"Operational close and financial close are independent.",
	"Appointments are scheduled records (time window, timezone, location, owner), not miscellaneous text fields.",
	"Container numbers may be reused later; overlapping active assignment is blocked.",
	"Shipment numbers: branch + type + year + sequence (example GTS-IMP-SEA-2026-0001), atomic sequence table, never recycle issued numbers.",
	"Race-safe numbering should not scan the highest row; use a sequence counter keyed by branch, type, and year."
];
var nav = [
	{
		href: "/",
		label: "Home"
	},
	{
		href: "/work",
		label: "Work"
	},
	{
		href: "/experience",
		label: "Experience"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/archive",
		label: "Full profile"
	},
	{
		href: "/contact",
		label: "Contact"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "min-h-11 font-display text-lg tracking-tight",
							children: ["Mueez", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.href,
								className: cn("rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg", pathname === item.href && "text-fg"),
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border px-5 py-3 md:hidden",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "block min-h-11 py-2 text-sm text-muted",
						onClick: () => setOpen(false),
						children: item.label
					}, item.href))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-20 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						profile.legalName,
						" · ",
						profile.location
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Open to remote & relocation · Laravel / PHP / MySQL" })]
				})
			})
		]
	});
}
//#endregion
export { jobs as a, profile as c, strengths as d, summaries as f, gtsArchitectureNotes as i, projects as l, achievements as n, languages as o, cn as r, metrics as s, SiteShell as t, skillGroups as u };
