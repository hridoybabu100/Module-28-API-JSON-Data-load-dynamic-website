// Button Loading
const loadData = () => {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((result) => console.log(result));

}