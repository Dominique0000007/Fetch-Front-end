fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        const pokemonsList = document.getElementById('pokemons');
        data.results.forEach(pokemon => {
          const li = document.createElement('li');
          li.textContent = pokemon.name;
          pokemonsList.appendChild(li);
        });
      })
      .catch(error => console.error('Erro ao buscar Pokémons:', error));