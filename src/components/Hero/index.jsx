import { useState, useEffect, useRef } from "react";
import { TEAL, GRAD } from "../../styles/theme";
import heroImg from "../../assets/hero.png";

const ROLES = [
  "Full Stack Developer",
  "Mobile App Developer",
  "Tech Problem Solver",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = ROLES[roleIdx.current];
      if (!deleting.current) {
        setTyped(current.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          return 1800;
        }
      } else {
        setTyped(current.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % ROLES.length;
        }
      }
      return deleting.current ? 50 : 80;
    };

    let t;
    const loop = () => {
      const d = tick();
      t = setTimeout(loop, d);
    };
    t = setTimeout(loop, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 clamp(1rem, 5vw, 3rem)",
        paddingTop: 80,
      }}
    >
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,201,200,0.12) 0%, transparent 70%)",
            top: "-10%",
            right: "-5%",
            animation: "float1 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,111,212,0.15) 0%, transparent 70%)",
            bottom: "10%",
            left: "-5%",
            animation: "float2 10s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,201,200,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "45%",
            animation: "float1 6s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        <div>
          {/* Available badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,201,200,0.08)",
              border: "1px solid rgba(0,201,200,0.25)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
              fontSize: 13,
              color: TEAL,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: TEAL,
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Available for Projects
          </div>

          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#F1F5F9",
              marginBottom: 20,
            }}
          >
            Building Scalable
            <br />
            <span
              style={{
                background: GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Web & Mobile
            </span>
            <br />
            Experiences
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: TEAL,
              fontFamily: "'DM Mono', monospace",
              fontWeight: 500,
              marginBottom: 12,
              minHeight: "1.8em",
            }}
          >
            {typed}
            <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
          </div>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 8,
              lineHeight: 1.6,
            }}
          >
            Business Mindset.
            <br />
            Where finance meets functions, and deadlines meet deployments.
          </p>

          <p
            style={{
              color: "#64748B",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              fontStyle: "italic",
              marginBottom: 36,
            }}
          >
            ✦ I debug code faster after eating shawarma. Documented fact.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: GRAD,
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.04em",
                boxShadow: "0 0 30px rgba(0,201,200,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 40px rgba(0,201,200,0.45)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "";
                e.target.style.boxShadow = "0 0 30px rgba(0,201,200,0.3)";
              }}
            >
              View Projects →
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "transparent",
                border: "1px solid rgba(0,201,200,0.4)",
                color: TEAL,
                cursor: "pointer",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0,201,200,0.08)";
                e.target.style.borderColor = TEAL;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "rgba(0,201,200,0.4)";
              }}
            >
              Hire Me
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: 40,
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              ["20+", "Projects Shipped"],
              ["5+", "Years Experience"],
              ["15+", "Happy Clients"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 800,
                    background: GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    color: "#64748B",
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar blob */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-avatar"
        >
          <div style={{ position: "relative", width: 280, height: 280 }}>
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                background:
                  "linear-gradient(135deg, rgba(0,201,200,0.15), rgba(26,111,212,0.15))",
                border: "1px solid rgba(0,201,200,0.25)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "morph 8s ease-in-out infinite",
                boxShadow: "0 0 60px rgba(0,201,200,0.15)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 72 }}>
                  <img
                    src={heroImg}
                    alt="Hero Avatar"
                    style={{
                      width: 300,
                      height: 300,
                      borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                      animation: "morph 8s ease-in-out infinite",
                      objectFit: "cover",
                      boxShadow: "0 0 20px rgba(0,201,200,0.3)",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    background: GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: 18,
                    marginTop: 8,
                  }}
                >
                  DeeTeck
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 10,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: TEAL,
                animation: "orbit 4s linear infinite",
                boxShadow: `0 0 10px ${TEAL}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 30,
                left: 15,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1A6FD4",
                animation: "orbit 6s linear infinite reverse",
                boxShadow: "0 0 8px #1A6FD4",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s ease-in-out infinite",
          color: "#475569",
          fontSize: 22,
        }}
      >
        ↓
      </div>
    </section>
  );
}
