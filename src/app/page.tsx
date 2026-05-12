import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            Plateforme SaaS immobiliere en initialisation
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              VendezLibre
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Vendre son bien sans agence, avec une experience simple et
              rassurante.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Socle Next.js 16, React 19, TypeScript strict, Tailwind CSS v4 et
              shadcn/ui configure pour construire le produit premium accessible
              de VendezLibre.
            </p>
          </div>
          <Button size="lg" className="gap-2">
            Demarrer la base produit
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <Card className="max-w-xl">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-primary">299 EUR</p>
              <p className="text-sm text-muted-foreground">pack cible</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">AA</p>
              <p className="text-sm text-muted-foreground">accessibilite</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary">SSR</p>
              <p className="text-sm text-muted-foreground">par defaut</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
