import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems, profile } from "../data/portfolio";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-sand bg-ivory/95 backdrop-blur-sm"
          : "border-sand/60 bg-ivory"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-tight text-charcoal transition-colors hover:text-burgundy"
        >
          {profile.monogram}
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative py-1 text-sm font-medium text-muted transition-colors hover:text-charcoal"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-burgundy transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sand text-charcoal transition-colors hover:bg-ivory-alt md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="border-t border-sand bg-ivory px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 text-base font-medium text-charcoal transition-colors hover:text-burgundy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}