import { GRAD } from "../../styles/theme";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "40px clamp(1rem, 5vw, 3rem)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
          background: GRAD,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 12,
        }}
      >
        DeeTech
      </div>
      <p
        style={{
          color: "#475569",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.875rem",
        }}
      >
        Built with React, Tailwind, and sleepless nights ☕
      </p>
      <p
        style={{
          color: "#334155",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.75rem",
          marginTop: 8,
        }}
      >
        © {new Date().getFullYear()} DeeTech · All rights reserved
      </p>
    </footer>
  );
}
