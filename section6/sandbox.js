// // const paragraph = document.querySelector('div.error');

// // console.log(paragraph);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

// //get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// //get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);


// //get elements by their tag name
// const paras = document.getElementsByTagName('p');

// console.log(paras);

// const para = document.querySelector('p');

// //console.log(para.innerText);
// // para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text';
// // });

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);

// //content.innerHTML += ' <h2>THIS IS A NEW H2</h2>'

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`
// })

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');