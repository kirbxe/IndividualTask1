const userNameRow = document.getElementById('username')
const emailRow = document.getElementById('email')
const rangRow = document.getElementById('selectRang')
const fullCategory = document.getElementById('user-group')
const category = document.getElementById('selectGroup')



userNameRow.textContent = savedUser.login;
emailRow.textContent = savedUser.email
rangRow.textContent = savedUser.rang
if(savedUser.rang == "Преподаватель"){
category.innerHTML = `<strong>Кафедра:</strong> ${savedUser.group}`

}else if(savedUser.rang == "Студент"){

category.innerHTML = `<strong>Группа:</strong> ${savedUser.group}`

}else{

fullCategory.style.display = 'none'

}

const btnLeave = document.getElementById('logout-btn')
btnLeave.addEventListener('click', function(e){
e.preventDefault();

localStorage.removeItem('userData')

location.href = "index.html"

})

const navElement = document.getElementById('nav-element')
if(savedUser.rang == "Преподаватель"){
    
    navElement.innerHTML = `<a class="element-link" href="check-courseswork.html">Проверка курсовых работ</a>`
    }else if(savedUser.rang == "Студент"){
    
   navElement.innerHTML = `<a class="element-link" href="Student.html">Загрузка курсовой</a>`
    
    }else{
    
    fullCategory.style.display = 'none'
    
    }

