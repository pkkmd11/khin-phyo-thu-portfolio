import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Career Path"
      title="Professional Experience"
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originY: 0 }}
          className="absolute top-2 bottom-2 left-3 w-px bg-sand md:left-1/2 md:-translate-x-px"
        />

        <div className="space-y-10 md:space-y-12">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative pl-10 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
              >
                {/* Timeline Dot */}
                <span
                  aria-hidden="true"
                  className={`absolute top-2 left-1.5 h-3 w-3 rounded-full border-2 border-ivory md:left-1/2 md:-translate-x-1/2 ${
                    item.isCurrent ? "bg-burgundy" : "bg-charcoal/50"
                  }`}
                />

                {/* Date & Location Column */}
                <div
                  className={`mb-2 md:mb-0 ${
                    isEven ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8"
                  }`}
                >
                  <p className="text-sm font-medium text-burgundy">
                    {item.period}
                  </p>
                  <p className="mt-0.5 text-xs tracking-wide text-muted">
                    {item.location}
                  </p>
                </div>

                {/* Role & Organization Column */}
                <div
                  className={`rounded-xl border border-sand bg-ivory-alt/45 p-5 sm:p-6 ${
                    isEven ? "md:ml-4" : "md:order-1 md:mr-4 md:text-right"
                  }`}
                >
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-muted">
                    {item.organization}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-sm text-muted">
                      {item.highlights.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}