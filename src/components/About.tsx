import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Background & Perspective"
      title="About Me"
      alternate
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-serif text-xl leading-relaxed text-charcoal italic">
            “A professional journey shaped by people, education, research, and
            social perspectives.”
          </p>
          <div className="mt-6 h-px w-16 bg-burgundy" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:col-span-8"
        >
          {profile.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}