function search() {
    let filter = document.getElementById('search').value.toUpperCase();
    let tab = document.getElementById('tab');
    let tr = tab.getElementsByTagName('tr');

    for(var i=0; i < tr.length; ++i){
      let td = tr[i].getElementsByTagName('td')[0];
      if(td){
        let textvalue = td.textContent || td.innerHTML;

        if(textvalue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }else{
          tr[i].style.display = "none";
        }
      }
    }
  } 


  const openPopupButton = document.querySelectorAll('[data-target]');
  const closePopupButton = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openPopupButton.forEach(button => {
      button.addEventListener('click', () => {
          const popup = document.querySelector(button.dataset.target);
          openPopup(popup);
      });
  });


  closePopupButton.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopup(popup);
    });
});

overlay.addEventListener('click', () => {
  const popup = document.querySelectorAll('.popup.active')
  popup.forEach(popup => {
    closePopup(popup)
  })
})

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

  function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

//-------VAlidation--------------
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


function absent(e) {
  const idx = e.id;
  var x = document.getElementById(idx);
  var p = document.getElementById('present-'+ idx);
  console.log(x)
  var y = window.confirm('Do You want to mark this student Absent?');
  const currLoc = window.location.href;
  if( y )
  {
    x.checked= true;
    $.post(currLoc+`/delete/${idx}`,{},
 function(data, status){
   window.location.reload();
 });
    
  }
  else
  {
    p.checked= true;
  }
}


// const download = document.getElementById("download");
//   download.addEventListener("click", ()=> {
//     const attendance = this.document.getElementsByClassName("attendance");
//     console.log(attendance);
//     html2pdf().from(attendance).save();
//   })
function convert() {
  
  //-html2pdf().from(attendance).save();
  var element = document.getElementById('AttendanceMeetData');
  console.log(element);
  html2pdf(element);

}