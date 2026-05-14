import { FUN_KIT } from "../../data";
import { TEAL } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

export default function FunKit() {
  return (
    <section style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Just for Fun</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Developer Survival Kit 🛠️
          </h2>
          <p
            style={{
              color: "#64748B",
              fontFamily: "'DM Sans', sans-serif",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Because not everything needs to be a Jira ticket.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {FUN_KIT.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 12 }}>{item.emoji}</div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    color: TEAL,
                    fontSize: "0.95rem",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
