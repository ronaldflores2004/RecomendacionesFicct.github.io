$(document).ready(main);

var contador=1;

function main(){
    $('.menu_bar').click(function(){
       // $('nav').toggle();
       if(contador == 1){
            $('nav').animate({
             left:'0'
            });
            contador=0;
       }else{
            contador=1;
           $('nav').animate({
              left:'-100%'
             }); 
       }
    });

}
/////////////////////////////////////////////////////////////////////////////
///////////////////*navegacion con tabs*/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
   const subMenuLinks = document.querySelectorAll(".sub-menu a");
   const contenidoPrincipal = document.getElementById("contenido-principal");

   // Ocultar el contenido de las pestañas al inicio
   const tabContents = document.getElementsByClassName("tabcontent");
   for (let i = 0; i < tabContents.length; i++) {
       tabContents[i].style.display = "none";
   }

   subMenuLinks.forEach(link => {
       link.addEventListener("click", function(event) {
           event.preventDefault();
           const targetPage = this.getAttribute("href");

           // Cargamos el contenido de la página en el contenedor principal
           fetch(targetPage)
               .then(response => response.text())
               .then(content => {
                   contenidoPrincipal.innerHTML = content;

                   // Mostrar el contenido de "Tab 1" si se selecciona "Calculo I"
                   if (targetPage === "calculo1.html") {
                       openTab(null, "tab1");
                   } else {
                       // Ocultar el contenido de las pestañas si se selecciona otro enlace
                       const tabContents = document.getElementsByClassName("tabcontent");
                       for (let i = 0; i < tabContents.length; i++) {
                           tabContents[i].style.display = "none";
                       }
                   }
               });
       });
   });
});
function openTab(event, tabName) {
   const tabContent = document.getElementsByClassName("tabcontent");
   for (let i = 0; i < tabContent.length; i++) {
       tabContent[i].style.display = "none";
   }

   const tabLinks = document.getElementsByClassName("tablink");
   for (let i = 0; i < tabLinks.length; i++) {
       tabLinks[i].classList.remove("active");
   }

   document.getElementById(tabName).style.display = "block";

   if (event) {
       event.currentTarget.classList.add("active");
   }

}

