function Skills() {
    const skillCategories = [
        {
            category: "Languages",
            items: ["C", "Java", "Python", "JavaScript"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React.js", "Node.js", "Express.js", "Spring Boot"]
        },
        {
            category: "Database",
            items: ["PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools & Technologies",
            items: ["Git", "Postman / Bruno", "AWS", "JWT", "REST APIs"]
        },
        {
            category: "Core CS",
            items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <p className="section-label">02-SKILLS</p>

            <h2>Technical Skills</h2>

            <div className="skills-categories-grid">
                {skillCategories.map((cat) => (
                    <div className="skills-category-card" key={cat.category}>
                        <h3>{cat.category}</h3>
                        <div className="skills-list">
                            {cat.items.map((skill) => (
                                <div className="skill" key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;