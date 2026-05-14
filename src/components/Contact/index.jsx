import { useState } from "react";
import { TEAL, GRAD } from "../../styles/theme";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";

const CONTACT_INFO = [
  { icon: "📧", label: "Email", val: "hello@deetech.dev" },
  { icon: "💬", label: "WhatsApp", val: "+234 800 DEE TECH" },
  { icon: "🐙", label: "GitHub", val: "github.com/deetech" },
  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/deetech" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    color: "#F1F5F9",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Let's Build Something
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontFamily: "'DM Sans', sans-serif",
              textAlign: "center",
              marginBottom: 56,
            }}
          >
            Have a project? An idea? Even just a meme? I'm open to all of it.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Contact info */}
          <FadeIn delay={0.1}>
            <div>
              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    marginBottom: 24,
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontSize: 24 }}>{c.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: TEAL,
                        letterSpacing: "0.08em",
                        marginBottom: 2,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#CBD5E1",
                        fontSize: 14,
                      }}
                    >
                      {c.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem",
                  background: "rgba(0,201,200,0.06)",
                  border: "1px solid rgba(0,201,200,0.25)",
                  borderRadius: 16,
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 16 }}>🚀</div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: TEAL,
                    fontSize: "1.3rem",
                    marginBottom: 8,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  I'll get back to you faster than a shawarma break.
                </p>
              </div>
            ) : (
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(0,201,200,0.15)",
                  borderRadius: 16,
                  padding: "2rem",
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = TEAL)}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="Your Email"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = TEAL)}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell me about your project..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = TEAL)}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <button
                  onClick={submit}
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: GRAD,
                    border: "none",
                    borderRadius: 10,
                    color: "#fff",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: "pointer",
                    boxShadow: "0 0 30px rgba(0,201,200,0.25)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Send Message →
                </button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
