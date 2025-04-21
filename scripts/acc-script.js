const savedUser = JSON.parse(localStorage.getItem('userData'))


console.log(savedUser)

 document.addEventListener('DOMContentLoaded', () => {
     const accTitle = document.getElementById('acc-title');
    accTitle.innerHTML = `Здравствуйте, ${savedUser.login}`;
  });