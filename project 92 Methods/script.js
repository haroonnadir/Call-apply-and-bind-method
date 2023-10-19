//Object Oriented JavaScript 
// Object with a method
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.getFullName()); // Output: John Doe



// Prototypal Inheritance Methods
// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sayHello = function() {
  return 'Hello, I am ' + this.name;
};

// Child constructor function inheriting from Animal
function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

// Set Dog's prototype to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Adding a method specific to Dog
Dog.prototype.bark = function() {
  return 'Woof!';
};

// Create a Dog object
const dog1 = new Dog('Buddy');

console.log(dog1.sayHello()); // Output: Hello, I am Buddy
console.log(dog1.bark());     // Output: Woof!
