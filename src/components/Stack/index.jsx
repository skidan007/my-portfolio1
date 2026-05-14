import { STACK } from "../../data";
import { TEAL } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Tech Stack</SectionLabel>
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
            Tools of the Trade
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
          }}
        >
          {Object.entries(STACK).map(([category, techs], ci) => (
            <FadeIn key={category} delay={ci * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: TEAL,
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      style={{
                        padding: "6px 14px",
                        borderRadius: 100,
                        fontSize: 13,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        background: `${tech.color}18`,
                        border: `1px solid ${tech.color}40`,
                        color: tech.color,
                        transition: "transform 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
                      onMouseLeave={(e) => (e.target.style.transform = "")}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
