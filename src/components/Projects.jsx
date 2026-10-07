import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: "Contract Vehicle Management System",
            tag: "REAL-TIME FLEET INTELLIGENCE & TELEMETRY",
            techStack: "PostgreSQL, PostGIS, Node.js, Express.js, React.js, WebSockets, JWT, AWS, OBD-II IoT, Traccar",
            highlights: [
                "Live GPS fleet tracking and vehicle status monitoring.",
                "Dynamic polygonal geofence enforcement and breach alerts.",
                "Speed, ignition, and unauthorized route violation detection.",
                "OBD-II diagnostic health monitoring and fuel scorecards."
            ],
            detailedDescription:
                "The Contract Vehicle Management System is a full-stack IoT fleet monitoring platform designed for organizations managing leased, contracted, or government-operated vehicle fleets. It combines GPS telemetry, OBD-II diagnostics, geofence logic, and role-based operational controls to provide real-time visibility into vehicle use, driver behavior, route compliance, and maintenance risk.",
            detailedHighlights: [
                "Real-time vehicle position tracking with map overlays and movement state indicators (moving, idle, stopped, offline).",
                "Polygonal geofence enforcement calculating polygon entry/exit violations with instant alert triggers and location metadata.",
                "Speed, ignition, unauthorized usage, and route deviation alerting dispatched to dashboard and notification feeds.",
                "OBD-II diagnostics for vehicle health, engine metrics, maintenance risk scoring, and fuel efficiency trend analysis.",
                "Spatial analytics with PostGIS for high-performance route, distance, zone overlap, and containment queries.",
                "JWT-driven authorization with granular permissions isolating Admin, Fleet Manager, and Driver personas.",
                "WebSocket-based dashboard updates streaming live coordinates and alerts with minimal latency.",
                "AWS-ready deployment architecture designed for horizontal scaling and cloud resilience."
            ],
            architectureDescription:
                "The architecture is designed around a telemetry-first workflow: GPS and OBD-II hardware send live telemetry to a Traccar gateway for parsing and normalization, the Node.js backend processes streams and evaluates business rules, spatial intelligence is stored and indexed in PostgreSQL/PostGIS, and the React dashboard presents live fleet movement, alerts, and scorecards in real time via WebSockets.",
            workflowSteps: [
                { title: "OBD-II & GPS", desc: "Hardware Telemetry Stream" },
                { title: "Traccar Gateway", desc: "Protocol Parser & Ingestion" },
                { title: "Node & WebSockets", desc: "Geofence Engine & Push" },
                { title: "PostgreSQL & PostGIS", desc: "Spatial Indexing & Storage" },
                { title: "React Dashboard", desc: "Live Fleet Map & Alerts" }
            ],
            architecturePoints: [
                "Spatial indexing: PostGIS geometry and location indexes accelerate geofence and route queries under high load.",
                "WebSocket pooling: Persistent connections ensure low-latency fleet updates and instantaneous alert broadcasting.",
                "Fault-tolerant ingest pipeline: Gracefully absorbs delayed or bursty telemetry streams without data loss.",
                "Event-driven alerting: Asynchronously processes safety, compliance, and maintenance alerts across worker queues.",
                "Role-aware access control: Middleware enforces strict Admin, Fleet Manager, and Driver access boundaries.",
                "Operational auditability: Complete historical audit trails for fleet compliance, route events, and engine diagnostics."
            ],
            coverImage: "/projects/cvms/Dashboard 1.jpeg",

            gallery: [
                { caption: "Operations & Fleet Health Dashboard", image: "/projects/cvms/Dashboard 1.jpeg", icon: "📊" },
                { caption: "Live GPS Tracking & Geofence Boundary", image: "/projects/cvms/Screenshot 2026-04-04 092813.png", icon: "🛰️" },
                { caption: "Trip Route History & Telemetry Replay", image: "/projects/cvms/Trip History.png", icon: "🗺️" },
                { caption: "OBD-II Vehicle Health & Diagnostics", image: "/projects/cvms/Health.png", icon: "🧰" },
                { caption: "Driver Scorecard & Safety Leaderboard", image: "/projects/cvms/Driver Card.png", icon: "🏆" },
                { caption: "Fleet Maintenance & Service Records", image: "/projects/cvms/Maintainance 1.jpeg", icon: "🔧" },
                { caption: "Contract Lifecycle Management", image: "/projects/cvms/Contracts 1.jpeg", icon: "📄" },
                { caption: "Automated Fleet & Trip Reports", image: "/projects/cvms/Reports 1.jpeg", icon: "📈" },
                { caption: "System Architecture Flow", image: "/projects/cvms/Architecture.png", icon: "📐" }
            ],
            githubUrl: "https://github.com/lightning4310/CVMS",
            liveUrl: ""
        },
        {
            name: "Inventory Management System – MERN Stack",
            tag: "WAREHOUSE SKU TRACKING & PROCUREMENT OPERATIONS",
            techStack: "MongoDB, Express.js, React.js, Node.js, JWT, TailwindCSS, Mongoose, Vite, Axios",
            highlights: [
                "Dynamic SKU and category-based inventory catalog.",
                "Low-stock alerts and stockout prevention workflows.",
                "Stock in/out movement tracking with audit-friendly history.",
                "Supplier purchase orders and procurement visibility.",
                "Role-based access control and aggregated sales analytics."
            ],
            detailedDescription:
                "This inventory management platform is designed for retail, warehouse, and procurement teams that need a reliable way to monitor stock movements, manage suppliers, and generate actionable operational insights. Built with the MERN stack, the application combines a responsive React frontend with secure Express APIs and MongoDB persistence to support SKU tracking, purchase orders, sales visibility, and financial reporting across the inventory lifecycle.",
            detailedHighlights: [
                "Centralized product catalog with categories, pricing, quantities, and automated reorder thresholds.",
                "Low-stock notification triggers highlighting items at risk before affecting sales operations.",
                "Stock in/out movement workflows tracking incoming restocking/returns and outgoing sales deductions.",
                "Supplier order management with status tracking, itemized quantities, and total value aggregation.",
                "Dashboard insights and aggregated reports driven by MongoDB aggregation pipelines for profitability and turnover.",
                "RBAC-aware access patterns protecting inventory, sales, and procurement workflows."
            ],
            architectureDescription:
                "The architecture follows a layered client-server pattern: React renders the warehouse and procurement interfaces, Express APIs enforce authentication and business validation, controllers orchestrate inventory operations, and MongoDB stores product, sales, and purchase-order records. Aggregation pipelines power operational dashboards and stock analytics while preserving a clean separation between transactional updates and read-optimized reporting.",
            workflowSteps: [
                { title: "React Client", desc: "Responsive SKU & Orders UI" },
                { title: "Express API & Auth", desc: "JWT Verification & Validation" },
                { title: "Inventory Controller", desc: "Stock Movement & Rules" },
                { title: "MongoDB Aggregation", desc: "Pipelines & Audit History" },
                { title: "Analytics View", desc: "Turnover & Stockout Reports" }
            ],
            architecturePoints: [
                "Aggregation pipelines summarize stock turnover, profit, and alert conditions for instant dashboard-level insights.",
                "Document modeling keeps product, sale, and supplier data naturally aligned for rapid reads and operational queries.",
                "Transactional boundaries are preserved for stock mutations, while reporting remains read-optimized and separate from write-heavy workflows.",
                "Schema and API validation reduce invalid stock entries, negative quantities, and inconsistent supplier records.",
                "Auditable inventory records support operational accountability and traceability across sales and restocking events."
            ],
            coverImage: "/projects/inventory/Screenshot 2026-10-07 214423.png",
            gallery: [
                { caption: "Warehouse Analytics & KPI Dashboard", image: "/projects/inventory/Screenshot 2026-10-07 214423.png", icon: "📊" },
                { caption: "Sales Performance & Profit Breakdown", image: "/projects/inventory/Screenshot 2026-10-07 214452.png", icon: "📈" },
                { caption: "Quick Product SKU Onboarding Form", image: "/projects/inventory/Screenshot 2026-10-07 214444.png", icon: "📦" },
                { caption: "Role-Based User & Access Administration", image: "/projects/inventory/Screenshot 2026-10-07 214505.png", icon: "👥" },
                { caption: "Sales Transaction Audit Feed", image: "/projects/inventory/Screenshot 2026-10-07 214540.png", icon: "🧾" }
            ],
            githubUrl: "https://github.com/lightning4310/inventory",
            liveUrl: ""
        },
        {
            name: "Crate",
            tag: "INVENTORY & SALES OPERATIONS PLATFORM",
            techStack: "Spring Boot, PostgreSQL, React, TypeScript, Vite, JWT, Maven",
            highlights: [
                "Role-based admin and staff access control with JWT security.",
                "Real-time inventory tracking with stock integrity and cancellation reversal checks.",
                "Purchase and sales workflows with automatic stock movement and admin financial KPIs."
            ],
            detailedDescription:
                "Crate is a full-stack inventory and sales management system built for small to medium-sized retail operations that need secure stock control, role-based workflows, and operational visibility. It centralizes product management, supplier tracking, purchase records, sales execution, and dashboard analytics in a single platform. The system is designed to reduce operational friction, maintain business accountability, and enforce stock and authorization rules through backend validation.",
            detailedHighlights: [
                "Product catalog management with SKU, barcode, pricing, category groups, and threshold low-stock tracking.",
                "Purchase workflow recording incoming inventory across multiple items, calculating tax/discounts, and updating stock.",
                "Sales workflow validating stock availability prior to checkout, with safe cancellation restoration logic.",
                "Supplier & category operations supporting company GST details and reusable vendor profiles.",
                "Admin dashboard with financial KPIs, revenue analytics, recent transactions, and inventory health visibility."
            ],
            architectureDescription:
                "Crate follows a layered architecture with a React + TypeScript frontend communicating with a Spring Boot REST API, which interacts with a PostgreSQL database through JPA repositories. Business rules such as stock validation, role checks, and transaction safety are enforced server-side to preserve data integrity.",
            workflowSteps: [
                { title: "React + TS UI", desc: "User Interface & Role-Protected Views" },
                { title: "JWT & Security", desc: "BCrypt & Role Authorization Filters" },
                { title: "Service & Domain", desc: "Inventory Rules & Stock Deduction" },
                { title: "JPA Repositories", desc: "Hibernate Transactional Persistence" },
                { title: "PostgreSQL", desc: "ACID Relational Storage" }
            ],
            architecturePoints: [
                "Separation of concerns: UI, REST API, domain business logic, and persistence are isolated into distinct layers.",
                "Security-first design: JWT authentication and server-side RBAC serve as the authoritative security boundary.",
                "Transactional integrity: `@Transactional` purchase and sales updates prevent race conditions and stock discrepancies.",
                "Business-rule enforcement: Stock threshold checks, cancellation reversal logic, and role restrictions handled server-side.",
                "Scalable modularity: React components and Spring modules are structured for maintainability and future expansion."
            ],
            coverImage: "/projects/crate/Screenshot 2026-10-07 204335.png",
            gallery: [
                { caption: "Admin Operations & Financial KPI Dashboard", image: "/projects/crate/Screenshot 2026-10-07 204335.png", icon: "📊" },
                { caption: "Product SKU Creation & Group Compatibility", image: "/projects/crate/Screenshot 2026-10-07 204507.png", icon: "📦" },
                { caption: "Sales Transaction Management & Status", image: "/projects/crate/Screenshot 2026-10-07 220146.png", icon: "🧾" },
                { caption: "Staff Portal & Low Stock Monitoring", image: "/projects/crate/Screenshot 2026-10-07 220209.png", icon: "🏢" }
            ],
            githubUrl: "https://github.com/lightning4310/Crate",
            liveUrl: ""
        }
    ];

    return (
        <section id="projects" className="projects">
            <p className="section-label">03-PROJECTS</p>

            <h2>Featured Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={project.name}
                            number={index + 1}
                            name={project.name}
                            highlights={project.highlights}
                            techStack={project.techStack}
                            image={project.coverImage}
                            onSelect={() => setSelectedProject(project)}
                        />
                    );
                })}
            </div>

            {/* Detailed Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

export default Projects;