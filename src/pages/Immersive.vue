<template>
  <!-- Loader Capsule -->
  <div v-if="isLoading" class="loader-container">
    <div class="loader-capsule">
      <div class="loader-fill"></div>
      <div class="loader-text">Loading Experience...</div>
    </div>
  </div>

  <!-- Navbar Capsule -->
  <div v-if="!isLoading" class="navbar-capsule" :class="{ 'hidden': navbarHidden }" @click="toggleSidebar">
    <div class="capsule-icon">
      <div class="hamburger-line" :class="{ 'active': sidebarOpen }"></div>
      <div class="hamburger-line" :class="{ 'active': sidebarOpen }"></div>
      <div class="hamburger-line" :class="{ 'active': sidebarOpen }"></div>
    </div>
    <span class="capsule-text">MENU</span>
  </div>

  <!-- Sidebar -->
  <div v-if="!isLoading" class="sidebar" :class="{ 'open': sidebarOpen }">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3>LUXURY CARS</h3>
        <button @click="closeSidebar" class="close-btn">×</button>
      </div>
      <nav class="sidebar-nav">
        <a href="#intro" @click="scrollToSection('intro')" class="nav-link">Accueil</a>
        <a href="#sport" @click="scrollToSection('sport')" class="nav-link">Sport Cars</a>
        <a href="#urban" @click="scrollToSection('urban')" class="nav-link">Urban Cars</a>
        <a href="#suv" @click="scrollToSection('suv')" class="nav-link">SUV Cars</a>
        <a href="#4x4" @click="scrollToSection('4x4')" class="nav-link">4x4 Cars</a>
        <a href="#contact" @click="scrollToSection('outro')" class="nav-link">Contact</a>
      </nav>
      <div class="sidebar-footer">
        <div class="contact-info">
          <p>📞 +33 1 23 45 67 89</p>
          <p>📧 luxury@cars.com</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay -->
  <div v-if="sidebarOpen" class="sidebar-overlay" @click="closeSidebar"></div>

  <!-- Contenu principal -->
  <div v-if="!isLoading" class="main-content">
    <!-- Objets décoratifs flottants -->
    <div class="floating-objects">
      <div class="floating-object obj-1">🏎️</div>
      <div class="floating-object obj-2">⚡</div>
      <div class="floating-object obj-3">💨</div>
      <div class="floating-object obj-4">🔥</div>
      <div class="floating-object obj-5">⭐</div>
      <div class="floating-object obj-6">💎</div>
    </div>

    <section class="intro">
      <div class="intro-content">
        <h1><span class="intro-title">Luxury Cars.</span><br/> 
          Découvrez l'Excellence Automobile</h1>
        <div class="intro-car-capsule">
          <img src="/cars/mustang-fire.jpg" alt="Excellence Automobile" />
          <div class="capsule-glow"></div>
        </div>
      </div>
    </section>

<!-- First Sections - Structure harmonisée avec Second Sections -->
  <div class="card">
    <div class="card-marquee">
      <div class="marquee">
        <h1>DESIGN FOR SPEED • PURE ADRENALINE • RACING DNA • EXTREME PERFORMANCE • </h1>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Sport Cars Elite</h1>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/supercar.jpg" alt="Sport Cars Elite"/>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Urban Premium</h1>
        </div>
        <div class="card-description">
          <p>
            Naviguez en ville avec l'élégance sophistiquée d'un félin urbain redéfini pour l'époque moderne. 
            Compactes mais étonnamment polyvalentes, ces merveilles technologiques transforment chaque trajet quotidien 
            en moment de plaisir pur. L'intelligence artificielle au service du raffinement et du confort premium.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Consommation:</span> <span class="spec-value animated-value">3.2L/100km</span></div>
            <div class="spec-item"><span class="spec-label">Autonomie:</span> <span class="spec-value animated-value">1,200 km</span></div>
            <div class="spec-item"><span class="spec-label">Émissions:</span> <span class="spec-value animated-value">75g CO2/km</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">21,320,000 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/renault.jpg" alt="Urban Premium"/>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>SUV Prestige</h1>
        </div>
        <div class="card-description">
          <p>
            Dominez chaque route avec une prestance inégalée et un raffinement absolu. Ces colosses luxueux 
            allient magistralement la puissance brute d'un titan moderne au confort moelleux d'un salon premium parisien. 
            Famille, aventure extrême, prestige social : un seul véhicule d'exception pour réaliser toutes vos ambitions de vie.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Places:</span> <span class="spec-value animated-value">7 Passagers VIP</span></div>
            <div class="spec-item"><span class="spec-label">Coffre:</span> <span class="spec-value animated-value">2,650L modulable</span></div>
            <div class="spec-item"><span class="spec-label">Remorquage:</span> <span class="spec-value animated-value">4,200 kg</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">45,200,400 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/jetour.jpeg" alt="SUV Prestige"/>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>4x4 Adventure Elite</h1>
        </div>
        <div class="card-description">
          <p>
            Conquérez tous les terrains les plus hostiles avec ces bêtes mécaniques absolument indomptables. 
            Forgés dans l'acier pour l'aventure extrême et l'exploration sans limites, ils défient audacieusement les lois de la physique 
            sur chaque sentier rocailleux. Là où tous les autres véhicules s'arrêtent définitivement, eux continuent leur progression légendaire.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Garde au sol:</span> <span class="spec-value animated-value">385mm</span></div>
            <div class="spec-item"><span class="spec-label">Angle d'approche:</span> <span class="spec-value animated-value">42°</span></div>
            <div class="spec-item"><span class="spec-label">Système 4WD:</span> <span class="spec-value animated-value">Intelligent Permanent</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">58,712,000 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/higlander.jpg" alt="4x4 Adventure Elite"/>
      </div>
    </div>
  </div>

  <!-- Second Sections -->
  <!-- ------- -->
  <!-- Card Collection Exclusive - Mégane Prestige -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Mégane Prestige</h1>
        </div>
        <div class="card-description">
          <p>
            L'élégance française dans toute sa splendeur. Cette berline premium 
            incarne le raffinement à la française avec ses lignes sculptées et 
            son habitacle luxueux. Chaque détail respire la sophistication.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Motorisation:</span> <span class="spec-value animated-value">Hybrid 200 CV</span></div>
            <div class="spec-item"><span class="spec-label">Consommation:</span> <span class="spec-value animated-value">4.2L/100km</span></div>
            <div class="spec-item"><span class="spec-label">Équipements:</span> <span class="spec-value animated-value">Premium Pack</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">30,110,400 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/bmw.jpg" alt="Mégane Prestige"/>
      </div>
    </div>
  </div>

  <!-- Card Supercar Edition -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Supercar Edition</h1>
        </div>
        <div class="card-description">
          <p>
            Performance pure et design radical. Cette supercar repousse toutes les limites 
            avec son moteur atmosphérique et sa carrosserie en carbone. 
            L'ultime expression de la passion automobile.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">0-100 km/h:</span> <span class="spec-value animated-value">2.8s</span></div>
            <div class="spec-item"><span class="spec-label">Vitesse Max:</span> <span class="spec-value animated-value">320 km/h</span></div>
            <div class="spec-item"><span class="spec-label">Puissance:</span> <span class="spec-value animated-value">650 CV</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">196,244,000 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/car-series.jpg" alt="Supercar Edition"/>
      </div>
    </div>
  </div>

  <!-- Card Family Comfort -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Family Comfort</h1>
        </div>
        <div class="card-description">
          <p>
            Le voyage premium en famille redéfini. Cette berline spacieuse combine 
            confort exceptionnel et technologies avancées pour créer un cocon 
            de bien-être sur la route.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Places:</span> <span class="spec-value animated-value">5 Passagers</span></div>
            <div class="spec-item"><span class="spec-label">Coffre:</span> <span class="spec-value animated-value">520L</span></div>
            <div class="spec-item"><span class="spec-label">Sécurité:</span> <span class="spec-value animated-value">5 étoiles</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">34,374,400 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/jT2.jpg" alt="Family Comfort"/>
      </div>
    </div>
  </div>

  <!-- Card Heritage T2 -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Heritage T2</h1>
        </div>
        <div class="card-description">
          <p>
            Légende vintage réinventée pour l'ère moderne. Ce modèle iconique 
            conserve son âme authentique tout en intégrant les technologies 
            contemporaines. L'esprit libre sur quatre roues.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Année:</span> <span class="spec-value animated-value">Collection 2024</span></div>
            <div class="spec-item"><span class="spec-label">Édition:</span> <span class="spec-value animated-value">Limitée</span></div>
            <div class="spec-item"><span class="spec-label">Authenticité:</span> <span class="spec-value animated-value">100% Vintage</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">55,760,000 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/chr.jpg" alt="Heritage T2"/>
      </div>
    </div>
  </div>

  <!-- Card Robustesse Skoda -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Robustesse Skoda</h1>
        </div>
        <div class="card-description">
          <p>
            Fiabilité légendaire et ingénierie précise. Cette berline incarne 
            l'excellence technique européenne avec sa robustesse à toute épreuve 
            et son rapport qualité-prix exceptionnel.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Garantie:</span> <span class="spec-value animated-value">7 ans</span></div>
            <div class="spec-item"><span class="spec-label">Fiabilité:</span> <span class="spec-value animated-value">99.2%</span></div>
            <div class="spec-item"><span class="spec-label">Entretien:</span> <span class="spec-value animated-value">Réduit</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">25,518,400 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/wall-car.png" alt="Robustesse Skoda"/>
      </div>
    </div>
  </div>

  <!-- Card Edition Limitée -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Edition Limitée</h1>
        </div>
        <div class="card-description">
          <p>
            Rareté absolue pour collectionneurs avertis. Cette pièce d'exception 
            n'existe qu'en quelques exemplaires dans le monde. L'art automobile 
            dans sa forme la plus pure et exclusive.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Production:</span> <span class="spec-value animated-value">99 exemplaires</span></div>
            <div class="spec-item"><span class="spec-label">Numérotation:</span> <span class="spec-value animated-value">Individuelle</span></div>
            <div class="spec-item"><span class="spec-label">Certification:</span> <span class="spec-value animated-value">Authentique</span></div>
            <div class="spec-item"><span class="spec-label">Prix à partir de:</span> <span class="spec-value price-tag">295,200,000 FCFA</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/luxury.jpg" alt="Edition Limitée"/>
      </div>
    </div>
  </div>

  <!-- Card Performance Extrême -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Performance Extrême</h1>
        </div>
        <div class="card-description">
          <p>
            Moteurs haute technologie développés pour repousser les limites de la vitesse et de l'efficacité. 
            Chaque composant est optimisé pour offrir une expérience de conduite transcendante 
            où la mécanique devient art.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Technologie:</span> <span class="spec-value animated-value">Turbo Hybrid</span></div>
            <div class="spec-item"><span class="spec-label">Innovation:</span> <span class="spec-value animated-value">Pointe</span></div>
            <div class="spec-item"><span class="spec-label">Efficacité:</span> <span class="spec-value animated-value">98%</span></div>
            <div class="spec-item"><span class="spec-label">Garantie:</span> <span class="spec-value price-tag">10 ans</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/interior.webp" alt="Performance Extrême"/>
      </div>
    </div>
  </div>

  <!-- Card Sécurité Avancée -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Sécurité Avancée</h1>
        </div>
        <div class="card-description">
          <p>
            Systèmes de sécurité intelligents pour une protection maximale de tous les occupants. 
            L'innovation au service de votre tranquillité d'esprit avec des technologies 
            qui anticipent et préviennent les risques.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Détection:</span> <span class="spec-value animated-value">360° Active</span></div>
            <div class="spec-item"><span class="spec-label">Airbags:</span> <span class="spec-value animated-value">12 zones</span></div>
            <div class="spec-item"><span class="spec-label">Assistant:</span> <span class="spec-value animated-value">Conduite Auto</span></div>
            <div class="spec-item"><span class="spec-label">Certification:</span> <span class="spec-value price-tag">5 étoiles</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/carss.jpg" alt="Sécurité Avancée"/>
      </div>
    </div>
  </div>

  <!-- Card Luxe Artisanal -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Luxe Artisanal</h1>
        </div>
        <div class="card-description">
          <p>
            Finitions premium et matériaux d'exception sélectionnés par nos maîtres artisans. 
            Chaque élément est travaillé à la main avec une précision d'orfèvre 
            pour créer un environnement d'exception.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Cuir:</span> <span class="spec-value animated-value">Nappa Premium</span></div>
            <div class="spec-item"><span class="spec-label">Bois:</span> <span class="spec-value animated-value">Ronce de Noyer</span></div>
            <div class="spec-item"><span class="spec-label">Métal:</span> <span class="spec-value animated-value">Aluminium Brossé</span></div>
            <div class="spec-item"><span class="spec-label">Personnalisation:</span> <span class="spec-value price-tag">Illimitée</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/ford-fiesta.jpg" alt="Luxe Artisanal"/>
      </div>
    </div>
  </div>

  <!-- Card Éco-Innovation -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Éco-Innovation</h1>
        </div>
        <div class="card-description">
          <p>
            Technologies vertes intégrées pour une mobilité respectueuse de l'environnement. 
            L'innovation écologique sans compromis sur les performances, 
            pour un avenir automobile durable et responsable.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Émissions:</span> <span class="spec-value animated-value">Zéro CO2</span></div>
            <div class="spec-item"><span class="spec-label">Autonomie:</span> <span class="spec-value animated-value">650 km</span></div>
            <div class="spec-item"><span class="spec-label">Recharge:</span> <span class="spec-value animated-value">Rapide 15min</span></div>
            <div class="spec-item"><span class="spec-label">Recyclabilité:</span> <span class="spec-value price-tag">95%</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/skoda.jpeg" alt="Éco-Innovation"/>
      </div>
    </div>
  </div>

  <!-- Card Héritage Excellence -->
  <div class="card">
    <div class="card-wrapper">
      <div class="card-content">
        <div class="card-title">
          <h1>Héritage d'Excellence</h1>
        </div>
        <div class="card-description">
          <p>
            Depuis des décennies, nous façonnons l'avenir de l'automobile avec une passion inébranlable 
            pour l'innovation et le design. Chaque véhicule incarne notre vision : allier tradition 
            artisanale et technologies de pointe pour créer des œuvres d'art sur roues.
          </p>
          <div class="card-specs">
            <div class="spec-item"><span class="spec-label">Années d'héritage:</span> <span class="spec-value animated-value">75+ ans</span></div>
            <div class="spec-item"><span class="spec-label">Véhicules produits:</span> <span class="spec-value animated-value">2.5M unités</span></div>
            <div class="spec-item"><span class="spec-label">Prix remportés:</span> <span class="spec-value animated-value">150+ trophées</span></div>
            <div class="spec-item"><span class="spec-label">Excellence:</span> <span class="spec-value price-tag">Légendaire</span></div>
          </div>
        </div>
      </div>
      <div class="card-img">
        <img src="/cars/Gt86.jpg" alt="Héritage Excellence"/>
      </div>
    </div>
  </div>

    <!-- Footer Capsule -->
    <footer class="footer-capsule">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3>LUXURY AUTOMOTIVE</h3>
            <p>L'excellence automobile depuis 1948</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Véhicules</h4>
              <ul>
                <li><a href="#sport">Sport Cars</a></li>
                <li><a href="#urban">Urban Cars</a></li>
                <li><a href="#suv">SUV Premium</a></li>
                <li><a href="#4x4">4x4 Adventure</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Essai Gratuit</a></li>
                <li><a href="#">Financement</a></li>
                <li><a href="#">Maintenance</a></li>
                <li><a href="#">Assurance</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>📍 123 Avenue des Champs, Paris</li>
                <li>📞 +33 1 23 45 67 89</li>
                <li>📧 contact@luxury-auto.fr</li>
                <li>🕒 Lun-Sam: 9h-19h</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-social">
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">YouTube</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-capsule-badge">
            <span>© 2024 LUXURY AUTOMOTIVE</span>
            <div class="capsule-indicator"></div>
          </div>
          <p>Tous droits réservés • Conditions générales • Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

export default {
  name: 'Immersive',
  setup() {
    const isLoading = ref(true)
    const sidebarOpen = ref(false)
    const navbarHidden = ref(false)
    let lenis = null
    let scrollTriggerInstances = []
    let lenisRAF = null
    let lastScrollY = 0
    let scrollTimeout = null
    let savedScrollPosition = 0 // Pour sauvegarder la position avant ouverture menu
    
    // Fonction horizontalLoop EXACTEMENT comme marquee.js
    const horizontalLoop = (items, config) => {
      items = gsap.utils.toArray(items)
      config = config || {} // EXACT marquee.js
      items = gsap.utils.toArray(items)
      let tl = gsap.timeline({
        repeat: config.repeat,
        defaults: { ease: "none" },
      })
      let length = items.length
      let startX = items[0].offsetLeft
      let widths = []
      let xPercents = []
      let pixelsPerSecond = (config.speed || 1) * 100
      let totalWidth, curlX, distanceToStart, distanceToLoop, item, i

      gsap.set(items, {
        xPercent: (i, el) => { 
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")))
          xPercents[i] = 
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + 
            gsap.getProperty(el, "xPercent")
          return xPercents[i]
        },
      })

      gsap.set(items, { x: 0 })
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth * 
        gsap.getProperty(items[length - 1], "scaleX") + 
        (parseFloat(config.paddingRight) || 0)
    
      for (i = 0; i < length; i++) { 
        item = items[i]
        curlX = (xPercents[i] / 100) * widths[i]
        distanceToStart = item.offsetLeft + curlX - startX
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX")
        tl.to(
          item, {
          xPercent: (curlX - distanceToLoop) / widths[i] * 100,
          duration: distanceToLoop / pixelsPerSecond,
        },
          0
        ).fromTo(
          item,
          { xPercent: ((curlX - distanceToLoop + totalWidth) / widths[i]) * 100 },
          {
            xPercent: xPercents[i],
            duration: (curlX - distanceToLoop + totalWidth - curlX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
      }

      tl.progress(1, true).progress(0, true)
      return tl
    }

    // Fonction setupMarqueeAnimation EXACTEMENT comme marquee.js avec optimisations
    const setupMarqueeAnimation = () => {
      const marqueeItems = gsap.utils.toArray('.marquee h1')
      if (marqueeItems.length > 0) {
        const tl = horizontalLoop(marqueeItems, {
          repeat: -1,
          paddingRight: 30,
          speed: 0.8 // Amélioration : vitesse optimisée pour plus de fluidité
        })
        
        // Amélioration : meilleur contrôle de performance
        tl.timeScale(1)
        return tl
      }
    }

    // Gestion améliorée de la navbar et sidebar avec sauvegarde position
    const toggleSidebar = () => {
      if (!sidebarOpen.value) {
        // Sauvegarder la position avant d'ouvrir le menu
        savedScrollPosition = lenis ? lenis.scroll : window.scrollY
      }
      sidebarOpen.value = !sidebarOpen.value
    }

    const closeSidebar = () => {
      sidebarOpen.value = false
      // Restaurer la position sauvegardée avec une petite temporisation
      nextTick(() => {
        setTimeout(() => {
          if (lenis && savedScrollPosition) {
            lenis.scrollTo(savedScrollPosition, { duration: 0.8, immediate: false })
          }
        }, 100)
      })
    }

    const scrollToSection = (sectionId) => {
      const element = document.querySelector(`.${sectionId}`) || document.querySelector(`#${sectionId}`)
      if (element && lenis) {
        lenis.scrollTo(element, { duration: 2, easing: (t) => 1 - Math.pow(1 - t, 3) })
      }
      closeSidebar()
    }

    // Gestion de l'affichage/masquage de la navbar au scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Masquer la navbar si on scroll vers le bas rapidement
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbarHidden.value = true
      } else {
        navbarHidden.value = false
      }
      
      lastScrollY = currentScrollY
      
      // Réapparition après arrêt du scroll
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        navbarHidden.value = false
      }, 150)
    }

    // Fonctions d'animation de contenu améliorées pour fluidité maximale
    const animateContentIn = (titleChars, description) => {
      // Animation avec timing optimisé pour meilleure visualisation
      gsap.to(titleChars, { 
        x: '0%', 
        duration: 1.2, // Durée augmentée pour plus de fluidité
        ease: 'power2.out', // Ease plus doux
        stagger: 0.03, // Stagger plus visible
        force3D: true,
        scale: 1,
        opacity: 1
      })
      gsap.to(description, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3, // Délai plus long pour voir l'animation des titres
        ease: 'power2.out',
        force3D: true,
        y: 0,
        scale: 1
      })
      
      // Animation des spécifications avec délai échelonné
      const specs = description.querySelectorAll('.spec-item')
      gsap.to(specs, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out'
      })
    }

    const animateContentOut = (titleChars, description) => {
      // Animation de sortie plus fluide avec préparation pour la suivante
      gsap.to(titleChars, { 
        x: '100%',
        duration: 0.8, // Durée augmentée pour fluidité
        ease: 'power2.in', // Ease plus doux
        stagger: 0.02,
        force3D: true,
        scale: 0.95,
        opacity: 0
      })
      gsap.to(description, {
        x: '60px', // Distance augmentée pour effet plus visible
        opacity: 0,
        duration: 0.7,
        ease: 'power2.in',
        force3D: true,
        y: 20,
        scale: 0.95
      })
      
      // Masquer rapidement les spécifications
      const specs = description.querySelectorAll('.spec-item')
      gsap.to(specs, {
        opacity: 0,
        x: 30,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      })
    }

    // Fonction principale d'initialisation des animations
    const initAnimations = async () => {
      await nextTick()
      
      // Attendre le chargement des polices avec timeout de sécurité
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise(resolve => setTimeout(resolve, 2000)) // Timeout de 2s
        ])
      } catch (error) {
        console.warn('Timeout ou erreur lors du chargement des polices:', error)
      }
      
      gsap.registerPlugin(ScrollTrigger, SplitText)
      
      // Optimisations GSAP pour des animations plus fluides
      gsap.config({
        force3D: true,
        nullTargetWarn: false,
        trialWarn: false
      })
      
      // Configuration ScrollTrigger pour de meilleures performances
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        limitCallbacks: true
      })

      // Initialisation de Lenis avec optimisations performance améliorées
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8, // Légèrement réduit pour plus de contrôle
        touchMultiplier: 1.5, // Amélioré pour mobile
        infinite: false,
        syncTouch: true, // Synchronisation touch améliorée
        syncTouchLerp: 0.1, // Interpolation smooth pour touch
        touchInertiaMultiplier: 35 // Inertie naturelle
      })
      
      lenisRAF = (time) => {
        if (lenis && typeof lenis.raf === 'function') {
          lenis.raf(time * 1000)
        }
      }
      
      lenis.on("scroll", (e) => {
        ScrollTrigger.update()
        handleScroll()
      })
      gsap.ticker.add(lenisRAF)
      gsap.ticker.lagSmoothing(0)

      const cards = gsap.utils.toArray(".card")
      const introCard = cards[0]

      // Initialisation propre avec préchargement des images
      cards.forEach((card, index) => {
        const img = card.querySelector('img')
        if (img && !img.complete) {
          img.loading = 'lazy' // Lazy loading pour performance
        }
        
        if (index === 0) {
          gsap.set(card, {
            opacity: 1,
            visibility: 'visible',
            zIndex: 100
          })
        } else {
          gsap.set(card, {
            opacity: 0,
            visibility: 'hidden',
            zIndex: 1
          })
        }
      })
      
      // Préchargement des prochaines images pour fluidité
      const preloadNext = (currentIndex) => {
        if (currentIndex + 1 < cards.length) {
          const nextImg = cards[currentIndex + 1].querySelector('img')
          if (nextImg && !nextImg.complete) {
            const preloader = new Image()
            preloader.src = nextImg.src
          }
        }
      }
      preloadNext(0)

      // Préparation des titres avec SplitText
      const titles = gsap.utils.toArray(".card-title h1")
      titles.forEach((title) => {
        const split = new SplitText(title, {
          type: "chars",
          charsClass: "char",
          tag: "div",
        })
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`
        })
      })

      if (introCard) {
        const cardImgWrapper = introCard.querySelector(".card-img")
        const cardImg = introCard.querySelector(".card-img img")
        
        if (cardImgWrapper && cardImg) {
          gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px"})
          gsap.set(cardImg, { scale: 1.5 })

          // Éléments EXACTEMENT comme dans script.txt
          const marquee = introCard.querySelector(".card-marquee .marquee")
          const titleChars = introCard.querySelectorAll(".char span") // script.txt utilise querySelector mais querySelectorAll est plus correct
          const description = introCard.querySelector(".card-description")

          // Animation principale avec durée étendue pour cohérence avec le nouveau système
          const mainTrigger = ScrollTrigger.create({
            trigger: introCard,
            start: "top top",
            end: "+=700vh", // Augmenté pour plus de temps d'affichage sur la première carte
            scrub: 2, // Scrub plus lent pour transitions ultra-douces
            onUpdate: (self) => {
              const progress = self.progress
              const imgScale = 0.5 + progress * 0.5 // EXACT script.txt
              const borderRadius = 400 - progress * 375 // EXACT script.txt
              const innerImgScale = 1.5 - progress * 0.5 // EXACT script.txt

              // Optimisation : utiliser transform au lieu de scale pour de meilleures performances
              gsap.set(cardImgWrapper, {
                scale: imgScale,
                borderRadius: borderRadius + "px",
                force3D: true // Amélioration : force l'accélération hardware
              })
              gsap.set(cardImg, { 
                scale: innerImgScale,
                force3D: true // Amélioration : force l'accélération hardware
              })

              // Gestion marquee EXACTEMENT comme script.txt avec correction syntaxe
              if (marquee) {
                if (imgScale >= 0.5 && imgScale <= 0.75) {
                  const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5)
                  gsap.set(marquee, { opacity: fadeProgress }) // Correction: était "1, fadeProgress" dans script.txt
                } else if (imgScale < 0.5) {
                  gsap.set(marquee, { opacity: 1 })
                } else if (imgScale > 0.75) {
                  gsap.set(marquee, { opacity: 0 })
                }
              }

              // Révélation contenu EXACTEMENT comme script.txt
              if (progress >= 1 && !introCard.contentRevealed) {
                introCard.contentRevealed = true
                animateContentIn(titleChars, description)
              }
              if (progress < 1 && introCard.contentRevealed) {
                introCard.contentRevealed = false
                animateContentOut(titleChars, description)
              }
            },
          })
          scrollTriggerInstances.push(mainTrigger)
        }
      }

      // Épinglage propre avec temps d'écran étendu - chaque carte occupe tout l'écran
      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1
        
        const pinTrigger = ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=500vh", // Temps d'écran long pour chaque carte
          pin: true,
          pinSpacing: false, // Pas d'espacement pour éviter les mélanges
          anticipatePin: 1,
          refreshPriority: -1,
          onUpdate: (self) => {
            // Masquer toutes les autres cartes pendant l'affichage de celle-ci
            const progress = self.progress
            
            cards.forEach((otherCard, otherIndex) => {
              if (otherIndex !== index) {
                // Complètement masquer les autres cartes
                gsap.set(otherCard, {
                  opacity: 0,
                  visibility: 'hidden',
                  zIndex: 1
                })
              } else {
                // Afficher uniquement la carte active
                gsap.set(otherCard, {
                  opacity: 1,
                  visibility: 'visible',
                  zIndex: 100
                })
              }
            })
          }
        })
        scrollTriggerInstances.push(pinTrigger)
      })

      // Transitions simplifiées entre cartes - pas d'animations de sortie complexes
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1]
          
          // Transition simple au moment du changement de carte
          const transitionTrigger = ScrollTrigger.create({
            trigger: nextCard,
            start: "top bottom",
            end: "top top",
            onEnter: () => {
              // Masquer proprement la carte précédente
              gsap.set(card, {
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3
              })
              // Afficher la nouvelle carte
              gsap.set(nextCard, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3
              })
            },
            onLeaveBack: () => {
              // Restaurer la carte précédente en scroll arrière
              gsap.set(card, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3
              })
              gsap.set(nextCard, {
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3
              })
            }
          })
          scrollTriggerInstances.push(transitionTrigger)
        }
      })

      // Animation d'entrée simple et propre pour les cartes (sauf la première)
      cards.forEach((card, index) => {
        if (index > 0) {
          const cardImg = card.querySelector(".card-img img")
          const imgWrapper = card.querySelector(".card-img")
          
          if (cardImg && imgWrapper) {
            // Animation simple de morphing de l'image
            const enterTrigger = ScrollTrigger.create({
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress
                const newScale = 2 - progress
                const newRadius = 150 - progress * 125
                
                gsap.set(cardImg, { 
                  scale: newScale,
                  force3D: true
                })
                gsap.set(imgWrapper, { 
                  borderRadius: newRadius + "px",
                  force3D: true
                })
              },
            })
            scrollTriggerInstances.push(enterTrigger)
          }
        }
      })

      // Animation du contenu EXACTEMENT comme script.txt
      cards.forEach((card, index) => {
        if (index === 0) return

        const cardDescription = card.querySelector(".card-description")
        const cardTitleChars = card.querySelectorAll(".char span")

        if (cardDescription && cardTitleChars.length > 0) {
          const contentTrigger = ScrollTrigger.create({
            trigger: card,
            start: "top top",
            onEnter: () => animateContentIn(cardTitleChars, cardDescription),
            onLeaveBack: () => animateContentOut(cardTitleChars, cardDescription),
          })
          scrollTriggerInstances.push(contentTrigger)
        }
      })

      // Initialisation marquee EXACTEMENT comme script.txt
      setupMarqueeAnimation()
    }

    // Nettoyage amélioré des animations
    const cleanup = () => {
      // Arrêter tous les ScrollTrigger
      scrollTriggerInstances.forEach(instance => {
        if (instance && typeof instance.kill === 'function') {
          instance.kill()
        }
      })
      scrollTriggerInstances = []
      
      // Nettoyer tous les ScrollTrigger restants
      const allTriggers = ScrollTrigger.getAll()
      allTriggers.forEach(trigger => {
        if (trigger && typeof trigger.kill === 'function') {
          trigger.kill()
        }
      })
      
      // Supprimer le ticker avant de détruire Lenis
      if (lenisRAF) {
        gsap.ticker.remove(lenisRAF)
      }
      
      // Détruire Lenis en toute sécurité
      if (lenis && typeof lenis.destroy === 'function') {
        lenis.destroy()
      }
      lenis = null
    }

    // Variables pour le nettoyage
    let loaderTimeout = null

    // Lifecycle hooks - SYNTAXE VUE CORRECTE
    onMounted(() => {
      // Simulation du loader pendant 3 secondes
      loaderTimeout = setTimeout(() => {
        isLoading.value = false
        nextTick(() => {
          try {
            initAnimations()
          } catch (error) {
            console.error('Erreur lors de l\'initialisation des animations:', error)
          }
        })
      }, 3000)
    })

    onUnmounted(() => {
      if (loaderTimeout) {
        clearTimeout(loaderTimeout)
      }
      cleanup()
    })

    return {
      isLoading,
      sidebarOpen,
      navbarHidden,
      toggleSidebar,
      closeSidebar,
      scrollToSection
    }
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f0f0f;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Styles du Loader Capsule */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: slideDown 0.8s ease-in-out 2.2s forwards;
}

.loader-capsule {
  position: relative;
  width: 300px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.loader-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #ffffff 0%, #f0f0f0 100%);
  border-radius: 28px;
  animation: fillCapsule 3s ease-out forwards;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.loader-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  animation: pulseText 1.5s ease-in-out infinite;
}

@keyframes fillCapsule {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes pulseText {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

/* Animation d'apparition du contenu principal */
.main-content {
  animation: fadeInContent 0.8s ease-out;
}

@keyframes fadeInContent {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Navbar Capsule */
.navbar-capsule {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 120px;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.navbar-capsule:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.navbar-capsule.hidden {
  transform: translateY(-100px) scale(0.8);
  opacity: 0;
}

.capsule-icon {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hamburger-line {
  width: 18px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.capsule-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
}

/* Sidebar - Forme Capsule - FERMÉE par défaut */
.sidebar {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 320px;
  height: calc(100vh - 40px);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  transform: translateX(-100%) scale(0.95) !important; /* FORCÉ FERMÉ */
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 999;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0 !important; /* FORCÉ INVISIBLE */
  visibility: hidden !important; /* FORCÉ CACHÉ */
}

.sidebar.open {
  transform: translateX(0) scale(1) !important;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  opacity: 1 !important;
  visibility: visible !important;
}

.sidebar-content {
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.sidebar-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%);
  border-radius: 25px;
  pointer-events: none;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

.sidebar-header h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.sidebar-nav {
  flex: 1;
}

.nav-link {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 15px 20px;
  margin: 8px 0;
  font-size: 1.1rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  backdrop-filter: blur(10px);
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateX(8px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover::before {
  opacity: 1;
}

.sidebar-footer {
  margin-top: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
}

.contact-info p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  backdrop-filter: blur(5px);
}

img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  filter: brightness(0.9) contrast(1.1) saturate(1.2);
  transition: filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

img:hover {
  filter: brightness(1) contrast(1.2) saturate(1.3);
}

h1 {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -0.1rem;
  line-height: 1.25;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  opacity: 0.95;
}

section {
  position: relative;
  width: 100vw;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  color: white;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.01) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.intro, .outro {
  height: 100svh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.intro-title {
  font-size: 2.5rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
}

/* Nouvelle structure pour intro avec capsule */
.intro-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 90%;
  max-width: 1400px;
}

.intro-car-capsule {
  position: relative;
  width: 300px;
  height: 500px;
  border-radius: 150px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255,255,255,0.2);
  box-shadow: 
    0 30px 60px rgba(0,0,0,0.4),
    0 10px 30px rgba(0,0,0,0.2),
    inset 0 1px 0 rgba(255,255,255,0.3);
  animation: capsuleFloat 6s ease-in-out infinite;
}

.intro-car-capsule img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(1.1) contrast(1.1) saturate(1.2);
  transition: all 0.8s ease;
}

.intro-car-capsule:hover img {
  transform: scale(1.05);
  filter: brightness(1.2) contrast(1.2) saturate(1.3);
}

.capsule-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, 
    transparent 0%, 
    rgba(255,255,255,0.1) 25%, 
    transparent 50%, 
    rgba(255,255,255,0.1) 75%, 
    transparent 100%);
  border-radius: inherit;
  opacity: 0;
  animation: glowRotate 4s linear infinite;
}

.intro-car-capsule:hover .capsule-glow {
  opacity: 1;
}

@keyframes capsuleFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-5px) rotate(0deg);
  }
  75% {
    transform: translateY(-15px) rotate(-1deg);
  }
}

@keyframes glowRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.intro::before, .outro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%);
  z-index: -1;
}

.intro h1,
.outro h1 {
  text-align: left;
  line-height: 1.1;
  position: relative;
  z-index: 15;
  animation: fadeInScale 2s ease-out;
  flex: 1;
  max-width: 600px;
}

.outro h1 {
  width: 60%;
  text-align: center;
  flex: none;
  max-width: none;
}

.intro-subtitle {
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  animation: fadeInScale 2s ease-out 0.5s both;
  z-index: 15;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Correction des animations de survol */
.card:hover .card-img {
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Suppression de la classe .cards car elle n'existe plus dans le HTML */

/* Optimisations de performance */
.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}



/* Améliorations des transitions globales */
* {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

.card-marquee {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  overflow: hidden;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0.1;
  transition: opacity 0.8s ease;
}

.marquee {
  display: flex;
  will-change: transform;
}

.marquee h1 {
  white-space: nowrap;
  font-size: 10vw;
  font-weight: 800;
  margin-right: 30px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255,255,255,0.1) 25%, 
    rgba(255,255,255,0.8) 50%, 
    rgba(255,255,255,0.1) 75%, 
    transparent 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  animation: textGlow 3s ease-in-out infinite alternate;
}

@keyframes textGlow {
  0% {
    filter: brightness(0.8) contrast(1);
  }
  100% {
    filter: brightness(1.2) contrast(1.1);
  }
}

.card {
  position: relative;
  width: 100vw;
  height: 100svh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.card-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5rem;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

/* Effet de particules flottantes */
.card-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.3), transparent),
    radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,0.2), transparent),
    radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 60% 10%, rgba(255,255,255,0.2), transparent);
  background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px;
  animation: floatingParticles 20s linear infinite;
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: 2;
}

.card:hover .card-img::before {
  opacity: 1;
}

@keyframes floatingParticles {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -10px) rotate(90deg);
  }
  50% {
    transform: translate(-5px, -20px) rotate(180deg);
  }
  75% {
    transform: translate(-15px, -10px) rotate(270deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

.card-img img {
  transform: scale(2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%) scale(2);
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 70%);
  pointer-events: none;
}

.card-content .card-title {
  width: 90%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 15;
  pointer-events: auto;
}

.card-title h1 {
  font-size: 4rem;
  font-weight: 900;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  position: relative;
  animation: titlePulse 4s ease-in-out infinite;
}

.card-title h1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmerTitle 2s linear infinite;
  z-index: -1;
}

@keyframes titlePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes shimmerTitle {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Objets décoratifs flottants */
.floating-objects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 5;
}

.floating-object {
  position: absolute;
  font-size: 2rem;
  opacity: 0.3;
  animation: floatAround 20s linear infinite;
  filter: blur(0.5px);
  will-change: transform, scale, opacity;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.floating-object:hover {
  opacity: 0.6;
  filter: blur(0px);
  transform: scale(1.2);
}

.obj-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.obj-2 {
  top: 60%;
  right: 15%;
  animation-delay: -5s;
  animation-duration: 30s;
}

.obj-3 {
  top: 80%;
  left: 20%;
  animation-delay: -10s;
  animation-duration: 22s;
}

.obj-4 {
  top: 40%;
  right: 30%;
  animation-delay: -15s;
  animation-duration: 28s;
}

.obj-5 {
  top: 15%;
  right: 50%;
  animation-delay: -8s;
  animation-duration: 35s;
}

.obj-6 {
  bottom: 20%;
  right: 10%;
  animation-delay: -12s;
  animation-duration: 26s;
}

@keyframes floatAround {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(30px, -20px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(-10px, -40px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(-40px, -10px) rotate(270deg) scale(1.05);
  }
  100% {
    transform: translate(0, 0) rotate(360deg) scale(1);
  }
}

.card-content .card-description {
  text-align: center;
  width: 50%;
  max-width: 600px;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0) translateX(40px);
  opacity: 0;
  z-index: 15;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: auto;
}

.card-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

/* Styles pour les spécifications */
.card-specs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0; /* Préparé pour animation GSAP */
  transform: translateX(-30px); /* Préparé pour animation GSAP */
  transition: all 0.4s ease;
}

.spec-item:nth-child(1) { animation-delay: 0.1s; }
.spec-item:nth-child(2) { animation-delay: 0.2s; }
.spec-item:nth-child(3) { animation-delay: 0.3s; }

.spec-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.spec-value {
  font-size: 1rem;
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.animated-value {
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: valueGlow 2s ease-in-out infinite alternate;
}

.price-tag {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 1.1rem;
  animation: priceShine 3s ease-in-out infinite;
}

@keyframes valueGlow {
  0% {
    filter: brightness(1) contrast(1);
  }
  100% {
    filter: brightness(1.2) contrast(1.1);
  }
}

@keyframes priceShine {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.3);
  }
}

/* Styles responsifs */
@media (max-width: 768px) {
  .navbar-capsule {
    top: 20px;
    left: 20px;
    width: 100px;
    height: 45px;
  }
  
  .capsule-text {
    font-size: 0.7rem;
  }
  
  .sidebar {
    width: 100vw;
  }
  
  .floating-objects {
    display: none;
  }
  
  .intro h1 {
    width: 90%;
    font-size: 3rem;
  }
  
  .intro-subtitle {
    font-size: 1.2rem;
    width: 90%;
  }
  
  .card-content h3 {
    font-size: 1.8rem;
  }
  
  .spec-list {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .navbar-capsule {
    top: 15px;
    left: 15px;
    width: 90px;
    height: 40px;
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  .intro h1 {
    font-size: 2.5rem;
  }
  
  .intro-subtitle {
    font-size: 1rem;
  }
}

/* Animations supplémentaires pour l'interaction */
.navbar-capsule.clicked {
  animation: capsulePulse 0.3s ease-out;
}

@keyframes capsulePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

/* Styles responsifs */
@media (max-width: 768px) {
  .navbar-capsule {
    top: 20px;
    left: 20px;
    width: 100px;
    height: 45px;
  }
  
  .capsule-text {
    font-size: 0.7rem;
  }
  
  .sidebar {
    width: 100vw;
  }
  
  .floating-objects {
    display: none;
  }
  
  .intro h1 {
    width: 90%;
    font-size: 3rem;
  }
  
  .intro-subtitle {
    font-size: 1.2rem;
    width: 90%;
  }
  
  .card-content h3 {
    font-size: 1.8rem;
  }
  
  .spec-list {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .navbar-capsule {
    top: 15px;
    left: 15px;
    width: 90px;
    height: 40px;
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  .intro h1 {
    font-size: 2.5rem;
  }
  
  .intro-subtitle {
    font-size: 1rem;
  }
}

/* Mode sombre amélioré */
@media (prefers-color-scheme: dark) {
  .navbar-capsule {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .sidebar {
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%);
  }
}

/* Animations supplémentaires pour l'interaction */
.navbar-capsule.clicked {
  animation: capsulePulse 0.3s ease-out;
}

@keyframes capsulePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

.sidebar.opening {
  animation: sidebarSlide 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes sidebarSlide {
  0% {
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes slideInSpec {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.card:nth-child(2) {
  margin-top: 50vh;
}

/* Effets de survol améliorés */
.card:hover .card-img {
  transform: scale(1.02);
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card:hover .card-description {
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.char {
  position: relative;
  overflow: hidden;
  display: inline-block;
  perspective: 1000px;
}

.char span {
  transform: translateX(100%);
  display: inline-block;
  will-change: transform;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.char:hover span {
  transform: translateX(0%) scale(1.05);
}

/* Animations supplémentaires */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1);
  }
}

.card-img:hover {
  animation: pulseGlow 2s ease-in-out infinite;
}

/* Responsive design amélioré */
@media (max-width: 1200px) {
  .card-title h1 {
    font-size: 3.5rem;
  }
  
  .marquee h1 {
    font-size: 12vw;
  }
}

@media (max-width: 900px) {
  h1 {
    font-size: 2rem;
    letter-spacing: 0;
  }

  .intro h1,
  .outro h1 {
    width: 100%;
    font-size: 2.5rem;
  }

  .card-content .card-description {
    width: 90%;
    padding: 1.5rem;
    font-size: 1rem;
  }
  
  .card-title h1 {
    font-size: 2.5rem;
  }
  
  .marquee h1 {
    font-size: 15vw;
  }
  
  .card-img {
    border-radius: 3rem;
  }
}

@media (max-width: 600px) {
  .intro h1,
  .outro h1 {
    font-size: 2rem;
  }
  
  .card-title h1 {
    font-size: 2rem;
  }
  
  .card-content .card-description {
    width: 90%;
    padding: 1rem;
    bottom: 10%;
    font-size: 0.9rem;
  }
  
  .card-content .card-title {
    top: 35%;
    width: 95%;
  }
  
  .card-img {
    border-radius: 2rem;
  }
  
  .marquee h1 {
    font-size: 18vw;
  }
}

/* Styles avancés pour les animations ScrollTrigger améliorées */
.card {
  transform-style: preserve-3d;
  perspective: 1000px;
  will-change: transform, opacity, filter;
}

.card-wrapper {
  transform-style: preserve-3d;
  will-change: transform, opacity, filter, box-shadow;
  transition: box-shadow 0.3s ease;
}

.card-img {
  transform-style: preserve-3d;
  will-change: transform, filter, border-radius;
}

.card-content {
  transform-style: preserve-3d;
  will-change: transform, opacity;
  perspective: 800px;
}

.char span {
  transform-style: preserve-3d;
  will-change: transform, opacity, scale;
  transform-origin: center bottom;
}

.spec-item {
  position: relative;
  overflow: hidden;
}

.spec-item::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -100%;
  width: 100%;
  height: calc(100% + 4px);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.6s ease;
}

.spec-item:hover::before {
  left: 100%;
}

.floating-object {
  will-change: transform, scale, opacity;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.floating-object:hover {
  opacity: 0.6;
  filter: blur(0px);
  transform: scale(1.2);
}

/* Styles simplifiés pour éviter les problèmes de superposition */
.card {
  position: relative;
  z-index: 10;
  visibility: visible;
  opacity: 1;
}

/* Transitions simplifiées et propres */
.card {
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.card-wrapper {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.card-content {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Animation de progression visuelle */
.card.focused .card-description {
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transform: translateY(-10px);
}

.card.focused .card-title h1 {
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
  transform: scale(1.05) translateY(-5px);
}

/* Optimisations performance améliorées */
.card, .card-wrapper, .card-img, .card-content {
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Optimisation rendu des images */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  transform: translateZ(0);
  will-change: transform, filter;
}

/* Prévention des reflows */
.intro-car-capsule,
.card-img,
.marquee {
  contain: layout style paint;
}

/* GPU acceleration pour animations critiques */
.navbar-capsule,
.sidebar,
.card-marquee,
.intro-car-capsule {
  transform: translateZ(0);
  will-change: transform;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Animation de brillance pour les valeurs */
.animated-value {
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: valueGlow 2s ease-in-out infinite alternate;
}

@keyframes valueGlow {
  0% {
    filter: brightness(1) contrast(1);
  }
  100% {
    filter: brightness(1.2) contrast(1.1);
  }
}

/* Animation premium des prix */
.price-tag {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 1.1rem;
  animation: priceShine 3s ease-in-out infinite;
}

@keyframes priceShine {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.3);
  }
}

/* =============================================================================
   STYLES HARMONISÉS POUR TOUTES LES CARTES (Anciennes + Nouvelles)
============================================================================= */

/* Note: Toutes les nouvelles sections utilisent maintenant la classe .card 
   et héritent des styles existants pour une parfaite harmonie */

/* Footer Capsule */
.footer-capsule {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-capsule::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 30px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand h3 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.footer-brand p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  font-style: italic;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-column h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-column a:hover {
  color: white;
  transform: translateX(5px);
}

.footer-social {
  text-align: center;
  margin-bottom: 40px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.social-link {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-capsule-badge {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 25px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-capsule-badge span {
  font-weight: 600;
  color: white;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.capsule-indicator {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #00ff87, #60efff);
  border-radius: 50%;
  animation: capsulePulse 2s ease-in-out infinite;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 300;
}

/* Responsive Design pour les nouvelles sections */
@media (max-width: 1024px) {
  .heritage-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .showcase-header h2,
  .features-header h2,
  .heritage-text h2 {
    font-size: 3rem;
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .heritage-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .showcase-premium,
  .features-section,
  .heritage-section {
    padding: 60px 20px;
  }
  
  .showcase-header h2,
  .features-header h2,
  .heritage-text h2 {
    font-size: 2.5rem;
  }
  
  .footer-content {
    padding: 60px 20px 20px;
  }
  
  .footer-brand h3 {
    font-size: 2rem;
  }
}

</style>
