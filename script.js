function fetchJokeByCategory() {
    const selectedCategory = document.getElementById('selectOption').value;

    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
        .then(response => response.json())
        .then(data => {
            displayJoke(data.value);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

function displayJoke(joke) {
    const jokeDisplay = document.getElementById('joke-display');
    jokeDisplay.innerHTML = `<p>Joke: ${joke}</p>`;
}
