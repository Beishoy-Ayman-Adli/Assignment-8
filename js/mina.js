// --- كود الـ Tabs ---
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // بنجيب السيكشن الأب اللي الزرار جوه عشان التابز ما تتداخلش بين الأكلات
    const card = btn.closest('.recipe-card');
    const cardTabButtons = card.querySelectorAll('.tab-btn');
    const cardTabPanels = card.querySelectorAll('.tab-panel');

    cardTabButtons.forEach(b => b.classList.remove('active'));
    cardTabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    card.querySelector(`#${btn.dataset.tab}`).classList.add('active');
  });
});

const nextButtons = document.querySelectorAll('.next-recipe-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

let currentIndex = 0;

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    recipeCards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % recipeCards.length;
    recipeCards[currentIndex].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});