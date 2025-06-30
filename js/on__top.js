document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('on__top');

    // Функция для обработки прокрутки
    function handleScroll() {
        if (window.pageYOffset > 100) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Плавный переход вверх при клике
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Скролл

const div = document.getElementById('warning');

if (div) {
  div.addEventListener('mouseenter', () => {
    // При наведении — блокируем прокрутку страницы
    window.addEventListener('wheel', preventScroll, { passive: false });
  });

  div.addEventListener('mouseleave', () => {
    // Когда мышь уходит — разрешаем прокрутку снова
    window.removeEventListener('wheel', preventScroll, { passive: false });
  });
}

function preventScroll(event) {
  event.preventDefault();
}


// Закрытие окна 

document.getElementById('warning__button')?.addEventListener('click', () => {
  const d = document.getElementById('warning');
  if (!d) return;
  window.removeEventListener('wheel', preventScroll, { passive: false });
  d.style.transition = 'opacity .5s';
  d.style.opacity = '0';
  setTimeout(() => d.remove(), 500);
});