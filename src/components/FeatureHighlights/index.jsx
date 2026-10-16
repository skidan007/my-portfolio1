import { FiZap, FiSmartphone, FiSearch } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const FEATURES = [
  {
    title: "Fast Loading Performance",
    description: "Optimized websites that load quickly and deliver a smooth user experience.",
    Icon: FiZap,
  },
  {
    title: "Mobile-Friendly Design",
    description: "Responsive interfaces that work across phones, tablets, and desktops.",
    Icon: FiSmartphone,
  },
  {
    title: "SEO-Optimized Structure",
    description: "Clean structure and accessible content designed to support search engine discoverability.",
    Icon: FiSearch,
  },
  {
    title: "Secure & Reliable",
    description: "Built with security-conscious practices, reliability, and maintainable code.",
    Icon: HiOutlineShieldCheck,
  },
];

export default function FeatureHighlights() {
  return (
    <section className="feature-strip" aria-label="Website development features">
      <div className="feature-strip-inner">
        {FEATURES.map(({ title, description, Icon }) => (
          <article className="feature-item" key={title}>
            <Icon className="feature-icon" size={23} strokeWidth={1.8} aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
