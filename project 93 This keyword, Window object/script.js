//this in Object Methods:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.getFullName());  // Output: John Doe



//Window Object in a Browser Environment:
// Global scope
console.log(this === window);  // Output: true

function sayHello() {
  console.log(this === window);  // Output: true
  console.log('Hello, world!');
}
sayHello();  // Invoking the function in global scope
