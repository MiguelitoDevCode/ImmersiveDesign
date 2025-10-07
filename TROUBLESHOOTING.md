# Guide de résolution des problèmes Tailwind CSS & Vite

## Problèmes résolus

### 1. ⚠️ "No utility classes were detected"

**Cause :** Tailwind ne trouve pas les classes dans vos fichiers source.

**Solutions appliquées :**

- ✅ Configuration étendue du `content` dans `tailwind.config.js`
- ✅ Ajout de chemins spécifiques pour les composants et pages
- ✅ Import correct des fichiers CSS dans `main.js`

### 2. 🖼️ "Assets in public directory cannot be imported"

**Cause :** Mauvaise utilisation des chemins d'assets publics.

**Solutions appliquées :**

- ✅ Correction des chemins de `/public/assets/` vers `/assets/`
- ✅ Mise à jour du fichier `Immersive.vue`

## Configuration finale

### `tailwind.config.js`

```javascript
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  "./src/components/**/*.{vue,js,ts}",
  "./src/pages/**/*.{vue,js,ts}",
  "./public/**/*.html",
];
```

### `main.js`

```javascript
import "./assets/base.css"; // Police Codega + classes personnalisées
import "./assets/style.css"; // Directives Tailwind
```

## Utilisation des assets

### ✅ Correct (assets publics)

```html
<img src="/assets/demo.png" alt="Logo" /> <img src="/eneo.jpg" alt="ENEO" />
```

### ❌ Incorrect

```html
<img src="/public/assets/demo.png" alt="Logo" />
```

## Tests de validation

### Composant de test

Utilisez `TailwindTest.vue` pour vérifier que :

- ✅ Tailwind CSS fonctionne
- ✅ Police Codega est chargée
- ✅ Couleurs ENEO sont disponibles
- ✅ Classes personnalisées fonctionnent

### Commandes de vérification

```bash
# Vérifier la configuration Tailwind
npm run build

# Démarrer en mode développement
npm run dev
```

## Couleurs ENEO personnalisées

```javascript
// tailwind.config.js
colors: {
  'eneo-blue': '#446BA4',
  'eneo-green': '#98BA39',
}
```

**Utilisation :**

```html
<div class="text-eneo-blue bg-eneo-green">Couleurs ENEO</div>
```

## Classes Tailwind + Codega

```html
<!-- Poids de police avec Tailwind -->
<p class="font-light">Codega Light</p>
<p class="font-medium">Codega Medium</p>
<p class="font-bold">Codega Bold</p>

<!-- Classes personnalisées -->
<p class="font-codega-semibold">Codega Semibold explicite</p>
```

## Résolution future

Si le problème "No utility classes" revient :

1. **Vérifier les imports CSS :**

   ```javascript
   // main.js
   import "./assets/base.css";
   import "./assets/style.css";
   ```

2. **Vérifier le contenu de style.css :**

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Redémarrer le serveur :**

   ```bash
   npm run dev
   ```

4. **Nettoyer le cache :**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```
