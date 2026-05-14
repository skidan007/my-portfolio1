import { JOURNEY } from "../../data";
import { TEAL, GRAD } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

export default function Journey() {
  return (
    <section id="journey" style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Journey</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 64,
              textAlign: "center",
            }}
          >
            How We Got Here
          </h2>
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 27,
              top: 0,
              bottom: 0,
              width: 2,
              background: `linear-gradient(to bottom, ${TEAL}, #1A6FD4)`,
              opacity: 0.3,
            }}
          />

          {JOURNEY.map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.12}>
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  marginBottom: 40,
                  position: "relative",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: GRAD,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(0,201,200,0.3)",
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ paddingTop: 8 }}>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: TEAL,
                      marginBottom: 4,
                    }}
                  >
                    {item.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#F1F5F9",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#94A3B8",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
