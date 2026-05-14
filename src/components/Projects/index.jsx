import { PROJECTS } from "../../data";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            Things I've Shipped
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
