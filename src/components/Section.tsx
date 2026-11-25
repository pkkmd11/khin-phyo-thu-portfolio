import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  alternate = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-b border-sand py-20 md:py-28 ${
        alternate ? "bg-ivory-alt/60" : "bg-ivory"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {(eyebrow || title) && (
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-burgundy uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal sm:text-4xl">
                {title}
              </h2>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}