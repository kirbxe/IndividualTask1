const savedCoursesData = JSON.parse(localStorage.getItem('coursesData'))


    const card = document.getElementById('card')
    
    card.style.display = "block"
    
    document.getElementById('card-fullname').innerHTML = savedCoursesData.fullname;
    document.getElementById('card-group').innerHTML = savedCoursesData.group;
    document.getElementById('card-theme').innerHTML = savedCoursesData.theme;
    document.getElementById('card-file').innerHTML = savedCoursesData.fileName
    
    const fileLink = document.getElementById('file-link')
    
    fileLink.textContent = `Скачать файл`


    
    
    
