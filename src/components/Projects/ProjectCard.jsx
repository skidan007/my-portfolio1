import { useState } from "react";
import { FiImage } from "react-icons/fi";

export default function ProjectCard({
  title,
  desc,
  tags,
  image,
  imageAlt,
  color,
  liveDemo,
  github,
  status,
  previewLabel,
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? color + "50" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        width: "100%",
        minHeight: 0,
        height: "100%",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov ? `0 16px 50px ${color}20` : "none",
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: 250,
          background: `linear-gradient(135deg, ${color}20, ${color}08)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
        }}
      >
        {image ? (
          <img src={image} alt={imageAlt || `${title} project image`} className="project-image" />
        ) : (
          <div className="project-preview-missing" role="img" aria-label={previewLabel || `${title} image preview unavailable`}>
            <FiImage size={34} aria-hidden="true" />
            <span>{previewLabel || "Project image unavailable"}</span>
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        {status && <p className="project-status">{status}</p>}
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
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          {desc}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 13,
                fontFamily: "'DM Mono', monospace",
                color: color,
                background: `${color}15`,
                padding: "3px 10px",
                borderRadius: 100,
                border: `1px solid ${color}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              minHeight: 44,
              display: "grid",
              placeItems: "center",
              background: `${color}20`,
              border: `1px solid ${color}40`,
              borderRadius: 8,
              color,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
              Live Demo ↗
          </a>
          )}
          {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              minHeight: 44,
              display: "grid",
              placeItems: "center",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              color: "#94A3B8",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
            textDecoration: "none",
            }}
          >
              GitHub ↗
          </a>
          )}
        </div>
      </div>
    </div>
  );
}
