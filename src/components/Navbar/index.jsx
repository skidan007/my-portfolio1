import { useState } from "react";
import { useScrollY } from "../../hooks/useScrollY";
import { TEAL, GRAD } from "../../styles/theme";
import { NAV_LINKS } from "../../data";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrollY > 60 ? "rgba(5,10,20,0.85)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(16px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(0,201,200,0.15)" : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(1rem, 5vw, 3rem)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div>
            <img
              src={logo}
              alt="DeeTech Logo"
              style={{
                display: "block",
                width: 150,
                height: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                color: "#CBD5E1",
                cursor: "pointer",
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = TEAL)}
              onMouseLeave={(e) => (e.target.style.color = "#CBD5E1")}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: GRAD,
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: 8,
              letterSpacing: "0.04em",
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: 24,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(5,10,20,0.97)",
            padding: "1.5rem",
            borderTop: "1px solid rgba(0,201,200,0.2)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <div
              key={link}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <button
                onClick={() => scrollTo(link.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  color: "#CBD5E1",
                  cursor: "pointer",
                  fontSize: 16,
                  fontFamily: "'DM Sans', sans-serif",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {link}
              </button>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
