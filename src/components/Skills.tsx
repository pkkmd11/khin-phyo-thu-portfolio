import { motion } from "framer-motion";
import { interests, skills } from "../data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 · Competencies & Focus"
      title="Skills & Areas of Interest"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Verified CV Skills */}
        <div className="lg:col-span-5">
          <h3 className="font-serif text-2xl font-medium text-charcoal">
            Core Skills
          </h3>
          <p className="mt-2 text-sm text-muted">
            Verified competencies documented in curriculum vitae.
          </p>

          <ul className="mt-6 space-y-3">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 rounded-lg border border-sand bg-ivory-alt/50 px-4 py-3.5 text-sm font-medium text-charcoal"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Professional Interests */}
        <div className="lg:col-span-7">
          <h3 className="font-serif text-2xl font-medium text-charcoal">
            Areas of Professional Interest
          </h3>
          <p className="mt-2 text-sm text-muted">
            Thematic focus areas across research, policy, and community work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="rounded-lg border border-sand bg-ivory-alt/70 px-4 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-burgundy/50 hover:text-burgundy"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}