<template>
  <div class="space-walker-site font-codega overflow-hidden relative">
    <!-- Canvas Background Fixe -->
    <canvas 
      ref="spaceCanvas"
      class="fixed inset-0 w-full h-full z-0"
      style="pointer-events: none;"
    ></canvas>

    <!-- Navigation Spatiale -->
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out"
      :class="{ 
        'transform -translate-y-full opacity-0': scrolled, 
        'transform translate-y-0 opacity-100': !scrolled 
      }"
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo Spatial -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 rounded-full flex items-center justify-center relative">
              <span class="text-white font-bold text-xl">🚀</span>
              <div class="absolute inset-0 rounded-full bg-pink-flamingo-400 opacity-30 animate-ping"></div>
            </div>
            <span class="text-2xl font-codega-bold text-white drop-shadow-lg">Space Walker</span>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#cosmos" class="nav-link font-codega-medium text-pink-flamingo-100 hover:text-pink-flamingo-300 transition-colors duration-300">
              🌌 Cosmos
            </a>
            <a href="#exploration" class="nav-link font-codega-medium text-pink-flamingo-100 hover:text-pink-flamingo-300 transition-colors duration-300">
              🛸 Exploration
            </a>
            <a href="#discovery" class="nav-link font-codega-medium text-pink-flamingo-100 hover:text-pink-flamingo-300 transition-colors duration-300">
              🌟 Découverte
            </a>
          </div>

          <!-- Mobile Menu -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-pink-flamingo-100 hover:text-pink-flamingo-300 transition-colors duration-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section avec Canvas -->
    <section class="relative min-h-screen flex items-center justify-center z-10">
      <div class="text-center px-6 max-w-4xl mx-auto">
        <div class="hero-content" ref="heroContent">
          <!-- Titre Principal avec effet spatial -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-codega-black mb-6 leading-tight">
            <span class="block bg-gradient-to-r from-pink-flamingo-200 via-pink-flamingo-400 to-pink-flamingo-600 bg-clip-text text-transparent animate-pulse">
              Space Walker
            </span>
            <span class="block text-2xl md:text-3xl lg:text-4xl font-codega-regular text-pink-flamingo-100 mt-4 opacity-90">
              Explorez l'Infini Cosmique
            </span>
          </h1>
          
          <!-- Description -->
          <p class="text-lg md:text-xl text-pink-flamingo-200 mb-8 font-codega-regular max-w-2xl mx-auto leading-relaxed">
            Embarquez dans un voyage extraordinaire à travers les mystères de l'espace. 
            Découvrez des mondes inconnus et des galaxies lointaines.
          </p>
          
          <!-- CTA Spatial avec clip-path -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="px-10 py-5 bg-gradient-to-r from-pink-flamingo-500 to-pink-flamingo-600 text-white font-codega-bold text-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-pink-flamingo-500/30 clip-path-primary relative overflow-hidden group">
              <span class="relative z-10 flex items-center gap-2">
                <span class="text-2xl group-hover:animate-bounce">🚀</span>
                Commencer l'Exploration
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-flamingo-300 to-pink-flamingo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button class="px-10 py-5 border-2 border-pink-flamingo-400 text-pink-flamingo-100 font-codega-bold text-lg hover:bg-pink-flamingo-400 hover:text-white transform transition-all duration-300 clip-path-secondary relative overflow-hidden group">
              <span class="relative z-10 flex items-center gap-2">
                <span class="text-2xl group-hover:animate-pulse">📡</span>
                Découvrir les Missions
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-flamingo-400 to-pink-flamingo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <!-- Particules flottantes -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="space-particle absolute top-20 left-10 w-1 h-1 bg-pink-flamingo-300 rounded-full animate-ping opacity-60"></div>
          <div class="space-particle absolute top-40 right-20 w-2 h-2 bg-pink-flamingo-400 rounded-full animate-pulse opacity-50"></div>
          <div class="space-particle absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-flamingo-200 rounded-full animate-bounce opacity-70"></div>
          <div class="space-particle absolute bottom-20 right-10 w-1 h-1 bg-pink-flamingo-500 rounded-full animate-ping opacity-40"></div>
        </div>
      </div>
    </section>

    <!-- Scroll Content Area - Cette zone sera scrollable -->
    <div class="scroll-content relative z-20" style="height: 2000vh;">
      <!-- Les panels apparaîtront ici dynamiquement via JavaScript -->
    </div>

    <!-- Panel Templates (cachés par défaut) -->
    <div style="display: none;">
      <!-- Panel 1: Système Solaire - Centre -->
      <div class="space-panel panel-template" data-panel="1" data-position="center">
        <div class="panel-content bg-gradient-to-br from-pink-flamingo-950/95 to-pink-flamingo-900/95 backdrop-blur-xl border-2 border-pink-flamingo-400/50 p-8 max-w-2xl clip-path-panel-center relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-flamingo-400/10 to-pink-flamingo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 flex items-center justify-center clip-path-hexagon animate-space-pulse">
              <span class="text-2xl animate-space-float">☀️</span>
            </div>
            <h2 class="text-3xl font-codega-black text-pink-flamingo-100">Notre Système Solaire</h2>
          </div>
          <p class="text-pink-flamingo-200 font-codega-regular text-lg leading-relaxed mb-6">
            Découvrez les merveilles de notre système solaire, des planètes rocheuses aux géantes gazeuses, 
            chacune ayant ses propres mystères et caractéristiques uniques.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-pink-flamingo-800/40 rounded-xl p-4">
              <h4 class="font-codega-bold text-pink-flamingo-300 mb-2">🪐 8 Planètes</h4>
              <p class="text-pink-flamingo-200 text-sm">De Mercure à Neptune</p>
            </div>
            <div class="bg-pink-flamingo-800/40 rounded-xl p-4">
              <h4 class="font-codega-bold text-pink-flamingo-300 mb-2">🌙 200+ Lunes</h4>
              <p class="text-pink-flamingo-200 text-sm">Satellites naturels</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 2: Exploration Spatiale - Gauche -->
      <div class="space-panel panel-template" data-panel="2" data-position="left">
        <div class="panel-content bg-gradient-to-br from-pink-flamingo-950/95 to-pink-flamingo-900/95 backdrop-blur-xl border-2 border-pink-flamingo-400/50 p-8 max-w-2xl clip-path-panel-left relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-flamingo-500/10 to-pink-flamingo-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 flex items-center justify-center clip-path-arrow animate-cosmic-rotate">
              <span class="text-2xl animate-space-float">🛸</span>
            </div>
            <h2 class="text-3xl font-codega-black text-pink-flamingo-100">Missions d'Exploration</h2>
          </div>
          <p class="text-pink-flamingo-200 font-codega-regular text-lg leading-relaxed mb-6">
            L'humanité repousse sans cesse les limites de l'exploration spatiale avec des missions 
            ambitieuses vers Mars, Europa et au-delà de notre système solaire.
          </p>
          <div class="space-y-3">
            <div class="flex items-center gap-3 bg-pink-flamingo-800/40 rounded-lg p-3">
              <span class="text-pink-flamingo-300">🚀</span>
              <span class="text-pink-flamingo-200 font-codega-medium">Mission Mars 2030</span>
            </div>
            <div class="flex items-center gap-3 bg-pink-flamingo-800/40 rounded-lg p-3">
              <span class="text-pink-flamingo-300">🛰️</span>
              <span class="text-pink-flamingo-200 font-codega-medium">Station Lunaire</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 3: Galaxies Lointaines - Droite -->
      <div class="space-panel panel-template" data-panel="3" data-position="right">
        <div class="panel-content bg-gradient-to-br from-pink-flamingo-950/95 to-pink-flamingo-900/95 backdrop-blur-xl border-2 border-pink-flamingo-400/50 p-8 max-w-2xl clip-path-panel-right relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-flamingo-300/10 to-pink-flamingo-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 flex items-center justify-center clip-path-diamond animate-space-pulse">
              <span class="text-2xl animate-cosmic-rotate">🌌</span>
            </div>
            <h2 class="text-3xl font-codega-black text-pink-flamingo-100">Galaxies Infinies</h2>
          </div>
          <p class="text-pink-flamingo-200 font-codega-regular text-lg leading-relaxed mb-6">
            Au-delà de la Voie Lactée s'étendent des milliards de galaxies, chacune contenant 
            des milliards d'étoiles et potentiellement des formes de vie inconnues.
          </p>
          <div class="bg-gradient-to-r from-pink-flamingo-800/40 to-pink-flamingo-700/40 rounded-xl p-4">
            <h4 class="font-codega-bold text-pink-flamingo-300 mb-2">✨ 2 Trillions de Galaxies</h4>
            <p class="text-pink-flamingo-200 text-sm">Dans l'univers observable</p>
          </div>
        </div>
      </div>

      <!-- Panel 4: Technologie Spatiale - Gauche -->
      <div class="space-panel panel-template" data-panel="4" data-position="left">
        <div class="panel-content bg-gradient-to-br from-pink-flamingo-950/95 to-pink-flamingo-900/95 backdrop-blur-xl border-2 border-pink-flamingo-400/50 p-8 max-w-2xl clip-path-panel-left relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-flamingo-600/10 to-pink-flamingo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 flex items-center justify-center clip-path-star animate-cosmic-rotate">
              <span class="text-2xl animate-space-pulse">⚡</span>
            </div>
            <h2 class="text-3xl font-codega-black text-pink-flamingo-100">Technologies Avancées</h2>
          </div>
          <p class="text-pink-flamingo-200 font-codega-regular text-lg leading-relaxed mb-6">
            Les innovations technologiques révolutionnent notre capacité à explorer l'espace, 
            des propulsions ioniques aux habitats spatiaux auto-suffisants.
          </p>
          <div class="grid grid-cols-1 gap-3">
            <div class="bg-pink-flamingo-800/40 rounded-lg p-4 flex items-center gap-3">
              <span class="text-2xl">🔋</span>
              <div>
                <h4 class="font-codega-bold text-pink-flamingo-300">Propulsion Ionique</h4>
                <p class="text-pink-flamingo-200 text-sm">Efficacité maximale</p>
              </div>
            </div>
            <div class="bg-pink-flamingo-800/40 rounded-lg p-4 flex items-center gap-3">
              <span class="text-2xl">🏠</span>
              <div>
                <h4 class="font-codega-bold text-pink-flamingo-300">Habitats Spatiaux</h4>
                <p class="text-pink-flamingo-200 text-sm">Vie autonome dans l'espace</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 5: Futur de l'Humanité - Droite -->
      <div class="space-panel panel-template" data-panel="5" data-position="right">
        <div class="panel-content bg-gradient-to-br from-pink-flamingo-950/95 to-pink-flamingo-900/95 backdrop-blur-xl border-2 border-pink-flamingo-400/50 p-8 max-w-2xl clip-path-panel-right relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-flamingo-200/10 to-pink-flamingo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 flex items-center justify-center clip-path-circle animate-space-float">
              <span class="text-2xl animate-star-twinkle">🌟</span>
            </div>
            <h2 class="text-3xl font-codega-black text-pink-flamingo-100">L'Avenir Cosmique</h2>
          </div>
          <p class="text-pink-flamingo-200 font-codega-regular text-lg leading-relaxed mb-6">
            L'humanité se prépare à devenir une civilisation multi-planétaire, 
            ouvrant une nouvelle ère d'exploration et de découvertes infinies.
          </p>
          <div class="text-center">
            <div class="inline-block bg-gradient-to-r from-pink-flamingo-500 to-pink-flamingo-600 text-white px-6 py-3 rounded-full font-codega-bold">
              🚀 L'Aventure ne fait que commencer
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Spatial -->
    <footer class="relative z-30 bg-gradient-to-t from-pink-flamingo-950 to-transparent py-12">
      <div class="container mx-auto px-6 text-center">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-pink-flamingo-400 to-pink-flamingo-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xl">🚀</span>
          </div>
          <span class="text-2xl font-codega-bold text-pink-flamingo-100">Space Walker</span>
        </div>
        <p class="text-pink-flamingo-300 mb-6 font-codega-regular">
          Explorez l'infini, découvrez l'impossible, rêvez l'inimaginable.
        </p>
        <p class="text-pink-flamingo-500 text-sm font-codega-regular">
          © 2025 Space Walker. Créé avec 🚀 et passion pour l'exploration cosmique.
        </p>
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
  name: 'SpaceWalker',
  setup() {
    // Variables réactives
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)
    
    // Refs pour les éléments DOM
    const spaceCanvas = ref(null)
    const heroContent = ref(null)
    
    // Variables pour le canvas et les frames
    let canvas = null
    let context = null
    let images = []
    let currentFrameIndex = 0
    const frameCount = 200
    let imagesLoaded = 0
    let isCanvasReady = false
    let lastFrameRendered = -1
    
    // Variables pour les panels
    let activePanels = []
    const panelTriggerFrames = [20, 50, 80, 120, 160] // Frames où apparaissent les panels
    
    // Gestion du scroll
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }

    // Toggle menu mobile
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    // ============================================================
    // INITIALISATION DU CANVAS SPATIAL
    // ============================================================
    const initSpaceCanvas = () => {
      canvas = spaceCanvas.value
      if (!canvas) return

      context = canvas.getContext('2d')
      
      // Configuration responsive
      const updateCanvasSize = () => {
        const rect = canvas.getBoundingClientRect()
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        
        canvas.width = window.innerWidth * dpr
        canvas.height = window.innerHeight * dpr
        canvas.style.width = window.innerWidth + 'px'
        canvas.style.height = window.innerHeight + 'px'
        
        context.scale(dpr, dpr)
        isCanvasReady = true
      }
      
      updateCanvasSize()
      window.addEventListener('resize', updateCanvasSize)
      
      // Chargement des images space-walker
      loadSpaceFrames()
    }

    // ============================================================
    // CHARGEMENT INTELLIGENT DES FRAMES SPATIALES
    // ============================================================
    const loadSpaceFrames = () => {
      console.log('🚀 Début du chargement des frames Space Walker')
      
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        const index = i - 1
        
        img.onload = () => {
          imagesLoaded++
          console.log(`🖼️ Frame ${i}/${frameCount} chargée (${Math.round((imagesLoaded/frameCount)*100)}%)`)
          
          if (imagesLoaded === 1) {
            // Rendu immédiat de la première frame
            renderSpaceFrame(0, true)
          }
          
          if (imagesLoaded === frameCount) {
            console.log('✅ Toutes les frames Space Walker chargées!')
            initScrollAnimation()
          }
        }
        
        img.onerror = () => {
          console.warn(`⚠️ Erreur chargement frame ${i}`)
          imagesLoaded++
          
          // Image de fallback spatial
          images[index] = createSpaceFallback(i)
        }
        
        img.src = `/space-walker/frame-${i}.png`
        images[index] = img
      }
    }

    // ============================================================
    // RENDU DES FRAMES SPATIALES
    // ============================================================
    const renderSpaceFrame = (frameIndex, forceRender = false) => {
      if (!isCanvasReady || !context || !canvas) return
      
      if (!forceRender && frameIndex === lastFrameRendered) return
      
      try {
        // Clear avec effet spatial
        context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        
        const safeIndex = Math.max(0, Math.min(Math.floor(frameIndex), frameCount - 1))
        const img = images[safeIndex]
        
        if (img && img.complete && img.naturalWidth > 0) {
          // Calcul pour couvrir tout l'écran
          const imgAspect = img.naturalWidth / img.naturalHeight
          const screenAspect = window.innerWidth / window.innerHeight
          
          let drawWidth, drawHeight, drawX, drawY
          
          if (imgAspect > screenAspect) {
            drawHeight = window.innerHeight
            drawWidth = drawHeight * imgAspect
            drawX = (window.innerWidth - drawWidth) / 2
            drawY = 0
          } else {
            drawWidth = window.innerWidth
            drawHeight = drawWidth / imgAspect
            drawX = 0
            drawY = (window.innerHeight - drawHeight) / 2
          }
          
          context.drawImage(img, drawX, drawY, drawWidth, drawHeight)
          lastFrameRendered = frameIndex
          
          // Effet overlay spatial subtil
          const gradient = context.createRadialGradient(
            window.innerWidth / 2, window.innerHeight / 2, 0,
            window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 2
          )
          gradient.addColorStop(0, 'rgba(202, 63, 231, 0.05)')
          gradient.addColorStop(1, 'rgba(33, 4, 39, 0.3)')
          
          context.fillStyle = gradient
          context.fillRect(0, 0, window.innerWidth, window.innerHeight)
          
        } else {
          drawSpaceLoading(safeIndex)
        }
        
      } catch (error) {
        console.warn('⚠️ Erreur rendu frame spatial:', error)
        drawSpaceError()
      }
    }

    // ============================================================
    // ÉTATS VISUELS SPATIAUX
    // ============================================================
    const drawSpaceLoading = (frameIndex) => {
      // Fond spatial élégant
      const gradient = context.createLinearGradient(0, 0, 0, window.innerHeight)
      gradient.addColorStop(0, '#360a3f')
      gradient.addColorStop(0.5, '#5f196e')
      gradient.addColorStop(1, '#210427')
      
      context.fillStyle = gradient
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)
      
      // Étoiles scintillantes
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const size = Math.random() * 2 + 1
        
        context.fillStyle = 'rgba(220, 142, 242, 0.8)'
        context.beginPath()
        context.arc(x, y, size, 0, Math.PI * 2)
        context.fill()
      }
      
      // Message de chargement
      context.fillStyle = 'rgba(248, 237, 253, 0.95)'
      context.font = 'bold 24px Colmeak, sans-serif'
      context.textAlign = 'center'
      context.fillText(
        `🚀 Chargement de l'espace ${frameIndex + 1}/${frameCount}...`, 
        window.innerWidth / 2, 
        window.innerHeight / 2 - 30
      )
      
      // Barre de progression spatiale
      const progressWidth = Math.min(400, window.innerWidth * 0.6)
      const progressHeight = 8
      const progressX = (window.innerWidth - progressWidth) / 2
      const progressY = window.innerHeight / 2 + 20
      
      // Track
      context.fillStyle = 'rgba(202, 63, 231, 0.3)'
      context.fillRect(progressX, progressY, progressWidth, progressHeight)
      
      // Progress
      const progress = imagesLoaded / frameCount
      context.fillStyle = '#ca3fe7'
      context.fillRect(progressX, progressY, progressWidth * progress, progressHeight)
    }

    const drawSpaceError = () => {
      context.fillStyle = '#360a3f'
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)
      
      context.fillStyle = '#f1d6fa'
      context.font = 'bold 20px Colmeak, sans-serif'
      context.textAlign = 'center'
      context.fillText('🛸 Erreur de transmission spatiale', window.innerWidth / 2, window.innerHeight / 2)
    }

    const createSpaceFallback = (frameNumber) => {
      const canvas = document.createElement('canvas')
      canvas.width = 1920
      canvas.height = 1080
      const ctx = canvas.getContext('2d')
      
      // Fond spatial
      const gradient = ctx.createRadialGradient(960, 540, 0, 960, 540, 800)
      gradient.addColorStop(0, '#ca3fe7')
      gradient.addColorStop(0.7, '#5f196e')
      gradient.addColorStop(1, '#210427')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 1920, 1080)
      
      // Texte
      ctx.fillStyle = '#f8edfd'
      ctx.font = 'bold 48px Colmeak, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`🚀 Frame ${frameNumber}`, 960, 540)
      
      const img = new Image()
      img.src = canvas.toDataURL()
      return img
    }

    // ============================================================
    // ANIMATION SCROLL + PANELS SPATIAUX
    // ============================================================
    const initScrollAnimation = () => {
      // Animation principale du canvas au scroll
      ScrollTrigger.create({
        trigger: '.scroll-content',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: self => {
          const progress = self.progress
          const frameIndex = Math.floor(progress * (frameCount - 1))
          renderSpaceFrame(frameIndex)
          
          // Gestion des panels
          updateSpacePanels(frameIndex)
        }
      })
    }

    // ============================================================
    // GESTION DES PANELS SPATIAUX PERSISTANTS - BIDIRECTIONNEL
    // ============================================================
    const updateSpacePanels = (currentFrame) => {
      // Vérifier si on est près du footer (frame 190+) pour masquer le dernier panel
      const isNearFooter = currentFrame >= 190
      
      panelTriggerFrames.forEach((triggerFrame, index) => {
        const panelId = index + 1
        const isLastPanel = index === panelTriggerFrames.length - 1
        const nextTriggerFrame = panelTriggerFrames[index + 1]
        const prevTriggerFrame = panelTriggerFrames[index - 1]
        
        // Conditions d'affichage
        const shouldShow = currentFrame >= triggerFrame - 2 && currentFrame <= triggerFrame + 2
        
        // Conditions de masquage améliorées
        let shouldHide = false
        
        // Pour le dernier panel : le masquer quand on arrive au footer
        if (isLastPanel && isNearFooter) {
          shouldHide = true
        }
        // Pour les autres panels : masquer quand on arrive au suivant OU au précédent
        else if (!isLastPanel) {
          // Masquer si on va vers le panel suivant
          const hideForNext = nextTriggerFrame && currentFrame >= nextTriggerFrame - 2
          // Masquer si on revient vers le panel précédent (scroll inverse)
          const hideForPrev = prevTriggerFrame && currentFrame <= prevTriggerFrame + 2 && currentFrame < triggerFrame - 2
          shouldHide = hideForNext || hideForPrev
        }
        
        // Afficher le panel s'il n'est pas déjà actif
        if (shouldShow && !activePanels.includes(panelId)) {
          showSpacePanel(panelId, index)
        }
        
        // Masquer le panel selon les conditions
        if (shouldHide && activePanels.includes(panelId)) {
          hideSpacePanel(panelId)
        }
      })
      
      // Nettoyage de sécurité : s'assurer qu'aucun panel ne reste actif inappropriément
      activePanels.forEach(panelId => {
        const panelIndex = panelId - 1
        const triggerFrame = panelTriggerFrames[panelIndex]
        const isInRange = Math.abs(currentFrame - triggerFrame) <= 15 // Zone élargie de tolérance
        const isLastPanelAtFooter = panelId === panelTriggerFrames.length && isNearFooter
        
        if (!isInRange || isLastPanelAtFooter) {
          hideSpacePanel(panelId)
        }
      })
    }

    const showSpacePanel = (panelId, panelIndex) => {
      // Vérifier qu'il n'y a pas déjà un panel actif avec cet ID
      if (activePanels.includes(panelId)) {
        console.log(`ℹ️ Panel ${panelId} déjà actif, ignoré`)
        return
      }
      
      // Vérifier qu'il n'y a pas déjà un élément DOM pour ce panel
      const existingPanel = document.querySelector(`.active-space-panel[data-active-panel="${panelId}"]:not([data-removing="true"])`)
      if (existingPanel) {
        console.log(`ℹ️ Panel ${panelId} déjà dans le DOM, ignoré`)
        return
      }
      
      activePanels.push(panelId)
      
      // Récupérer le template du panel
      const template = document.querySelector(`[data-panel="${panelId}"]`)
      if (!template) {
        console.error(`❌ Template panel ${panelId} non trouvé`)
        return
      }
      
      // Déterminer la position selon l'index
      const position = template.getAttribute('data-position') || 'center'
      
      // Cloner et insérer dans le DOM
      const panel = template.cloneNode(true)
      panel.style.display = 'block'
      panel.classList.add('active-space-panel')
      panel.setAttribute('data-active-panel', panelId)
      
      // Positionnement selon le type
      let positionStyle = ''
      switch(position) {
        case 'left':
          positionStyle = `
            position: fixed;
            top: 50%;
            left: 5%;
            transform: translateY(-50%);
          `
          break
        case 'right':
          positionStyle = `
            position: fixed;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
          `
          break
        default: // center
          positionStyle = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `
      }
      
      panel.style.cssText = `
        ${positionStyle}
        z-index: 40;
        opacity: 0;
        scale: 0.8;
      `
      
      document.body.appendChild(panel)
      
      // Animation d'apparition GSAP avec effet spatial
      const timeline = gsap.timeline()
      
      timeline.to(panel, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
      })
      .to(panel.querySelector('.panel-content'), {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.5')
      
      // Effet de particules spatiales
      createSpaceParticles(panel)
      
      // Ajouter des effets d'animation continue
      gsap.to(panel.querySelector('.panel-content'), {
        boxShadow: '0 0 50px rgba(202, 63, 231, 0.5)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    const hideSpacePanel = (panelId, panelElement = null) => {
      // Retirer immédiatement de la liste des panels actifs pour éviter les conflits
      activePanels = activePanels.filter(id => id !== panelId)
      
      // Rechercher tous les panels avec cet ID (au cas où il y aurait des doublons)
      const panels = panelElement ? [panelElement] : document.querySelectorAll(`.active-space-panel[data-active-panel="${panelId}"]`)
      
      panels.forEach(panel => {
        if (!panel || !document.body.contains(panel)) return
        
        // Marquer le panel comme en cours de suppression pour éviter les interactions
        panel.style.pointerEvents = 'none'
        panel.setAttribute('data-removing', 'true')
        
        gsap.to(panel, {
          opacity: 0,
          scale: 0.6,
          y: -30,
          rotationX: 45,
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            // Double vérification avant suppression
            if (document.body.contains(panel)) {
              try {
                document.body.removeChild(panel)
                console.log(`🗑️ Panel ${panelId} supprimé avec succès`)
              } catch (error) {
                console.warn(`⚠️ Erreur suppression panel ${panelId}:`, error)
              }
            }
          }
        })
      })
    }

    // ============================================================
    // EFFETS SPATIAUX
    // ============================================================
    const createSpaceParticles = (element) => {
      const rect = element.getBoundingClientRect()
      
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div')
        particle.style.cssText = `
          position: fixed;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #ca3fe7, #d469ee);
          border-radius: 50%;
          pointer-events: none;
          z-index: 50;
          left: ${rect.left + rect.width / 2}px;
          top: ${rect.top + rect.height / 2}px;
        `
        
        document.body.appendChild(particle)
        
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          opacity: 0,
          scale: 0,
          duration: 2,
          ease: 'power2.out',
          onComplete: () => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle)
            }
          }
        })
      }
    }

    // ============================================================
    // ANIMATIONS GSAP
    // ============================================================
    const initAnimations = () => {
      // Animation du hero
      if (heroContent.value) {
        gsap.fromTo(heroContent.value.children,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            delay: 0.5
          }
        )
      }
      
      // Animation des particules spatiales
      gsap.to('.space-particle', {
        y: '-=20px',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      })
    }

    // Lifecycle hooks
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      nextTick(() => {
        initSpaceCanvas()
        initAnimations()
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      
      // Cleanup panels actifs
      document.querySelectorAll('.active-space-panel').forEach(panel => {
        if (document.body.contains(panel)) {
          document.body.removeChild(panel)
        }
      })
    })

    return {
      scrolled,
      mobileMenuOpen,
      spaceCanvas,
      heroContent,
      toggleMobileMenu
    }
  }
}
</script>

<style scoped>
/* Styles spatiaux personnalisés */
.space-walker-site {
  min-height: 100vh;
  background: linear-gradient(135deg, #210427 0%, #360a3f 50%, #5f196e 100%);
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(202, 63, 231, 0.3), transparent);
  transition: left 0.5s;
}

.nav-link:hover::before {
  left: 100%;
}

/* Animations spatiales avancées */
@keyframes space-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes space-pulse {
  0%, 100% {
    transform: scale(1) rotateZ(0deg);
    box-shadow: 0 0 20px rgba(202, 63, 231, 0.4);
  }
  50% {
    transform: scale(1.1) rotateZ(180deg);
    box-shadow: 0 0 40px rgba(202, 63, 231, 0.8);
  }
}

@keyframes cosmic-rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.05);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes star-twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  25% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  75% {
    opacity: 0.7;
    transform: scale(0.9);
  }
}

.space-particle {
  animation: space-float 4s ease-in-out infinite;
}

.animate-space-pulse {
  animation: space-pulse 3s ease-in-out infinite;
}

.animate-cosmic-rotate {
  animation: cosmic-rotate 8s linear infinite;
}

.animate-space-float {
  animation: space-float 6s ease-in-out infinite;
}

.animate-star-twinkle {
  animation: star-twinkle 2s ease-in-out infinite;
}

/* Formes clip-path spatiales */
.clip-path-primary {
  clip-path: polygon(0% 0%, 90% 0%, 100% 30%, 100% 100%, 10% 100%, 0% 70%);
}

.clip-path-secondary {
  clip-path: polygon(10% 0%, 100% 0%, 90% 70%, 100% 100%, 0% 100%, 10% 30%);
}

.clip-path-panel-center {
  clip-path: polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%);
}

.clip-path-panel-left {
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 0% 100%);
}

.clip-path-panel-right {
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 85%, 0% 15%);
}

.clip-path-hexagon {
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
}

.clip-path-arrow {
  clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
}

.clip-path-diamond {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.clip-path-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.clip-path-circle {
  clip-path: circle(50% at 50% 50%);
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(33, 4, 39, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #ca3fe7, #ae35c7);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #d469ee, #ca3fe7);
}

/* Effet de brillance sur les boutons */
button {
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
}
</style>