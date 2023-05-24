var modal = document.getElementById("modal");  
var openModal = document.getElementById("mostrar-modal");
var closeModal = document.getElementById("cerrar-modal");   
openModal.addEventListener("click", function() {
    modal.style.display = "block";
});   
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});