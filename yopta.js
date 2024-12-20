 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const button = document.getElementById("bg");
  const ИзвиняйсяДон = document.getElementById("maks");
    button.addEventListener("click", function(event){
        ИзвиняйсяДон.classList.toggle("disabled")
    })
    
  
   
const cardBg = document.getElementById("card__button")
const maks = document.getElementById("maksg")
cardBg.addEventListener("click", function (event) {
maks.classList.toggle("dv")



})


const sher = document.getElementById("sherr")
const sherbg = document.getElementById("sherbutton")
sherbg.addEventListener("click", function(event){
  sher.classList.toggle("dota")



})
