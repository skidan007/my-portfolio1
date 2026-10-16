export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-availability"><span />Available for Projects</div>
          <h1>Building Scalable<br /><span>Web &amp; Mobile</span><br />Experiences</h1>
          <p className="hero-role">Mobile App Developer</p>
          <p className="hero-description"><strong>Business Mindset.</strong><br />Where finance meets functions, and deadlines meet deployments.</p>
          <p className="hero-personality">&#10022; I debug code faster after eating shawarma. Documented fact.</p>
          <div className="hero-cta">
            <button className="hero-button hero-button-primary" onClick={() => scrollTo("projects")}>View Projects <span aria-hidden="true">&#8594;</span></button>
            <button className="hero-button hero-button-secondary" onClick={() => scrollTo("contact")}>Hire Me</button>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">&#8595;</div>
    </section>
  );
}

