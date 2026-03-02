// console.log("Comments connected");

// Comments Section
// 1. Comments Fetch korte hbe
function commentsData() {
    const url = "https://jsonplaceholder.typicode.com/comments";

    fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
        displayShow((data))
    })
}
commentsData();
// {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
// }
//2. Main Container ke dhorte hbe. Jeikhne amra displyUi e rakhbo.

function displayShow (comments){
    // Main Container ke dhorte hbe. Karon main container er moddei jinis Gula Rakhbo.

    const mainContainer = document.getElementById("Comments-Section");
    // console.log(mainContainer);
    //Jehetu Click korlere Double hoi Tai eitar inner HTML empty kore dite hbe.
    
    comments.forEach((comments) => {
        
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div id="comments-card">
                <p>${comments.postId}</p>
                <p>${comments.id}</p>
                <h2>${comments.name}</h2>
                <p>${comments.email}</p>
                <h4>${comments.body}</h4>
            </div>
        `
        // appends
        mainContainer.appendChild(newDiv);
    })

    

};
