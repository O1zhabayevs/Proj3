// Массив имен
var names = [];

// Запрашиваем количество имен, которое пользователь хочет ввести
var numNames = parseInt(prompt("Сколько имен вы хотите ввести?"), 10);

// Запрашиваем имена и добавляем их в массив
for (var i = 0; i < numNames; i++) {
  var name = prompt("Введите имя номер " + (i + 1));
  names.push(name);
}

// Функция для вывода приветствия или прощания
function sayHelloOrGoodbye(names) {
  // Перебираем каждое имя в массиве
  for (var i = 0; i < names.length; i++) {
    // Получаем текущее имя
    var name = names[i];
    
    // Проверяем, начинается ли имя с "J" или "j"
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Goodbye " + name);
    } else {
      console.log("Hello " + name);
    }
  }
}

// Вызываем функцию
sayHelloOrGoodbye(names);
