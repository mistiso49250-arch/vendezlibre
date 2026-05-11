# VendezLibre — AGENTS.md

## Projet

VendezLibre est une plateforme SaaS immobilière permettant
aux particuliers de vendre leur bien sans agence.

Le produit cible :
- particuliers 40-60 ans
- France
- UX simple et rassurante
- design premium mais accessible

---

# Stack technique

- Next.js 16 App Router
- React 19
- TypeScript strict
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Supabase SSR
- Stripe
- Qonto

---

# UI / UX

Style :
- minimal premium
- inspiré Stripe + Linear + Framer
- beaucoup d’espace blanc
- animations discrètes
- responsive mobile-first

Palette :
- Primary: #0F4C75
- Accent: #0EA5E9
- Background: #F8FAFC
- Text: #0F172A

Typography :
- Geist

Cards :
- rounded-xl
- shadow-sm
- border subtle

---

# Architecture

Toujours respecter :

- src/app
- src/components
- src/components/ui
- src/components/sections
- src/lib
- src/hooks
- src/types

Créer des composants réutilisables.

Server Components par défaut.

Client Components uniquement si nécessaire.

---

# Qualité de code

Toujours :
- TypeScript strict
- ESLint clean
- aucune erreur build
- composants découplés
- props typées
- accessibilité AA

Ne jamais :
- utiliser any
- dupliquer les composants
- hardcoder les couleurs
- mélanger logique métier et UI

---

# Sécurité

- jamais de clés secrètes côté client
- Supabase service_role uniquement serveur
- validation zod
- sanitize inputs
- RLS obligatoire

---

# SEO

Toujours :
- metadata API Next.js
- schema.org
- sitemap.xml
- robots.txt
- llms.txt

---

# Supabase

Utiliser :
- @supabase/ssr
- cookies SSR
- RLS policies

Ne jamais utiliser :
- localStorage auth custom
- service_role côté client

---

# Design system

Toujours réutiliser :
- Button
- Card
- Badge
- Input
- Modal
- Tabs

Ne jamais recréer des variantes inutiles.

---

# Animations

Utiliser Framer Motion.

Animations :
- douces
- rapides
- discrètes
- durée max 0.4s

Éviter :
- animations agressives
- parallax excessif

---

# Pages importantes

Landing :
- premium
- très rassurante
- CTA visibles

Dashboard :
- clair
- orienté progression
- UX simple

Admin :
- dense mais lisible

---

# Workflow

Toujours :
1. analyser le contexte
2. proposer une architecture propre
3. coder
4. vérifier TypeScript
5. vérifier responsive
6. vérifier accessibilité
