//
// console.log("albums Connected");

function albumsData (){
    const url = "https://jsonplaceholder.typicode.com/albums";

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayAlbums(data);   
    })


}
albumsData();
// {
//     "userId": 1,
//     "id": 1,
//     "title": "quidem molestiae enim"
// }
function displayAlbums(albums){
    const mainContainer = document.getElementById("albums-section");
    mainContainer.innerHTML = " ";
    

    albums.forEach((albums) =>{
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `

    <div id="albums-card">
        <p>${albums.userId}</p>
        <p>${albums.id}</p>
        <h3>${albums.title}</h3>
    </div>
    `
    mainContainer.appendChild(newDiv)
        
    })

    
}

