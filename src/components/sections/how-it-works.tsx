"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  Handshake,
  Home,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
  reassurance: string;
  time: string;
  label: "Simple" | "Rapide" | "Accompagné";
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "Estimation du bien",
    description:
      "Vous renseignez les informations essentielles, puis VendezLibre structure une première vision claire de votre projet.",
    reassurance: "Pas besoin de connaître le jargon immobilier.",
    time: "10 min",
    label: "Simple",
    icon: Home,
  },
  {
    title: "Création de l’annonce",
    description:
      "Votre annonce est préparée avec les bons éléments : prix, photos, description et points forts du logement.",
    reassurance: "Vous gardez le contrôle sur chaque détail.",
    time: "30 min",
    label: "Rapide",
    icon: FileText,
  },
  {
    title: "Accompagnement conseiller",
    description:
      "Un suivi vous aide à prioriser les actions, répondre aux acheteurs et avancer sans pression inutile.",
    reassurance: "Vous n’êtes jamais seul devant les décisions importantes.",
    time: "24 h",
    label: "Accompagné",
    icon: Handshake,
  },
  {
    title: "Vente finalisée",
    description:
      "Vous suivez les dernières étapes avec une checklist lisible jusqu’à la signature et la conclusion de la vente.",
    reassurance: "Chaque étape validée rend la suite plus sereine.",
    time: "Suivi continu",
    label: "Simple",
    icon: ClipboardCheck,
  },
];

const labelVariant = {
  Simple: "default",
  Rapide: "accent",
  Accompagné: "success",
} as const;

export function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      className="bg-background px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Comment ça marche"
          title="Un parcours clair pour vendre sans agence, sans se sentir perdu."
          description="VendezLibre transforme une vente immobilière complexe en étapes simples, lisibles et accompagnées."
        />

        <div className="relative mt-12">
          <div className="absolute top-8 bottom-8 left-6 w-px bg-border md:top-10 md:right-0 md:left-0 md:mx-auto md:h-px md:w-[calc(100%-12rem)]" />

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.32,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="relative"
                >
                  <div className="mb-4 flex items-center gap-3 pl-14 md:justify-center md:pl-0">
                    <div className="absolute left-0 flex size-12 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[var(--shadow-card)] md:static">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-primary md:hidden">
                      Étape {index + 1}
                    </span>
                  </div>

                  <Card variant="interactive" className="h-full bg-card">
                    <CardContent className="flex h-full flex-col gap-5 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="hidden text-sm font-semibold text-primary md:inline">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Badge
                          variant={labelVariant[step.label]}
                          size="sm"
                          className={cn(index === 2 && "whitespace-nowrap")}
                        >
                          {step.label}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold leading-7 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>

                      <div className="mt-auto space-y-3 border-t border-border/70 pt-4">
                        <p className="text-sm font-medium leading-6 text-foreground">
                          {step.reassurance}
                        </p>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-muted-foreground">
                            Temps indicatif
                          </span>
                          <span className="font-semibold text-primary">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
