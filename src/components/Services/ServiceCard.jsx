import { useState } from "react";
import { GRAD } from "../../styles/theme";

export default function ServiceCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(0,201,200,0.06)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? "rgba(0,201,200,0.4)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        padding: "2rem",
        cursor: "default",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-6px)" : "none",
        boxShadow: hov ? "0 12px 40px rgba(0,201,200,0.1)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hov && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: GRAD,
          }}
        />
      )}
      <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
      <h3
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#F1F5F9",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#94A3B8",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
