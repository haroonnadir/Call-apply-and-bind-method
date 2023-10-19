//Example of call method:
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

const fullName = getFullName.call(person);
console.log(fullName);  // Output: John Doe


//Example of apply method:
const numbers = [1, 2, 3, 4, 5];

function sum() {
  return this.reduce((acc, num) => acc + num, 0);
}

const total = sum.apply(numbers);
console.log(total);  // Output: 15


//Example of bind method:
const person1 = {
  firstName: 'Alice',
  lastName: 'Smith'
};

function getFullNameWithGreeting(greeting) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName;
}

const greetPerson1 = getFullNameWithGreeting.bind(person, 'Hello');
console.log(greetPerson1());  // Output: Hello Alice Smith

