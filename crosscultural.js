// === Cross-Cultural: Map Initialization ===
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const mapEl = document.getElementById('amulet-map');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('amulet-map').setView([20, 0], 2);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© CARTO © OpenStreetMap contributors',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    map.on('load', function(){
      map.getContainer().style.filter = 'brightness(0.8) contrast(1.2)';
    });

    var amulets = [
      { name: "Egyptian Scarab", country: "Egypt", lat: 26.8, lng: 30.8, image: "images/objects/scarab.jpg", description: "Symbol of rebirth and protection. Worn as a pendant, often made of stone or faience. Believed to bring luck and guard against evil." },
      { name: "Japanese Omamori", country: "Japan", lat: 36.2, lng: 138.2, image: "images/objects/omamori.jpg", description: "Cloth pouch with a prayer inside. Sold at shrines, protects from misfortune and brings luck. Each omamori is for a specific aspect of life." },
      { name: "Mexican Ojo de Venado", country: "Mexico", lat: 23.6, lng: -102.5, image: "images/objects/ojo_venado.jpg", description: "\"Deer Eye\" seed amulet, protects from the evil eye. Traditionally worn by children and adults alike." },
      { name: "Bantu Fetish", country: "Africa", lat: -28.2, lng: 24.7, image: "images/objects/bantu_fetish.jpg", description: "Ritual object believed to house spirits or protective forces. Used in ceremonies for healing and protection." },
      { name: "Korean Shamanic Knife", country: "Korea", lat: 36.5, lng: 127.8, image: "images/objects/korean_knife.jpg", description: "Used in rituals to ward off evil spirits and protect the home. Symbolizes cutting away misfortune." },
      { name: "St. Benedict Medal", country: "Europe", lat: 41.9, lng: 12.5, image: "images/objects/st_benedict.jpg", description: "Christian medal invoking protection against evil. Worn or placed in homes for spiritual defense." },
      { name: "Slavic Protective Doll", country: "Europe", lat: 55.8, lng: 37.6, image: "images/objects/slavic_doll.jpg", description: "Handmade doll, often without a face, used to guard children and homes from harm in Slavic traditions." },
      { name: "Ægishjálmr (Helm of Awe)", country: "Nordic", lat: 60.5, lng: 8.5, image: "images/objects/aegishjalmr.jpg", description: "Magical symbol painted or carved for protection in battle and to instill fear in enemies." },
      { name: "NFT Digital Amulet", country: "Modern", lat: 40.7, lng: -74.0, image: "images/objects/nft_qr.jpg", description: "Digital token representing protection or luck in the virtual world. A modern take on ancient beliefs." },
      { name: "RPG Magic Amulet", country: "Modern", lat: 34.1, lng: -118.2, image: "images/objects/rpg_amulet.jpg", description: "Inspired by fantasy games, symbolizes the enduring power of magical thinking in pop culture." }
    ];

    function createCustomIcon(imagePath) {
      return L.divIcon({
        html: `<img src="${imagePath}" style="width: 45px; height: 45px; border-radius: 50%; border: 3px solid var(--gold); background: #000; box-shadow: 0 0 15px rgba(245,231,195,0.5), 0 0 30px rgba(245,231,195,0.3); object-fit: cover;">`,
        className: 'custom-marker',
        iconSize: [45, 45],
        iconAnchor: [22.5, 22.5]
      });
    }

    amulets.forEach(function(amulet) {
      var marker = L.marker([amulet.lat, amulet.lng], { icon: createCustomIcon(amulet.image) }).addTo(map);
      var popupContent = `
        <div style="text-align: center; min-width: 220px; background: rgba(0,0,0,0.9); border-radius: 12px; padding: 15px; box-shadow: 0 0 20px rgba(245,231,195,0.3);">
          <img src="${amulet.image}" style="width: 90px; height: 90px; border-radius: 50%; border: 3px solid var(--gold); margin-bottom: 12px; object-fit: cover; box-shadow: 0 0 15px rgba(245,231,195,0.4);">
          <h3 style="color: var(--gold); margin: 8px 0; font-size: 1.1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">${amulet.name}</h3>
          <p style="color: var(--gold); font-size: 0.9rem; margin: 0; line-height: 1.4; opacity: 0.9;">${amulet.description}</p>
        </div>`;
      marker.bindPopup(popupContent);
    });
  });
})();

// === Cross-Cultural: Book Navigation ===
(function(){
  let currentPage = 0;
  const totalPages = 3;
  let startX = 0;
  let endX = 0;

  function showPage(pageIndex) {
    const spreads = document.querySelectorAll('.book-spread');
    const dots = document.querySelectorAll('.page-dot');
    
    // Скрываем все страницы
    spreads.forEach(spread => {
      spread.classList.remove('active');
      spread.style.opacity = '0';
      spread.style.visibility = 'hidden';
      spread.style.zIndex = '1';
      spread.style.pointerEvents = 'none';
    });
    
    // Убираем активное состояние со всех точек
    dots.forEach(dot => dot.classList.remove('active'));

    // Показываем нужную страницу
    if (spreads[pageIndex]) {
      const spread = spreads[pageIndex];
      spread.classList.add('active');
      spread.style.opacity = '1';
      spread.style.visibility = 'visible';
      spread.style.zIndex = '10';
      spread.style.pointerEvents = 'auto';
      
      // Активируем соответствующую точку
      if (dots[pageIndex]) {
        dots[pageIndex].classList.add('active');
      }
      
      currentPage = pageIndex;
    }
    
    // Обновляем состояние кнопок навигации
    updateNavigation();
  }
  
  function updateNavigation() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
      prevBtn.disabled = currentPage === 0;
    }
    
    if (nextBtn) {
      nextBtn.disabled = currentPage === totalPages - 1;
    }
  }
  
  function previousPage() {
    if (currentPage > 0) {
      showPage(currentPage - 1);
    }
  }
  
  function nextPage() {
    if (currentPage < totalPages - 1) {
      showPage(currentPage + 1);
    }
  }
  
  function goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      showPage(pageIndex);
    }
  }

  function updateNavigation() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;
  }

  function goToPage(pageIndex) { if (pageIndex >= 0 && pageIndex < totalPages) showPage(pageIndex); }
  function nextPage() { if (currentPage < totalPages - 1) showPage(currentPage + 1); }
  function previousPage() { if (currentPage > 0) showPage(currentPage - 1); }
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) nextPage(); else previousPage();
    }
  }

  function initializeTexts() {
    console.log('Инициализация текстов...');
    console.log('Доступные тексты:', Object.keys(window.narrativeTexts || {}));
    
    Object.keys(window.narrativeTexts || {}).forEach(story => {
      console.log('Инициализирую историю:', story);
      
      const textElement = document.getElementById(`${story}-text`);
      if (textElement) {
        // Устанавливаем текст по умолчанию (brief)
        const defaultText = window.narrativeTexts[story].brief;
        if (defaultText) {
          textElement.textContent = defaultText;
          console.log('Установлен текст по умолчанию для истории:', story);
        }
      } else {
        console.error('Элемент текста не найден для истории:', story);
      }
      
      // Активируем первую кнопку (General)
      const firstButton = document.querySelector(`[data-story="${story}"] .text-level-btn:first-child`);
      if (firstButton) {
        firstButton.classList.add('active');
        console.log('Активирована первая кнопка для истории:', story);
      } else {
        console.error('Кнопка не найдена для истории:', story);
      }
    });
    
    console.log('Инициализация текстов завершена');
  }

  // Тексты для разных уровней сложности
  window.narrativeTexts = {
    slavic: {
      brief: `A Thread of Protection, Woven by Hand

In the Slavic world, dolls were never mere toys. They were guardians. Known as motanki—from the word motat, meaning "to wind" or "twist"—these faceless protective figures were handmade from cloth, straw, thread, and intention. Created without needles or knots, they were bound together through ritual gestures, often passed from mother to daughter.

The absence of a face was crucial. According to folk belief, giving the doll a face could trap a soul inside or allow spirits to enter. A faceless doll, by contrast, served as a vessel of energy—pure, symbolic, and untouchable. It was not just a representation of a person, but of a protective presence. People placed motanki in cribs, attics, windowsills, and barns to guard against misfortune, illness, and the evil eye.

Motanki were often made during liminal moments—births, weddings, the start of spring—when the boundary between the human and the spiritual was thought to thin. Each doll's form, colors, and patterns held symbolic weight: red thread for life force, cross patterns for the sun, knots (if present) for sealing protective energy.

Today, motanki have experienced a revival. Artisans, folklorists, and spiritual practitioners across Ukraine, Poland, and Belarus recreate them not just as cultural heritage, but as symbols of ancestral memory, feminine resilience, and protection in a fast-moving world. What was once hung above a child's bed now graces altars, exhibitions, and wellness spaces—still faceless, still powerful.`,
      
      medium: `Apotropaic Function and Gendered Craft in Eastern European Folk Cosmology

The Slavic motanka (мотанка) is a ritualistic textile object whose primary function lies in the apotropaic domain. These faceless dolls—wound by hand without the use of needles or knots—are rooted in pre-Christian cosmologies across Eastern Europe, particularly within Ukrainian, Belarusian, and Russian cultural spheres. Their enduring presence in folk practice underscores the role of female domestic labor as both artisanal and spiritual.

Materially, motanki are composed of accessible organic elements: linen, hemp, wool thread, straw, and recycled fabric. Symbolic encoding is visible in the chromatic choices (e.g., red for life force, black for boundaries), and cross-patterned facial markings (or their deliberate absence) reflect solar or divine symbolism. The refusal to depict a face was not merely aesthetic; it followed a cosmological logic—facial features would grant the object a soul, potentially inviting possession or unintended agency.

Functionally, motanki straddle both domestic utility and liminality. They are produced during life transitions—birth, marriage, sowing season—not as toys, but as talismanic agents intended to guard, absorb, or redirect energy. Their placement within the home (e.g., thresholds, cribs, hearths) supports their role as protective intercessors between the household and external spiritual threat.

Recent ethnographic revivals of the motanka coincide with broader discourses in post-Soviet cultural reclamation, eco-spirituality, and feminist folk aesthetics. Their recontextualization in contemporary art, museum installations, and ritual practice affirms their continued vitality as vessels of ancestral knowledge and vernacular metaphysics.`,
      
      long: `A long time ago, in a snowy village hidden between whispering forests, there lived a kind grandmother who made dolls from scraps of cloth and thread. But these weren't ordinary dolls. They had no faces — because they weren't meant for playing. They were made for protecting.

She would sit by the fire, twist soft linen into little arms, wrap the body with red string for courage, blue for peace, and green for growing things. She'd whisper tiny wishes into each doll: "Keep baby Nadia safe," or "Help this home feel warm and loved." Then she'd place the dolls near cradles, windows, or doors. And they would listen. Quietly. Always watching.

One night, a doll without a face stood on the windowsill of a lonely cottage. When a storm howled and shadows danced through the trees, the doll stayed still — guarding the little girl sleeping inside. Some say she caught the wind in her arms and kept the bad dreams away.

In many Slavic lands, people still make these faceless friends, calling them motanki. They don't have eyes — because they see with their heart. And they never speak — because they're always listening.

Legend says: If you ever feel scared at night, imagine a motanka near your pillow. She'll guard your dreams until morning.`
    },
    
    turkish: {
      brief: `The Gaze That Reflects and Deflects

The nazar boncuğu, or evil eye bead, is among the most enduring talismans of protection in human history. Found in homes, jewelry, storefronts, and even cars throughout Turkey and the eastern Mediterranean, this deep-blue amulet represents an ancient belief: that the human gaze can carry destructive power.

Rooted in a concept found across cultures—from ancient Greece to Persia and North Africa—the evil eye is the idea that envy or excessive admiration can unconsciously harm its subject. The nazar bead counters this with its own unblinking eye: a stylized, concentric design of blue, white, and black glass, fired by hand and often worn on the body.

The symbol draws from pre-Islamic and even pre-monotheistic traditions. Ottoman artisans in the 15th century refined its now-iconic form, blending Islamic aesthetics with Mediterranean glasswork. It was not unusual for entire families to wear eye-beads sewn into clothing or embedded in the walls of homes.

There are stories of the nazar cracking at critical moments—"catching" the misfortune before it reached its target. Its power lies not in aggression, but in reflection. It sees for you, absorbs the negativity, and breaks when it must.

In the digital age, the nazar is more than a physical charm; it's an emoji, a meme, a tattoo, a hashtag. It travels through Instagram stories, TikTok reels, and text messages as a symbol of personal boundaries and emotional resilience. Once forged in village kilns, it now circulates in the cloud—watching, still, from behind the screen.`,
      
      medium: `From Apotropaic Symbol to Cultural Semiotic: The Evolution of the Nazar

The nazar boncuğu—commonly known as the Turkish evil eye amulet—presents one of the most enduring examples of apotropaic semiotics in the Mediterranean cultural continuum. Its iconic blue-and-white concentric design functions as both an aesthetic object and a protective signifier, believed to deflect malicious gazes fueled by envy (nazar).

Anthropologically, belief in the evil eye transcends Turkish boundaries, echoing across Semitic, Hellenic, and Indo-European cosmologies. However, the Ottoman Empire formalized its production through artisanal glass workshops (cam atölyeleri) particularly in regions like İzmir and Görece, where bead-making lineages continue today. These beads, often made via lampwork techniques, are traditionally hung in liminal spaces (doorways, vehicles, newborn cradles), transforming them into spatial guardians.

The symbol's power is derived from mimesis: the painted "eye" is meant to reflect or "catch" the intrusive gaze before harm is done. Its function is not retaliatory but absorptive, operating within a moral framework that links envy to spiritual imbalance. Many oral traditions recount stories of the boncuk shattering in moments of danger—interpreted as evidence of successful intercession.

Contemporary semiotic scholars have tracked the nazar's migration into digital culture—where it now circulates as emoji (🧿), profile iconography, and algorithmic charm. This shift from tactile object to digital symbol illustrates not only the adaptability of folkloric motifs but also the continuity of magical thinking within technologically mediated environments. As such, the nazar boncuğu stands at the intersection of embodied craft, visual culture, and semiotic resilience.`,
      
      long: `👁 The Eye That Never Slept
(Turkish Evil Eye – Nazar Boncuğu)

Once upon a sea-blue time, there was a little glass eye that could see what humans could not — jealousy. It had no voice, no legs, and no hands, but it watched. And when it saw envy creeping like a shadow, it blinked with a shimmer and made it vanish.

This magical eye was born in a seaside workshop, made of sand, fire, and saltwater whispers. A glassblower shaped it with care, swirling dark blue for protection, white for light, and black for focus — just like a real pupil. Then he blew on it gently and said: "Now go. Keep the sparkle safe."

Children wore it on bracelets, mothers hung it above cradles, and travelers tied it to their bags. Some even stuck it to their phones or drew it near their names. And guess what? Whenever someone stared with too much envy — when they wished for what wasn't theirs — the little blue eye would glow. And sometimes… even crack! That meant it had caught the bad feeling — and protected its friend.

Storytellers say: If your eye amulet ever breaks, don't be sad. It did its job. And you can thank it with a smile, because it broke for you.`
    },
    
    egyptian: {
      brief: `The Beetle That Rolled the Sun

To modern eyes, the scarab may look like a simple beetle. But to the ancient Egyptians, it was the embodiment of Khepri, the solar deity who renewed the world each morning by rolling the sun across the sky—just as the scarab beetle (Scarabaeus sacer) rolls a ball of dung across the earth. This humble creature, found in the desert sands, became one of the most powerful symbols of rebirth, transformation, and divine protection.

Carved from steatite, carnelian, lapis lazuli, or faience, scarabs were often engraved on the flat side with protective prayers, names of pharaohs, or hieroglyphic spells. They were worn as rings and amulets in life and sewn onto linen wrappings in death. Heart scarabs, in particular, were placed over the chest of mummies to ensure safe passage through the afterlife. The Book of the Dead instructed that they silence the heart's testimony during judgment, helping the soul achieve eternal balance.

Scarabs also played a political role—used as seals, tokens of loyalty, and even diplomatic gifts. Their mass production shows both the spiritual devotion and the bureaucratic complexity of ancient Egyptian society.

Even today, the image of the scarab endures. It's found in museums, jewelry, film, and spiritual practice. For some, it is a nod to ancient mystery; for others, a reminder of the cycles of life, death, and renewal. Once a sun god's symbol, it now rolls through modern time—quietly, persistently, toward the light.`,
      
      medium: `Khepri's Emblem: Scarab Amulets as Funerary Technology and Ontological Symbol

In ancient Egyptian religious and funerary practice, the scarab beetle (Scarabaeus sacer) served as both a tangible artifact and a conceptual model for metaphysical transformation. Representing the solar deity Khepri—whose daily task was to push the sun across the sky—the scarab became a symbol of becoming, closely tied to rebirth, motion, and divine regeneration.

Materially, scarabs were fashioned from steatite, faience, jasper, or semi-precious stones, often glazed and inscribed with spells, personal names, or iconographic motifs. The obverse side was carved into the shape of a dung beetle, while the flat reverse typically bore textual content. During the Middle Kingdom (c. 2055–1650 BCE), these objects proliferated as amulets, administrative seals, and political tokens. Their role expanded significantly in the New Kingdom, where they became integral to burial rites—especially heart scarabs, which accompanied mummified bodies and were inscribed with Chapter 30B of the Book of the Dead, intended to silence the heart during judgment.

The scarab's association with regeneration is biologically grounded in the beetle's reproductive behavior: laying eggs within dung balls, which were mistaken by Egyptians as spontaneous creation. Thus, the insect's lifecycle offered a microcosmic analogy for creation ex nihilo—a vital theme in Egyptian cosmogony.

Modern Egyptology recognizes scarabs not only as devotional or magical objects but as instruments of sociopolitical identity. Their wide distribution across Egypt and Canaan reflects a complex system of symbolic diplomacy, elite display, and spiritual function. Recent archaeological finds continue to demonstrate the scarab's role in the ritual engineering of the afterlife, where material, language, and cosmology converge.`,
      
      long: `Deep in the golden sands of ancient Egypt, when the pyramids still sparkled under the sun, there lived a tiny beetle with a very big job. His name was Khepri, and every morning he rolled the glowing sun across the sky — like a giant ball of light.

He wasn't strong because of muscles. He was strong because he believed in new beginnings. People watched him work and said, "This beetle is magic. He brings the sun. He brings life."

So, they made amulets shaped like beetles — called scarabs. These shiny little friends were carved from green stone, blue glaze, or smooth black rock. Some had writing on their bellies: spells for protection, names of pharaohs, or wishes for a journey after life.

They were placed over hearts in tombs, sewn into royal clothes, and worn around necks for luck. Children were told, "If a scarab watches over you, the sun will always rise again."

Even today, scarabs can be found in museums, jewelry, and stories. They remind us that no matter how dark the night, a new day is waiting to roll in — just like Khepri's golden sun.

Remember: If you ever feel stuck, whisper to a scarab, "Help me roll through this." He might just lend you his strength.`
    }
  };

  // Проверяем, что функции определены глобально

  // Expose functions used by inline handlers
  window.goToPage = goToPage;
  window.nextPage = nextPage;
  window.previousPage = previousPage;
  window.setNarrativeLevel = function setNarrativeLevel(story, level) {
    console.log('setNarrativeLevel вызвана:', story, level);
    
    const textElement = document.getElementById(`${story}-text`);
    const buttons = document.querySelectorAll(`[data-story="${story}"] .text-level-btn`);
    
    console.log('Найден элемент текста:', textElement);
    console.log('Найдены кнопки:', buttons.length);
    
    if (!textElement) {
      console.error('Элемент текста не найден для истории:', story);
      return;
    }
    
    // Анимация исчезновения
    textElement.style.opacity = '0';
    textElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      const data = window.narrativeTexts?.[story]?.[level];
      console.log('Данные для уровня:', data);
      
      if (data) {
        textElement.textContent = data;
        console.log('Текст обновлен для уровня:', level);
      } else {
        textElement.textContent = 'Text not available for this level.';
        console.error('Текст недоступен для уровня:', level, 'в истории:', story);
      }
      
      // Анимация появления
      textElement.style.opacity = '1';
      textElement.style.transform = 'translateY(0)';
    }, 200);
    
    // Обновляем активную кнопку
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.toLowerCase().includes(level) || 
          (level === 'brief' && btn.textContent === 'General') ||
          (level === 'medium' && btn.textContent === 'Expert') ||
          (level === 'long' && btn.textContent === 'Scholar')) {
        btn.classList.add('active');
      }
    });
    
    // Обновляем прогресс, если система прогресса доступна
    if (window.progressSystem) {
      window.progressSystem.updatePathProgress('crosscultural', `story_${story}_${level}`);
    }
  };

  document.addEventListener('DOMContentLoaded', function(){
    // initial page
    showPage(0);
    const firstSpread = document.querySelector('.book-spread:first-child');
    if (firstSpread) {
      firstSpread.classList.add('active');
      firstSpread.style.opacity = '1';
      firstSpread.style.visibility = 'visible';
      firstSpread.style.display = 'flex';
      firstSpread.style.zIndex = '10';
    }
    const otherSpreads = document.querySelectorAll('.book-spread:not(:first-child)');
    otherSpreads.forEach(spread => {
      spread.classList.remove('active');
      spread.style.opacity = '0';
      spread.style.visibility = 'hidden';
      spread.style.zIndex = '1';
    });
    document.querySelectorAll('.page-dot').forEach((dot, index) => {
      dot.addEventListener('click', () => goToPage(index));
    });
    const bookContainer = document.querySelector('.book-container');
    if (bookContainer) {
      bookContainer.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
      bookContainer.addEventListener('touchend', (e) => { endX = e.changedTouches[0].clientX; handleSwipe(); });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') previousPage();
      else if (e.key === 'ArrowRight') nextPage();
    });
    initializeTexts();
  });
})();

// === Cross-Cultural: Culture Cards ===
(function(){
  function updateActiveCultureCard(activeRegion) {
    const cultureCards = document.querySelectorAll('.culture-region-card');
    cultureCards.forEach(card => {
      if (activeRegion && card.dataset.region === activeRegion) {
        card.style.borderColor = 'rgba(244, 228, 188, 0.8)';
        card.style.boxShadow = '0 0 30px rgba(244, 228, 188, 0.4)';
      } else {
        card.style.borderColor = 'rgba(244, 228, 188, 0.3)';
        card.style.boxShadow = 'none';
      }
    });
  }

  function showAllCultures() {
    const amuletSections = document.querySelectorAll('.culture-section:not([data-region*="culture"])');
    amuletSections.forEach(section => {
      section.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; z-index: 100 !important;';
      section.classList.add('show', 'visible');
      section.style.animation = 'fadeInUp 0.6s ease-out';
    });
    const cultureSections = document.querySelectorAll('.culture-section[data-region*="culture"]');
    cultureSections.forEach(section => { 
      section.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
      section.classList.remove('show', 'visible');
    });
    updateActiveCultureCard('all');
    const showAllBtn = document.querySelector('.show-all-cultures-btn');
    const hideAllBtn = document.querySelector('.hide-all-cultures-btn');
    if (showAllBtn && hideAllBtn) { showAllBtn.style.display = 'none'; hideAllBtn.style.display = 'inline-flex'; }
    const amuletsSection = document.querySelector('.amulet-cultures-grid');
    if (amuletsSection) amuletsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function hideAllCultures() {
    const amuletSections = document.querySelectorAll('.culture-section:not([data-region*="culture"])');
    amuletSections.forEach(section => { 
      section.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
      section.classList.remove('show', 'visible');
    });
    const cultureSections = document.querySelectorAll('.culture-section[data-region*="culture"]');
    cultureSections.forEach(section => { 
      section.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
      section.classList.remove('show', 'visible');
    });
    updateActiveCultureCard(null);
    const showAllBtn = document.querySelector('.show-all-cultures-btn');
    const hideAllBtn = document.querySelector('.hide-all-cultures-btn');
    if (showAllBtn && hideAllBtn) { showAllBtn.style.display = 'inline-flex'; hideAllBtn.style.display = 'none'; }
  }

  // Функции для показа секций
  window.showCultureSection = function(region) {
    console.log('=== showCultureSection вызвана для региона:', region);
    
    // Скрываем ВСЕ секции (и культуры, и амулеты) с принудительным скрытием
    const allSections = document.querySelectorAll('.culture-section');
    console.log('Найдено секций для скрытия:', allSections.length);
    
    allSections.forEach((section, index) => { 
      console.log(`Скрываю секцию ${index + 1}:`, section.dataset.region);
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
    });
    
    // Показываем нужную секцию культуры
    const cultureSection = document.querySelector(`[data-region="${region}-culture"]`);
    console.log('Ищем секцию культуры:', `[data-region="${region}-culture"]`);
    console.log('Найдена секция культуры:', cultureSection);
    
    if (cultureSection) { 
      console.log('Показываю секцию культуры для региона:', region);
      cultureSection.style.setProperty('display', 'block', 'important');
      cultureSection.style.setProperty('visibility', 'visible', 'important');
      cultureSection.style.setProperty('opacity', '1', 'important');
      cultureSection.style.setProperty('z-index', '100', 'important');
      cultureSection.style.setProperty('position', 'relative', 'important');
      cultureSection.style.setProperty('left', 'auto', 'important');
      cultureSection.style.setProperty('height', 'auto', 'important');
      cultureSection.style.setProperty('overflow', 'visible', 'important');
      cultureSection.style.setProperty('margin', 'auto', 'important');
      cultureSection.style.setProperty('padding', 'auto', 'important');
      cultureSection.style.animation = 'fadeInUp 0.6s ease-out'; 
      
      // Прокручиваем к открытому окну
      console.log('Начинаю прокрутку к секции...');
      setTimeout(() => {
        console.log('Выполняю прокрутку к секции');
        cultureSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    
    updateActiveCultureCard(region);
    const showAllBtn = document.querySelector('.show-all-cultures-btn');
    const hideAllBtn = document.querySelector('.hide-all-cultures-btn');
    if (showAllBtn && hideAllBtn) { showAllBtn.style.display = 'inline-flex'; hideAllBtn.style.display = 'none'; }
  };

  window.showAmuletsForCulture = function(region) {
    console.log('=== showAmuletsForCulture вызвана для региона:', region);
    
    // Скрываем ВСЕ секции (и культуры, и амулеты) с принудительным скрытием
    const allSections = document.querySelectorAll('.culture-section');
    console.log('Найдено секций для скрытия:', allSections.length);
    
    allSections.forEach((section, index) => { 
      console.log(`Скрываю секцию ${index + 1}:`, section.dataset.region);
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
    });
    
    // Показываем нужную секцию амулета - ищем точно по data-region
    const amuletSection = document.querySelector(`.culture-section[data-region="${region}"]`);
    console.log('Ищем секцию амулета:', `.culture-section[data-region="${region}"]`);
    console.log('Найдена секция амулета:', amuletSection);
    
    if (amuletSection) {
      console.log('Показываю секцию амулета для региона:', region);
      amuletSection.style.setProperty('display', 'block', 'important');
      amuletSection.style.setProperty('visibility', 'visible', 'important');
      amuletSection.style.setProperty('opacity', '1', 'important');
      amuletSection.style.setProperty('z-index', '100', 'important');
      amuletSection.style.setProperty('position', 'relative', 'important');
      amuletSection.style.setProperty('left', 'auto', 'important');
      amuletSection.style.setProperty('height', 'auto', 'important');
      amuletSection.style.setProperty('overflow', 'visible', 'important');
      amuletSection.style.setProperty('margin', 'auto', 'important');
      amuletSection.style.setProperty('padding', 'auto', 'important');
      amuletSection.style.animation = 'fadeInUp 0.6s ease-out';
      
      // Прокручиваем к открытому окну
      console.log('Начинаю прокрутку к секции...');
      setTimeout(() => {
        console.log('Выполняю прокрутку к секции');
        amuletSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Функция для показа всех амулетов
  window.showAllAmulets = function() {
    // Скрываем все секции культуры
    const cultureSections = document.querySelectorAll('.culture-section[data-region*="culture"]');
    cultureSections.forEach(section => { 
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
    });
    
    // Показываем все секции амулетов
    const amuletSections = document.querySelectorAll('.culture-section:not([data-region*="culture"])');
    amuletSections.forEach(section => {
      section.style.setProperty('display', 'block', 'important');
      section.style.setProperty('visibility', 'visible', 'important');
      section.style.setProperty('opacity', '1', 'important');
      section.style.setProperty('z-index', '100', 'important');
      section.style.setProperty('position', 'relative', 'important');
      section.style.setProperty('left', 'auto', 'important');
      section.style.setProperty('height', 'auto', 'important');
      section.style.setProperty('overflow', 'visible', 'important');
      section.style.setProperty('margin', 'auto', 'important');
      section.style.setProperty('padding', 'auto', 'important');
      section.style.animation = 'fadeInUp 0.6s ease-out';
    });
  };

  // Функция для принудительного показа конкретного амулета
  window.forceShowAmulet = function(region) {
    // Скрываем все секции
    const allSections = document.querySelectorAll('.culture-section');
    allSections.forEach(section => { 
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
    });
    
    // Ищем секцию амулета любым способом
    let amuletSection = document.querySelector(`.culture-section[data-region="${region}"]`);
    
    if (!amuletSection) {
      // Попробуем найти по-другому
      amuletSection = document.querySelector(`[data-region="${region}"]`);
    }
    
    if (!amuletSection) {
      // Попробуем найти среди всех секций
      const allSections = document.querySelectorAll('.culture-section');
      allSections.forEach(section => {
        if (section.dataset.region === region) {
          amuletSection = section;
        }
      });
    }
    
    if (amuletSection) {
      amuletSection.style.setProperty('display', 'block', 'important');
      amuletSection.style.setProperty('visibility', 'visible', 'important');
      amuletSection.style.setProperty('opacity', '1', 'important');
      amuletSection.style.setProperty('z-index', '100', 'important');
      amuletSection.style.setProperty('position', 'relative', 'important');
      amuletSection.style.setProperty('left', 'auto', 'important');
      amuletSection.style.setProperty('height', 'auto', 'important');
      amuletSection.style.setProperty('overflow', 'visible', 'important');
      amuletSection.style.setProperty('margin', 'auto', 'important');
      amuletSection.style.setProperty('padding', 'auto', 'important');
      amuletSection.style.animation = 'fadeInUp 0.6s ease-out';
      
      // Прокручиваем к открытому окну
      setTimeout(() => {
        amuletSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  document.addEventListener('DOMContentLoaded', function(){
    // Card setup
    const style = document.createElement('style');
    style.textContent = `@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }`;
    document.head.appendChild(style);
    
    // Добавляем глобальные функции для тестирования
    window.testShowCulture = function(region) {
      console.log('=== testShowCulture вызвана для региона:', region);
      
      // Скрываем ВСЕ секции (и культуры, и амулеты) с принудительным скрытием
      const allSections = document.querySelectorAll('.culture-section');
      console.log('Найдено секций для скрытия:', allSections.length);
      
      allSections.forEach((section, index) => { 
        console.log(`Скрываю секцию ${index + 1}:`, section.dataset.region);
        section.style.setProperty('display', 'none', 'important');
        section.style.setProperty('visibility', 'hidden', 'important');
        section.style.setProperty('opacity', '0', 'important');
        section.style.setProperty('z-index', '1', 'important');
        section.style.setProperty('position', 'absolute', 'important');
        section.style.setProperty('left', '-9999px', 'important');
        section.style.setProperty('height', '0', 'important');
        section.style.setProperty('overflow', 'hidden', 'important');
        section.style.setProperty('margin', '0', 'important');
        section.style.setProperty('padding', '0', 'important');
      });
      
      // Показываем нужную секцию культуры
      const cultureSection = document.querySelector(`.culture-section[data-region="${region}-culture"]`);
      console.log('Ищем секцию культуры:', `[data-region="${region}-culture"]`);
      console.log('Найдена секция культуры:', cultureSection);
      
      if (cultureSection) {
        console.log('Показываю секцию культуры для региона:', region);
        cultureSection.style.setProperty('display', 'block', 'important');
        cultureSection.style.setProperty('visibility', 'visible', 'important');
        cultureSection.style.setProperty('opacity', '1', 'important');
        cultureSection.style.setProperty('z-index', '100', 'important');
        cultureSection.style.setProperty('position', 'relative', 'important');
        cultureSection.style.setProperty('left', 'auto', 'important');
        cultureSection.style.setProperty('height', 'auto', 'important');
        cultureSection.style.setProperty('overflow', 'visible', 'important');
        cultureSection.style.setProperty('margin', 'auto', 'important');
        cultureSection.style.setProperty('padding', 'auto', 'important');
        
        // Прокручиваем к секции
        console.log('Начинаю прокрутку к секции...');
        setTimeout(() => {
          console.log('Выполняю прокрутку к секции');
          cultureSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        console.log(`Секция культуры для региона ${region} показана`);
      } else {
        console.error(`Секция культуры для региона ${region} не найдена`);
      }
    };
    
    window.testShowAmulets = function(region) {
      console.log('=== testShowAmulets вызвана для региона:', region);
      
      // Скрываем ВСЕ секции (и культуры, и амулеты) с принудительным скрытием
      const allSections = document.querySelectorAll('.culture-section');
      console.log('Найдено секций для скрытия:', allSections.length);
      
      allSections.forEach((section, index) => { 
        console.log(`Скрываю секцию ${index + 1}:`, section.dataset.region);
        section.style.setProperty('display', 'none', 'important');
        section.style.setProperty('visibility', 'hidden', 'important');
        section.style.setProperty('opacity', '0', 'important');
        section.style.setProperty('z-index', '1', 'important');
        section.style.setProperty('position', 'absolute', 'important');
        section.style.setProperty('left', '-9999px', 'important');
        section.style.setProperty('height', '0', 'important');
        section.style.setProperty('overflow', 'hidden', 'important');
        section.style.setProperty('margin', '0', 'important');
        section.style.setProperty('padding', '0', 'important');
      });
      
      // Для Европы и современности показываем первую доступную секцию
      let amuletSection;
      if (region === 'europe') {
        amuletSection = document.querySelector('.culture-section[data-region="europe-catholic"]');
      } else if (region === 'modern') {
        amuletSection = document.querySelector('.culture-section[data-region="modern-digital"]');
      } else {
        amuletSection = document.querySelector(`.culture-section[data-region="${region}"]`);
      }
      
      console.log('Ищем секцию амулета для региона:', region);
      console.log('Найдена секция амулета:', amuletSection);
      
      if (amuletSection) {
        console.log('Показываю секцию амулета для региона:', region);
        amuletSection.style.setProperty('display', 'block', 'important');
        amuletSection.style.setProperty('visibility', 'visible', 'important');
        amuletSection.style.setProperty('opacity', '1', 'important');
        amuletSection.style.setProperty('z-index', '100', 'important');
        amuletSection.style.setProperty('position', 'relative', 'important');
        amuletSection.style.setProperty('left', 'auto', 'important');
        amuletSection.style.setProperty('height', 'auto', 'important');
        amuletSection.style.setProperty('overflow', 'visible', 'important');
        amuletSection.style.setProperty('margin', 'auto', 'important');
        amuletSection.style.setProperty('padding', 'auto', 'important');
        
        // Прокручиваем к секции
        console.log('Начинаю прокрутку к секции...');
        setTimeout(() => {
          console.log('Выполняю прокрутку к секции');
          amuletSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        console.log(`Секция амулета для региона ${region} показана`);
      } else {
        console.error(`Секция амулета для региона ${region} не найдена`);
      }
    };
    
    // Специальные функции для показа конкретных амулетов
    window.showEuropeanCatholicAmulet = function() {
      console.log('=== showEuropeanCatholicAmulet вызвана');
      window.testShowAmulets('europe-catholic');
    };
    
    window.showEuropeanSlavicAmulet = function() {
      console.log('=== showEuropeanSlavicAmulet вызвана');
      window.testShowAmulets('europe-slavic');
    };
    
    window.showModernDigitalAmulet = function() {
      console.log('=== showModernDigitalAmulet вызвана');
      window.testShowAmulets('modern-digital');
    };
    
    window.showModernFantasyAmulet = function() {
      console.log('=== showModernFantasyAmulet вызвана');
      window.testShowAmulets('modern-fantasy');
    };
    
    // Функция для скрытия всех секций
    window.hideAllSections = function() {
      console.log('=== hideAllSections вызвана');
      
      const allSections = document.querySelectorAll('.culture-section');
      console.log('Скрываю все секции:', allSections.length);
      
      allSections.forEach((section, index) => { 
        console.log(`Скрываю секцию ${index + 1}:`, section.dataset.region);
        section.style.setProperty('display', 'none', 'important');
        section.style.setProperty('visibility', 'hidden', 'important');
        section.style.setProperty('opacity', '0', 'important');
        section.style.setProperty('z-index', '1', 'important');
        section.style.setProperty('position', 'absolute', 'important');
        section.style.setProperty('left', '-9999px', 'important');
        section.style.setProperty('height', '0', 'important');
        section.style.setProperty('overflow', 'hidden', 'important');
        section.style.setProperty('margin', '0', 'important');
        section.style.setProperty('padding', '0', 'important');
      });
      
      // Прокручиваем к началу блока с культурами
      const amuletsSection = document.querySelector('.amulets-section');
      if (amuletsSection) {
        amuletsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Если блок с культурами не найден, прокручиваем к началу страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      console.log('Все секции скрыты');
    };

    // Инициализация книги - показываем первую страницу
    showPage(0);
    
    // Скрываем все секции при загрузке
    const allAmuletSections = document.querySelectorAll('.culture-section:not([data-region*="culture"])');
    console.log('Скрываю амулет секции при загрузке:', allAmuletSections.length);
    allAmuletSections.forEach(section => { 
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
      section.classList.remove('show', 'visible');
    });
    
    const allCultureSections = document.querySelectorAll('.culture-section[data-region*="culture"]');
    console.log('Скрываю культура секции при загрузке:', allCultureSections.length);
    allCultureSections.forEach(section => { 
      section.style.setProperty('display', 'none', 'important');
      section.style.setProperty('visibility', 'hidden', 'important');
      section.style.setProperty('opacity', '0', 'important');
      section.style.setProperty('z-index', '1', 'important');
      section.style.setProperty('position', 'absolute', 'important');
      section.style.setProperty('left', '-9999px', 'important');
      section.style.setProperty('height', '0', 'important');
      section.style.setProperty('overflow', 'hidden', 'important');
      section.style.setProperty('margin', '0', 'important');
      section.style.setProperty('padding', '0', 'important');
      section.classList.remove('show', 'visible');
    });

    // Добавляем обработчики для навигации по книге
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => previousPage());
    if (nextBtn) nextBtn.addEventListener('click', () => nextPage());
    
    // Добавляем обработчики для точек навигации
    const pageDots = document.querySelectorAll('.page-dot');
    pageDots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToPage(index));
    });

    const cultureCards = document.querySelectorAll('.culture-region-card');
    
    const showAllBtn = document.querySelector('.show-all-cultures-btn');
    const hideAllBtn = document.querySelector('.hide-all-cultures-btn');

    // Детальная отладка для кнопок
    cultureCards.forEach((card, index) => {
      const exploreBtn = card.querySelector('.explore-culture-btn');
      const region = card.dataset.region;
      console.log(`Карточка ${index + 1}: регион ${region}, кнопка:`, exploreBtn);
      
      if (exploreBtn) {
        console.log(`Добавляю обработчик для кнопки Explore в регионе ${region}`);
        exploreBtn.addEventListener('click', function(e){ 
          console.log(`Explore button clicked for region: ${region}`);
          e.stopPropagation(); 
          if (typeof window.showCultureSection === 'function') {
            console.log('Вызываю window.showCultureSection');
            window.showCultureSection(region);
          } else {
            console.error('showCultureSection function not found!');
          }
        });
      }
      
      card.addEventListener('click', function(e){ 
        if (e.target !== exploreBtn && !e.target.classList.contains('amulet-tag')) {
          console.log(`Card clicked, showing culture section for: ${region}`);
          if (typeof window.showCultureSection === 'function') {
            window.showCultureSection(region);
          } else {
            console.error('showCultureSection function not found!');
          }
        }
      });
      
      const amuletTags = card.querySelectorAll('.amulet-tag');
      console.log(`Найдено тегов амулетов для региона ${region}:`, amuletTags.length);
      amuletTags.forEach((tag, tagIndex) => { 
        console.log(`Добавляю обработчик для тега амулета ${tagIndex + 1} в регионе ${region}`);
        tag.addEventListener('click', function(e){ 
          console.log(`Amulet tag clicked for region: ${region}`);
          e.stopPropagation(); 
          if (typeof window.showAmuletsForCulture === 'function') {
            console.log('Вызываю window.showAmuletsForCulture');
            window.showAmuletsForCulture(region);
          } else {
            console.error('showAmuletsForCulture function not found!');
          }
        }); 
      });
      
      card.addEventListener('mouseenter', function(){ this.style.transform = 'translateY(-8px) scale(1.02)'; });
      card.addEventListener('mouseleave', function(){ this.style.transform = 'translateY(0) scale(1)'; });
    });

    if (showAllBtn) showAllBtn.addEventListener('click', showAllCultures);
    if (hideAllBtn) hideAllBtn.addEventListener('click', hideAllCultures);
    
    console.log('Initialization complete');
    
    // Проверяем доступность функций
    console.log('=== ПРОВЕРКА ДОСТУПНОСТИ ФУНКЦИЙ ===');
    console.log('window.showCultureSection:', typeof window.showCultureSection);
    console.log('window.showAmuletsForCulture:', typeof window.showAmuletsForCulture);
    console.log('window.testShowCulture:', typeof window.testShowCulture);
    console.log('window.testShowAmulets:', typeof window.testShowAmulets);
    
    // Проверяем, что все секции скрыты
    const visibleSections = document.querySelectorAll('.culture-section[style*="display: block"]');
    console.log('Видимых секций после инициализации:', visibleSections.length);
    if (visibleSections.length > 0) {
      console.log('ВНИМАНИЕ: Найдены видимые секции после инициализации!');
      visibleSections.forEach((section, index) => {
        console.log(`Видимая секция ${index + 1}:`, section.dataset.region);
      });
    }
  });
})(); 