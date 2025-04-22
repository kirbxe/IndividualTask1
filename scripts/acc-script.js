const savedUser = JSON.parse(localStorage.getItem('userData'))


console.log(savedUser)

 document.addEventListener('DOMContentLoaded', () => {
     const accTitle = document.getElementById('acc-title');
    accTitle.innerHTML = `Здравствуйте, ${savedUser.login}`;
  });

const burgerBtn = document.getElementById('burger-btn')
const header = document.getElementById('header')

burgerBtn.addEventListener('click', function(e){
e.preventDefault();

if(header.classList.contains('open')){

  header.classList.remove('open')
}else{

  header.classList.add('open')
}


})
