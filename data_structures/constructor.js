// Constructor function starts with Capital letter

function User(firstName, lastName, age, gender){
  // "this" refers to object
  // ex: user1.firstName
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}


// creating new object of class User
// instantiating user1 and user200 (they're instances);
var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 25, 'female');

// adding new property to User constructor function
// use prototype when we want same properties and values for all instances
User.prototype.emailDomain = "@facebook.com"

// creating new method to User constructor
User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain;
}

// prints out JillRobinson@facebook.com
console.log(user200.getEmailAddress());


