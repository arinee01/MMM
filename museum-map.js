// === MUSEUM MAP JAVASCRIPT ===

console.log('Museum map JavaScript loaded!');

let currentFloor = 0;
const totalFloors = 3;
let floors = [];

function updateFloors() {
  floors.forEach((f, i) => f.classList.toggle("hidden", i !== currentFloor));
}

function prevFloor() {
  currentFloor = (currentFloor - 1 + totalFloors) % totalFloors;
  updateFloors();
}

function nextFloor() {
  currentFloor = (currentFloor + 1) % totalFloors;
  updateFloors();
}

// Make functions globally available
window.prevFloor = prevFloor;
window.nextFloor = nextFloor;

// === ARTIFACT DATA ===
const artifacts = [
  { title: "Ancient Amulet 1", image: "images/amulets/amulet1.webp", era: "Ancient", location: "Piano Interrato" },
  { title: "Ancient Amulet 2", image: "images/amulets/amulet2.webp", era: "Ancient", location: "Piano Interrato" },
  { title: "Ancient Amulet 3", image: "images/amulets/amulet3.webp", era: "Ancient", location: "Piano Interrato" },
  { title: "Ægishjálmr (Helm of Awe)", image: "images/objects/aegishjalmr.jpg", era: "Renaissance", location: "Primo Piano" },
  { title: "Bantu Tribal Fetish", image: "images/objects/bantu_fetish.jpg", era: "Modern", location: "Primo Piano" },
  { title: "Korean Shamanic Knife", image: "images/objects/korean_knife.jpg", era: "Modern", location: "Primo Piano" },
  { title: "NFT Digital Amulet", image: "images/objects/nft_qr.jpg", era: "Modern", location: "Primo Piano" },
  { title: "Japanese Omamori", image: "images/objects/omamori.jpg", era: "Modern", location: "Primo Piano" },
  { title: "Mexican Ojo de Venado", image: "images/objects/ojo_venado.jpg", era: "Renaissance", location: "Secondo Piano" },
  { title: "RPG Magic Amulet", image: "images/objects/rpg_amulet.jpg", era: "Modern", location: "Secondo Piano" },
  { title: "Slavic Protective Doll", image: "images/objects/slavic_doll.jpg", era: "Medieval", location: "Secondo Piano" },
  { title: "St. Benedict Medal", image: "images/objects/st_benedict.jpg", era: "Renaissance", location: "Secondo Piano" },
  { title: "Egyptian Scarab", image: "images/objects/scarab.jpg", era: "Ancient", location: "Secondo Piano" }
];

function showPopup(index) {
  if (typeof artifacts !== 'undefined' && artifacts[index]) {
    const artifact = artifacts[index];
    const content = `
      <h3>${artifact.title}</h3>
      <img src="${artifact.image}" style="max-width:100%; margin-top: 0.5rem;" />
    `;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
  }
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
  // Initialize floors
  floors = [
    document.getElementById("floor-0"),
    document.getElementById("floor-1"),
    document.getElementById("floor-2"),
  ];
  
  updateFloors();
  
  // === DOT CLICK HANDLERS ===
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const index = dot.dataset.index;
      showPopup(index);
    });
  });
  
  const popupClose = document.getElementById("popup-close");
  if (popupClose) {
    popupClose.onclick = () => {
      document.getElementById("popup").style.display = "none";
    };
  } else {
    console.error('Popup close button not found');
  }
  
  // === MAP DOT THUMBNAILS ===
  document.querySelectorAll('.dot, .map-dot').forEach(dot => {
    dot.addEventListener('mouseenter', function() {
      const effects = document.querySelector('.map-dot-effects');
      if (!effects) return;
      const rect = dot.getBoundingClientRect();
      const parentRect = effects.parentElement.getBoundingClientRect();
      const dotCenterX = rect.left + rect.width / 2 - parentRect.left;
      const dotCenterY = rect.top + rect.height / 2 - parentRect.top;
      const thumbX = dotCenterX + 50;
      const thumbY = dotCenterY - 20;
      const thumb = document.createElement('div');
      thumb.className = 'map-dot-thumb';
      thumb.style.left = thumbX - 35 + 'px';
      thumb.style.top = thumbY - 35 + 'px';
      const imgName = dot.getAttribute('data-img');
      let imgSrc = '';
      if (imgName && imgName.endsWith('.webp')) imgSrc = 'images/amulets/' + imgName;
      else if (imgName) imgSrc = 'images/objects/' + imgName;
      if (imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = '';
        thumb.appendChild(img);
      }
      effects.appendChild(thumb);
    });
    dot.addEventListener('mouseleave', function() {
      const effects = document.querySelector('.map-dot-effects');
      if (effects) effects.innerHTML = '';
    });
  });
  

  
  // === ТЕМА ТЕПЕРЬ УПРАВЛЯЕТСЯ theme-switcher.js ===
});

// === НАВИГАЦИЯ С СОХРАНЕНИЕМ ТЕМЫ ===
// Функция navigateWithTheme теперь в theme-switcher.js 