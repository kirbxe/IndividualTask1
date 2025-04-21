const openPopUp = document.getElementById('btn-load-courseswork')
const closePopUp = document.getElementById('pop-up-close')
const popUp = document.getElementById('pop-up') 

openPopUp.addEventListener('click', function(e){
e.preventDefault();
popUp.classList.add('active')


})
closePopUp.addEventListener('click', function(e){
popUp.classList.remove('active')

})


document.getElementById('courseswork-form').addEventListener('submit', function(e){
e.preventDefault();
const fullNameInput = document.getElementById('fullname').value
const groupInput = document.getElementById('group').value
const themeInput = document.getElementById('courses-theme').value
const fileInput = document.getElementById('input-file');
const file = fileInput.files[0];

if(!file){

return alert("Загрузите файл курсовой!")

}

localStorage.setItem('coursesData', JSON.stringify({
  fullname: fullNameInput,
  group: groupInput,
  theme: themeInput,
  fileName: file.name 
  }));

const fileUrl = URL.createObjectURL(file);
localStorage.setItem('courseswork-fileUrl', fileUrl)

const savedCoursesData = JSON.parse(localStorage.getItem('coursesData'))

showCard(savedCoursesData, fileUrl)
popUp.classList.remove('active')
});


const showCard = (data, Url) => {
const card = document.getElementById('card')

card.style.display = "block"

document.getElementById('card-fullname').innerHTML = data.fullname;
document.getElementById('card-group').innerHTML = data.group;
document.getElementById('card-theme').innerHTML = data.theme;
document.getElementById('card-file').innerHTML = data.fileName

const fileLink = document.getElementById('file-link')

fileLink.href = Url;
fileLink.textContent = `Скачать файл`

}














