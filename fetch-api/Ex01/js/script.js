fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const usersList = document.getElementById('users');
        data.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `${user.name} (${user.email})`;
          usersList.appendChild(li);
        });
      })
      .catch(error => console.error('Erro ao buscar usuários:', error));
