const searchUserBtn = document.querySelector('#search-users-button');
const searchIdBtn = document.querySelector('#search-user-id-button')

const resultsDisplay = document.querySelector('.search-results-placeholder')


searchUserBtn.addEventListener('click', getAllUsers);
searchIdBtn.addEventListener('click', getOneUser);

// Return all users in database
function getAllUsers(){
    // Local
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then((data) => populateUsers(data))
}

// Return a specific user from db
function getOneUser(){
    const userId = document.querySelector('#userId').value
    // console.log(userId)
    // Local
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then((data) => populateUsers(data))
}

// Populates the search results area with user information
function populateUsers(data) {
    resultsDisplay.replaceChildren()
    
    // For all users
    if(data.length > 1) {
        data.forEach((user) => {
            const {id, name, fav_breweries, city, state} = user
            
            let p = document.createElement('p')
            p.innerText = `\n${id}. ${name.toUpperCase()} from ${city}, ${state}\nFavorite locations are:`
            resultsDisplay.appendChild(p)
    
            fav_breweries.forEach((b) => {
                let li = document.createElement('li')
                li.innerText = `${b}`
                resultsDisplay.appendChild(li)
            })
        })
    } 
    // For a single user
    else {
        const {id, name, fav_breweries, city, state} = data
        
        let p = document.createElement('p')
        p.innerText = `\n${id}. ${name.toUpperCase()} from ${city}, ${state}\nFavorite locations are:`
        resultsDisplay.appendChild(p)
    
        fav_breweries.forEach((b) => {
            let li = document.createElement('li')
            li.innerText = `${b}`
            resultsDisplay.appendChild(li)
        })
    }
}
