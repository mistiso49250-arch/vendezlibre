CAHIER DES CHARGES
VendezLibre
Plateforme SaaS d'accompagnement à la vente immobilière
1. PRÉSENTATION DU PROJET
Nom	VendezLibre
Type	SaaS B2C — plateforme vente immobilière entre particuliers
Positionnement	Alternative aux agences immobilières traditionnelles
Proposition de valeur	Vendre son bien sans agence à 299€ au lieu de 15 000€
Cible	Particuliers vendeurs/acheteurs, 40-60 ans, France
Zone prioritaire	Anjou, Saumur, Maine-et-Loire
Co-fondateur 1	Michael Darcos — 07 62 26 96 98 — mdarcos.axo@gmail.com
Co-fondateur 2	Gilles Ferment — 06 17 50 86 49 — gferment.axo@gmail.com
Contact public	contact@vendezlibre.fr
Domaine cible	vendezlibre.fr
Hébergement	O2switch (France — Clermont-Ferrand)
2. STACK TECHNIQUE
Technologie	Détail
Frontend	Next.js 16, React 19, TypeScript 5
Styling	Tailwind CSS v4
Animations	Framer Motion
Icônes	Lucide React
Base de données	Supabase (PostgreSQL + Auth + Storage)
Authentification	Supabase Auth (SSR avec @supabase/ssr)
Paiement	Stripe (à intégrer)
Facturation	Qonto (à intégrer)
Hébergement	O2switch / Vercel
Photos IA	HOQI API (hoqi.app) — à intégrer
3. CHARTE GRAPHIQUE
Élément	Valeur
Couleur principale	#0F4C75 (bleu pétrole)
Couleur accent/CTA	#0EA5E9 (teal/cyan)
Fond global	#F8FAFC (blanc légèrement chaud)
Fond cartes	#FFFFFF
Texte principal	#0F172A
Texte secondaire	#475569
Bordures	#CBD5E1
Succès/économies	#0F766E
Erreur	#DC2626
Typographie	Geist (Next.js natif)
Border radius cartes	rounded-xl (12px)
Logo	"Vendez" en #0F4C75 + "Libre" en #0EA5E9, typographique
4. ARCHITECTURE BASE DE DONNÉES (Supabase)
Tables
profiles
Description	Profils utilisateurs (extension auth.users)
Colonnes	id, email, full_name, phone, role (seller/broker/admin), created_at, updated_at
projects
Description	Projets de vente immobilière
Colonnes	id, user_id, title, address, city, postal_code, property_type, surface, price_estimated, price_final, status, viability_score, dpe_rating, description
checklist_items
Description	Checklist par projet
Colonnes	id, project_id, title, category, completed, completed_at, order_index
photos
Description	Photos des biens
Colonnes	id, user_id, project_id, url_original, url_enhanced, room_type, status (pending/processing/enhanced/published)
financing
Description	Suivi financement acheteurs
Colonnes	id, project_id, buyer_name, broker_id, status, loan_amount, bank_name, appointment_date, call_deadline, notes
payments
Description	Paiements Stripe
Colonnes	id, user_id, project_id, stripe_payment_id, amount, currency, status, product_type
site_sections
Description	CMS — sections du site
Colonnes	id, key, title, subtitle, body, cta_label, cta_url, is_active
section_assets
Description	CMS — assets/médias
Colonnes	id, section_key, asset_type, label, file_path, alt_text, sort_order, is_active
app_settings
Description	CMS — paramètres applicatifs
Colonnes	id, key, value, value_type, description, is_sensitive

Buckets Storage
Bucket	Usage
site-media	Assets CMS landing page (public)
photos	Photos clients (privé, accès signé)

RLS (Row Level Security)
•	Chaque vendeur voit uniquement ses propres données
•	Les courtiers voient tous les projets actifs
•	Les admins ont accès total à toutes les tables
•	Les clés sensibles (API IA) uniquement via route API serveur
5. AUTHENTIFICATION
Provider	Supabase Auth
Méthode	Email + mot de passe
Persistance	Cookies SSR (@supabase/ssr), storageKey: vendezlibre-auth
Middleware	proxy.ts (Next.js 16)
Rôles	admin → /admin | broker → /broker | seller → /dashboard
Mot de passe ANSSI	12 chars min + majuscule + minuscule + chiffre + spécial
Routes protégées	/dashboard, /onboarding, /broker, /admin
AuthProvider	Contexte global avec onAuthStateChange, persistSession: true
6. STRUCTURE DES PAGES
Pages publiques
•	/ — Landing page principale
•	/vendre-sans-agence — Page SEO guide complet (~850 mots)
•	/estimation-immobiliere — Page SEO estimation (~700 mots)
•	/checklist-vente-maison — Page SEO checklist (50 étapes)
•	/login — Connexion
•	/signup — Inscription
•	/mentions-legales — Mentions légales
•	/politique-confidentialite — Politique RGPD
•	/cgv — Conditions générales de vente
•	/sitemap.xml — Sitemap dynamique
•	/robots.txt — Robots
Espace vendeur
•	onboarding — Parcours de création de projet (multi-étapes)
•	/onboarding/result — Score de viabilité + CTA paywall 299€
•	/dashboard — Tableau de bord vendeur (5 onglets)
•	/payment — Page de paiement Stripe
Back-office courtier
•	/broker — Dashboard courtier (onglets : Dashboard, Dossiers, Studio, Messages, Alertes SLA)
Back-office admin
•	/admin — Dashboard admin global
•	/admin/content — CMS (Contenus, Comparatif, Médias, Paramètres IA)
•	/admin/photos — Studio photos (4 statuts)
•	/admin/dossiers/[userId] — Dossier détail vendeur
API Routes
•	/api/admin/settings — GET/PATCH settings sensibles (admin only, server-side)
•	/api/test-supabase — Test connexion (dev uniquement)
7. LANDING PAGE — SECTIONS
Fichier : src/app/page.tsx — Composants dans src/components/sections/
Navbar
•	Flottante, bg-white/90 backdrop-blur, border #CBD5E1
•	Logo VendezLibre bicolore (#0F4C75 + #0EA5E9)
•	Liens : Comment ça marche, Fonctionnalités, Comparatif, Conseillers
•	CTA : Démarrer gratuitement (bg-[#0EA5E9])
•	Icône connexion UserCircle → /login
Hero (2 colonnes desktop)
Colonne gauche :
•	Badge économie moyenne : 14 701€
•	H1 : Vendez votre bien. Sans commission.
•	Sous-titre avec mention 299€ au lieu de 15 000€
•	CTA principal Démarrer ma vente + CTA secondaire
•	Stats : 2 500+ vendeurs, 94% satisfaits, 38j délai moyen
Colonne droite :
•	Carte glassmorphique widget prix
•	Agence ~15 000€ barré rouge
•	VendezLibre 299€ en #0F4C75
•	Économie 14 701€ en #0F766E
•	CTA bg-[#0EA5E9]
Comment ça marche
4 étapes avec icônes Lucide, connectées par ligne pointillée :
•	Décrivez votre bien (FileText) — fond #F0F9FF
•	Obtenez votre Score (BarChart3) — fond #F0FDFA
•	Publiez et gérez les visites (Home)
•	Signez en toute sécurité (ShieldCheck)
Bento Grid — Fonctionnalités
6 cartes bg-white shadow-sm border-[#CBD5E1] :
•	Checklist guidée (2/3 large) — accent #0F4C75
•	Score viabilité du projet — accent #0EA5E9
•	Studio photos — accent violet #7C3AED
•	Suivi financement courtier (2/3 large) — accent #0F766E
•	Prix 299€ — accent #0F4C75 (text-5xl visible)
Scroll indicator (entre Bento et Studio)
•	Animation bounce avec texte Découvrez le Studio Photos
Studio Photos
•	Slider avant/après interactif (drag mouse + touch)
•	Images chargées depuis Supabase (section_assets WHERE section_key=studio_photos)
•	Fallback sur placeholders colorés si aucune image uploadée
•	Labels : Photo amateur (gauche) | Après studio (droite)
Comparatif
Données chargées depuis Supabase (site_sections key=comparison_rows, body JSON) :
Critère	Agence classique	VendezLibre	Option
Coût total	~15 000€ (5-7%)	299€	—
Contrôle de la vente	Délégué à l'agent	100% vous décidez	—
Analyse prix marché	Estimatif	Données en temps réel	—
Photos	Option payante	Studio inclus	Home staging
Score viabilité	Indisponible	Inclus	—
Suivi financement	Pas de transparence	Courtier inclus	—
Diagnostiqueur	Non	Mis en relation	—
Annonce	Standard agence	Rédaction optimisée	—
Engagement	12 mois (3 mois irrév.)	Aucun	—
Call stratégique	Non	—	Disponible
Validation prix	Non	—	Disponible
Aide négociation	Partielle	—	Disponible
Analyse offres	Non	—	Disponible

Témoignages
•	3 cartes bg-white shadow-sm avec étoiles, citation, avatar initiales
Section Advisors
•	CACHÉE (className=hidden) — non supprimée, réactivable
CTA Final
•	Fond #0F4C75
•	Prix 299€ en blanc text-7xl
•	Strikethrough ~15 000€ en agence
•	Bouton bg-[#0EA5E9] Démarrer ma vente maintenant
Footer
•	Fond #0F172A
•	Liens légaux : /mentions-legales, /politique-confidentialite, /cgv
•	Copyright © 2026 VendezLibre
8. DASHBOARD VENDEUR (/dashboard)
5 onglets :
•	Hub — checklist guidée par catégorie, progression visuelle
•	Score — score de viabilité sur 100, recommandations
•	Studio Photos — upload photos, statut traitement (pending/processing/enhanced/published)
•	Financement — suivi dossier financement acheteur
•	Acheteurs — pipeline acheteurs (kanban)
9. BACK-OFFICE COURTIER (/broker)
5 onglets :
•	Dashboard — stats globales, alertes SLA
•	Dossiers — liste vendeurs avec score, financement, photos
•	Studio photos — gestion photos en attente
•	Messages — messagerie interne
•	Alertes SLA — délais appel 24h, RDV 48h
10. BACK-OFFICE ADMIN (/admin)
Dashboard global
•	KPIs : CA total, nouveaux vendeurs, dossiers actifs, alertes SLA, messages
•	Alertes SLA en retard avec badge EN RETARD rouge
•	Tableau dossiers vendeurs avec badge RÉEL (vert) / DEMO (gris)
•	Guard UUID : si userId n'est pas UUID v4 valide → Dossier indisponible sans fetch Supabase
Page dossier /admin/dossiers/[userId]
4 onglets :
•	Informations (profil + projet Supabase)
•	Financement
•	Photos
•	Score
Studio Photos (/admin/photos)
4 onglets de statut avec compteurs :
•	En attente (orange) → Télécharger original + bouton Lancer HOQI
•	En traitement (bleu) → Uploader version améliorée
•	Prêtes (violet) → Publier pour [prénom client]
•	Publiées (vert) → Badge Publié chez [client] + date
Gestion du contenu (/admin/content)
4 onglets :
•	Contenus — édition textes/CTA des 5 sections
•	Comparatif — tableau 13 lignes éditables (JSON Supabase)
•	Médias — upload Studio Avant/Après, Hero background, photo conseiller multi
•	Paramètres IA — provider, modèle, clé API (confidentiel), prompt, activation
11. ONBOARDING (/onboarding)
Parcours multi-étapes vendeur :
•	Description du bien (type, surface, adresse Google Places autocomplete)
•	Estimation prix (données DVF)
•	DPE et diagnostics obligatoires
•	Calcul score de viabilité sur 100
•	Page résultat avec score, recommandations, CTA paywall 299€
12. STUDIO PHOTOS — WORKFLOW (Option B)
Étape	Description
1	Vendeur uploade photo → Supabase Storage bucket photos
2	Entrée créée dans table photos (status=pending)
3	Admin voit compteur badge rouge dans navigation
4	Admin télécharge → traite sur HOQI → uploade version améliorée
5	Status → enhanced, vendeur peut voir la photo améliorée
6	Admin publie → status = published

Provider IA cible : HOQI (hoqi.app) — API disponible
Clé API : stockée dans app_settings (is_sensitive=true), accessible uniquement via /api/admin/settings
13. SEO
metadataBase	https://vendezlibre.fr
Title template	%s | VendezLibre
Mot clé principal	vendre sa maison sans agence
Zone locale	Anjou, Saumur, Maine-et-Loire
Schema.org	Organization + WebSite + Service + FAQPage
Sitemap	Dynamique via /sitemap.xml
llms.txt	/public/llms.txt pour citabilité IA (ChatGPT, Perplexity)
14. SÉCURITÉ
•	Headers CSP : X-Frame-Options (DENY), X-Content-Type-Options (nosniff), HSTS, Permissions-Policy
•	Rate limiting : 10 req/min sur /login et /signup (Map en mémoire, src/lib/security.ts)
•	Sanitisation : inputs nettoyés avant insertion (src/lib/security.ts > sanitize())
•	Mot de passe ANSSI : 12 chars min + majuscule + minuscule + chiffre + spécial (isStrongPassword)
•	RLS Supabase : activé sur toutes les tables avec policies par rôle
•	Clés API sensibles : jamais côté client, uniquement routes API serveur
•	RGPD : mentions légales, CGV, politique confidentialité, bandeau cookies (localStorage)
15. PAGES LÉGALES (toutes en noindex)
•	/mentions-legales — Éditeur, hébergeur O2switch, Supabase, Stripe, Qonto
•	/politique-confidentialite — RGPD complet, 5 catégories données, durée 3 ans, CNIL
•	/cgv — 299€ + options, droit rétractation 14j, médiation FEVAD/CMAP, Tribunal Angers
16. PAIEMENT (À INTÉGRER)
Stripe
•	Pack VendezLibre : 299€ (paiement unique)
•	Options séparées : Call stratégique, Validation prix, Aide négociation, Analyse offres, Home staging
•	Webhook Stripe → update table payments (status: succeeded/failed/refunded)
•	3D Secure obligatoire
•	Page /payment avec formulaire Stripe Elements
Qonto
•	Compte pro + facturation automatique
•	Intégration avec Stripe pour réception des fonds
17. DÉPLOIEMENT
Hébergement cible	O2switch (France — Clermont-Ferrand)
Email	contact@vendezlibre.fr (configuré)
NEXT_PUBLIC_SUPABASE_URL	https://[projet].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY	clé anon publique Supabase
STRIPE_SECRET_KEY	sk_live_...
STRIPE_WEBHOOK_SECRET	whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY	pk_live_...
18. ÉTAT ACTUEL DU PROJET
✅ Fait et fonctionnel
•	Landing page complète (toutes sections + scroll indicator + Studio dynamique)
•	Auth Supabase (admin/broker/seller) avec persistance session + AuthProvider global
•	Dashboard vendeur (5 onglets : Hub, Score, Studio, Financement, Acheteurs)
•	Back-office courtier complet
•	Back-office admin avec dossiers cliquables + guard UUID
•	CMS complet (Contenus, Comparatif, Médias, Paramètres IA)
•	Studio Photos workflow complet (4 statuts : pending/processing/enhanced/published)
•	6 tables Supabase avec RLS + 2 buckets Storage
•	Pages légales RGPD (mentions légales, CGV, politique confidentialité)
•	SEO (metadata, schema.org, sitemap, robots, 3 pages dédiées, llms.txt)
•	Sécurité (headers CSP, rate limiting, sanitisation, ANSSI)
•	24 pages générées, 0 erreur TypeScript
⏳ À faire
•	Intégration Stripe + Qonto (paiement 299€ + options)
•	Déploiement O2switch
•	Compte HOQI + intégration API photos
•	Logo final VendezLibre (en cours sur Looka)
•	Vraies photos Studio Avant/Après
•	Vrais profils clients (données de démo actuellement)
