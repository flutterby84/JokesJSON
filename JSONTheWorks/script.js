class Joke {
    constructor(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
    }

    tellJoke() {
        return `${this.setup}\n${this.punchline}`;
    }
}

// Setting up the read of our json file
fetch('jokes.json')
    // .then() - callback function to check json response
    .then(response => response.json())
    .then(jokesData => {
        let jokes = [];
        for (let jokeData of jokesData.jokes) {
            // Joke class
            jokes.push(new Joke(jokeData.question, jokeData.answer));
        }
        // josef says adventure randomly during class
        // aiden disagrees with random

        // grabbing random joke
        // math.random grabs decimal value between 0 - 1
        // math.floor gives us a whole number
        // using jokes.length to ensure we don't go past the index amount of jokes in
        // our array
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        // alerting
        // call our tellJoke method from our joke class
        alert(randomJoke.tellJoke());


    })
    // if error exists, log our error message
    .catch(error => console.log('Error reading jokes.json'));