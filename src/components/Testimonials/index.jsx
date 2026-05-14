import { useState } from "react";
import { TESTIMONIALS } from "../../data";
import { TEAL, GRAD } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <SectionLabel>Testimonials</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 48,
            }}
          >
            What Clients Say
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(0,201,200,0.15)",
              borderRadius: 20,
              padding: "3rem 2rem",
              position: "relative",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -1,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 2,
                background: GRAD,
              }}
            />
            <div
              style={{
                fontSize: 40,
                color: TEAL,
                marginBottom: 20,
                opacity: 0.5,
              }}
            >
              "
            </div>
            <p
              style={{
                color: "#CBD5E1",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              {t.text}
            </p>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: GRAD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                {t.avatar}
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    fontSize: "0.95rem",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    color: "#64748B",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>

            {/* Dot nav */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 24,
              }}
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    background: i === idx ? TEAL : "#334155",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
