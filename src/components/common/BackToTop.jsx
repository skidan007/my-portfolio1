import { useScrollY } from "../../hooks/useScrollY";
import { GRAD } from "../../styles/theme";

export default function BackToTop() {
  const y = useScrollY();

  if (y <= 400) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: GRAD,
        border: "none",
        color: "#fff",
        fontSize: 18,
        cursor: "pointer",
        zIndex: 99,
        boxShadow: "0 4px 20px rgba(0,201,200,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      ↑
    </button>
  );
}
