import { TEAL, GRAD } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px clamp(1rem, 5vw, 3rem)", position: "relative" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left card */}
          <FadeIn delay={0.1}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,201,200,0.15)",
                borderRadius: 20,
                padding: "2.5rem",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: GRAD }} />
              <div style={{ fontSize: 48, marginBottom: 16 }}>🧠</div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#F1F5F9",
                  marginBottom: 12,
                }}
              >
                The Business-Tech Crossover You Didn't Know You Needed
              </h3>
              <p
                style={{
                  color: "#94A3B8",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Most developers can code. Most business people can plan. I do
                both — which means I build products that not only work, but
                actually{" "}
                <em style={{ color: TEAL }}>make sense as a business</em>.
              </p>
              <p
                style={{
                  color: "#94A3B8",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.8,
                }}
              >
                Business Administration at UNILAG taught me how money moves,
                how users think, and why half of startups fail. Software
                engineering taught me how to build the other half.
              </p>
            </div>
          </FadeIn>

          {/* Right text */}
          <FadeIn delay={0.2}>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#F1F5F9",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Hi, I'm Daniel —
              <br />
              <span
                style={{
                  background: GRAD,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                where ideas ship.
              </span>
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              I'm a Full Stack and Mobile App Developer with a business degree,
              which basically means I'm the person who says "yes, that feature
              is cool — but will it convert?" during every product meeting.
            </p>
            <p
              style={{
                color: "#94A3B8",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              I've shipped apps across fintech, e-commerce, education, and
              logistics. I care about clean architecture, fast delivery, and
              making sure the README actually makes sense.
            </p>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "#64748B",
                padding: "12px 20px",
                borderLeft: `3px solid ${TEAL}`,
                background: "rgba(0,201,200,0.05)",
              }}
            >
              "I once fixed a critical production bug between two bites of suya.
              No big deal." 🍢
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
