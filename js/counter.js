 // Ваша конфигурация Firebase (замените на свою)
  const firebaseConfig = {
    apiKey: "AIzaSyCQT684Ba5ILNgFHKTwgd7mSdZJ5mOh0l8",
    authDomain: "stagelegacy-e60b8.firebaseapp.com",
    databaseURL: "https://stagelegacy-e60b8-default-rtdb.firebaseio.com",
    projectId: "stagelegacy-e60b8",
    storageBucket: "stagelegacy-e60b8.firebasestorage.app",
    messagingSenderId: "591207792690",
    appId: "1:591207792690:web:abf163e199ecf0eff4fc2b"
  };

  // Инициализация Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const counterEl = document.getElementById('counter');

  // Получаем текущую дату в формате YYYY-MM-DD
  function getTodayDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }

  const today = getTodayDate();

  // Путь в базе для сегодняшнего счетчика
  const counterRef = db.ref('counters/' + today);

  // Функция обновления счетчика
  function updateCounter() {
    counterRef.transaction(current => {
      if (current === null) {
        return 1;
      } else {
        return current + 1;
      }
    }, (error, committed, snapshot) => {
      if (error) {
        counterEl.textContent = 'Ошибка: ' + error.message;
      } else if (!committed) {
        counterEl.textContent = 'Не удалось обновить счетчик';
      } else {
        counterEl.textContent = snapshot.val();
      }
    });
  }

  // Отобразить текущее значение счетчика и увеличить его
  counterRef.once('value').then(snapshot => {
    if (snapshot.exists()) {
      counterEl.textContent = snapshot.val();
    } else {
      counterEl.textContent = '0';
    }
    updateCounter();
  }).catch(err => {
    counterEl.textContent = 'Ошибка: ' + err.message;
  });