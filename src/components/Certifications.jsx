function Certifications() {
    const items = [
        {
            title: "AWS Cloud Technical Essentials",
            issuer: "AWS / Coursera",
            date: "Aug 2026",
            type: "Certification"
        },
        {
            title: "AI/ML Intern",
            issuer: "PACELAB",
            date: "Jun 2025",
            type: "Training / Internship"
        },
        {
            title: "Cybersecurity Analyst Intern",
            issuer: "ICT Academy of Kerala",
            date: "Jul 2024 - Aug 2024",
            type: "Training / Internship"
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <p className="section-label">05-CERTIFICATIONS & TRAINING</p>

            <h2>Certifications & Experience</h2>

            <div className="certifications-list">
                {items.map((item, idx) => (
                    <div className="certification-item" key={idx}>
                        <div className="cert-header">
                            <h3>{item.title}</h3>
                            <span className="cert-date">{item.date}</span>
                        </div>
                        <div className="cert-details">
                            <span className="cert-issuer">{item.issuer}</span>
                            <span className="cert-type">{item.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
