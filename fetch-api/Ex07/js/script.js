function fetchPokemons() {
    const limit = document.getElementById('limit').value;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        const pokemonsList = document.getElementById('pokemons');
        pokemonsList.innerHTML = ''; // Limpa a lista antes de adicionar novos
        data.results.forEach(pokemon => {
          const li = document.createElement('li');
          li.textContent = pokemon.name;
          pokemonsList.appendChild(li);
        });
      })
      .catch(error => console.error('Erro ao buscar Pokémons:', error));
    }