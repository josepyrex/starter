let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

let likes = 10;
let result = 'the blog has ' + likes + ' likes!'
console.log(result);

const title = 'Best reads of 2023';
const author = 'pyrex';

//template spring way

let otherResult = `The blog ${title} by ${author} has ${likes} likes!`;

console.log(otherResult);

//html templates

let html = 
`   <h2>${title}</h2>
    <p>By ${author}</p>
    <span> This blog has ${likes} likes</span>
`

console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];

console.log(ninjas.length);

//array methods

// let nResult = ninjas.concat('ken', 'crystal');

let nResult = ninjas.push('ken');
nResult = ninjas.pop();

console.log(nResult);
console.log(ninjas);