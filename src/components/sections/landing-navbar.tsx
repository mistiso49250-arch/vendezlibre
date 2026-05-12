"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Comparatif", href: "#comparatif" },
  { label: "Conseillers", href: "#conseillers" },
] as const;

function Logo() {
  return (
    <a
      href="#top"
      aria-label="VendezLibre - Accueil"
      className="inline-flex items-center text-lg font-semibold tracking-normal"
    >
      <span className="text-primary">Vendez</span>
      <span className="text-accent">Libre</span>
    </a>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span
        className={cn(
          "absolute top-1 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
          open && "translate-y-1.5 rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute top-2.5 left-0 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute top-4 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
          open && "-translate-y-1.5 -rotate-45",
        )}
      />
    </span>
  );
}

export function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Navigation principale"
        className="mx-auto max-w-6xl rounded-xl border border-border/70 bg-card/90 shadow-[var(--shadow-card)] backdrop-blur-xl"
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="accent">
              <a href="#demarrer">Démarrer gratuitement</a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="landing-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <BurgerIcon open={mobileMenuOpen} />
          </Button>
        </div>

        <AnimatePresence initial={false}>
          {mobileMenuOpen ? (
            <motion.div
              id="landing-mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden border-t border-border/70 lg:hidden"
            >
              <div className="grid gap-1 px-3 py-3">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild variant="accent" className="mt-2 w-full">
                  <a href="#demarrer" onClick={() => setMobileMenuOpen(false)}>
                    Démarrer gratuitement
                  </a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
