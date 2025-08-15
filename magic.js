document.addEventListener("DOMContentLoaded", () => {
  // 🧿 Amulet Text Data
  const amuletData = {
    1: {
      short: "This stone keeps you safe, like a magical shield from bad vibes.",
      full: `Dark and ancient, this amulet is carved from volcanic stone — a material born in fire, forged in pressure, and cooled by time. For millennia, mystics, warriors, and wanderers wore it as a barrier between their spirit and the chaos of the world.
 
  In early Mesopotamian and North African cultures, lava rock was seen as a keeper of Earth's earliest memories. Shamans claimed it could "drink" emotional noise from a person's energy field, absorbing anxiety, envy, or confusion like a sponge. Before battles or long voyages, the stone would be anointed with oils and placed over the heart to calm the nerves and anchor the soul.
 
  Today, in a world humming with digital overstimulation, it offers the same silent strength. Whether worn as a ring, clasped in a pocket, or set beside your laptop, its dense texture serves as a psychic buffer — grounding your thoughts, shielding your emotional core, and helping you filter what truly deserves your energy.`,
      use: `Volcanic stone — also known as basalt or lava rock — has long been revered as a grounding force. In ancient Mediterranean and East African rituals, it was believed to carry the Earth's primal memory. Warriors placed it in their sandals, healers wore it on their chest, and shamans placed it at the base of sacred fires.
 
  Its porous texture absorbs emotional residue — anger, doubt, confusion — and its dark color symbolizes both absorption and the mystery of the unseen. In the modern world, where overstimulation is constant (notifications, bright screens, emotional content), this amulet serves as a buffering agent.
 
  Worn near the body or placed near digital devices, it is said to create a psychic firewall, allowing the wearer to move through digital noise without losing their center.`
    },
 
    2: {
      short: "This eye sees for you — it reflects envy and shields your shine.",
      full: `Crafted in the form of a watchful blue eye, this amulet has guarded the luminous for centuries. From Istanbul to Athens, from Cairo to Belgrade, it's worn by those who draw attention — not by choice, but by nature.
 
  In Ottoman courts and coastal villages alike, artisans would fire glass into concentric rings of white, blue, and black — meant to mimic the human gaze. The belief: when envy is near, the amulet "catches" it, cracking or shattering to absorb what was meant for the wearer.
 
  Stories tell of a musician whose nazar shattered mid-performance — and later learned of a jealous rival who had cursed him. Another tale speaks of twins who were never sick a day in childhood — their grandmother had sewn a tiny eye-bead into each hem.
 
  Today, it still guards creators, children, influencers, performers — anyone who shines. Not through aggression, but through deflection. It does not attack. It watches, and it shields.`,
      use: `The blue eye — often called "nazar" — is found in homes, bracelets, doorways, and rear-view mirrors across the Mediterranean and Middle East. It's not just a superstition — it's a **signal** to the unseen: "I see you. Your energy stops here."
 
  Placed on phones, worn as jewelry, or pinned to clothing, the amulet is believed to **mirror back** jealousy, gossip, and unconscious projections. It's especially powerful when worn during high-visibility moments — launches, performances, first dates, or interviews.
 
  In digital life, it works symbolically: protecting your attention, your confidence, and your glow. The eye reminds you — your light doesn't need shrinking. It only needs shielding.`
    },
 
    3: {
      short: "Like a magic feather! It helps you move fast and be brave.",
      full: `This feather-shaped token was once worn by dancers and warriors. It channels energy for movement, risk-taking, and forward leaps — the kind you take before you're ready.
 
  There's an old story from the steppes of Central Asia, of a sky-runner named Ilan who could cross entire regions in a single night. People whispered that he didn't run — he flew — carried by a feather amulet gifted by a cloud spirit. His enemies never caught him; his lovers never forgot him. Before his final journey, he buried the talisman in a cliffside nest and said, "Only the next brave soul will find it."
 
  This myth lives on in symbols: wings tattooed on ankles, feathers tied to backpacks, charms on phone cases. Wherever people prepare to leap — into new jobs, cities, identities — the feather quietly flutters with them, reminding: speed is not rush, it's trust in your next step.`,
      use: `Crafted from obsidian-dyed birdbone or brass etched with aerial runes, this amulet was a favorite of nomadic dancers and messengers in early Silk Road cultures. Known as "Wing of the Invisible," it was believed to grant the wearer not just speed of body, but clarity in decisive motion — both physical and emotional.
 
  Before battles or performances, wearers would whisper personal intentions into the token. Archaeologists have found similar items near riverbeds and cliffside camps, often engraved with directional glyphs or paired with boots worn thin by long journeys.
 
  Today, the feather has returned in symbolic form on tattoos, logos, and charms worn by creators, freelancers, and digital nomads — anyone who needs to leap before they're sure. It's not just a token of action, but of **momentum** in uncertain terrain.`
    },

    4: {
      short: "Digital talisman that protects your virtual identity and online presence.",
      full: `The NFT amulet represents the modern evolution of protective magic in the digital realm. Unlike traditional amulets carved from stone or metal, this ethereal token exists as a unique digital signature on the blockchain — a permanent, unchangeable record of your digital essence.
 
  In ancient times, shamans would create talismans to protect the soul. Today, in our interconnected digital world, we need protection for our virtual selves. The NFT amulet serves as a guardian of your online identity, your digital footprint, and your creative work in the vast expanse of the internet.
 
  Each NFT amulet is unique, carrying its own magical properties and protective energies. Some are designed to shield against digital negativity, others to amplify creative energy, and some to attract abundance in the virtual marketplace. They represent the bridge between ancient mystical practices and modern technological innovation.`,
      use: `NFT amulets work by creating a sacred digital space around your online presence. When you own an NFT amulet, you're not just holding a digital asset — you're carrying a piece of protective magic that travels with you through the digital realm.
 
  These amulets can be displayed in your digital wallet, used as profile pictures, or integrated into your online platforms. They serve as reminders of your digital sovereignty and protect your creative energy from being drained by the constant demands of online life.
 
  In the modern world of social media, content creation, and digital commerce, the NFT amulet represents a new form of spiritual protection — one that understands the unique challenges and opportunities of our digital age.`
    },

    5: {
      short: "Gaming charm that enhances your virtual adventures and digital quests.",
      full: `The RPG amulet is a modern talisman designed for the digital adventurer. It represents the fusion of ancient magical traditions with the immersive worlds of role-playing games and virtual reality. This amulet doesn't just protect — it enhances, empowers, and guides you through your digital journeys.
 
  In traditional RPGs, players would carry lucky charms or magical items to boost their characters' abilities. The RPG amulet brings this concept into reality, serving as a physical reminder of your gaming prowess and a talisman for your digital adventures. It's designed for gamers, streamers, developers, and anyone who spends significant time in virtual worlds.
 
  The amulet channels the energy of countless digital quests, battles, and achievements. It's imbued with the spirit of exploration, strategy, and the thrill of discovery that makes gaming such a powerful and engaging experience.`,
      use: `The RPG amulet works by creating a connection between your physical reality and your digital experiences. When you wear or carry this amulet, you're not just accessing a piece of jewelry — you're tapping into a reservoir of gaming energy and digital wisdom.
 
  This amulet is particularly powerful for content creators, streamers, and competitive gamers. It can help maintain focus during long gaming sessions, enhance strategic thinking, and provide protection against the negative aspects of online gaming culture.
 
  In the modern world where virtual and physical realities increasingly overlap, the RPG amulet serves as a bridge between these realms, helping you navigate both with confidence and magical protection.`
    }
  };

  // === Новый блок амулетов ===
  const amuletCards = document.querySelectorAll('.amulet-card');
  const amuletDescBox = document.querySelector('.amulet-description-box');
  const amuletTabs = document.querySelectorAll('.amulet-tab');
  const amuletDescText = document.querySelector('.amulet-description-text');

  let currentAmuletId = null;
  let currentTab = 'short';

  amuletCards.forEach(card => {
    card.addEventListener('click', () => {
      amuletCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      currentAmuletId = card.getAttribute('data-id');
      
      // Сохраняем текущий уровень пользователя
      const userType = localStorage.getItem('magicUserType');
      let amuletType = 'short';
      if (userType === 'casual') amuletType = 'full';
      if (userType === 'expert') amuletType = 'use';
      
      currentTab = amuletType;
      amuletTabs.forEach(tab => tab.classList.remove('active'));
      const activeTab = document.querySelector(`.amulet-tab[data-type="${amuletType}"]`);
      if (activeTab) activeTab.classList.add('active');
      
      if (amuletDescBox) {
        amuletDescBox.classList.add('active');
        amuletDescBox.style.display = '';
        amuletDescText.textContent = amuletData[currentAmuletId][currentTab];
      }
    });
  });

  // === Инициализация приветственного текста для блока амулетов ===
  if (amuletDescText) amuletDescText.textContent = '🧿 Choose an amulet to reveal its energy...';

  amuletTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (!currentAmuletId) return;
      amuletTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-type');
      
      // Сохраняем выбранный уровень в localStorage
      let userType = 'beginner';
      if (currentTab === 'full') userType = 'casual';
      if (currentTab === 'use') userType = 'expert';
      localStorage.setItem('magicUserType', userType);
      
      amuletDescText.textContent = amuletData[currentAmuletId][currentTab] || '✨ No details available.';
    });
  });

  // === Лупа для амулетов ===
  let zoomEnabled = false;
  let currentZoomCard = null;

  amuletCards.forEach(card => {
    const lens = card.querySelector('.zoom-lens');
    const img = card.querySelector('img');
    if (!lens || !img) return;

    card.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      // Только для выбранной карточки
      if (!card.classList.contains('selected')) return;
      zoomEnabled = !zoomEnabled;
      lens.style.display = zoomEnabled ? 'block' : 'none';
      if (zoomEnabled) {
        lens.style.backgroundImage = `url('${img.src}')`;
        lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
        currentZoomCard = card;
      } else {
        currentZoomCard = null;
      }
    });

    card.addEventListener('mousemove', e => {
      if (!zoomEnabled || currentZoomCard !== card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      lens.style.left = `${x - lens.offsetWidth / 2}px`;
      lens.style.top = `${y - lens.offsetHeight / 2}px`;
      lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    });

    card.addEventListener('mouseleave', () => {
      if (zoomEnabled && currentZoomCard === card) lens.style.display = 'none';
    });

    card.addEventListener('mouseenter', () => {
      if (zoomEnabled && currentZoomCard === card) lens.style.display = 'block';
    });
  });

  document.addEventListener('click', () => {
    // Отключаем лупу при клике вне карточки
    if (zoomEnabled) {
      zoomEnabled = false;
      document.querySelectorAll('.zoom-lens').forEach(lens => lens.style.display = 'none');
      currentZoomCard = null;
    }
  });

  // 🔮 Tarot
  const tarotCards = document.querySelectorAll(".tarot-card");
  const resultBox = document.getElementById("tarot-result");
  const drawnCards = [];

  const defaultMessages = [
  "Trust the timing — something hidden is forming beneath the surface.",
  "Your intuition knows the answer — listen before you act.",
  "This cycle repeats for a reason. What lesson still needs learning?",
  "Your energy is shifting — what you desire is also moving toward you.",
  "Let go of the need to control everything. Space allows magic.",
  "Uncertainty is sacred space. Stay open.",
  "A dream long shelved may be ready to come back to life.",
  "Silence reveals what noise hides. Make time for stillness.",
  "The path ahead is unfamiliar — and that’s exactly why it’s powerful.",
  "Softness is not weakness. Try it and see."
];
  const predictions = {
    "11_12": "A new cycle is beginning — balance inner and outer goals. It might be time to talk to someone close — they have something important to share.",
    "12_13": "Now is the time to make the leap you've been avoiding. You don't need to feel ready to begin.",
    "12_15": "A message you've been waiting for will arrive soon. But only if you're quiet enough to hear it.",
    "13_15": "Passion will guide your next bold move. Is there a creative idea you've been ignoring?",
    "14_17": "Emotional clarity is arriving — let go of fear. Maybe it's time to say what you've been holding back.",
    "11_14": "Past choices are echoing forward — listen closely. Someone from your past may still carry a piece of your present.",
    "15_16": "You're being protected more than you realize. But it’s also time to learn how to protect your boundaries yourself.",
    "16_11": "Healing begins with telling yourself the truth. What are you avoiding that actually wants to heal you?",
    "13_16": "Your creativity holds the solution to a practical problem. It feels like your life needs more art, music, or play right now.",
    "12_16": "You must release control to find real momentum. Rest is not quitting — it’s trusting timing.",
    "14_15": "Relationships deepen when vulnerability is shared. It might be time to reach out — not with answers, but with presence.",
    "15_17": "Timing is everything — wait for the door to open. There’s no need to rush what’s quietly forming.",
    "11_17": "Something hidden is ready to reveal itself. Are you giving it enough space to surface?",
    "13_14": "Let go of comparison — your path is entirely your own. No one else has your rhythm.",
    "16_12": "You’re carrying too much that isn’t yours. Ground yourself and leave the tough decision for later — clarity will come.",
    "14_16": "Patterns repeat until they're understood. This is your moment to choose differently.",
    "12_17": "It feels like you're missing a spark — have you considered bringing something playful into your life? Maybe… a guinea pig?",
    "1_16": "Your body may be asking for rest — listen. You’re not a machine, you’re a cycle.",
    "3_17": "You might be underestimating how strong your intuition is. Start trusting those nudges — they’re not random.",
    "4_12": "You’ve been holding space for others — but what about you? It might be time to set a gentle boundary.",
    "1_2": "A new cycle is beginning — balance inner and outer goals. It might be time to talk to someone close — they have something important to share.",
    "2_3": "Now is the time to make the leap you've been avoiding. You don't need to feel ready to begin.",
    "2_5": "A message you've been waiting for will arrive soon. But only if you're quiet enough to hear it.",
    "3_5": "Passion will guide your next bold move. Is there a creative idea you've been ignoring?",
    "4_7": "Emotional clarity is arriving — let go of fear. Maybe it's time to say what you've been holding back.",
    "1_4": "Past choices are echoing forward — listen closely. Someone from your past may still carry a piece of your present.",
    "5_6": "You're being protected more than you realize. But it’s also time to learn how to protect your boundaries yourself.",
    "6_1": "Healing begins with telling yourself the truth. What are you avoiding that actually wants to heal you?",
    "3_6": "Your creativity holds the solution to a practical problem. It feels like your life needs more art, music, or play right now.",
    "2_6": "You must release control to find real momentum. Rest is not quitting — it’s trusting timing.",
    "4_5": "Relationships deepen when vulnerability is shared. It might be time to reach out — not with answers, but with presence.",
    "5_7": "Timing is everything — wait for the door to open. There’s no need to rush what’s quietly forming.",
    "1_7": "Something hidden is ready to reveal itself. Are you giving it enough space to surface?",
    "3_4": "Let go of comparison — your path is entirely your own. No one else has your rhythm.",
    "6_2": "You’re carrying too much that isn’t yours. Ground yourself and leave the tough decision for later — clarity will come.",
    "4_6": "Patterns repeat until they're understood. This is your moment to choose differently.",
    "2_7": "It feels like you're missing a spark — have you considered bringing something playful into your life? Maybe… a guinea pig?",
    "11_6": "Your body may be asking for rest — listen. You’re not a machine, you’re a cycle.",
    "13_7": "You might be underestimating how strong your intuition is. Start trusting those nudges — they’re not random.",
    "14_2": "You’ve been holding space for others — but what about you? It might be time to set a gentle boundary.",

    default: "The universe is shifting around you..."
  };

  tarotCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipped") || drawnCards.length >= 2) return;
      card.classList.add("flipped");
      drawnCards.push(card.dataset.card);

      if (drawnCards.length === 2) {
        const [a, b] = drawnCards;
        const key1 = `${a}_${b}`;
        const key2 = `${b}_${a}`;
        const result = predictions[key1] || predictions[key2] || predictions.default;

        setTimeout(() => {
          if (resultBox) {
            resultBox.textContent = result;
            resultBox.style.display = "block";
          }
        }, 500);
      }
    });
  });

  window.addEventListener("beforeunload", () => {
    drawnCards.length = 0;
    tarotCards.forEach(card => card.classList.remove("flipped"));
    if (resultBox) {
      resultBox.textContent = "";
      resultBox.style.display = "none";
    }
  });

  // 📖 Tarot Text Toggle
  const tarotText = {
    basic: `A long time ago, in a land of stars and dreams, there lived a wise owl named Orla who had a magical deck of picture cards. Each morning, animals from the forest would visit her tree to ask for advice. The cards spoke in pictures — a lion for courage, a cup for love, a star for hope. Orla didn't tell the future, but helped her friends see what was in their hearts.
 
  Tarot is a bit like that magical story! It's a set of special cards, each with a unique picture. People use them to think about their feelings, their dreams, and their day. Some cards show happy suns or brave knights. Others show mysteries like the Moon or the Tower.
 
  Tarot is loved in many places! In France and Italy, people collect beautiful old Tarot decks. In Japan, there are Tarot cards with cute anime characters. In the United States and Brazil, people use Tarot to explore their imagination. It's like opening a door to a world of stories and colors, where every card is part of your own fairy tale.`,
     
    more: `Tarot isn’t just fortune telling — it’s more like a conversation with your deeper self. Each of the 78 cards represents emotions, symbols, and life situations: from joy to challenge, from mystery to clarity. People often draw a few cards to think about a question or reflect on their lives. Many use Tarot for mindfulness, journaling, or even therapy.
 
  Some fascinating facts about Tarot:
  – The oldest known Tarot deck comes from Italy in the 1400s, made for nobility.
  – The famous Rider–Waite deck (created in 1909) was illustrated by a Black British artist, Pamela Colman Smith.
  – Tarot cards weren’t originally for mysticism — they started as a game called Tarocchi!
 
  Around the world, Tarot is becoming more popular than ever:
  – In the U.S., especially in California and New York, Tarot is used in coaching, healing, and creativity workshops.
  – In the U.K. and Germany, Tarot is found in bookshops and art galleries.
  – In Brazil, Mexico, and Argentina, Tarot is deeply tied to local spirituality.
  – In South Korea, Japan, and Taiwan, young people use Tarot in cafes, apps, and even for dating advice.
 
  Tarot today is about asking better questions, not just getting answers. It’s a blend of art, emotion, and story — and it belongs to everyone.`,
 
    full: `Tarot is a multifaceted symbolic system composed of 78 cards: 22 Major Arcana and 56 Minor Arcana. While historically originating in 15th-century Italy as a card game (tarocchi), Tarot evolved into an esoteric tool in the 18th–19th centuries, influenced by Hermeticism, Kabbalah, Renaissance Neoplatonism, alchemy, and later Jungian psychology.
 
  Modern academic and psychological approaches to Tarot highlight its role in:
  – Archetypal projection: aligning with Jungian theory, the cards serve as mirrors of the collective unconscious.
  – Narrative therapy: card readings help clients construct personal meaning through symbolic story-making.
  – Cognitive stimulation: randomized imagery challenges fixed thinking and stimulates nonlinear reflection.
  – Art history and semiotics: Tarot decks are rich sources for iconographic and comparative cultural study.
 
  Cross-cultural usage includes:
  – France and Italy: Home to Marseille and Visconti-Sforza traditions, where Tarot is respected as cultural heritage.
  – The U.K.: The Golden Dawn, Aleister Crowley, and modern occult revivals shaped English-speaking Tarot.
  – United States: Tarot has blended with psychological tools, feminist spirituality, and New Age practices.
  – Eastern Europe: Esoteric communities in Russia, Poland, and Romania link Tarot to folk mysticism and academic occultism.
  – East Asia: Particularly in South Korea, Japan, and Taiwan, Tarot is part of the growing wellness/self-care movement and is adapted into pop culture, mobile apps, and design.
 
  Despite skepticism in some scientific circles, Tarot is increasingly studied as a cultural artifact, psychological tool, and art form — intersecting intuition, narrative, and symbolic logic.`
  };
 

  const tarotButtons = document.querySelectorAll(".tarot-toggle-btn");
  const output = document.getElementById("tarot-text-output");

  tarotButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      if (output && tarotText[type]) {
        output.innerHTML = tarotText[type];
      }
    });
  });

  // === TikTok Cover Preview ===
  document.querySelectorAll('.tiktok-placeholder').forEach(placeholder => {
    const cover = placeholder.getAttribute('data-cover');
    if (cover) {
      placeholder.style.backgroundImage = `url('${cover}')`;
    }
  });
  // === TikTok Play Button Lazy Load ===
  document.querySelectorAll('.tiktok-placeholder').forEach(placeholder => {
    const playBtn = placeholder.querySelector('.tiktok-play-btn');
    playBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const src = placeholder.getAttribute('data-src');
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.position = 'absolute';
      iframe.style.top = '4.5%';
      iframe.style.left = '4.5%';
      iframe.style.width = '91%';
      iframe.style.height = '92%';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '28px';
      iframe.style.boxShadow = '0 0 8px rgba(0,0,0,0.12)';
      iframe.style.background = '#000';
      iframe.style.zIndex = '1';
      placeholder.parentNode.appendChild(iframe);
      placeholder.remove();
    });
  });
});

// === Автоподстановка режима Таро по выбору пользователя ===
window.addEventListener('DOMContentLoaded', () => {
  const userType = localStorage.getItem('magicUserType');
  if (userType) {
    let tarotType = 'basic';
    if (userType === 'casual') tarotType = 'more';
    if (userType === 'expert') tarotType = 'full';
    const btn = document.querySelector(`.tarot-toggle-btn[data-type="${tarotType}"]`);
    if (btn) btn.click();
  }
}); 

// === Автоподстановка режима для блока амулетов по выбору пользователя ===
window.addEventListener('DOMContentLoaded', () => {
  const userType = localStorage.getItem('magicUserType');
  if (userType) {
    // Автоматически выбираем первый амулет
    const firstCard = document.querySelector('.amulet-card');
    if (firstCard) {
      firstCard.click();
    }
  }
});

// === Тема теперь управляется theme-switcher.js ===

 