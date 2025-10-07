# 🛠️ Documentation Technique - ImmerSia & Broken Hearts

## 🏗️ Architecture des Sites

### Structure Modulaire

```
src/
├── pages/
│   ├── Immersive.vue           # Site 1: Canvas + GSAP + ScrollTrigger
│   ├── Broken-Heart.vue        # Site 2: Émotions + Particles + Haptique
│   ├── index.vue               # Landing page commune
│   ├── KamDashboard.vue        # (Autres pages)
│   ├── ListeDemandes.vue
│   ├── PublicDashboard.vue
│   └── RgcDashboard.vue
├── router/
│   ├── index.ts                # Configuration Vue Router 4
│   └── routes.ts               # Routes séparées par site
├── assets/
│   ├── base.css                # 3 palettes + animations CSS
│   ├── style.css               # Styles globaux
│   └── logo.svg
└── components/                 # (Vide - composants futurs)
```

## 🎨 Système de Design - Palettes Couleurs

### Palette Blue Ribbon (ImmerSia)

```css
:root {
  --blue-ribbon-50: #eff6ff;
  --blue-ribbon-100: #dbeafe;
  --blue-ribbon-200: #bfdbfe;
  --blue-ribbon-300: #93c5fd;
  --blue-ribbon-400: #60a5fa;
  --blue-ribbon-500: #3b82f6;
  --blue-ribbon-600: #2563eb;
  --blue-ribbon-700: #1d4ed8;
}
```

### Palette White (ImmerSia Complémentaire)

```css
:root {
  --white-50: #fafafa;
  --white-100: #f5f5f5;
  --white-200: #e5e5e5;
  --white-300: #d4d4d4;
  --white-400: #a3a3a3;
  --white-500: #737373;
  --white-600: #525252;
  --white-700: #404040;
  --white-800: #262626;
  --white-900: #171717;
  --white-950: #0a0a0a;
}
```

### Palette Cerise (Broken Hearts)

```css
:root {
  --cerise-50: #fef2f2;
  --cerise-100: #fee2e2;
  --cerise-200: #fecaca;
  --cerise-300: #fca5a5;
  --cerise-400: #f87171;
  --cerise-500: #ef4444;
  --cerise-600: #dc2626;
  --cerise-700: #b91c1c;
  --cerise-800: #991b1b;
  --cerise-900: #7f1d1d;
  --cerise-950: #450a0a;
}
```

## ⚡ Optimisations Performances

### ImmerSia - Canvas Optimisé

```javascript
// Gestion DPR intelligente
const dpr = Math.min(window.devicePixelRatio || 1, 2) // Max 2x pour éviter surcharge

// Chargement par batches
Phase 1: Frame critique (index 0)          → Immédiat
Phase 2: Frames prioritaires (1-100)       → Batch de 20
Phase 3: Frames secondaires (101-300)      → Batch de 25 + délais

// Rendu conditionnel
if (!forceRender && frameIndex === lastFrameRendered) return // Évite re-rendu
```

### Broken Hearts - Particules Optimisées

```javascript
// Système de particules GSAP
const createEmotionalParticles = (element) => {
  const particles = [];

  for (let i = 0; i < 8; i++) {
    // Limité à 8 particules par interaction
    const particle = document.createElement("div");
    // ... configuration

    gsap.to(particle, {
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
      opacity: 0,
      scale: 0,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => document.body.removeChild(particle), // Cleanup automatique
    });
  }
};
```

## 🎮 APIs Avancées Utilisées

### API Vibration (Broken Hearts)

```javascript
const emotionalVibration = (pattern = [100, 50, 100]) => {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
};

// Patterns par émotion :
// Chagrin:    [50, 25, 50]        - Doux et triste
// Colère:     [100, 20, 100, 20, 100] - Rapide et intense
// Nostalgie:  [200, 100, 200]    - Long et profond
// Solitude:   [300, 150, 300]    - Très long
// Désespoir:  [50, 100, 50, 100, 50] - Irrégulier
// Espoir:     [150, 50, 150, 50, 150] - Rythmé et positif
```

### API Canvas (ImmerSia)

```javascript
// Rendu optimisé avec gestion d'erreurs
const renderFrame = (frameIndex, forceRender = false) => {
  try {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calcul aspect ratio ultra précis
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    // Mode Cover pour remplissage complet
    if (imgAspect > canvasAspect) {
      drawHeight = canvasHeight;
      drawWidth = drawHeight * imgAspect;
    } else {
      drawWidth = canvasWidth;
      drawHeight = drawWidth / imgAspect;
    }

    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  } catch (error) {
    drawErrorState(canvasWidth, canvasHeight);
  }
};
```

## 🎭 Animations GSAP Avancées

### ScrollTrigger (ImmerSia)

```javascript
// Animation parallax background
gsap.to(".parallax-bg", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// Canvas scroll-driven
ScrollTrigger.create({
  trigger: canvas,
  start: "top bottom",
  end: "bottom top",
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress;
    const frameIndex = Math.floor(progress * (frameCount - 1));
    renderFrame(frameIndex);
  },
});
```

### Timeline Émotionnelle (Broken Hearts)

```javascript
// Animation d'entrée des cartes
emotionCards.value.forEach((card, index) => {
  gsap.fromTo(
    card,
    { opacity: 0, y: 50, scale: 0.9, rotationY: 45 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 1,
      delay: index * 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Pulsation émotionnelle continue
  gsap.to(card, {
    scale: 1.02,
    duration: 2 + Math.random() * 3,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: index * 0.5,
  });
});
```

## 🔧 Configuration Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-ribbon": {
          /* palette complète */
        },
        white: {
          /* palette complète */
        },
        cerise: {
          /* palette complète */
        },
      },
      fontFamily: {
        "colmeak-light": ["Colmeak-Light"],
        "colmeak-regular": ["Colmeak-Regular"],
        "colmeak-medium": ["Colmeak-Medium"],
        "colmeak-bold": ["Colmeak-Bold"],
        "colmeak-black": ["Colmeak-Black"],
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
        float: "float 3s ease-in-out infinite",
        "tear-fall": "tear-fall 8s ease-in infinite",
        "hope-rise": "hope-rise 12s ease-out infinite",
        "crack-shift": "crack-shift 15s ease-in-out infinite",
      },
    },
  },
};
```

## 🚀 Build & Déploiement

### Commandes Essentielles

```bash
# Développement avec HMR
npm run dev

# Build optimisé production
npm run build
# → Génère dist/ avec assets optimisés

# Preview build local
npm run preview

# Analyse bundle
npm run build -- --analyze
```

### Optimisations Build

```javascript
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap"],
          "vue-router": ["vue-router"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

## 📱 Responsive Design

### Breakpoints Tailwind

```css
sm: 640px   /* Mobile large */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Canvas Responsive (ImmerSia)

```javascript
// Auto-resize avec throttling
window.addEventListener(
  "resize",
  throttle(() => {
    updateCanvasSize();
    renderFrame(lastFrameRendered, true);
  }, 150)
);

const updateCanvasSize = () => {
  const rect = canvas.getBoundingClientRect();
  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
};
```

## 🐛 Debug & Monitoring

### Console Logs Structurés

```javascript
// ImmerSia Canvas
console.log(
  `✅ Canvas initialisé: ${canvas.width}x${canvas.height} (DPR: ${dpr})`
);
console.log(`🖼️ Frame ${frameIndex}/${frameCount} rendue`);

// Broken Hearts Interactions
console.log(`💔 Carte émotion activée: ${emotionType}`);
console.log(`📳 Vibration pattern: [${pattern.join(", ")}]`);
```

### Performance Monitoring

```javascript
// Mesure temps de chargement images
const loadStart = performance.now();
// ... chargement
const loadTime = performance.now() - loadStart;
console.log(`⏱️ Images chargées en ${loadTime.toFixed(2)}ms`);
```

## 🔒 Sécurité & Bonnes Pratiques

### Gestion d'Erreurs

```javascript
// Canvas error handling
try {
  context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
} catch (error) {
  console.warn("⚠️ Erreur rendu frame:", error);
  drawErrorState(canvasWidth, canvasHeight);
}

// API feature detection
if ("vibrate" in navigator) {
  navigator.vibrate(pattern);
}
```

### Cleanup Mémoire

```javascript
// Nettoyage particules
onComplete: () => {
  document.body.removeChild(particle);
};

// Cleanup ScrollTrigger
onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
```

## 📊 Métriques Performance

### Objectifs

- **Canvas FPS:** 60fps constant
- **First Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** < 2MB
- **Image Loading:** Progressive + intelligent

### Monitoring

```javascript
// FPS monitoring
let fps = 0;
let lastTime = performance.now();
const measureFPS = () => {
  const now = performance.now();
  fps = 1000 / (now - lastTime);
  lastTime = now;

  if (fps < 55) console.warn("⚠️ FPS drop detected:", fps);
};
```

---

> 💡 **Note:** Cette architecture permet une évolutivité facile avec ajout de nouveaux sites ou fonctionnalités sans impact sur l'existant.
