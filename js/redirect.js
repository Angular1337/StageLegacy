document.getElementById('card__1__download').addEventListener('click', function() {
        window.location.href = 'games/need__for__speed__most__wanted.html'; // Замените на нужный URL
    });
document.getElementById('card__2__download').addEventListener('click', function() {
        window.location.href = 'games/grand__theft__auto__san__andreas.html'; // Замените на нужный URL
    });
document.getElementById('card__3__download').addEventListener('click', function() {
        window.location.href = 'games/grand__theft__auto__vice__city.html'; // Замените на нужный URL
    });
document.getElementById('card__4__download').addEventListener('click', function() {
        window.location.href = 'games/need__for__speed__underground__2.html'; // Замените на нужный URL
    });
document.getElementById('card__5__download').addEventListener('click', function() {
        window.location.href = 'games/bully.html'; // Замените на нужный URL
    });
document.getElementById('card__6__download').addEventListener('click', function() {
        window.location.href = 'games/the__witcher.html'; // Замените на нужный URL
    });
document.getElementById('card__7__download').addEventListener('click', function() {
        window.location.href = 'games/postal__2.html'; // Замените на нужный URL
    });
document.getElementById('card__8__download').addEventListener('click', function() {
        window.location.href = 'games/my__summer__car.html'; // Замените на нужный URL
    });
document.getElementById('card__9__download').addEventListener('click', function() {
        window.location.href = 'games/dark__souls__3.html'; // Замените на нужный URL
    });


    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.theme__button');
      const games = document.querySelectorAll('.main__popular__card');

      function showAllGames() {
        games.forEach(game => game.classList.remove('hidden'));
      }

      function showGenre(genre) {
        games.forEach(game => {
          if (game.dataset.genre === genre) {
            game.classList.remove('hidden');
          } else {
            game.classList.add('hidden');
          }
        });
      }

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const isActive = button.classList.contains('active');

          // Снимаем активность со всех кнопок
          buttons.forEach(btn => btn.classList.remove('active'));

          if (isActive) {
            // Если кнопка была активна — показываем все игры и не активируем кнопки
            showAllGames();
          } else {
            // Если не была активна — активируем кнопку и фильтруем игры
            button.classList.add('active');
            showGenre(button.dataset.genre);
          }
        });
      });

      // Изначально показываем все игры
      showAllGames();
    });

   