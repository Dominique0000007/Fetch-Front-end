fetch('https://randomuser.me/api/?results=10')
.then(response => response.json())
.then(data => {
  const usersList = document.getElementById('users');
  data.results.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name.first} ${user.name.last} (${user.email})`;
    usersList.appendChild(li);
  });
})
.catch(error => console.error('Erro ao buscar usuários:', error));