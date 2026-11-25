import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export function Hero() {
  const [imgError, setImgError] = useState(false);
  const words = profile.headline.split(" ");

  return (
    <section
      id="home"
      className="border-b border-sand bg-ivory py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-medium tracking-[0.22em] text-burgundy uppercase"
            >
              {profile.tagline}
            </motion.p>

            <h1 className="font-serif text-4xl leading-[1.15] font-medium tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-burgundy px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-burgundy-dark"
              >
                Explore My Journey
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-sand bg-ivory-alt/70 px-6 py-3.5 text-sm font-medium text-charcoal transition-colors hover:border-charcoal/30 hover:bg-ivory-alt"
              >
                <Mail className="h-4 w-4 text-burgundy" />
                Connect With Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 flex items-center gap-2 text-xs tracking-wider text-muted uppercase"
            >
              <MapPin className="h-3.5 w-3.5 text-burgundy" />
              <span>{profile.location}</span>
            </motion.div>
          </div>

          {/* Right Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-sand bg-ivory-alt shadow-xs">
                {!imgError ? (
                  <img
                    src={profile.portraitUrl}
                    alt={profile.portraitAlt}
                    onError={() => setImgError(true)}
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full flex-col items-center justify-center p-8 text-center">
                    <span className="font-serif text-5xl font-medium text-burgundy/80">
                      {profile.monogram}
                    </span>
                    <p className="mt-4 font-serif text-lg text-charcoal">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-xs tracking-widest text-muted uppercase">
                      {profile.location}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}