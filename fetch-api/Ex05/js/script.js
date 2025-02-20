const apiKey = 'SUA_CHAVE_API'; // Obtenha uma chave de API em https://openweathermap.org
    function fetchWeather() {
      const city = document.getElementById('city').value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
          const weatherDiv = document.getElementById('weather');
          weatherDiv.innerHTML = `
            <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
            <p><strong>Condição:</strong> ${data.weather[0].description}</p>
          `;
        })
        .catch(error => console.error('Erro ao buscar previsão do tempo:', error));
    }