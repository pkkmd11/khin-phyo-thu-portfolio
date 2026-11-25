import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { profile, selectedWork, workCategories } from "../data/portfolio";
import { Section } from "./Section";

export function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="05 · Documentation & Output"
      title="Selected Work"
      alternate
    >
      {selectedWork.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {selectedWork.map((work) => (
            <article
              key={work.id}
              className="group overflow-hidden rounded-xl border border-sand bg-ivory p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4 text-xs text-burgundy">
                <span className="font-medium tracking-wider uppercase">
                  {work.category}
                </span>
                <span>{work.year}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-medium text-charcoal">
                {work.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {work.summary}
              </p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-burgundy hover:underline"
                >
                  View Document
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-sand bg-ivory p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-sand bg-ivory-alt px-3 py-1.5 text-xs font-medium text-burgundy">
                <FileText className="h-3.5 w-3.5" />
                Portfolio Archive · Curating Verified Samples
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                Research, reports, and programme documentation available upon
                request.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Publicly shareable writing samples, programme documentation, and
                community initiative summaries will be published here once
                approved for public release. For inquiries from NGOs, research
                teams, or programme coordinators, please reach out directly.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${profile.email}?subject=Portfolio%20Work%20Sample%20Inquiry`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-dark"
                >
                  Request Work Samples via Email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-sand pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Focus Categories
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-charcoal">
                {workCategories.map((category) => (
                  <li key={category} className="flex items-center gap-2.5">
                    <span className="h-1 w-4 bg-burgundy/70" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
}