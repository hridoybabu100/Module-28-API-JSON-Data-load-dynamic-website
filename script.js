// 📦 JSON দেখতে কেমন?

// Example:

// {
//   "name": "Hridoy",
//   "age": 22,
//   "isStudent": true,
//   "skills": ["HTML", "CSS", "JavaScript"]
// }

const person = {
    Name : 'Hridoy Akanda',
    Age : 22 ,
    Occupation : 'Student',
    Address : 'Jamalpur, Bangladesh',
    Ismerried : false,
}
// console.log(person, typeof person);



// JavaScript এ JSON ব্যবহার
// const user = {
//   name: "Hridoy",
//   age: 22
// };

// const jsonData = JSON.stringify(user);
// console.log(jsonData);

// 👉 JSON.stringify() = Object কে JSON বানায়


const personDetails = JSON.stringify(person);
// console.log(personDetails, typeof personDetails);


// eitake amra chaile parse e pathate pari


const parseDetails = JSON.parse(personDetails);
// console.log(parseDetails);


// Json Plaveholder

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//fetch ta mainly jinis jeita data dewar kotha bole promise kore bt data deina.

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((responce) => responce.json())
// .then((data) => console.log(data));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res) => res.json())
// .then((result) => console.log(result));












