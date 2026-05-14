import { TEAL } from "../../styles/theme";

export default function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: TEAL,
          textTransform: "uppercase",
          background: "rgba(0,201,200,0.08)",
          border: "1px solid rgba(0,201,200,0.2)",
          padding: "4px 16px",
          borderRadius: 100,
        }}
      >
        {children}
      </span>
    </div>
  );
}
