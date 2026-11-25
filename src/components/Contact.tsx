import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 · Inquiries & Collaboration"
      title="Let’s connect."
      className="border-b-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
      >
        <div className="lg:col-span-7">
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Interested in exchanging ideas, professional collaboration, or
            meaningful opportunities? Feel free to get in touch.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-burgundy px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-burgundy-dark"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-sand bg-ivory-alt/70 px-6 py-3.5 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30 hover:bg-ivory-alt"
            >
              LinkedIn Professional Profile
              <ArrowUpRight className="h-4 w-4 text-burgundy" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:text-right">
          <div className="inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-burgundy" />
            <span>{profile.location}</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}