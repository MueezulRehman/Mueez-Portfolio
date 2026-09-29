export const profile = {
  legalName: "Muhammad Mueez Ul Rehman",
  name: "Mueez Ul Rehman",
  role: "Laravel & Full-Stack Web Developer",
  headline:
    "I build reliable, scalable web applications, logistics platforms, and multi-tenant SaaS using Laravel, PHP, MySQL, and modern web technologies.",
  positioning:
    "Laravel & Full-Stack Web Developer | PHP | Laravel | MySQL | REST APIs | SaaS | CRM",
  aliases: ["Web developer", "SaaS builder", "Independent product developer"],
  location: "Mandi Bahauddin, Punjab, Pakistan",
  locations: ["Mandi Bahauddin, Punjab, Pakistan", "Lahore (past work / profile)"],
  ageNote: "24 as of January 2026",
  availability: "Open to remote & relocation · Apply from Pakistan · Visa-support roles welcome",
  emails: ["mueezulrehman20@gmail.com", "mueez12m@gmail.com"],
  phoneDisplay: "+92 342 6088427",
  phoneLocal: "03426088427",
  linkedin: "Mueez Ul Rehman",
  website: "https://gts-spc.com",
  freelanceBrand: "mueezdevs",
  startedProfessional: "May 2024 (EpicKod); internships from May 2023",
  years: "2+ years professional from May 2024; 3+ if internships are included — reconcile before a final CV",
  learning: ["React.js", "Vue", "Node.js", "TypeScript fundamentals", "German A1–B1"],
  interest: "Germany as primary destination: PHP/Laravel roles, English-friendly teams, relocation/visa support. Opportunity Card is not the primary plan.",
  cvHeadline:
    "Laravel & Full-Stack Web Developer | PHP | Laravel | MySQL | REST APIs | SaaS | CRM",
};

export const summaries = [
  "I am a Laravel and full-stack web developer from Pakistan with professional experience building web applications, business management systems, and SaaS products. My main technical focus is PHP, Laravel, MySQL, REST APIs, and practical software for real operations.",
  "I’m involved in shaping a transport and logistics management system for Global Transport Services. I focus on turning real operational and finance needs into clear system workflows, especially around shipment management, trip records, customer invoicing, and invoice adjustments.",
  "I pay attention to how a feature works for staff and customers—not just how it looks. That includes keeping shipment and trip invoice layouts distinct, making billing information clear, and preserving issued invoices when later charges need to be handled.",
  "Full-stack developer with 3+ years of experience building production-grade web applications. Started as an Android/Java intern and transitioned into Laravel/PHP development. Currently working independently on freelance client projects and an independent multi-tenant SaaS.",
  "Specializes in designing and delivering complex multi-branch business systems with strong focus on data integrity, financial controls, role-based access, and clean architecture. Has successfully delivered live systems used in Pakistan, UAE, Oman, and Brazil.",
  "Started professional development work around May 2024 at EpicKod (Pvt.) Ltd. Comfortable taking systems through development → deployment → maintenance.",
  "I prefer complete, practical systems that address real business needs: backend architecture, business logic, databases, permissions, integrations, and operational workflows.",
];

export const achievements = [
  "Delivered production systems across 4 countries (Pakistan, UAE, Oman, Brazil) with zero critical post-launch bugs.",
  "Progressed from Android intern to Laravel contributor, freelance full-stack developer, and independent SaaS product developer.",
  "Architected and maintains a multi-branch logistics + finance platform for Global Transport Services, Oman (gts-spc.com).",
  "Designed professional financial workflows including vendor payables, customer receivables, FIFO settlement, invoice adjustments, and audit trails.",
  "Translating business needs into specific feature requirements, billing edge cases, invoice history, and logistics–finance connection.",
];

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "Laravel 12 / PHP 8.3",
      "REST APIs",
      "MVC",
      "Authentication",
      "RBAC",
      "CRUD",
      "Validation",
      "Eloquent ORM",
      "Middleware",
      "Migrations",
      "Multi-tenancy",
      "Business logic",
      "Email systems",
      "File handling",
      "Reporting",
    ],
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
      "Laravel Mix",
      "Vite",
      "Font Awesome 6",
      "React.js — learning",
      "Vue — interest",
    ],
  },
  {
    title: "Mobile",
    items: ["Java", "Android SDK", "XML Layouts"],
  },
  {
    title: "Database",
    items: [
      "MySQL / SQL",
      "Relational design",
      "Foreign keys",
      "Relationships",
      "Migrations",
      "Query optimization",
      "Tenant-aware data",
      "Company/user-based data separation",
    ],
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
      "DomPDF",
      "Laravel Excel",
      "Apache",
      "Hostinger",
      "Namecheap",
      "Windows",
      "Node.js v20.13.1",
      "npm 10.5.2",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Database design",
      "API integrations",
      "Authentication & authorization",
      "Performance optimization",
      "Testing & debugging",
      "Security",
      "System integration",
      "Production Laravel deployments",
      "SRS and architecture docs",
      "ATS-ready CV / LinkedIn",
    ],
  },
];

export const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "German", level: "Beginner / A1 — learning toward B1" },
];

export const metrics = [
  { value: "2+", label: "Years professional (from May 2024)" },
  { value: "4", label: "Countries with live systems" },
  { value: "GTS", label: "Oman logistics platform" },
  { value: "SaaS", label: "Independent multi-tenant product" },
];

export type Project = {
  slug: string;
  name: string;
  tag: string;
  featured: boolean;
  period: string;
  role: string;
  stack: string[];
  summary: string;
  body: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    slug: "gts",
    name: "Global Transport Services — GTS",
    tag: "Logistics · billing · fleet",
    featured: true,
    period: "January 2026 – Present (Lead Software Developer from March 2026)",
    role: "Freelance Full-Stack Developer · Lead Software Developer",
    stack: ["Laravel 12", "PHP 8.3", "MySQL", "Blade", "RBAC", "DomPDF"],
    summary:
      "Multi-branch transport, fleet, and freight-forwarding platform for Global Transport Services, Oman. Live site: gts-spc.com. Real operational and customer-billing workflows.",
    body: [
      "Company: Global Transport Services, Oman. Website: gts-spc.com. Freelance full-stack from January 2026; lead software developer from March 2026.",
      "I’m involved in shaping the transport and logistics management system: turning operational and finance needs into clear workflows around shipment management, trip records, customer invoicing, and invoice adjustments.",
      "Focus includes how a feature works for staff and customers—not just how it looks. Shipment and trip invoice layouts stay distinct. Billing information is clear. Issued invoices stay unchanged; later charges go through adjustments.",
      "GTS uses two related but separate operational areas. Trips are domestic fleet movements (driver + truck) with transport, payment, delivery-note, maintenance, and trip-report behavior. Shipments are freight-forwarding jobs: sea import/export, air import/export, road transit, logistics. A shipment may contain multiple containers, packages, house bills, legs, documents, charges, vendor costs, and transport legs.",
      "A shipment may link to domestic Trips for local delivery. A Trip is never required when external carriers handle the international movement.",
      "Vendor cost (buy) is what GTS pays a supplier. Customer charge (sell) is what GTS bills the customer. Adding a vendor never automatically creates a customer invoice line. Combined vs stage invoices: operators can choose separate stage invoices or one combined shipment invoice with charge stages shown clearly. Issued invoices remain immutable.",
      "Commercial notes from past discussion: 120,000 PKR for the full website after an earlier 95,000 PKR discussion; a 60/40 revenue split with a frontend developer was also discussed.",
      "Technical work included race-condition safe unique IDs for trucks (GTS-TRK-YYYY-XXXX) and drivers (DRI-YYYY-XXXX), firstOrCreate hardening, branch isolation (GTS, GT-Line), FIFO payment settlement, and cashbook voucher approval.",
    ],
    bullets: [
      "Managing shipment and trip-related workflows",
      "Vendor and shipment charge tracking",
      "Choice between separate stage invoices and one combined shipment invoice",
      "Charge stages shown clearly on a combined invoice",
      "Issued invoices unchanged; later changes through adjustments",
      "Separate invoice designs for trips and shipments",
      "Requirements and workflow decisions plus full-stack implementation",
      "Fleet / driver / trip CRUD, RBAC",
      "Cashbook with voucher approval",
      "FIFO customer payment settlement",
      "Excel uploads to the trip table; PDF invoices and print workflows",
      "Container numbers, BL, booking, loading/unloading, port of discharge",
      "Container rent, advance diesel, remaining balances, 30-day credit terms",
      "Extra charges: declaration, ROP inspection, empty-return, storage, delay, toll, port appointment, gateway, yard, crane, shifting, waiting, port storage, doctor inspection",
      "Currencies OMR, AED, USD, SAR with exchange-rate snapshots",
      "Charge Master (buy/sell, VAT, government flags, FCL/LCL)",
      "Customer invoices Draft → Approved → Issued; receipts; branded PDF/email; AR",
      "Vendor bills AP-YYYY-XXXX vs vendor invoice numbers; AP payments and statements",
    ],
  },
  {
    slug: "codeibex",
    name: "CodeIbex — Multi-tenant Business SaaS",
    tag: "SaaS · multi-tenant",
    featured: true,
    period: "February 2026 – Present",
    role: "Independent SaaS Product Developer",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind", "Vite"],
    summary:
      "Independent multi-tenant business platform with Platform Admin, tenant managers, impersonation, configurable modules, and light/dark + per-tenant theming.",
    body: [
      "Independent product (also discussed as a flexible SaaS that can serve restaurants, retail, pharmacies, clinics, gyms, salons, electronics stores, repair shops, and online stores without a separate app per industry).",
      "Architecture: hybrid database, tenant-aware data, configurable business types, plan limits, module access, manager permissions.",
      "Dashboard layout work: professional manager sidebar. Dropdowns open under the parent so sidebar width stays the same. Active highlight is route-based. Dashboard and POS stay top-level; other groups use under-dropdowns.",
      "Tech in the Blade layout: Tailwind CSS, Font Awesome 6, Vite, CSS variables for theming, glassmorphic sidebar, mobile hamburger + backdrop, dark/light toggle via localStorage.",
      "Healthcare modules are planned at a large scale (patients, prescriptions, admissions, nursing, lab, radiology, OT/ICU/emergency). Not every module is confirmed fully implemented or deployed.",
    ],
    bullets: [
      "Platform Admin (super admin) and Manager / Business (tenant) sides",
      "Impersonate a restaurant/business",
      "Modules: orders, delivery, POS, customers, inventory, medical, menu, financial, HR, reports",
      "Theme support: light/dark + per-tenant colors",
      "Business types: restaurants, gyms, medical, retail, wholesale, and more",
      "Sidebar groups: Operations, Customers, Inventory, Menu, Medical, Financial, Human Resources, Settings, Reports",
      "Dashboard and POS remain top-level links",
      "EnsureModuleEnabled / hasModuleAccess style module gates (Taste Hut lineage)",
    ],
  },
  {
    slug: "tastehut",
    name: "Taste Hut — Multi-restaurant SaaS",
    tag: "SaaS · restaurants",
    featured: false,
    period: "Personal product · Laravel 13.17 / PHP 8.3.9",
    role: "Independent developer",
    stack: ["Laravel 13.17", "PHP 8.3.9", "MySQL (tastehut)", "Blade"],
    summary:
      "Multi-restaurant SaaS with super-admin and restaurant-admin accounts, subscriptions, POS, delivery, and module access enforcement.",
    body: [
      "Project stored under D:\\tastehut-app-fixed3\\tastehut-app on Windows. Database named tastehut.",
      "Super-admin and restaurant-admin accounts, restaurant registration, monthly subscription plans, manager logins, orders and POS, delivery, reports, customer feedback, notifications, stock management.",
      "Module access via EnsureModuleEnabled and hasModuleAccess. Routes include /tastehut, /admin/restaurants, /manager/menu-items. Clean restaurant URLs; avoid unwanted main-domain fragments; avoid public storage image URLs.",
      "SRS and architecture documentation were part of the work.",
    ],
    bullets: [
      "Multi-restaurant tenancy",
      "Subscription plans and monthly billing",
      "POS, delivery, stock, reports, feedback",
      "Module-gated manager UI",
    ],
  },
  {
    slug: "hrm",
    name: "HRM & Payroll Management System",
    tag: "HR · payroll · attendance",
    featured: true,
    period: "EpicKod era · 2024–2026",
    role: "Laravel contributor",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    summary:
      "Business HRM system covering employees, attendance, payroll, company settings, and internal project assignment.",
    body: [
      "Company-based employee management, attendance workflows, salary handling, and a projects module assigned to employees and users.",
    ],
    bullets: [
      "Employee profiles and company-based records",
      "Roles and permissions",
      "Attendance: Present, Punched in, Leave, Early leave, Arrived late, Auto punched out, Weekend, Absent",
      "Late reasons, early-leave reasons, break management",
      "Monthly attendance overview",
      "Payroll / salary information",
      "Company IDs, settings, logos",
      "Project statuses: Pending, In progress, On hold, Under review, Completed, Cancelled",
    ],
  },
  {
    slug: "epicstore",
    name: "EpicStore — E-commerce Platform",
    tag: "Commerce",
    featured: false,
    period: "EpicKod · Estore contribution",
    role: "Laravel contributor",
    stack: ["Laravel", "MySQL", "Blade", "Sessions"],
    summary: "Transactional Laravel storefront with products, variants, cart, checkout, and orders.",
    body: [
      "EpicStore / Estore. Pricing logic with PriceHelper and ProductVariant models.",
    ],
    bullets: [
      "Products, variants, variant pricing, images",
      "Discounts and countdown logic",
      "Cart, auth, sessions, checkout, orders",
      "Order confirmation emails",
      "Customer profiles, profile pictures, browsing history",
    ],
  },
  {
    slug: "skyline",
    name: "Skyline Intermodal",
    tag: "Logistics quotes",
    featured: true,
    period: "Client engagement · Laravel 12",
    role: "Full-stack Laravel developer",
    stack: ["Laravel 12", "PHP 8.3+", "MySQL"],
    summary:
      "Quote and tracking platform for Skyline Intermodal Inc., including production deployment.",
    body: [
      "Custom authentication, admin/client roles, quote requests, tracking numbers, status management, email notifications.",
      "Deployment: Namecheap, hosting, .env, database configuration, production Laravel.",
    ],
    bullets: [
      "Admin and client roles",
      "Quote requests and tracking numbers",
      "Email notifications",
      "Production domain and hosting",
    ],
  },
  {
    slug: "attendance",
    name: "Student Attendance & Reporting System",
    tag: "Education reporting",
    featured: false,
    period: "Client / product work",
    role: "Laravel developer",
    stack: ["Laravel", "MySQL", "DomPDF", "Laravel Excel"],
    summary: "Reporting-heavy attendance application with PDF and Excel exports.",
    body: ["Student management, attendance tracking, monthly overview, reports, PDF and Excel exports."],
    bullets: [
      "Student management",
      "Attendance tracking",
      "Monthly overview",
      "PDF and Excel exports",
    ],
  },
  {
    slug: "ummeed",
    name: "Ummeed Education / Umeed Sanstha",
    tag: "School / LMS",
    featured: false,
    period: "EpicKod · May 2024–Jan 2026",
    role: "Contributor",
    stack: ["Laravel 10", "MySQL", "Vite"],
    summary: "School-management Laravel application with authentication and education workflows.",
    body: ["Laravel 10, MySQL, Vite, authentication/application structure, education-related functionality."],
    bullets: ["School management", "Laravel 10 + Vite", "Authentication structure"],
  },
  {
    slug: "medcon",
    name: "MedConHoreValida — Exam & Q&A Platform",
    tag: "Education · Brazil",
    featured: false,
    period: "EpicKod · Brazil client",
    role: "Contributor · reporting",
    stack: ["Laravel", "MySQL"],
    summary: "Examination / student Q&A platform with category-organized questions and admin reporting.",
    body: [
      "Admin creates answers. Questions/answers organized into categories. Students interact. Admin reporting.",
    ],
    bullets: ["Categories of Q&A", "Student interaction", "Admin reporting"],
  },
  {
    slug: "uae-cost",
    name: "UAE Construction Cost Tracker",
    tag: "Construction · finance",
    featured: false,
    period: "EpicKod",
    role: "Contributor",
    stack: ["Laravel", "MySQL"],
    summary: "Construction cost-tracking application for a UAE client.",
    body: ["Part of multi-country delivery at EpicKod."],
    bullets: ["Construction cost tracking", "UAE client"],
  },
  {
    slug: "stameco",
    name: "STAMECO Engineering — Website & CRM",
    tag: "Corporate site · CRM",
    featured: false,
    period: "20 July 2026 – 5 September 2026",
    role: "Freelance Full-Stack Developer",
    stack: ["Laravel", "Laravel Mix", "GitHub"],
    summary:
      "Corporate website and CRM for STAMECO Engineering. Frontend/backend collaboration on GitHub.",
    body: [
      "Corporate website development, CRM-related functionality, GitHub-based version control.",
      "Repository discussed as D:\\Stameco\\stameco-pvt-ltd-main. Experienced a conflict in public/css/app.css after git pull origin main; Mix assets mix('css/app.css') / mix('js/app.js').",
    ],
    bullets: [
      "Corporate website",
      "CRM functionality",
      "GitHub collaboration and merge conflict resolution",
      "Laravel Mix CSS/JS pipeline",
    ],
  },
  {
    slug: "toolgenie",
    name: "ToolGenie Android App",
    tag: "Android",
    featured: false,
    period: "Xyron Technologies · May 2023–Apr 2024",
    role: "Android Developer Intern",
    stack: ["Java", "Android SDK", "XML Layouts"],
    summary: "Seven utility tools in one Android application.",
    body: ["Internship where the path from Android/Java into Laravel/PHP began."],
    bullets: ["7 tools in one app", "Java, Android SDK, XML"],
  },
];

export type Job = {
  company: string;
  period: string;
  title: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    company: "Independent SaaS Product Developer (CodeIbex / Taste Hut lineage)",
    period: "February 2026 – Present · Remote",
    title: "SaaS Product Developer | Independent",
    points: [
      "Multi-tenant business management SaaS: architecture, tenant management, business-specific modules, permissions, operational workflows.",
      "Platform Admin, tenant managers, impersonation, plan limits, module access.",
      "Manager sidebar: professional naming, under-parent dropdowns, route-based active state.",
    ],
  },
  {
    company: "GTS Logistics & Fleet Management — Oman",
    period: "January 2026 – Present · Remote",
    title: "Freelance Full-Stack Developer · Lead Software Developer (from March 2026)",
    points: [
      "Trip management, financial tracking, customer payments, reporting, shipment workflows.",
      "Invoice adjustments, distinct trip vs shipment invoices, FIFO settlement, cashbook.",
      "Live site: gts-spc.com",
    ],
  },
  {
    company: "STAMECO Engineering",
    period: "20 July 2026 – 5 September 2026 · Remote",
    title: "Freelance Full-Stack Developer",
    points: [
      "Corporate website and CRM.",
      "GitHub collaboration; CSS merge conflict in public/css/app.css after git pull.",
    ],
  },
  {
    company: "EpicKod (Pvt.) Ltd.",
    period: "May 2024 – January 2026",
    title: "Web Developer (Intern → Contributor)",
    points: [
      "Umeed Sanstha school management.",
      "UAE construction cost tracker.",
      "MedConHoreValida exam platform (Brazil).",
      "Internal HRM system.",
      "Estore / EpicStore e-commerce.",
    ],
  },
  {
    company: "Xyron Technologies",
    period: "May 2023 – April 2024",
    title: "Android Developer Intern",
    points: ["ToolGenie Android app — 7 tools in one app.", "Java, Android SDK, XML layouts."],
  },
];

export const strengths = {
  backend:
    "Laravel + PHP + MySQL. MVC, controllers, models, Eloquent, migrations, validation, middleware, authentication, RBAC, queries, APIs, email, files, reporting, multi-tenancy, business logic.",
  frontend:
    "HTML, CSS, JavaScript, Bootstrap, Tailwind, Blade, Livewire, Alpine, Laravel Mix, Vite. Expanding into React, Vue, Node.js, TypeScript.",
  database:
    "MySQL, relational design, foreign keys, tenant-aware data, query optimization, company/user-based separation.",
  production:
    "Windows + XAMPP + VS Code. Apache, PHP 8.3, Mix/Vite, .env, Hostinger, Namecheap, GitHub, production debugging.",
  product:
    "Translating business needs into feature requirements, billing edge cases, invoice history, usability of documents, connecting operations with finance, iterative review.",
};

export const gtsArchitectureNotes = [
  "Trips ≠ Shipments. Domestic trips remain the vehicle movement module. Shipments are freight jobs.",
  "Issued invoices stay unchanged; later charges go through adjustments.",
  "Separate invoice designs for trips and shipments.",
  "Choice between stage invoices and one combined shipment invoice with visible charge stages.",
  "Vendor cost (buy) never auto-becomes customer revenue (sell).",
  "Customer receivable path: Shipment → charge lines → invoice → receipt → balance.",
  "Vendor payable path: assignment → estimate → approved cost → bill → payment.",
  "Branch ownership is authoritative.",
  "Posted finance is immutable. Histories are append-only.",
  "Money is calculated on the server.",
  "Operational close and financial close are independent.",
  "Race-safe numbering via sequence counters, not scanning the latest row.",
];

export const education = [
  "Highest completed formal education: Matriculation (10 years of schooling in Pakistan).",
  "Did not complete Intermediate / ICS. Does not hold a bachelor's degree.",
  "Apex College Gojra appeared in LinkedIn education details; clarified that there is no Intermediate qualification.",
  "This distinction matters for international job search and immigration questions about formal qualifications.",
  "Germany path: practical-experience-based IT route is the intended approach because there is no university degree.",
];

export const germany = {
  destination: "Work and live in Germany; apply from Pakistan first.",
  roles: [
    "PHP Developer",
    "Laravel Developer",
    "PHP Backend Developer",
    "Full-Stack PHP/Laravel Developer",
    "SaaS Developer",
    "CRM/ERP Software Developer",
    "Software Developer (PHP)",
  ],
  notes: [
    "Find a job with relocation assistance or visa support.",
    "English-friendly software development positions.",
    "Learn German from beginner toward A1–B1.",
    "ATS-readable CV; Open to Remote / Pakistan preference.",
    "A 2026 salary threshold of €45,934.20 gross per year for an experienced IT professional route was researched earlier — not currently re-verified.",
    "Opportunity Card is not the primary plan.",
  ],
};

export const freelance = {
  brand: "mueezdevs",
  fiverr: [
    "Building Laravel/PHP websites and web applications.",
    "Fixing bugs and resolving issues in existing Laravel/PHP projects.",
    "Complete business applications: CRM, inventory, POS, dashboards, custom software.",
  ],
};

export const environment = [
  { item: "Operating system", detail: "Windows" },
  { item: "IDE", detail: "Visual Studio Code" },
  { item: "Backend", detail: "PHP and Laravel" },
  { item: "Database", detail: "MySQL" },
  { item: "Local environment", detail: "XAMPP" },
  { item: "Version control", detail: "Git and GitHub" },
  { item: "API testing", detail: "Postman" },
  { item: "Package management", detail: "Composer" },
  { item: "Frontend tooling", detail: "Laravel Mix, Vite, manual CSS/JS" },
  { item: "Node.js", detail: "v20.13.1" },
  { item: "npm", detail: "10.5.2" },
  { item: "PHP", detail: "8.3.x in Laravel projects" },
];

export const personal = [
  "Interests: gaming, technology-inspired clothing, workspace upgrades, professional online presence.",
  "Gaming YouTube ideas: MZX Gaming, VoidFrog, handle @TheVoidFrog-w6g; PS5 and GTA 6 news; dark minimal branding.",
  "Developer-inspired DTF shirt designs (not raw source code); heat press pressure issues discussed.",
  "Samsung Galaxy S25 Edge lock-screen wallpaper brief: no text, modern, software-related without generic code graphics.",
  "Professional photo look: high skin fade, curly top 2–3 inches, shaped beard.",
  "Desk: keep the actual table; dual monitors 24-inch and 18-inch; dual arm; laptop to both; separate keyboard/mouse; walnut/black wood finish; drawers; no keyboard tray.",
];

export const goals = [
  "Build a strong software development career in Laravel/PHP and SaaS.",
  "Grow independent multi-tenant SaaS products.",
  "Find international employment in Germany from Pakistan.",
  "Improve CV, LinkedIn, GitHub, and public portfolio.",
  "Ship demonstration projects: multi-tenant SaaS, inventory/POS, CRM.",
  "Continue learning German and broader JS (React, Vue, Node, TypeScript).",
  "Professional personal brand, freelance services, better desk, optional gaming channel.",
];

export const unknowns = [
  "Exact current age if it has changed since January 2026.",
  "Exact current German level and whether structured A1 lessons have started.",
  "Which SaaS modules are complete vs planned.",
  "Whether a public demo of the independent product is deployed.",
  "Whether Germany applications are currently active.",
  "Latest finalized CV headline.",
  "Desired German cities and salary range.",
  "Latest decisions on gaming channel, Fiverr, and desk renovation.",
  "Commercial figures (project fees, splits) were discussed and should be confirmed before publishing externally.",
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Full profile" },
  { href: "/contact", label: "Contact" },
];
