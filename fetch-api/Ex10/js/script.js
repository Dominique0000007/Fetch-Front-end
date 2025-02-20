document.getElementById('buscarFato').addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fato').textContent = data.fact;
        })
        .catch(error => console.error('Erro ao buscar fato:', error));
});