const navElement = document.getElementById('nav-element')
if(savedUser.rang == "Преподаватель"){
    
    navElement.innerHTML = `<a class="element-link" href="check-courseswork.html">Проверка курсовых работ</a>`
    }else if(savedUser.rang == "Студент"){
    
   navElement.innerHTML = `<a class="element-link" href="Student.html">Загрузка курсовой</a>`
    
    }else{
    
    fullCategory.style.display = 'none'
    
    }