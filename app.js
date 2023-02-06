class Hamster {
  owner = "";
  price = 15;
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }

  wheelRun() {
    console.log("*squeak squeak*");
  }

  eatFood() {
    console.log("*nible nible*");
  }

  getPrice() {
    return this.price;
  }
}

// newHams = new Hamster("Me", 'Ster', 20);

// console.log(newHams);
// newHams.wheelRun();
// newHams.eatFood();
// console.log(newHams.getPrice());

class Person {
  age = 0;
  height = 0;
  weight = 0;
  mood = 0;
  // hamster = [];
  bankAccount = 0;

  constructor(name, age, height, weight, mood, bankAccount) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamster = [];
    this.bankAccount = bankAccount;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }

  eat() {
    (this.weight += 1), (this.mood += 1);
  }

  exercise() {
    return (this.weight -= 1);
  }

  ageUp() {
    (this.age += 1),
      (this.height += 1),
      (this.weight += 1),
      (this.mood -= 1),
      (this.bankAccount += 10);
  }

  buyHamster(hamster) {
    this.hamster.push(hamster),
      (this.mood += 10),
      (this.bankAccount -= hamster.getPrice());
  }
}

// console.log(indiv);
// console.log(indiv.getName());
// console.log(indiv.getAge());
// console.log(indiv.getWeight());
// indiv.greet();
// indiv.eat();
// console.log(indiv.exercise());
// indiv.ageUp();
// indiv.buyHamster('hammy');

let indiv = new Person("Timmy", 5, 70, 70, 50, 100);

console.log(indiv.getAge());

// console.log(`At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good.`)

for (let i = 0; i < 5; i++) {
  indiv.eat();
}

for (let i = 0; i < 4; i++) {
  indiv.ageUp();
}

Gus = new Hamster("Timmy", "Gus", 25);
indiv.buyHamster(Gus);

console.log(indiv);

for (i = 0; i < 6; i++) {
  indiv.ageUp();
}

for (i = 0; i <2 ; i++){
    indiv.eat();
    indiv.exercise();
}

console.log(indiv);
console.log(Gus);

class Dinner{
  constructor (appetizer = '', entree = '', dessert =''){
    this.appetizer = appetizer,
    this.entree = entree,
    this.dessert = dessert
  }
}

meal = new Dinner('bread', 'pizza', 'ice cream');
console.log(meal);

// class Chef{
//   getDinner(appetizer, entree, dessert){
//     return Dinner.getDinner()
//   }
// }

