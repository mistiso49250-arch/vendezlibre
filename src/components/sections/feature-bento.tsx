"use client";

import { motion } from "framer-motion";
import {
  BadgeEuro,
  Camera,
  FileCheck2,
  Handshake,
  RadioTower,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  reassurance: string;
  icon: LucideIcon;
  className: string;
  gradient: string;
};

const features: Feature[] = [
  {
    title: "Economie sur les frais d'agence",
    description:
      "Un prix clair pour vendre sans commission, avec une alternative lisible aux honoraires traditionnels.",
    reassurance: "Vous savez ce que vous payez, des le depart.",
    icon: BadgeEuro,
    className: "lg:col-span-3 lg:row-span-2",
    gradient: "from-primary/12 via-accent/8 to-transparent",
  },
  {
    title: "Accompagnement humain",
    description:
      "Des reperes simples et un conseiller pour avancer dans les moments cles de votre vente.",
    reassurance: "Vous gardez la main, sans rester seul.",
    icon: Handshake,
    className: "lg:col-span-3",
    gradient: "from-success/12 via-primary/6 to-transparent",
  },
  {
    title: "Studio photo IA",
    description:
      "Valorisez vos photos pour donner une premiere impression plus professionnelle et rassurante.",
    reassurance: "Votre bien est presente sous son meilleur jour.",
    icon: Camera,
    className: "lg:col-span-2",
    gradient: "from-accent/14 via-primary/5 to-transparent",
  },
  {
    title: "Diffusion multi-portails",
    description:
      "Preparez une annonce coherente pour maximiser la visibilite aupres des acheteurs serieux.",
    reassurance: "Plus de visibilite, moins d'improvisation.",
    icon: RadioTower,
    className: "lg:col-span-2",
    gradient: "from-primary/10 via-accent/7 to-transparent",
  },
  {
    title: "Suivi vendeur en temps reel",
    description:
      "Visualisez votre progression, vos priorites et les actions importantes depuis un tableau de bord clair.",
    reassurance: "Chaque etape validee rend la vente plus simple.",
    icon: TrendingUp,
    className: "lg:col-span-4",
    gradient: "from-accent/14 via-success/8 to-transparent",
  },
  {
    title: "Dossier acheteur securise",
    description:
      "Centralisez les elements utiles pour suivre les acheteurs et reduire les incertitudes avant la signature.",
    reassurance: "Des decisions plus posees, avec les bons signaux.",
    icon: FileCheck2,
    className: "lg:col-span-2",
    gradient: "from-success/12 via-accent/6 to-transparent",
  },
];

export function FeatureBento() {
  return (
    <section
      id="fonctionnalites"
      className="relative overflow-hidden bg-muted/35 px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(15,76,117,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Pourquoi choisir VendezLibre"
          title="Les benefices d'une solution moderne, sans perdre le contact humain."
          description="VendezLibre combine economies, accompagnement et outils simples pour aider les particuliers a vendre avec plus de confiance."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:auto-rows-[minmax(220px,auto)] lg:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.32,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className={cn("min-h-[220px]", feature.className)}
              >
                <Card
                  variant="interactive"
                  className="group relative h-full overflow-hidden border-white/70 bg-white/78 backdrop-blur-xl"
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-200 group-hover:opacity-100",
                      feature.gradient,
                    )}
                  />
                  <CardContent className="relative flex h-full flex-col justify-between gap-8 p-6">
                    <div className="space-y-5">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-border/70 bg-card/85 text-primary shadow-[var(--shadow-xs)]">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold leading-7 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-card/72 px-4 py-3 text-sm font-medium leading-6 text-primary shadow-[var(--shadow-xs)]">
                      {feature.reassurance}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
