// Buttons
const brewSearchBtn = document.querySelector('#search-breweries');
const brewSearchSubmitBtn = document.querySelector('#brew-api-submit');

// Sections
const brewSearchForm = document.querySelector('.search-form')
const brewResults = document.querySelector('.brew-api-results')

// Event Listeners
brewSearchSubmitBtn.addEventListener('click', brewSearch)
brewSearchBtn.addEventListener('click', searchForm)

// Populates the Brew Search form
function searchForm(){
    if (brewSearchForm.style.display === "flex") {
        console.log('Form is already up')
    } else {
        brewResults.replaceChildren()
        brewSearchForm.style.display = "flex"
        resultsDisplay.style.display = "none"
        searchBar.style.display = "none"
        form.style.display = "none"
    }
}

// Pulls brewery information from Open Brewery DB
async function brewSearch(){
    try {
        const res = await fetch('https://api.openbrewerydb.org/breweries');
        const data = await res.json()
        buildBrewLayout(data)
    } catch (err) {
        console.log(err)
    }
}

// Creates brewery display information
function buildBrewLayout(data){
    let count = 1
    data.forEach((e) => {
        const {city, name, state, brewery_type, id} = e

        let p = document.createElement('p');
        p.className = `brewery-result ${id}`
        p.innerText = `${count}). ${name} is a ${brewery_type} brewery based out of ${city}, ${state}.`

        let br = document.createElement('br')

        brewResults.appendChild(p)
        brewResults.appendChild(br)
        count++
    })
}