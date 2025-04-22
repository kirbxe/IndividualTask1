const savedCoursesData = JSON.parse(localStorage.getItem('coursesData'))


    const card = document.getElementById('card')
    
    card.style.display = "block"
    
    document.getElementById('card-fullname').innerHTML = savedCoursesData.fullname;
    document.getElementById('card-group').innerHTML = savedCoursesData.group;
    document.getElementById('card-theme').innerHTML = savedCoursesData.theme;
    document.getElementById('card-file').innerHTML = savedCoursesData.fileName
    
    const fileLink = document.getElementById('file-link')
    
    fileLink.textContent = `Скачать файл`






    $("#select-grade").change(function() {
        const selectedValue = $(this).val();
        const $textAreaforNotAccess = $("#comments-not-access");
        const $btnGrade = $("#btn-grade")


        if (!selectedValue || selectedValue === "choose") {
          $textAreaforNotAccess.hide().empty();
          $btnGrade.hide();
          return;
      
        }else{
          if (selectedValue === "access") {
            $btnGrade.show();
            $textAreaforNotAccess.hide().empty();
          } 
          else if (selectedValue === "not-access") {
            $textAreaforNotAccess.show();
            $btnGrade.hide();
          }
      }
      
     
      });


    
    
    
