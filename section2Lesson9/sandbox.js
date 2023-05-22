// semi colons to end a statement. Always best practice.
console.log('hello, world!');

let email = "thejosepyrex@gmail.com";
console.log(email);

let firstName = 'Jose';
let lastName = 'Pyrex';

let fullName = firstName + " " + lastName;
console.log(fullName);


console.log(fullName[2]);

console.log(fullName.length); // including space

// methods are the . with parenthesis at the end but technically they are functions (see below)

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@'); //<-- parameter (also called argument)
console.log(index);