fetch('https://randomuser.me/api/?id=1')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const userDiv = document.getElementById('user');
        userDiv.innerHTML = `
          <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Telefone:</strong> ${user.phone}</p>
        `;
      })
      .catch(error => console.error('Erro ao buscar usuário:', error));
