const whereToPutTheAnimals = document.querySelector("#animal-list")

const animalFetcher = () => {
    // Fetch the data
    fetch("http://localhost:5002/animals")
        // Parse the data
        .then(data => data.json())
        // Do something with the parsed data
        .then((arrayOfAnimals) => {
            for (const animal of arrayOfAnimals) {
                const convertedAnimal = animalConverter(animal)
                displayAnimalInDOM(convertedAnimal)
            }
        })
}

animalFetcher()


const animalConverter = (animalObject) => {
    // Return HTML representation of the animal object
    return `
        <section class="animal">
            <h1 class="animal__name">${animalObject.name}</h1>
            <h2 class="animal__breed">${animalObject.breed}</h2>
        </section>
    `
}



const displayAnimalInDOM = (animalHTMLRepresentation) => {
    // Attach the string to the right place in the DOM
    whereToPutTheAnimals.innerHTML += animalHTMLRepresentation
}





