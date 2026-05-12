import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LandingNavbar } from "@/components/sections/landing-navbar";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <LandingNavbar />
      <Hero />
      <HowItWorks />
    </main>
  );
}
