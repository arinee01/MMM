// === JS из index.html ===
function selectUser(user) {
  const cards = document.querySelectorAll(".user-card");
  const sections = document.querySelectorAll(".user-content");
  cards.forEach(card => card.classList.remove("active-user"));
  sections.forEach(section => section.style.display = "none");
  document.querySelector(`#${user}-content`).style.display = "block";
  document.querySelector(`.user-card[onclick=\"selectUser('${user}')\"]`).classList.add("active-user");
}

function flipCard(card) {
  card.classList.add('flipped');
  setTimeout(() => {
    card.classList.remove('flipped');
  }, 1500);
}

function autoFlipCards() {
  const cards = document.querySelectorAll(".tarot-card");
  cards.forEach((card, index) => {
    setInterval(() => {
      flipCard(card);
    }, 4000 + index * 1000);
  });
}

window.onload = () => {
  selectUser("beginner");
  autoFlipCards();
};

const userCards = document.querySelectorAll('.user-card');
userCards.forEach(card => {
  card.addEventListener('click', function() {
    const user = card.getAttribute('data-user');
    if (user) {
      localStorage.setItem('magicUserType', user);
    }
  });
});

// === Тема теперь управляется theme-switcher.js ===

// === Navigation with Theme Preservation ===
function navigateWithTheme(url) {
  // Сохраняем текущую тему перед переходом
  const currentTheme = localStorage.getItem('museumTheme') || 'theme-1500';
  localStorage.setItem('museumTheme', currentTheme);
  window.location.href = url;
}

// === Тема теперь управляется theme-switcher.js === 