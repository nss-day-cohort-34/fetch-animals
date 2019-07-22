const whereToPutTheAnimals = document.querySelector("#animal-list")

const animalFetcher = () => {
    // Fetch the data
    fetch("http://localhost:5002/animals")
        // Do something with the parsed data
        .then((arrayOfAnimals) => {
        })
}

animalFetcher()


const animalConverter = (animalObject) => {
    // Return HTML representation of the animal object
    return `
    `
}



const displayAnimalInDOM = (animalHTMLRepresentation) => {
    // Attach the string to the right place in the DOM
}





