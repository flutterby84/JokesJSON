class Joke {
    constructor(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
    }

    tellJoke() {
        return `${this.setup}\n${this.punchline}`;
    }
}

async function MyJokesAreFunny() {
    try {
        const response = await fetch('jokes.json');
        const jokesData = await response.json();

        const jokes = jokesData.jokes.map(jokeData => new Joke(jokeData.question, jokeData.answer));

        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        alert(randomJoke.tellJoke())
    } catch(error) {
        console.log('Error reading jokes.json')
    }
}
MyJokesAreFunny();