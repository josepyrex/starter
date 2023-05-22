// /// function declaration
// function greet() {
//     console.log('hello there');
// }

// //function expression
// const speak = function(){
//     console.log('good day');
// };


// greet();
// greet();
// greet();
// speak();


// //arguments and parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morning');
// speak();

// //returning values

// function calcArea(radius) {
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// function calcVol(area) {
    
// }

// // arrow functions >:(

// function calcArea(radius) {
//         return 3.14 * radius**2;
//     }

// const calcAreaa = (radius) => {
//     return 3.14 * radius**2
// }

// //practise arrow functions

// // original
// const greet = function(){
//     return 'hello, world';
// }

// //arrow
// const greetA = () => 'hello, world'
// const result = greetA();
// console.log(result);

// const bill = (products, tax) =>{
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// // console.log(bill([10,15,30], 0.2));

// const name = 'shaun';

// //functions

// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// let resultTwo = name.toUpperCase()
// console.log(resultTwo);

// //callbacks & foreach

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson);

//callback in action

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style ="color: purple">${person}</li>`
})

console.log(html);
ul.innerHTML = html;