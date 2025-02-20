document.getElementById('buscarImagem').addEventListener('click', function(){ 
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Cachorro aleatório';
            document.getElementById('imagemContainer').innerHTML = '';
            document.getElementById('imagemContainer').appendChild(img);
        })
        .catch(error => console.error('Erro ao buscar imagem:', error));}
    );