import { SERVICES } from "../../data";
import FadeIn from "../common/FadeIn";
import SectionLabel from "../common/SectionLabel";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px clamp(1rem, 5vw, 3rem)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Services</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#F1F5F9",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            What I Build for You
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
