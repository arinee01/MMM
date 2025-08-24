// === JS из index.html ===
function selectUser(user) {
  const cards = document.querySelectorAll(".user-card");
  const sections = document.querySelectorAll(".user-content");
  
  // Убираем активный класс со всех карточек
  cards.forEach(card => card.classList.remove("active-user"));
  
  // Скрываем все секции контента
  sections.forEach(section => section.style.display = "none");
  
  // Показываем нужную секцию (если она существует)
  const targetSection = document.querySelector(`#${user}-content`);
  if (targetSection) {
    targetSection.style.display = "block";
  }
  
  // Добавляем активный класс к выбранной карточке
  const selectedCard = document.querySelector(`.user-card[data-user="${user}"]`);
  if (selectedCard) {
    selectedCard.classList.add("active-user");
  }
  
  // Сохраняем выбранный уровень в localStorage
  localStorage.setItem('magicUserType', user);
  console.log('Выбран уровень пользователя:', user);
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
  // Загружаем сохраненного пользователя или устанавливаем beginner по умолчанию
  const savedUser = localStorage.getItem('magicUserType') || 'beginner';
  selectUser(savedUser);
  autoFlipCards();
};

const userCards = document.querySelectorAll('.user-card');
userCards.forEach(card => {
  card.addEventListener('click', function() {
    const user = card.getAttribute('data-user');
    if (user) {
      localStorage.setItem('magicUserType', user);
      console.log('Уровень пользователя сохранен:', user);
    }
  });
});

// === Тема теперь управляется theme-switcher.js ===

// === Тема теперь управляется theme-switcher.js === 