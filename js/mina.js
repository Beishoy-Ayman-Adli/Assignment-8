
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
  
    const card = btn.closest('.recipe-card');
    const cardTabButtons = card.querySelectorAll('.tab-btn');
    const cardTabPanels = card.querySelectorAll('.tab-panel');

   cardTabButtons.forEach(b => b.classList.remove('active'));
cardTabPanels.forEach(p => p.classList.remove('active'));

btn.classList.add('active');

let btnIndex;
cardTabButtons.forEach((b, i) => {
  if (b === btn) {
    btnIndex = i;
  }
});

cardTabPanels[btnIndex].classList.add('active');
  });
});


const nextButtons = document.querySelectorAll('.next-recipe-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

let currentIndex = 0;

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    recipeCards[currentIndex].classList.remove('active');

    currentIndex = currentIndex + 1;
    if (currentIndex >= recipeCards.length) {
      currentIndex = 0;
    }

    recipeCards[currentIndex].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});