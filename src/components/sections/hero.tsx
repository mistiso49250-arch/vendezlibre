"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Clock3,
  Euro,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustIndicators = [
  "Sans commission",
  "Accompagnement guidé",
  "Pensé pour vendre sereinement",
] as const;

const benefits = [
  {
    icon: FileCheck2,
    title: "Checklist claire",
    description: "Chaque étape de vente est structurée, du prix aux visites.",
  },
  {
    icon: Camera,
    title: "Photos valorisées",
    description: "Un studio photo pour présenter le bien avec plus d’impact.",
  },
  {
    icon: ShieldCheck,
    title: "Décisions sécurisées",
    description: "Score, conseils et suivi pour avancer sans pression.",
  },
] as const;

const miniStats = [
  { label: "Prix cible", value: "299€" },
  { label: "Économie moyenne", value: "14 701€" },
  { label: "Parcours guidé", value: "5 étapes" },
] as const;

const checklistItems = [
  { label: "Estimation du prix", done: true },
  { label: "Photos du bien", done: true },
  { label: "Annonce optimisée", done: true },
  { label: "Suivi des acheteurs", done: false },
] as const;

export function Hero() {
  return (
    <section
      id="demarrer"
      className="relative isolate overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,250,252,0.88)_45%,rgba(224,242,254,0.48))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,76,117,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(15,76,117,0.055)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge variant="accent" size="lg" className="mb-6">
            <Sparkles className="size-4" aria-hidden="true" />
            Déjà pensé pour économiser une commission d’agence
          </Badge>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Vendez votre bien. Sans commission. Avec un vrai guide à chaque
              étape.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              VendezLibre aide les particuliers à préparer, présenter et suivre
              leur vente immobilière sans agence, avec une expérience simple,
              rassurante et transparente.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent">
              <a href="/onboarding">
                Estimer mon bien
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#comment-ca-marche">Voir comment ça marche</a>
            </Button>
          </div>

          <div className="mt-7 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap">
            {trustIndicators.map((indicator) => (
              <span key={indicator} className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="size-4 text-success"
                  aria-hidden="true"
                />
                {indicator}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {miniStats.map((stat) => (
              <Card key={stat.label} variant="subtle" padding="sm">
                <p className="text-2xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.38, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
          <Card className="border-white/70 bg-white/78 shadow-[var(--shadow-card-elevated)] backdrop-blur-xl">
            <CardContent className="space-y-5 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Progression vendeur
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">
                    Maison familiale à Saumur
                  </h2>
                </div>
                <Badge variant="success">Score 86/100</Badge>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/80 p-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    Dossier de vente
                  </span>
                  <span className="text-muted-foreground">72%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <motion.div
                    initial={{ width: "38%" }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border/70 bg-card p-3">
                  <Euro
                    className="mb-3 size-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-semibold text-foreground">299€</p>
                  <p className="text-xs text-muted-foreground">pack unique</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card p-3">
                  <Clock3
                    className="mb-3 size-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-semibold text-foreground">38j</p>
                  <p className="text-xs text-muted-foreground">délai cible</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card p-3">
                  <BarChart3
                    className="mb-3 size-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-semibold text-foreground">94%</p>
                  <p className="text-xs text-muted-foreground">rassurés</p>
                </div>
              </div>

              <div className="space-y-3">
                {checklistItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border/70 bg-card px-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-success/10 text-success">
                      {item.done ? (
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                      ) : (
                        <Clock3 className="size-4" aria-hidden="true" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <Card
                  key={benefit.title}
                  variant="default"
                  padding="sm"
                  className="bg-white/82 backdrop-blur-md"
                >
                  <Icon
                    className="mb-3 size-5 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-foreground">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
