//
// console.log("User Connected");

function userData (){
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data))
}
userData();
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }

function displayUser (users){
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = " ";

    users.forEach((users) => {
        
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `

        <div id="user-card">
            <p>${users.id}</p>
            <p>${users.name}</p>
            <p>${users.username}</p>
            <p>${users.email}</p>
            <h3>${users.address.street}</h3>
            <h3>${users.address.suite}</h3>
            <h3>${users.address.city}</h3>
            <h3>${users.address.zipcode}</h3>
            <h3>${users.address.geo.lat}</h3>
            <h3>${users.address.geo.lng}</h3>
            <h2>${users.phone}</h2>
            <p>${users.website}</p>
            <h2>${users.company.name}</h2>
            <h2>${users.company.catchPhrase}</h2>
            <h2>${users.company.bs}</h2>
        </div>

        `
        userContainer.appendChild(newDiv)
        
    })
}
