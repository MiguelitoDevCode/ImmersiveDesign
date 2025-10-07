# Guide d'utilisation de la police Codega

## Configuration

La police Codega a été configurée comme police par défaut de votre projet Vue.js avec Tailwind CSS.

## Utilisation avec Tailwind CSS

### Classes de poids de police (recommandées)

Vous pouvez utiliser les classes Tailwind standard avec la police Codega :

```html
<!-- Léger (300) -->
<h1 class="font-light">Titre léger</h1>

<!-- Normal (400) -->
<p class="font-normal">Texte normal</p>

<!-- Medium (500) -->
<h2 class="font-medium">Titre medium</h2>

<!-- Semi-gras (600) -->
<h3 class="font-semibold">Titre semi-gras</h3>

<!-- Gras (700) -->
<h4 class="font-bold">Titre gras</h4>

<!-- Extra-gras (800) -->
<h5 class="font-extrabold">Titre extra-gras</h5>

<!-- Noir (900) -->
<h6 class="font-black">Titre noir</h6>
```

### Classes personnalisées Codega

Des classes spécifiques ont été créées pour une utilisation explicite de Codega :

```html
<!-- Classes personnalisées -->
<p class="font-codega-light">Texte Codega léger</p>
<p class="font-codega-regular">Texte Codega normal</p>
<p class="font-codega-medium">Texte Codega medium</p>
<p class="font-codega-semibold">Texte Codega semi-gras</p>
<p class="font-codega-bold">Texte Codega gras</p>
<p class="font-codega-extrabold">Texte Codega extra-gras</p>
<p class="font-codega-black">Texte Codega noir</p>
```

### Utilisation avec la classe font-sans

La police Codega est maintenant la police sans-serif par défaut :

```html
<div class="font-sans">Ce texte utilisera Codega</div>
```

### Utilisation avec la classe font-codega

Pour forcer l'utilisation de Codega :

```html
<div class="font-codega">Ce texte utilisera explicitement Codega</div>
```

## Déclinaisons disponibles

- **Light (300)** : Pour les textes fins et élégants
- **Regular (400)** : Pour le texte courant
- **Medium (500)** : Pour les sous-titres
- **Semibold (600)** : Pour les titres secondaires
- **Bold (700)** : Pour les titres principaux
- **Extrabold (800)** : Pour les éléments très proéminents
- **Black (900)** : Pour les titres d'impact maximum

## Exemples d'utilisation dans vos composants

```vue
<template>
  <div>
    <!-- En-tête avec Codega Black -->
    <h1 class="font-black text-3xl text-[#446BA4]">Titre Principal</h1>

    <!-- Sous-titre avec Codega Semibold -->
    <h2 class="font-semibold text-xl text-[#98BA39]">Sous-titre</h2>

    <!-- Texte courant avec Codega Regular -->
    <p class="font-normal text-gray-700">Texte de contenu normal</p>

    <!-- Texte d'accent avec Codega Medium -->
    <span class="font-medium text-[#446BA4]">Texte important</span>
  </div>
</template>
```

## Notes techniques

- La police est chargée depuis Google Fonts
- Toutes les graisses (300-900) sont disponibles
- La police est définie comme fallback système en cas d'échec de chargement
- Compatible avec toutes les classes Tailwind CSS
