import { navigationItems, profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-ivory-alt/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <div>
          <p className="font-serif text-lg font-medium text-charcoal">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-muted">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-burgundy"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}