<template>
  <div class="broken-heart-site font-colmeak overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="{ 'bg-cerise-900/90 backdrop-blur-lg shadow-2xl': scrolled, 'bg-transparent': !scrolled }">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-cerise-400 to-cerise-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">💔</span>
            </div>
            <span class="text-xl font-colmeak-bold text-white">Broken Hearts</span>
          </div>
          
          <!-- Menu -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#accueil" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Accueil</a>
            <a href="#emotions" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Émotions</a>
            <a href="#guerison" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Guérison</a>
            <a href="#contact" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Contact</a>
          </div>
          
          <!-- Menu mobile -->
          <button @click="toggleMobileMenu" class="md:hidden text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Menu mobile dropdown -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-cerise-700/30">
          <div class="flex flex-col gap-4 mt-4">
            <a href="#accueil" @click="toggleMobileMenu" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Accueil</a>
            <a href="#emotions" @click="toggleMobileMenu" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Émotions</a>
            <a href="#guerison" @click="toggleMobileMenu" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Guérison</a>
            <a href="#contact" @click="toggleMobileMenu" class="text-white/80 hover:text-cerise-300 transition-colors duration-300 font-colmeak-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background avec parallax -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-cerise-950 via-cerise-900 to-cerise-800"></div>
        <img src="/broken-heart/darkheart.jpg" alt="Cœur brisé" class="w-full h-full object-cover opacity-30 parallax-bg">
        <div class="absolute inset-0 bg-gradient-to-t from-cerise-950/80 via-transparent to-cerise-900/60"></div>
        <!-- Effet de verre brisé -->
        <div class="absolute inset-0 opacity-20">
          <div class="crack-overlay absolute inset-0"></div>
        </div>
      </div>
      
      <!-- Particules flottantes -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div v-for="i in 30" :key="i" 
             class="absolute particle-tear"
             :style="{ 
               left: Math.random() * 100 + '%', 
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 10 + 's',
               animationDuration: (15 + Math.random() * 10) + 's'
             }">
          <div class="w-1 h-1 bg-cerise-400 rounded-full shadow-lg" :class="[
            i % 3 === 0 ? 'bg-cerise-300' : i % 3 === 1 ? 'bg-cerise-500' : 'bg-white-200'
          ]"></div>
        </div>
        <!-- Particules de lumière d'espoir -->
        <div v-for="i in 5" :key="'light-'+i" 
             class="absolute hope-light"
             :style="{ 
               left: Math.random() * 100 + '%', 
               top: Math.random() * 100 + '%',
               animationDelay: Math.random() * 20 + 's'
             }">
          <div class="w-2 h-2 bg-white-100 rounded-full glow-effect"></div>
        </div>
      </div>
      
      <!-- Contenu principal -->
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div class="hero-content" ref="heroContent">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-colmeak-black mb-8 leading-tight">
            <span class="inline-block animate-fade-in-up text-white drop-shadow-2xl">Quand le</span><br>
            <span class="inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-cerise-300 via-cerise-400 to-cerise-500 bg-clip-text text-transparent">Cœur se Brise</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-cerise-100 mb-12 animate-fade-in-up animation-delay-600 font-colmeak-regular leading-relaxed max-w-2xl mx-auto">
            Un voyage à travers les émotions de la séparation, vers la guérison et la renaissance de soi
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-900">
            <button @click="scrollToSection('emotions')" class="px-8 py-4 bg-gradient-to-r from-cerise-500 to-cerise-600 text-white rounded-full font-colmeak-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-cerise-500/40 transition-all duration-300">
              Explorer les Émotions
            </button>
            <button @click="scrollToSection('guerison')" class="px-8 py-4 border-2 border-cerise-400 text-cerise-300 rounded-full font-colmeak-semibold text-lg hover:bg-cerise-400 hover:text-white transition-all duration-300">
              Chemin de Guérison
            </button>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-cerise-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Section Émotions -->
    <section id="emotions" class="py-24 bg-gradient-to-br from-cerise-900 via-cerise-800 to-cerise-900 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" ref="emotionsTitle">
          <h2 class="text-4xl md:text-6xl font-colmeak-black text-white mb-6">
            Les <span class="bg-gradient-to-r from-cerise-300 to-cerise-400 bg-clip-text text-transparent">Émotions</span>
          </h2>
          <p class="text-xl text-cerise-200 max-w-2xl mx-auto font-colmeak-regular">
            Chaque séparation nous fait traverser un océan d'émotions. Il est important de les reconnaître et de les accepter.
          </p>
        </div>
        
        <!-- Grille d'émotions -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Carte Chagrin -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([50, 25, 50])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/b-heart.jpg" alt="Chagrin" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">Le Chagrin</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Cette douleur profonde qui nous submerge. Le chagrin est naturel et nécessaire pour guérir.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
          
          <!-- Carte Colère -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([100, 20, 100, 20, 100])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/broken.png" alt="Colère" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">La Colère</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Cette flamme qui nous consume. La colère fait partie du processus, elle nous aide à nous reconstruire.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
          
          <!-- Carte Nostalgie -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([200, 100, 200])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/duo.jpg" alt="Nostalgie" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">La Nostalgie</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Ces souvenirs qui nous hantent. La nostalgie nous rappelle ce qui était beau, même dans la douleur.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
          
          <!-- Carte Solitude -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([300, 150, 300])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/no-love.jpg" alt="Solitude" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l1 2h8l-7 5 3 7-5-4-5 4 3-7-7-5h8z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">La Solitude</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Ce vide qui nous entoure. La solitude nous apprend à nous retrouver avec nous-mêmes.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
          
          <!-- Carte Désespoir -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([50, 100, 50, 100, 50])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/bkh.jpg" alt="Désespoir" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">Le Désespoir</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Cette obscurité qui semble éternelle. Le désespoir précède souvent une renaissance.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
          
          <!-- Carte Espoir -->
          <div class="emotion-card bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cerise-500/20 group cursor-pointer" 
               ref="emotionCards"
               @mouseenter="onCardHover"
               @mouseleave="onCardLeave"
               @click="emotionalVibration([150, 50, 150, 50, 150])">
            <div class="mb-6 overflow-hidden rounded-xl relative group">
              <img src="/broken-heart/heart.jpg" alt="Espoir" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-cerise-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4 text-cerise-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7l3-3 3 3h-2v4h-2v-4zm1-9C6.11 2 2.6 5.07 2.18 9.11c-.15 1.43.27 2.85 1.25 3.83C4.24 13.76 5 14.36 5 15.28V20h14v-4.72c0-.92.76-1.52 1.57-2.34.98-.98 1.4-2.4 1.25-3.83C21.4 5.07 17.89 2 14 2h-4z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4 group-hover:text-cerise-200 transition-colors duration-300">L'Espoir</h3>
            <p class="text-cerise-100 leading-relaxed font-colmeak-regular group-hover:text-white transition-colors duration-300">
              Cette lueur qui renaît. L'espoir nous guide vers un nouveau chapitre de notre vie.
            </p>
            <div class="mt-4 h-1 w-0 bg-gradient-to-r from-cerise-400 to-cerise-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Interactive - Citation -->
    <section class="py-24 bg-gradient-to-r from-cerise-950 to-cerise-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <img src="/broken-heart/pixel.jpg" alt="Background" class="w-full h-full object-cover">
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto" ref="quoteSection">
          <div class="mb-8">
            <svg class="w-16 h-16 text-cerise-400 mx-auto opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          
          <blockquote class="text-3xl md:text-4xl font-colmeak-regular text-cerise-100 mb-8 leading-relaxed italic">
            "La douleur d'une séparation n'est que le prix que nous payons pour avoir aimé profondément."
          </blockquote>
          
          <p class="text-cerise-300 text-xl font-colmeak-medium">- Anonyme</p>
        </div>
      </div>
    </section>

    <!-- Section Guérison -->
    <section id="guerison" class="py-24 bg-gradient-to-br from-cerise-900 to-cerise-800 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" ref="healingTitle">
          <h2 class="text-4xl md:text-6xl font-colmeak-black text-white mb-6">
            Le Chemin de la <span class="bg-gradient-to-r from-cerise-300 to-cerise-400 bg-clip-text text-transparent">Guérison</span>
          </h2>
          <p class="text-xl text-cerise-200 max-w-2xl mx-auto font-colmeak-regular">
            La guérison n'est pas linéaire. C'est un voyage fait de hauts et de bas, mais chaque étape nous rapproche de la lumière.
          </p>
        </div>
        
        <!-- Timeline de guérison -->
        <div class="max-w-4xl mx-auto">
          <div class="space-y-12">
            <!-- Étape 1 -->
            <div class="flex items-center gap-8 healing-step" ref="healingSteps">
              <div class="flex-1 text-right">
                <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4">Acceptation</h3>
                <p class="text-cerise-100 font-colmeak-regular">
                  Accepter la réalité de la séparation est le premier pas vers la guérison. Il faut du courage pour faire face à cette nouvelle réalité.
                </p>
              </div>
              <div class="w-24 h-24 bg-gradient-to-br from-cerise-500 to-cerise-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-cerise-300">
                <span class="text-white text-2xl">1</span>
              </div>
              <div class="flex-1">
                <img src="/broken-heart/hand.jpg" alt="Acceptation" class="w-full h-32 object-cover rounded-xl">
              </div>
            </div>
            
            <!-- Étape 2 -->
            <div class="flex items-center gap-8 healing-step" ref="healingSteps">
              <div class="flex-1">
                <img src="/broken-heart/ln.jpg" alt="Introspection" class="w-full h-32 object-cover rounded-xl">
              </div>
              <div class="w-24 h-24 bg-gradient-to-br from-cerise-500 to-cerise-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-cerise-300">
                <span class="text-white text-2xl">2</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4">Introspection</h3>
                <p class="text-cerise-100 font-colmeak-regular">
                  Prendre du temps pour soi, réfléchir sur ce qui s'est passé et apprendre de cette expérience pour grandir.
                </p>
              </div>
            </div>
            
            <!-- Étape 3 -->
            <div class="flex items-center gap-8 healing-step" ref="healingSteps">
              <div class="flex-1 text-right">
                <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4">Reconstruction</h3>
                <p class="text-cerise-100 font-colmeak-regular">
                  Reconstruire sa vie, ses habitudes, ses relations. C'est le moment de redécouvrir qui on est vraiment.
                </p>
              </div>
              <div class="w-24 h-24 bg-gradient-to-br from-cerise-500 to-cerise-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-cerise-300">
                <span class="text-white text-2xl">3</span>
              </div>
              <div class="flex-1">
                <img src="/broken-heart/nl.jpg" alt="Reconstruction" class="w-full h-32 object-cover rounded-xl">
              </div>
            </div>
            
            <!-- Étape 4 -->
            <div class="flex items-center gap-8 healing-step" ref="healingSteps">
              <div class="flex-1">
                <img src="/broken-heart/ace.jpg" alt="Renaissance" class="w-full h-32 object-cover rounded-xl">
              </div>
              <div class="w-24 h-24 bg-gradient-to-br from-cerise-500 to-cerise-600 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-cerise-300">
                <span class="text-white text-2xl">4</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-colmeak-bold text-cerise-300 mb-4">Renaissance</h3>
                <p class="text-cerise-100 font-colmeak-regular">
                  Émerger plus fort, plus sage, et prêt à écrire un nouveau chapitre de sa vie avec confiance et espoir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact/Support -->
    <section id="contact" class="py-24 bg-gradient-to-br from-cerise-950 via-cerise-900 to-cerise-950 relative">
      <div class="absolute inset-0 opacity-10">
        <img src="/broken-heart/bh.jpg" alt="Background" class="w-full h-full object-cover">
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16" ref="supportTitle">
          <h2 class="text-4xl md:text-6xl font-colmeak-black text-white mb-6">
            Vous n'êtes pas <span class="bg-gradient-to-r from-cerise-300 to-cerise-400 bg-clip-text text-transparent">Seul(e)</span>
          </h2>
          <p class="text-xl text-cerise-200 max-w-2xl mx-auto font-colmeak-regular">
            Si vous traversez une période difficile, n'hésitez pas à chercher du soutien. La guérison est plus facile quand on est accompagné.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- Support professionnel -->
          <div class="text-center p-8 bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl hover:scale-105 transition-all duration-300" ref="supportCards">
            <div class="w-16 h-16 bg-gradient-to-br from-cerise-400 to-cerise-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-colmeak-bold text-cerise-300 mb-4">Support Professionnel</h3>
            <p class="text-cerise-100 font-colmeak-regular">Thérapeutes spécialisés dans les relations et la séparation</p>
          </div>
          
          <!-- Groupes de soutien -->
          <div class="text-center p-8 bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl hover:scale-105 transition-all duration-300" ref="supportCards">
            <div class="w-16 h-16 bg-gradient-to-br from-cerise-400 to-cerise-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-colmeak-bold text-cerise-300 mb-4">Groupes de Soutien</h3>
            <p class="text-cerise-100 font-colmeak-regular">Partagez votre expérience avec d'autres personnes qui comprennent</p>
          </div>
          
          <!-- Ressources -->
          <div class="text-center p-8 bg-cerise-800/30 backdrop-blur-sm border border-cerise-600/30 rounded-2xl hover:scale-105 transition-all duration-300" ref="supportCards">
            <div class="w-16 h-16 bg-gradient-to-br from-cerise-400 to-cerise-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-colmeak-bold text-cerise-300 mb-4">Ressources</h3>
            <p class="text-cerise-100 font-colmeak-regular">Livres, articles et outils pour vous accompagner</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-cerise-950 border-t border-cerise-800/30">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-cerise-400 to-cerise-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-xl">💔</span>
            </div>
            <span class="text-2xl font-colmeak-bold text-white">Broken Hearts</span>
          </div>
          
          <p class="text-cerise-300 mb-6 font-colmeak-regular">
            Un espace de compréhension et de guérison pour tous ceux qui traversent une séparation.
          </p>
          
          <div class="flex justify-center gap-6 mb-8">
            <a href="#" class="text-cerise-400 hover:text-cerise-300 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-cerise-400 hover:text-cerise-300 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-cerise-400 hover:text-cerise-300 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.956 1.404-5.956s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.whom-1.199 0-.85-.654-1.199-1.199C7.334 17.334 6 14.498 6 11.62 6 5.21 10.114 0 16.017 0c1.8.002 3.465.37 4.94.943-.226 2.005-.693 3.939-1.358 5.8-.664 1.861-1.524 3.654-2.565 5.35z"/>
              </svg>
            </a>
          </div>
          
          <p class="text-cerise-500 text-sm font-colmeak-regular">
            © 2025 Broken Hearts. Fait avec 💔 et espoir pour la guérison.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'BrokenHeart',
  setup() {
    // Variables réactives
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)
    
    // Refs pour les éléments DOM
    const heroContent = ref(null)
    const emotionsTitle = ref(null)
    const emotionCards = ref([])
    const quoteSection = ref(null)
    const healingTitle = ref(null)
    const healingSteps = ref([])
    const supportTitle = ref(null)
    const supportCards = ref([])

    // Gestion du scroll
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }

    // Toggle menu mobile
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    // Scroll vers une section
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      mobileMenuOpen.value = false
    }
    
    // Effet de vibration émotionnelle (si supporté)
    const emotionalVibration = (pattern = [100, 50, 100]) => {
      if ('vibrate' in navigator) {
        navigator.vibrate(pattern)
      }
    }
    
    // Effet visuel sur interaction avec les cartes
    const onCardHover = (event) => {
      const card = event.currentTarget
      gsap.to(card, {
        scale: 1.05,
        rotationY: 5,
        z: 50,
        duration: 0.3,
        ease: 'power2.out'
      })
      
      // Effet de particules sur hover
      createEmotionalParticles(card)
    }
    
    const onCardLeave = (event) => {
      const card = event.currentTarget
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
    
    // Création de particules émotionnelles
    const createEmotionalParticles = (element) => {
      const rect = element.getBoundingClientRect()
      const particles = []
      
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div')
        particle.className = 'emotional-particle fixed pointer-events-none z-50'
        particle.style.cssText = `
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #ff68a1, #fd0088);
          border-radius: 50%;
          left: ${rect.left + rect.width / 2}px;
          top: ${rect.top + rect.height / 2}px;
        `
        document.body.appendChild(particle)
        particles.push(particle)
        
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          opacity: 0,
          scale: 0,
          duration: 1.5,
          ease: 'power2.out',
          onComplete: () => {
            document.body.removeChild(particle)
          }
        })
      }
    }

    // Animations GSAP
    const initAnimations = () => {
      // Animation du hero au chargement avec effet de cœur brisé
      gsap.timeline()
        .fromTo('.animate-fade-in-up', 
          { opacity: 0, y: 50, scale: 0.8 }, 
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1.2, 
            stagger: 0.3,
            ease: 'back.out(1.7)'
          }
        )
        .fromTo('.hero h1 span', 
          { filter: 'blur(10px)', rotateX: 90 },
          { 
            filter: 'blur(0px)', 
            rotateX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          }, '-=0.5'
        )

      // Animation parallax du background
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // Animation du titre des émotions
      if (emotionsTitle.value) {
        gsap.fromTo(emotionsTitle.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: emotionsTitle.value,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animation des cartes d'émotions avec effet de révélation émotionnelle
      emotionCards.value.forEach((card, index) => {
        // Animation d'entrée
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9, rotationY: 45 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1,
            delay: index * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          }
        )
        
        // Effet de pulsation émotionnelle
        gsap.to(card, {
          scale: 1.02,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          delay: index * 0.5
        })
      })

      // Animation de la section citation
      if (quoteSection.value) {
        gsap.fromTo(quoteSection.value,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: quoteSection.value,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animation du titre de guérison
      if (healingTitle.value) {
        gsap.fromTo(healingTitle.value,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: healingTitle.value,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animation des étapes de guérison
      healingSteps.value.forEach((step, index) => {
        const isEven = index % 2 === 0
        gsap.fromTo(step,
          { opacity: 0, x: isEven ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Animation du support
      if (supportTitle.value) {
        gsap.fromTo(supportTitle.value,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: supportTitle.value,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      supportCards.value.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, rotateY: 45 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Animation des particules larmes qui tombent
      gsap.to('.particle-tear', {
        y: '+=200px',
        opacity: 0,
        duration: 8,
        repeat: -1,
        ease: 'power1.in',
        stagger: {
          amount: 5,
          from: 'random'
        }
      })
      
      // Animation des particules d'espoir qui montent
      gsap.to('.hope-light', {
        y: '-=300px',
        opacity: 0.8,
        scale: 1.5,
        duration: 12,
        repeat: -1,
        ease: 'power2.out',
        stagger: 2
      })
      
      // Animation des particules flottantes
      gsap.to('.animate-float', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.2
      })
    }

    // Lifecycle hooks
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      nextTick(() => {
        initAnimations()
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })

    return {
      scrolled,
      mobileMenuOpen,
      heroContent,
      emotionsTitle,
      emotionCards,
      quoteSection,
      healingTitle,
      healingSteps,
      supportTitle,
      supportCards,
      toggleMobileMenu,
      scrollToSection,
      onCardHover,
      onCardLeave,
      emotionalVibration
    }
  }
}
</script>

<style scoped>
/* Animations personnalisées */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  animation-fill-mode: both;
}

.animation-delay-900 {
  animation-delay: 0.9s;
  animation-fill-mode: both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Transitions fluides */
* {
  transition: all 0.3s ease;
}

/* Hover effects */
.emotion-card:hover {
  transform: translateY(-5px);
}

.healing-step:hover {
  transform: scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .healing-step {
    flex-direction: column;
    text-align: center;
  }
  
  .healing-step .flex-1:first-child {
    order: 2;
  }
  
  .healing-step .w-24 {
    order: 1;
    margin: 1rem 0;
  }
  
  .healing-step .flex-1:last-child {
    order: 3;
  }
}

/* Effet glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2b0012;
}

::-webkit-scrollbar-thumb {
  background: #fd0088;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d1006f;
}

/* Effet de verre brisé */
.crack-overlay {
  background-image: 
    linear-gradient(45deg, transparent 40%, rgba(253, 0, 136, 0.1) 42%, transparent 44%),
    linear-gradient(-45deg, transparent 40%, rgba(253, 0, 136, 0.1) 42%, transparent 44%),
    linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.05) 42%, transparent 44%);
  background-size: 200px 200px, 150px 150px, 100px 100px;
  animation: crack-shift 20s infinite linear;
}

@keyframes crack-shift {
  0% { background-position: 0 0, 0 0, 0 0; }
  100% { background-position: 200px 200px, -150px 150px, 100px -100px; }
}

/* Effet de larme qui tombe */
.particle-tear {
  animation: tear-fall 15s infinite linear;
}

@keyframes tear-fall {
  0% { 
    transform: translateY(-10px) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.3;
  }
  100% { 
    transform: translateY(100vh) scale(0.2);
    opacity: 0;
  }
}

/* Particules d'espoir qui montent */
.hope-light {
  animation: hope-rise 20s infinite ease-out;
}

@keyframes hope-rise {
  0% { 
    transform: translateY(50px) scale(0.5);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.6;
  }
  100% { 
    transform: translateY(-200px) scale(1.5);
    opacity: 0;
  }
}

/* Effet de lueur pour l'espoir */
.glow-effect {
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
  animation: pulse-glow 3s infinite ease-in-out;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 0 5px rgba(255, 255, 255, 0.3),
      0 0 10px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 
      0 0 20px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 40px rgba(255, 255, 255, 0.2);
  }
}

/* Glow effect for buttons */
.btn-glow {
  box-shadow: 0 0 20px rgba(253, 0, 136, 0.3);
}

/* Text selection */
::selection {
  background-color: #fd0088;
  color: white;
}
</style>
