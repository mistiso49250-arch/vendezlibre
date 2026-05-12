CAHIER DES CHARGES
VendezLibre
Plateforme SaaS d'accompagnement Ã  la vente immobiliÃ¨re

1. PRÃ‰SENTATION DU PROJET
   Nom VendezLibre
   Type SaaS B2C â€” plateforme vente immobiliÃ¨re entre particuliers
   Positionnement Alternative aux agences immobiliÃ¨res traditionnelles
   Proposition de valeur Vendre son bien sans agence Ã  299â‚¬ au lieu de 15 000â‚¬
   Cible Particuliers vendeurs/acheteurs, 40-60 ans, France
   Zone prioritaire Anjou, Saumur, Maine-et-Loire
   Co-fondateur 1 Michael Darcos â€” 07 62 26 96 98 â€” mdarcos.axo@gmail.com
   Co-fondateur 2 Gilles Ferment â€” 06 17 50 86 49 â€” gferment.axo@gmail.com
   Contact public contact@vendezlibre.fr
   Domaine cible vendezlibre.fr
   HÃ©bergement O2switch (France â€” Clermont-Ferrand)
2. STACK TECHNIQUE
   Technologie DÃ©tail
   Frontend Next.js 16, React 19, TypeScript 5
   Styling Tailwind CSS v4
   Animations Framer Motion
   IcÃ´nes Lucide React
   Base de donnÃ©es Supabase (PostgreSQL + Auth + Storage)
   Authentification Supabase Auth (SSR avec @supabase/ssr)
   Paiement Stripe (Ã  intÃ©grer)
   Facturation Qonto (Ã  intÃ©grer)
   HÃ©bergement O2switch / Vercel
   Photos IA HOQI API (hoqi.app) â€” Ã  intÃ©grer
3. CHARTE GRAPHIQUE
   Ã‰lÃ©ment Valeur
   Couleur principale #0F4C75 (bleu pÃ©trole)
   Couleur accent/CTA #0EA5E9 (teal/cyan)
   Fond global #F8FAFC (blanc lÃ©gÃ¨rement chaud)
   Fond cartes #FFFFFF
   Texte principal #0F172A
   Texte secondaire #475569
   Bordures #CBD5E1
   SuccÃ¨s/Ã©conomies #0F766E
   Erreur #DC2626
   Typographie Geist (Next.js natif)
   Border radius cartes rounded-xl (12px)
   Logo "Vendez" en #0F4C75 + "Libre" en #0EA5E9, typographique
4. ARCHITECTURE BASE DE DONNÃ‰ES (Supabase)
   Tables
   profiles
   Description Profils utilisateurs (extension auth.users)
   Colonnes id, email, full_name, phone, role (seller/broker/admin), created_at, updated_at
   projects
   Description Projets de vente immobiliÃ¨re
   Colonnes id, user_id, title, address, city, postal_code, property_type, surface, price_estimated, price_final, status, viability_score, dpe_rating, description
   checklist_items
   Description Checklist par projet
   Colonnes id, project_id, title, category, completed, completed_at, order_index
   photos
   Description Photos des biens
   Colonnes id, user_id, project_id, url_original, url_enhanced, room_type, status (pending/processing/enhanced/published)
   financing
   Description Suivi financement acheteurs
   Colonnes id, project_id, buyer_name, broker_id, status, loan_amount, bank_name, appointment_date, call_deadline, notes
   payments
   Description Paiements Stripe
   Colonnes id, user_id, project_id, stripe_payment_id, amount, currency, status, product_type
   site_sections
   Description CMS â€” sections du site
   Colonnes id, key, title, subtitle, body, cta_label, cta_url, is_active
   section_assets
   Description CMS â€” assets/mÃ©dias
   Colonnes id, section_key, asset_type, label, file_path, alt_text, sort_order, is_active
   app_settings
   Description CMS â€” paramÃ¨tres applicatifs
   Colonnes id, key, value, value_type, description, is_sensitive

Buckets Storage
Bucket Usage
site-media Assets CMS landing page (public)
photos Photos clients (privÃ©, accÃ¨s signÃ©)

RLS (Row Level Security)
â€¢ Chaque vendeur voit uniquement ses propres donnÃ©es
â€¢ Les courtiers voient tous les projets actifs
â€¢ Les admins ont accÃ¨s total Ã  toutes les tables
â€¢ Les clÃ©s sensibles (API IA) uniquement via route API serveur 5. AUTHENTIFICATION
Provider Supabase Auth
MÃ©thode Email + mot de passe
Persistance Cookies SSR (@supabase/ssr), storageKey: vendezlibre-auth
Middleware proxy.ts (Next.js 16)
RÃ´les admin â†’ /admin | broker â†’ /broker | seller â†’ /dashboard
Mot de passe ANSSI 12 chars min + majuscule + minuscule + chiffre + spÃ©cial
Routes protÃ©gÃ©es /dashboard, /onboarding, /broker, /admin
AuthProvider Contexte global avec onAuthStateChange, persistSession: true 6. STRUCTURE DES PAGES
Pages publiques
â€¢ / â€” Landing page principale
â€¢ /vendre-sans-agence â€” Page SEO guide complet (~850 mots)
â€¢ /estimation-immobiliere â€” Page SEO estimation (~700 mots)
â€¢ /checklist-vente-maison â€” Page SEO checklist (50 Ã©tapes)
â€¢ /login â€” Connexion
â€¢ /signup â€” Inscription
â€¢ /mentions-legales â€” Mentions lÃ©gales
â€¢ /politique-confidentialite â€” Politique RGPD
â€¢ /cgv â€” Conditions gÃ©nÃ©rales de vente
â€¢ /sitemap.xml â€” Sitemap dynamique
â€¢ /robots.txt â€” Robots
Espace vendeur
â€¢ onboarding â€” Parcours de crÃ©ation de projet (multi-Ã©tapes)
â€¢ /onboarding/result â€” Score de viabilitÃ© + CTA paywall 299â‚¬
â€¢ /dashboard â€” Tableau de bord vendeur (5 onglets)
â€¢ /payment â€” Page de paiement Stripe
Back-office courtier
â€¢ /broker â€” Dashboard courtier (onglets : Dashboard, Dossiers, Studio, Messages, Alertes SLA)
Back-office admin
â€¢ /admin â€” Dashboard admin global
â€¢ /admin/content â€” CMS (Contenus, Comparatif, MÃ©dias, ParamÃ¨tres IA)
â€¢ /admin/photos â€” Studio photos (4 statuts)
â€¢ /admin/dossiers/[userId] â€” Dossier dÃ©tail vendeur
API Routes
â€¢ /api/admin/settings â€” GET/PATCH settings sensibles (admin only, server-side)
â€¢ /api/test-supabase â€” Test connexion (dev uniquement) 7. LANDING PAGE â€” SECTIONS
Fichier : src/app/page.tsx â€” Composants dans src/components/sections/
Navbar
â€¢ Flottante, bg-white/90 backdrop-blur, border #CBD5E1
â€¢ Logo VendezLibre bicolore (#0F4C75 + #0EA5E9)
â€¢ Liens : Comment Ã§a marche, FonctionnalitÃ©s, Comparatif, Conseillers
â€¢ CTA : DÃ©marrer gratuitement (bg-[#0EA5E9])
â€¢ IcÃ´ne connexion UserCircle â†’ /login
Hero (2 colonnes desktop)
Colonne gauche :
â€¢ Badge Ã©conomie moyenne : 14 701â‚¬
â€¢ H1 : Vendez votre bien. Sans commission.
â€¢ Sous-titre avec mention 299â‚¬ au lieu de 15 000â‚¬
â€¢ CTA principal DÃ©marrer ma vente + CTA secondaire
â€¢ Stats : 2 500+ vendeurs, 94% satisfaits, 38j dÃ©lai moyen
Colonne droite :
â€¢ Carte glassmorphique widget prix
â€¢ Agence ~15 000â‚¬ barrÃ© rouge
â€¢ VendezLibre 299â‚¬ en #0F4C75
â€¢ Ã‰conomie 14 701â‚¬ en #0F766E
â€¢ CTA bg-[#0EA5E9]
Comment Ã§a marche
4 Ã©tapes avec icÃ´nes Lucide, connectÃ©es par ligne pointillÃ©e :
â€¢ DÃ©crivez votre bien (FileText) â€” fond #F0F9FF
â€¢ Obtenez votre Score (BarChart3) â€” fond #F0FDFA
â€¢ Publiez et gÃ©rez les visites (Home)
â€¢ Signez en toute sÃ©curitÃ© (ShieldCheck)
Bento Grid â€” FonctionnalitÃ©s
6 cartes bg-white shadow-sm border-[#CBD5E1] :
â€¢ Checklist guidÃ©e (2/3 large) â€” accent #0F4C75
â€¢ Score viabilitÃ© du projet â€” accent #0EA5E9
â€¢ Studio photos â€” accent violet #7C3AED
â€¢ Suivi financement courtier (2/3 large) â€” accent #0F766E
â€¢ Prix 299â‚¬ â€” accent #0F4C75 (text-5xl visible)
Scroll indicator (entre Bento et Studio)
â€¢ Animation bounce avec texte DÃ©couvrez le Studio Photos
Studio Photos
â€¢ Slider avant/aprÃ¨s interactif (drag mouse + touch)
â€¢ Images chargÃ©es depuis Supabase (section_assets WHERE section_key=studio_photos)
â€¢ Fallback sur placeholders colorÃ©s si aucune image uploadÃ©e
â€¢ Labels : Photo amateur (gauche) | AprÃ¨s studio (droite)
Comparatif
DonnÃ©es chargÃ©es depuis Supabase (site_sections key=comparison_rows, body JSON) :
CritÃ¨re Agence classique VendezLibre Option
CoÃ»t total ~15 000â‚¬ (5-7%) 299â‚¬ â€”
ContrÃ´le de la vente DÃ©lÃ©guÃ© Ã  l'agent 100% vous dÃ©cidez â€”
Analyse prix marchÃ© Estimatif DonnÃ©es en temps rÃ©el â€”
Photos Option payante Studio inclus Home staging
Score viabilitÃ© Indisponible Inclus â€”
Suivi financement Pas de transparence Courtier inclus â€”
Diagnostiqueur Non Mis en relation â€”
Annonce Standard agence RÃ©daction optimisÃ©e â€”
Engagement 12 mois (3 mois irrÃ©v.) Aucun â€”
Call stratÃ©gique Non â€” Disponible
Validation prix Non â€” Disponible
Aide nÃ©gociation Partielle â€” Disponible
Analyse offres Non â€” Disponible

TÃ©moignages
â€¢ 3 cartes bg-white shadow-sm avec Ã©toiles, citation, avatar initiales
Section Advisors
â€¢ CACHÃ‰E (className=hidden) â€” non supprimÃ©e, rÃ©activable
CTA Final
â€¢ Fond #0F4C75
â€¢ Prix 299â‚¬ en blanc text-7xl
â€¢ Strikethrough ~15 000â‚¬ en agence
â€¢ Bouton bg-[#0EA5E9] DÃ©marrer ma vente maintenant
Footer
â€¢ Fond #0F172A
â€¢ Liens lÃ©gaux : /mentions-legales, /politique-confidentialite, /cgv
â€¢ Copyright Â© 2026 VendezLibre 8. DASHBOARD VENDEUR (/dashboard)
5 onglets :
â€¢ Hub â€” checklist guidÃ©e par catÃ©gorie, progression visuelle
â€¢ Score â€” score de viabilitÃ© sur 100, recommandations
â€¢ Studio Photos â€” upload photos, statut traitement (pending/processing/enhanced/published)
â€¢ Financement â€” suivi dossier financement acheteur
â€¢ Acheteurs â€” pipeline acheteurs (kanban) 9. BACK-OFFICE COURTIER (/broker)
5 onglets :
â€¢ Dashboard â€” stats globales, alertes SLA
â€¢ Dossiers â€” liste vendeurs avec score, financement, photos
â€¢ Studio photos â€” gestion photos en attente
â€¢ Messages â€” messagerie interne
â€¢ Alertes SLA â€” dÃ©lais appel 24h, RDV 48h 10. BACK-OFFICE ADMIN (/admin)
Dashboard global
â€¢ KPIs : CA total, nouveaux vendeurs, dossiers actifs, alertes SLA, messages
â€¢ Alertes SLA en retard avec badge EN RETARD rouge
â€¢ Tableau dossiers vendeurs avec badge RÃ‰EL (vert) / DEMO (gris)
â€¢ Guard UUID : si userId n'est pas UUID v4 valide â†’ Dossier indisponible sans fetch Supabase
Page dossier /admin/dossiers/[userId]
4 onglets :
â€¢ Informations (profil + projet Supabase)
â€¢ Financement
â€¢ Photos
â€¢ Score
Studio Photos (/admin/photos)
4 onglets de statut avec compteurs :
â€¢ En attente (orange) â†’ TÃ©lÃ©charger original + bouton Lancer HOQI
â€¢ En traitement (bleu) â†’ Uploader version amÃ©liorÃ©e
â€¢ PrÃªtes (violet) â†’ Publier pour [prÃ©nom client]
â€¢ PubliÃ©es (vert) â†’ Badge PubliÃ© chez [client] + date
Gestion du contenu (/admin/content)
4 onglets :
â€¢ Contenus â€” Ã©dition textes/CTA des 5 sections
â€¢ Comparatif â€” tableau 13 lignes Ã©ditables (JSON Supabase)
â€¢ MÃ©dias â€” upload Studio Avant/AprÃ¨s, Hero background, photo conseiller multi
â€¢ ParamÃ¨tres IA â€” provider, modÃ¨le, clÃ© API (confidentiel), prompt, activation 11. ONBOARDING (/onboarding)
Parcours multi-Ã©tapes vendeur :
â€¢ Description du bien (type, surface, adresse Google Places autocomplete)
â€¢ Estimation prix (donnÃ©es DVF)
â€¢ DPE et diagnostics obligatoires
â€¢ Calcul score de viabilitÃ© sur 100
â€¢ Page rÃ©sultat avec score, recommandations, CTA paywall 299â‚¬ 12. STUDIO PHOTOS â€” WORKFLOW (Option B)
Ã‰tape Description
1 Vendeur uploade photo â†’ Supabase Storage bucket photos
2 EntrÃ©e crÃ©Ã©e dans table photos (status=pending)
3 Admin voit compteur badge rouge dans navigation
4 Admin tÃ©lÃ©charge â†’ traite sur HOQI â†’ uploade version amÃ©liorÃ©e
5 Status â†’ enhanced, vendeur peut voir la photo amÃ©liorÃ©e
6 Admin publie â†’ status = published

Provider IA cible : HOQI (hoqi.app) â€” API disponible
ClÃ© API : stockÃ©e dans app*settings (is_sensitive=true), accessible uniquement via /api/admin/settings 13. SEO
metadataBase https://vendezlibre.fr
Title template %s | VendezLibre
Mot clÃ© principal vendre sa maison sans agence
Zone locale Anjou, Saumur, Maine-et-Loire
Schema.org Organization + WebSite + Service + FAQPage
Sitemap Dynamique via /sitemap.xml
llms.txt /public/llms.txt pour citabilitÃ© IA (ChatGPT, Perplexity) 14. SÃ‰CURITÃ‰
â€¢ Headers CSP : X-Frame-Options (DENY), X-Content-Type-Options (nosniff), HSTS, Permissions-Policy
â€¢ Rate limiting : 10 req/min sur /login et /signup (Map en mÃ©moire, src/lib/security.ts)
â€¢ Sanitisation : inputs nettoyÃ©s avant insertion (src/lib/security.ts > sanitize())
â€¢ Mot de passe ANSSI : 12 chars min + majuscule + minuscule + chiffre + spÃ©cial (isStrongPassword)
â€¢ RLS Supabase : activÃ© sur toutes les tables avec policies par rÃ´le
â€¢ ClÃ©s API sensibles : jamais cÃ´tÃ© client, uniquement routes API serveur
â€¢ RGPD : mentions lÃ©gales, CGV, politique confidentialitÃ©, bandeau cookies (localStorage) 15. PAGES LÃ‰GALES (toutes en noindex)
â€¢ /mentions-legales â€” Ã‰diteur, hÃ©bergeur O2switch, Supabase, Stripe, Qonto
â€¢ /politique-confidentialite â€” RGPD complet, 5 catÃ©gories donnÃ©es, durÃ©e 3 ans, CNIL
â€¢ /cgv â€” 299â‚¬ + options, droit rÃ©tractation 14j, mÃ©diation FEVAD/CMAP, Tribunal Angers 16. PAIEMENT (Ã€ INTÃ‰GRER)
Stripe
â€¢ Pack VendezLibre : 299â‚¬ (paiement unique)
â€¢ Options sÃ©parÃ©es : Call stratÃ©gique, Validation prix, Aide nÃ©gociation, Analyse offres, Home staging
â€¢ Webhook Stripe â†’ update table payments (status: succeeded/failed/refunded)
â€¢ 3D Secure obligatoire
â€¢ Page /payment avec formulaire Stripe Elements
Qonto
â€¢ Compte pro + facturation automatique
â€¢ IntÃ©gration avec Stripe pour rÃ©ception des fonds 17. DÃ‰PLOIEMENT
HÃ©bergement cible O2switch (France â€” Clermont-Ferrand)
Email contact@vendezlibre.fr (configurÃ©)
NEXT_PUBLIC_SUPABASE_URL https://[projet].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY clÃ© anon publique Supabase
STRIPE_SECRET_KEY sk_live*...
STRIPE*WEBHOOK_SECRET whsec*...
NEXT*PUBLIC_STRIPE_PUBLISHABLE_KEY pk_live*... 18. Ã‰TAT ACTUEL DU PROJET
âœ… Fait et fonctionnel
â€¢ Landing page complÃ¨te (toutes sections + scroll indicator + Studio dynamique)
â€¢ Auth Supabase (admin/broker/seller) avec persistance session + AuthProvider global
â€¢ Dashboard vendeur (5 onglets : Hub, Score, Studio, Financement, Acheteurs)
â€¢ Back-office courtier complet
â€¢ Back-office admin avec dossiers cliquables + guard UUID
â€¢ CMS complet (Contenus, Comparatif, MÃ©dias, ParamÃ¨tres IA)
â€¢ Studio Photos workflow complet (4 statuts : pending/processing/enhanced/published)
â€¢ 6 tables Supabase avec RLS + 2 buckets Storage
â€¢ Pages lÃ©gales RGPD (mentions lÃ©gales, CGV, politique confidentialitÃ©)
â€¢ SEO (metadata, schema.org, sitemap, robots, 3 pages dÃ©diÃ©es, llms.txt)
â€¢ SÃ©curitÃ© (headers CSP, rate limiting, sanitisation, ANSSI)
â€¢ 24 pages gÃ©nÃ©rÃ©es, 0 erreur TypeScript
â�³ Ã€ faire
â€¢ IntÃ©gration Stripe + Qonto (paiement 299â‚¬ + options)
â€¢ DÃ©ploiement O2switch
â€¢ Compte HOQI + intÃ©gration API photos
â€¢ Logo final VendezLibre (en cours sur Looka)
â€¢ Vraies photos Studio Avant/AprÃ¨s
â€¢ Vrais profils clients (donnÃ©es de dÃ©mo actuellement)
