import { socials } from "@/lib/socials";

const Footer = () => {
  return (
    <footer className="container mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-foreground/50 sm:mt-20">
      <p>&copy; {new Date().getFullYear()} Jude Francis</p>
      <div className="flex gap-2 sm:gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <Icon className="shrink-0 size-5" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
