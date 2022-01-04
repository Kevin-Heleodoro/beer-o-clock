// Buttons
const searchUserBtn = document.querySelector('#search-users-button');
const searchIdBtn = document.querySelector('#search-user-id-button');
const addUserBtn = document.querySelector('#add-user');

// Sections
const resultsDisplay = document.querySelector('.search-results-display')


// Event Listeners
searchUserBtn.addEventListener('click', getAllUsers);
searchIdBtn.addEventListener('click', getOneUser);
addUserBtn.addEventListener('click', addUser);

// Return all users in database
async function getAllUsers(){
    // Local
    // try {
    //     const res = await fetch('http://localhost:3000/users');
    //     const data = await res.json()
    //     populateUsers(data)
    // } catch (err) {
    //     console.error(err)
    // }

    // Deployed
    try {
        const res = await fetch('https://warm-basin-38859.herokuapp.com/users');
        const data = await res.json()
        populateUsers(data)
    } catch (error) {
        console.error(error)
    }
}

// Return a specific user from db
async function getOneUser(){
    const userId = document.querySelector('#userId').value

    // Local
    try {
        const res = await fetch(`http://localhost:3000/users/${userId}`)
        const data = await res.json()
        populateUsers(data)
    } catch (err) {
        let p = document.createElement('p');
        p.innerText = `ID #${userId} does not exist.`
        resultsDisplay.replaceChildren(p)
        console.error(err)
    }
}

// Add a user to the db
async function addUser(){
    try {
        
    } catch (err) {
        
    }
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
