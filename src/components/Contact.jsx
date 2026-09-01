function Contact() {
    const contactInfo = {
        email: "jeevanjayakumar04@gmail.com",
        linkedin: "https://linkedin.com/in/jeevan-j-523a69317",
        github: "https://github.com/lightning4310"
    };

    return (
        <section id="contact" className="contact">
            <p className="section-label">06-CONTACT</p>
            <h2>Let's connect</h2>
            <p className="contact-subtitle">Have a project, opportunity, or just want to chat? Reach out!</p>

            <div className="contact-info-grid">

                <a className="contact-card"
                    href={`mailto:${contactInfo.email}`}>
                    <p className="contact-label">Email</p>
                    <span className="contact-value">{contactInfo.email}</span>
                </a>


                <a className="contact-card"
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <p className="contact-label">GitHub</p>
                    <span className="contact-value">{contactInfo.github}</span>
                </a>


                <a className="contact-card"
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer">
                    <p className="contact-label">LinkedIn</p>
                    <span className="contact-value">{contactInfo.linkedin}</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;