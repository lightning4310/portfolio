
function Hero() {
    const role = "Full Stack Developer";
    return ((
        <section id="home" className="hero">
            <p className="hero-status">Open to Work{" :)"}</p>
            <h1>Hey,I'm{" "}
                <span className="name">Jeevan</span>{" "}
                <span className="fname">J</span>
            </h1>

            <h2>{role}</h2>

            <p className="hero-description">I build modern, responsive websites and applications with a focus on user experience and performance.
            </p>
        </section>
    ))
}

export default Hero;