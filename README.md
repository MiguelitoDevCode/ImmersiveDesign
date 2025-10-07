# 🎨 ImmerSia, Broken Hearts & Space Walker - Sites Vue.js Distincts

Ce projet contient **trois sites web distincts et indépendants** créés avec Vue.js 3, chacun ayant son propre univers thématique et ses fonctionnalités uniques :

- **ImmerSia** - Expérience immersive professionnelle
- **Broken Hearts** - Accompagnement émotionnel thérapeutique
- **Space Walker** - Aventure d'exploration spatiale cosmique

## 🌟 Sites Disponibles

### ✨ **ImmerSia** - Site Immersif Professionnel

- **Route:** `/immersive` ou `/`
- **Thème:** Expérience immersive avec animations Canvas avancées
- **Palette:** Blue Ribbon & White harmonieusement intégrées
- **Caractéristiques:**
  - 🎬 Canvas animé avec 300 frames
  - ⚡ Animations GSAP avec ScrollTrigger
  - 📱 Design 100% responsive
  - 🎨 Interface professionnelle moderne

### 💔 **Broken Hearts** - Expérience Émotionnelle

- **Route:** `/broken-heart`
- **Thème:** Accompagnement et guérison après une séparation
- **Palette:** Cerise (rose profond) avec nuances émotionnelles
- **Caractéristiques:**
  - 🥀 Animations émotionnelles interactives
  - 💧 Effets de particules et larmes
  - 🎮 Cartes émotions avec vibrations haptiques
  - 🌱 Journey de guérison progressif

### 🚀 **Space Walker** - Exploration Cosmique

- **Route:** `/space-walker`
- **Thème:** Aventure spatiale immersive avec canvas background fixe
- **Palette:** Pink Flamingo (violet-rose cosmique) 11 nuances
- **Caractéristiques:**
  - 🌌 Canvas 200 frames en background permanent
  - � 5 panels cosmiques apparaissant au scroll
  - ⚡ Animations GSAP spatiales avancées
  - 🎯 Expérience scroll immersive longue durée

## �🚀 Technologies Avancées

- **Vue.js 3.5.13** - Composition API avec réactivité optimisée
- **GSAP 3.13.0** - Animations fluides (ScrollTrigger, Timeline, Particles)
- **Tailwind CSS** - 4 palettes de couleurs personnalisées
- **Vite** - Build tool ultra-rapide
- **Police Codega/Colmeak** - Typography professionnelle et émotionnelle

## 🎨 Palettes de Couleurs Personnalisées

### Blue Ribbon (ImmerSia)

```css
blue-ribbon-50: '#eff6ff'
blue-ribbon-100: '#dbeafe'
blue-ribbon-200: '#bfdbfe'
/* ... jusqu'à blue-ribbon-700 */
```

### White (ImmerSia - Complémentaire)

```css
white-50: '#fafafa'
white-100: '#f5f5f5'
/* ... jusqu'à white-950 */
```

### Cerise (Broken Hearts)

```css
cerise-50: '#fef2f2'
cerise-100: '#fee2e2'
/* ... jusqu'à cerise-950 */
```

### Pink Flamingo (Space Walker)

```css
pink-flamingo-50: '#f8edfd'
pink-flamingo-100: '#f1d6fa'
pink-flamingo-200: '#e5b1f6'
/* ... jusqu'à pink-flamingo-950 */
```

## 📦 Installation & Lancement

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 🔗 Navigation Entre les Sites

Les trois sites sont **complètement séparés** et indépendants :

- **Accès ImmerSia:** `http://localhost:5173/` ou `http://localhost:5173/immersive`
- **Accès Broken Hearts:** `http://localhost:5173/broken-heart`
- **Accès Space Walker:** `http://localhost:5173/space-walker`

## 📁 Structure Optimisée

```
src/
├── pages/
│   ├── Immersive.vue      # Site professionnel immersif
│   ├── Broken-Heart.vue   # Site émotionnel de guérison
│   ├── Space-Walker.vue   # Site d'exploration spatiale
│   └── index.vue          # Page d'accueil
├── router/
│   ├── index.ts           # Configuration Vue Router
│   └── routes.ts          # Routes des trois sites
├── assets/
│   ├── base.css          # 4 palettes de couleurs + animations spatiales
│   └── style.css         # Styles globaux
└── components/           # (Futurs composants partagés)
```

## 🎯 Fonctionnalités Avancées

### ImmerSia

- ✅ Canvas responsive avec 300 frames d'animation
- ✅ Chargement intelligent et optimisé des images
- ✅ ScrollTrigger pour animations au scroll
- ✅ Design adaptatif mobile-first
- ✅ Performance 60fps garantie

### Broken Hearts

- ✅ 6 cartes émotions interactives avec hover effects
- ✅ Système de particules GSAP avancé
- ✅ Vibrations haptiques sur mobile (API Vibration)
- ✅ Timeline de guérison animée
- ✅ 13 images thématiques optimisées

### Space Walker

- ✅ Canvas 200 frames en background permanent et fixe
- ✅ 5 panels cosmiques apparaissant tous les ~10 frames au scroll
- ✅ Animations spatiales GSAP (space-pulse, cosmic-rotate, space-float)
- ✅ Palette Pink Flamingo 11 nuances pour ambiance cosmique
- ✅ Expérience scroll immersive longue durée (3000px+)

## 🌐 Déploiement

Compatible avec tous les services d'hébergement modernes :

- **Netlify** ⚡ (Recommandé)
- **Vercel** 🚀
- **GitHub Pages** 📄
- **Firebase Hosting** 🔥

### Configuration Netlify

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Serveur développement (Hot reload)
npm run build        # Build production optimisé
npm run preview      # Aperçu du build local
npm run lint         # Vérification ESLint
```

## 🎮 Interactions Spéciales

### Broken Hearts - Cartes Émotions

- **Hover:** Effet 3D + particules colorées
- **Click:** Vibration haptique + animation spéciale
- **Mobile:** Gestures tactiles optimisées

### ImmerSia - Canvas

- **Scroll:** Animation fluide des 300 frames
- **Responsive:** Adaptation automatique DPR
- **Performance:** Chargement intelligent par batches

### Space Walker - Canvas Spatial

- **Background Fixed:** 200 frames cosmiques en boucle continue
- **Scroll Panels:** 5 sections apparaissant progressivement au scroll
- **Animations:** Pulse cosmique, rotation spatiale, flottement astral
- **Performance:** Optimisation GPU pour rendu spatial fluide

## 🚨 Important - Sites Distincts

⚠️ **Ces trois sites sont indépendants et ne partagent aucun lien de navigation croisée.**

Chaque site a été conçu comme une expérience complète et autonome :

- **ImmerSia :** Focus business et professionalisme
- **Broken Hearts :** Focus émotionnel et thérapeutique
- **Space Walker :** Focus aventure spatiale et exploration cosmique

## 📄 Licence & Crédits

- **MIT License** pour le code source
- **Police Colmeak** - Typography premium
- **Images broken-heart/** - Collection thématique sous licence
- **Créé avec 💙 et 💔** par l'équipe ImmerSia

---

> 🎯 **Objectif :** Démontrer la versatilité de Vue.js 3 dans la création d'expériences web distinctes mais techniquement excellentes.
