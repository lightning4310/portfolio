function ProjectCard({ number, name, highlights, techStack, image, onSelect }) {
    return (
        <div className="project-card">

            <div className="project-card-body">
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

            <div className="project-card-footer">
                <p className="project-tech">
                    {techStack}
                </p>
                <button
                    type="button"
                    className="project-details-btn"
                    onClick={onSelect}
                    aria-label={`View details for ${name}`}
                >
                    <span>View Details</span>
                    <span className="btn-arrow">→</span>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;