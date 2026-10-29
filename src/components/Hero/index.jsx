import { useEffect, useState } from "react";

const developerRoles = [
  "Mobile App Developer",
  "Frontend Developer",
  "Fullstack Developer",
];

export default function Hero() {
  const [role, setRole] = useState(developerRoles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(developerRoles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = developerRoles[roleIndex];
    let timeout;

    if (!isDeleting && characterIndex === currentRole.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && characterIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % developerRoles.length);
      }, 250);
    } else {
      timeout = window.setTimeout(() => {
        const nextIndex = characterIndex + (isDeleting ? -1 : 1);
        setCharacterIndex(nextIndex);
        setRole(currentRole.slice(0, nextIndex));
      }, isDeleting ? 35 : 75);
    }

    return () => window.clearTimeout(timeout);
  }, [characterIndex, isDeleting, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-availability"><span />Available for Projects</div>
          <h1>Building Scalable<br /><span>Web &amp; Mobile</span><br />Experiences</h1>
          <p className="hero-role" aria-live="polite">
            {role}<span className="hero-role-caret" aria-hidden="true" />
          </p>
          <p className="hero-description"><strong>Business Mindset.</strong><br />Where finance meets functions, and deadlines meet deployments.</p>
          <p className="hero-personality">&#10022; I debug code faster after eating shawarma. Documented fact.</p>
          <div className="hero-cta">
            <button className="hero-button hero-button-primary" onClick={() => scrollTo("projects")}>View Projects <span aria-hidden="true">&#8594;</span></button>
            <a
              className="hero-button hero-button-secondary"
              href="/Daniel_Victor_Bernard_Software_Developer_Resume.pdf"
              download="Daniel Victor Bernard Resume.pdf"
            >
              Download Resume
            </a>
            <a className="hero-button hero-button-secondary" href="https://github.com/skidan007" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">&#8595;</div>
    </section>
  );
}
