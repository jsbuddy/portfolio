"use client";

import { cn } from "@/lib/utils";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ClientOnly from "./client-only";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = ({ showWriting = false }: { showWriting?: boolean }) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Stack", href: "/stack" },
    ...(showWriting ? [{ name: "Writing", href: "/writing" }] : []),
  ];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-30 w-full pt-3 sm:pt-4">
      {/* Click-away overlay for the mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 cursor-default bg-transparent sm:hidden"
          />
        )}
      </AnimatePresence>
      <div className="container">
        <nav className="relative -mx-4 flex items-center justify-between gap-3 rounded-full bg-background/80 px-4 py-2.5 sm:py-3 backdrop-blur-sm">
          <Link
            href="/"
            className="flex shrink-0"
            aria-label="Home"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/logo-icon.svg"
              alt="Jude Francis"
              className="w-9 sm:w-10"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden items-center gap-4 text-sm sm:flex sm:gap-6 sm:text-base">
              {links.map((i) => {
                const isActive = pathname === i.href;
                return (
                  <Link
                    key={i.name}
                    href={i.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "transition-colors hover:text-foreground",
                      isActive ? "text-foreground" : "text-foreground/60",
                    )}
                  >
                    {i.name}
                  </Link>
                );
              })}
            </div>
            <ClientOnly>
              <ThemeToggle />
            </ClientOnly>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="cursor-pointer sm:hidden"
            >
              {open ? (
                <XMarkIcon className="size-5" />
              ) : (
                <Bars2Icon className="size-5" />
              )}
            </Button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute inset-x-0 top-full mt-2 origin-top rounded-3xl bg-card p-2 shadow ring-1 ring-foreground/5 sm:hidden"
              >
                <ul className="flex flex-col gap-1">
                  {links.map((i) => {
                    const isActive = pathname === i.href;
                    return (
                      <li key={i.name}>
                        <Link
                          href={i.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "block rounded-2xl px-4 py-2.5 text-base transition-colors",
                            { "bg-accent text-foreground": isActive },
                            {
                              "text-foreground/70 hover:bg-accent/60 hover:text-foreground":
                                !isActive,
                            },
                          )}
                        >
                          {i.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
