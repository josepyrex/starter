// // for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished!')

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// //do while loops

// let i = 5;

// do {
//         console.log('val of i is ', i);
//         i++;
// } while (i < 5);

//if statements
// const age = 20;

// if (age > 20) {
//     console.log('you are 20 years old')
// } 

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3) {
//     console.log("that's a lot of ninjas!")
// }
//else, else if and logical operators

// let password = 'p@ss';


// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong!')
// } else if (password.length >= 8 || password.includes('@')){
//     console.log('that password is kinda strong')
// } else{
//     console.log('that password sucks ass!')
// } 

//logical NOT (!)

// let userIsLoggedIn = false;

// if(!userIsLoggedIn){
//     console.log("The User is not logged in.")
// }

// // break and continue

// const scores = [50, 25, 0, 30, 100, 2];

// for (let i = 0; i < scores.length; i++) {
    
//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if (scores[i] === 100) {
//         console.log('Congrats! You got the top score!')
//         break;
//     }
// }

// // switch statements
// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('Congrats! You got a A!');
//         break;
//     case 'B':
//         console.log('Congrats! You got a B!');
//         break;
//     case 'C':
//         console.log('Congrats! You got a C!');
//         break;
//     case 'D':
//         console.log('Congrats! You got a D!');
//         break;
//     case 'E':
//         console.log('Congrats! You got a E!');
//         break;
//     default:
//         console.log("Uhh, you didn't get a valid grade...")
// }


//variables & block scope

let age = 30; //<-- global scope variable, you can access it anywhere in the file.

if (true) {
    let age = 40; //<-- you can "REDEFINE" variables inside code blocks but not outside
    let name = 'jose' //<-- also any variable you define in the code block you can't access outside of it
    console.log(age);

    if (true) {
        console.log(age, name); //<-- works for nested code blocks as well
        let name = 'pyrex' //<-- inception esque, you can redefine inside another code block wont get out of here tho
        console.log(age, pyrex);
    }
}

console.log(age, name);

if (true) {
    age = 88 //<-- if you overwrite it IN the code block however it affects the global scope.
}
console.log(age); //var variables are global scoped