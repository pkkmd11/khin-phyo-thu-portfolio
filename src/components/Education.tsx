import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="03 · Academic Qualifications"
      title="Education"
      alternate
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between rounded-xl border border-sand bg-ivory p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sand bg-ivory-alt text-burgundy">
                <GraduationCap className="h-5 w-5" />
              </div>

              <p className="text-xs font-medium tracking-wider text-burgundy uppercase">
                {item.period}
              </p>

              <h3 className="mt-2 font-serif text-xl leading-snug font-medium text-charcoal">
                {item.degree}
                {item.field ? ` — ${item.field}` : ""}
              </h3>
            </div>

            <p className="mt-6 border-t border-sand/80 pt-4 text-sm text-muted">
              {item.institution}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}