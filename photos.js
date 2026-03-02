//
// console.log("Photos section Connected");
function photosData (){
    const url = "https://jsonplaceholder.typicode.com/photos"
    fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhotos(data))
}
photosData();
// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }
function displayPhotos (photos){

    const photoContainer = document.getElementById("Phostos-Container");
    photoContainer.innerHTML = " ";
    // console.log(photoContainer);
    
    photos.forEach((photos) => {
        
        const newPhotosDive = document.createElement("div");
        newPhotosDive.innerHTML = `
        <div id="card">
        <p>${photos.albumId}</p>
        <p>${photos.id}</p>
        <h2>${photos.title}</h2>
        </div>
        `
        photoContainer.appendChild(newPhotosDive);
        
    })
}
