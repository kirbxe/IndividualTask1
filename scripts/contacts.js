const navElement = document.getElementById('nav-element')
if(savedUser.rang == "Преподаватель"){
    
    navElement.innerHTML = `<a class="element-link" href="Teacher.html">Проверка курсовых работ</a>`
    }else if(savedUser.rang == "Студент"){
    
   navElement.innerHTML = `<a class="element-link" href="Student.html">Загрузка курсовой</a>`
    
    }else{
    
    navElement.style.display = 'none'
    
    }