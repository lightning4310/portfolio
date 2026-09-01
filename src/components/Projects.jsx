import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            name: "Contract Vehicle Management System",
            techStack: "PostgreSQL, Node.js, Express.js, React.js, JWT, AWS, IoT",
            highlights: [
                "Built a fleet management system integrating Traccar and OBD-II telemetry.",
                "Implemented real-time vehicle tracking, geofencing, speed alerts, compliance monitoring, and role-based access control (RBAC)."
            ]
        },
        {
            name: "Inventory Management System – MERN Stack",
            techStack: "MongoDB, Express.js, React.js, Node.js, JWT",
            highlights: [
                "Developed a full-stack inventory application with a responsive React dashboard.",
                "Added real-time stock monitoring, JWT authentication, and role-based access control."
            ]
        },
        {
            name: "Crate – Inventory & Retail Management System",
            techStack: "Java, Spring Boot, Spring Security, PostgreSQL, React.js, TypeScript, JWT",
            highlights: [
                "Created a full-stack inventory platform with secure REST APIs and JWT + RBAC.",
                "Implemented stock management, interactive dashboards, and reporting using Spring Boot, Spring Data JPA, and PostgreSQL."
            ]
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
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;