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