function ProjectCard({ number, name, highlights, techStack }) {
    return (
        <div className="project-card">
            <div>
                <p className="project-number">
                    {String(number).padStart(2, "0")}
                </p>

                <h3>{name}</h3>

                <ul className="project-highlights">
                    {highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                    ))}
                </ul>
            </div>

            <p className="project-tech">
                {techStack}
            </p>
        </div>
    );
}

export default ProjectCard;