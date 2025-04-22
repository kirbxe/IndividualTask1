$("#select-rang").change(function() {
  const selectedValue = $(this).val();
  const $secondSelect = $("#select-group");
  

  $secondSelect.hide().empty();

  
  if (!selectedValue || selectedValue === "Администрация" || selectedValue === "Выберите должность") {
    return;
  }

  $secondSelect.show();

  if (selectedValue === "Студент") {
    $secondSelect.append('<option value="">Выберите группу</option>');
    const groups = ["П-33", "П-34", "П-35"];
    groups.forEach(group => {
      $secondSelect.append(`<option value="${group}">${group}</option>`);
    });
  } 
  else if (selectedValue === "Преподаватель") {
    $secondSelect.append('<option value="">Выберите кафедру</option>');
    const departments = ["Математики и информатики", "Экономическая"];
    departments.forEach(dept => {
      $secondSelect.append(`<option value="${dept}">${dept}</option>`);
    });
  }

});

const regAcc = () => {

const nameInput = document.getElementById('name')
const passInput = document.getElementById('password')
const emailInput = document.getElementById('email')
const selectRang = document.getElementById('select-rang')
const selectGroup = document.getElementById('select-group')
const frameData = document.getElementById('frame-for-data')

if(nameInput == "" || emailInput.value == "" || passInput.value == "" || selectRang.value == ""){

    frameData.innerHTML = `<h3>Введите все данные!</h3>`
    return;

}
localStorage.setItem('userData', JSON.stringify({
    login: nameInput.value,
    password: passInput.value,
    email: emailInput.value,
    rang: selectRang.value,
    group: selectGroup.value
  }));

if(selectRang.value == "Студент"){
location.href = "Student.html"
}
if (selectRang.value == "Преподаватель"){
location.href = "Teacher.html"
}
if(selectRang.value == "Администрация"){
location.href = "Admin.html"
}

}




