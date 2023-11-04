document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");
    const mensajeRegistro = document.getElementById("mensajeRegistro");
    const mensajeError = document.getElementById("mensajeError");
    const enviarBtn = document.getElementById("enviar");

    enviarBtn.addEventListener("click", function () {
        // Obtener los valores de los campos de entrada
        const nombre = document.getElementById("nombre").value.trim();
        const nickname = document.getElementById("nickname").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const email = document.getElementById("email").value.trim();
        const contrasena = document.getElementById("contrasena").value.trim();
        const confirmarContrasena = document.getElementById("confirmarContrasena").value.trim();

        // Verificar si todos los campos están completos
        if (nombre !== "" && nickname !== "" && edad !== "" && email !== "" && contrasena !== "" && confirmarContrasena !== "") {
            if (contrasena === confirmarContrasena) {
                // Mostrar el mensaje de registro exitoso y aplicar la animación
                mensajeRegistro.classList.add("mostrar");
                mensajeRegistro.textContent = "Registro exitoso. ¡Gracias!";

                // Ocultar el mensaje de registro exitoso después de 3 segundos
                setTimeout(function () {
                    mensajeRegistro.classList.remove("mostrar");
                    // Redirigir al usuario a la página de destino
                    window.location.replace("iniciar_sesion.html"); // Cambia la URL a la que deseas redirigir
                }, 2000);

                // Resetear el mensaje de error si estaba visible
                mensajeError.classList.remove("mostrar");
            } else {
                // Mostrar un mensaje de error si las contraseñas no coinciden
                mensajeError.textContent = "Las contraseñas no coinciden.";
                mensajeError.classList.add("mostrar");
            }
        } else {
            // Mostrar un mensaje de error si no se completan todos los campos
            mensajeError.textContent = "Por favor, completa todos los campos.";
            mensajeError.classList.add("mostrar");
        }
    });
});