// load Posts

const loadPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts" ;

    fetch(url)
    .then((res) => res.json())
    .then ((data) => {
        // console.log(data);
        displayUl(data)   
    })
};
// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }

// const displayUl = (posts) => {
//     // 1. Kuthai Rakhbo seita amdr ke decide korte hbe.
//     const postContainer = document.getElementById('postContainer');
//     // Ekhn joto btn e click korbo toto bar double hoiya data gula dekhacce. tar jonne eitake fixed korte hbe. 

//     // Main Container inner HTML faka rakhlei eita fixed.

//     postContainer.innerHTML = " "
//     // console.log(postContainer); 
    

//    posts.forEach((posts) => {
//     // 2. li Created
//     const li = document.createElement('li');
//     li.innerText = posts.title;
//     // console.log(posts); 
//     // Container er sate append korte hbe.Tahole display te show hbe.

//     postContainer.appendChild(li)

    
//    })

//     //  for ( let i = 0; i < posts.length; i++ ){
//     //     console.log(posts[i]); 
//     //  }

//     // for ( let post of posts ){
//     //     console.log(post);
        
//     // }
    
// }

const displayUl = (posts) => {
    // 1. Main Container kee dorte hbe.sathe tar modde kichu thakle seitakew remove kore dite hbe.

    const mainContainer = document.getElementById("post-Container");
    mainContainer.innerHTML = " ";
    // console.log(mainContainer);

    posts.forEach((posts) => {
       
        // 2. Create div 
        const postCard = document.createElement('div');
        postCard.innerHTML = ` 
             <div id="post-card">
            <h1>${posts.title}</h1>
            <p>${posts.body}</p>
        </div>
        `
        // main Container ke amra add kore dilam
        mainContainer.appendChild(postCard)
        
    })
}
// loadPosts();  eitake call kora hole tahole button e click kora charaii eita website e dekhabe.
