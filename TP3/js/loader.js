/*LOADER*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader-wrapper").style.opacity = "0";
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style.display = "none";
        }, 500); // Retardo adicional para la animación de desvanecimiento
    }, 5000); // Retardo de 5 segundos (5000 milisegundos)


     // Simular la carga gradual (para probar)


     let percentage = 0;
     const progressBar = document.querySelector(".progress");
     const percentageDisplay = document.querySelector(".percentage");
 
     function updateProgress() {
         percentage += 1;
         progressBar.style.width = percentage + "%";
         percentageDisplay.textContent = percentage + "%";
 
         if (percentage < 100) {
             setTimeout(updateProgress, 50); // Cambia la velocidad de carga aquí
         }
     }
 
     updateProgress();
});