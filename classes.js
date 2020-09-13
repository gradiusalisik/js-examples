class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }

  // Создает метод в прототипе.
  voice() {
    console.log('Base voice from', this.name);
  }
}

const dog = new Animal({ name: 'Rex', color: 'white'});

// extends позволяет наследоваться от других классов
class Cat extends Animal {
  constructor(options) {
    // Замена нативному Animal.apply(this, arguments);
    super(options)

    this.hasTail = options.hasTail;
    this.type = 'cat';
  }


  // Переписали метод базового класса на частный случай.
  voice() {
    // Вызываем функцию базового класса
    // замена нативного Animal.prototype.voice.apply(this, arguments);
    super.voice();
    console.log(this.name + 'says meow');
  }
}

const cat = new Cat({ name: 'Murzik', color: '#000', hasTail: true});
