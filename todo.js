//
// console.log('Todo Connected'); 

// Todo Fetch
function todoData (){
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data))
};
todoData();

// {
//     "userId": 7,
//     "id": 135,
//     "title": "facere ipsa nam eum voluptates reiciendis vero qui",
//     "completed": false
// }

 function displayTodo (todos) {
    // Container adding with empty html
    const mainContainer = document.getElementById("Main-Container");
    // console.log(mainContainer);
    mainContainer.innerHTML = " ";

    todos.forEach((todos) => {
        // console.log(todos); 
        const displayDiv = document.createElement("div");
        displayDiv.innerHTML = `
        
        <div id="card">
            <p> ${todos.userId} </p>
            <p> ${todos.id} </p>
            <h2> ${todos.title}</h2>
            <h4> ${todos.completed == true ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-x"></i>` }</h4>
        </div>

        `
        // MainContainer Child korte hbe
        mainContainer.appendChild(displayDiv)
    })
    
 }
