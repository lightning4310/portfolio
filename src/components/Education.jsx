function Education() {
    const educationList = [
        {
            degree: "B.Tech. - Computer Science & Engineering",
            institution: "Marian Engineering College, Trivandrum",
            grade: "CGPA: 7.9/10",
            period: "2022 - 2026"
        },
        {
            degree: "Minor in Robotics and Automation",
            institution: "Marian Engineering College, Trivandrum",
            grade: "CGPA: 6.75/10",
            period: "2023 - 2026"
        },
        {
            degree: "12th KBHSE",
            institution: "St. Ephrem’s HSS Mannanam, Kottayam",
            grade: "Percentage: 92.83%",
            period: "2022"
        },
        {
            degree: "10th KBPE",
            institution: "St. George's V HSS Kaipuzha, Kottayam",
            grade: "Percentage: 95%",
            period: "2020"
        }
    ];

    return (
        <section id="education" className="education">
            <p className="section-label">04-EDUCATION</p>

            <h2>Education</h2>

            <div className="education-list">
                {educationList.map((edu, idx) => (
                    <div className="education-item" key={idx}>
                        <div className="edu-header">
                            <h3>{edu.degree}</h3>
                            <span className="edu-period">{edu.period}</span>
                        </div>
                        <p className="edu-institution">{edu.institution}</p>
                        <p className="edu-grade">{edu.grade}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
