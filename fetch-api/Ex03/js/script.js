function fetchCEP() {
      const cep = document.getElementById('cep').value;
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          const resultDiv = document.getElementById('result');
          if (data.erro) {
            resultDiv.innerHTML = '<p>CEP não encontrado.</p>';
          } else {
            resultDiv.innerHTML = `
              <p><strong>Logradouro:</strong> ${data.logradouro}</p>
              <p><strong>Bairro:</strong> ${data.bairro}</p>
              <p><strong>Cidade:</strong> ${data.localidade}</p>
              <p><strong>Estado:</strong> ${data.uf}</p>
            `;
          }
        })
        .catch(error => console.error('Erro ao buscar CEP:', error));
    }
 