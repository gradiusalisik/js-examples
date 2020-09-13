const Animal = function(options) {
  this.name = options.name;
  this.color = options.color;

  // this.voice = function() {
  //   console.log('Base voice from', this.name);
  // }
}

Animal.prototype.voice = function() {
  console.log('Base voice from', this.name);
}

// console.log(Animal.prototype);
const dog = new Animal({ name: 'Rex', color: '#fff' })

// dog.voice();

const Cat = function(options) {
  // вызывается конструктор Animal с контектом класса Cat
  Animal.apply(this, arguments);

  this.hasTail = options.hasTail;
  this.type = 'cat';
}

// Наследуем прототип Animal для Cat
Cat.prototype = Object.create(Animal.prototype);
// Указываем класс конструктора, который должен вызываться. Для того, чтобы когда мы указываем наследование прототипа для класса Cat, конструктор после этого указывал на класс Cat и у нас не было никаких проблем с его использованием. Явно указываем конструктор.
Cat.prototype.constructor = Cat;


Animal.prototype.voice = function() {
  console.log('This sound goes from', this.name);
}

Cat.prototype.voice = function() {
  // Хотим вызывать метод базового класса, но потом написать свою имплементацию.
  Animal.prototype.voice.apply(this, arguments);
  console.log(this.name + 'says meow');

  // На выходе мы получим консоль из базового класса
  // console.log('Base voice from', this.name);
  //  потом уже из этого
  // console.log(this.name + 'says meow');
}

const cat = new Cat({ name: 'Murzik', color: "#000", hasTail: true })
// console.log(cat);



// Examples
// Благодаря такому созданию, метод принт теперь доступен для любых объектов.
Object.prototype.print = function() {
  console.log('I am object:', this)
}


// Хотим, чтобы у cat был такой метод. Выше создаём.
cat.print();

// Добавляем новый метод в массивы
Array.prototype.myMap = function(callback) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      array.push(this[i]);
    }
  }

  return array;
}

Array.prototype.mapAndLog = function() {
  console.log('Array to map', this);
  return this.map.apply(this, arguments);
}

// const arr = [1, 2, 3, 4, 5, 6, 10, 50];

// const newArr = arr.myMap(item => item > 5);

// console.log(newArr);
console.log([1, 2, 3, 4].mapAndLog(x => x ** 2));


String.prototype.toTag = function(tagName) {
  return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))
console.log('eminem'.toTag('em'))

Number.prototype.toBigInt = function() {
  return BigInt(this);
}

const number = 42;
console.log(number.toBigInt());
