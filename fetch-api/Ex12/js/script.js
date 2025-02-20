document.getElementById('converter').addEventListener('click', function() {
    const valorDolar = document.getElementById('valorDolar').value;
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
            const taxaBRL = data.rates.BRL;
            const valorReal = (valorDolar * taxaBRL).toFixed(2);
            document.getElementById('resultado').textContent = `Valor em Real: R$ ${valorReal}`;
        })
        .catch(error => console.error('Erro ao buscar taxa de câmbio:', error));
});