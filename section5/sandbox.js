//objects literals name = key, crystal = value

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac & cheese rules', likes: 30 },
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login: function(){
//         console.log('the user logged in')
//     },
//     logout(){
//         console.log('the user logged out')
//     },
//     logBlogs(){
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };


// user.logBlogs();

//Math Object

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(Math.round(random * 100));

