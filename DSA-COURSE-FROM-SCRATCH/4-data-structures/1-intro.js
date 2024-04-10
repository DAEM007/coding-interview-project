// ============= INTRODUCTION TO DATA STRUCTURE =================

// === what is a data structure? ===
// Data structures are a collection of values, the relationships among them,
// and the functions or operations that can be applied to the data.

// ============= ES 2015 CLASS SYNTAX =================
// what is a class?
// A class is a blueprint for creating objects with pre-defined properties and
// methods.
// we have two(2) kinds of methods:
// 1. instance methods.
// 2. class methods.

class Person {
  constructor(firstName, lastName, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.level = 0;
  }

  introduce() {
    return `My name is ${this.firstName} ${this.lastName} and I am a ${this.occupation}`;
  }

  engineeringLevel() {
    this.level++;
    if (this.level >= 5) {
      return `${this.firstName} is a senior level engineer`;
    }
    return `${this.firstName} is an entry level engineer`;
  }
}

let damilola = new Person("Damilola", "Emmanuel", "Software engineer");
// console.log(damilola.introduce());
// console.log(damilola.engineeringLevel());
// console.log(damilola.engineeringLevel());
// console.log(damilola.engineeringLevel());
// console.log(damilola.engineeringLevel());
// console.log(damilola.engineeringLevel());
// console.log(damilola.engineeringLevel());

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type.toLowerCase();
  }

  introduce() {
    return `My name is ${this.name} and I am a ${this.type}`;
  }

  sound() {
    switch (this.type) {
      case "dog":
        return `${this.name} loves to bark`;
      case "cat":
        return `${this.name} loves to meow`;
      case "snake":
        return `${this.name} loves to hiss`;
      default:
        return `Don't have your sound recorded here!`;
    }
  }
}

let tom = new Animal("Tom", "Cat");
let scott = new Animal("Scott", "DOG");
let cobra = new Animal("King Cobra", "sNAke");
// console.log(tom.introduce());
// console.log(tom.sound());
// console.log(scott.introduce());
// console.log(scott.sound());
// console.log(cobra.introduce());
// console.log(cobra.sound());
