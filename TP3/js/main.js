let hamburguesa=document.querySelector("#desplegar-menu");
let cerrar_menu=document.getElementById("cerrar-menu");
let menu=document.querySelector("#menu-desplegable");

hamburguesa.addEventListener("click", () =>{
    menu.classList.add("visible");
    carrito.classList.remove("carrito-visible");
    user.classList.remove("user-visible");
});

cerrar_menu.addEventListener("click", () =>{
    menu.classList.remove("visible");
});


let abrir_carrito=document.getElementById("desplegar-carrito");
let cerrar_carrito=document.getElementById("cerrar-carrito");
let carrito=document.getElementById("carrito-desplegable");

abrir_carrito.addEventListener("click", () =>{
    carrito.classList.add("carrito-visible");
    menu.classList.remove("visible");
    user.classList.remove("user-visible");
});

cerrar_carrito.addEventListener("click", () =>{
    carrito.classList.remove("carrito-visible");
});


let abrir_user=document.getElementById("desplegar-user");
let cerrar_user=document.getElementById("cerrar-user");
let user=document.getElementById("user");

abrir_user.addEventListener("click",()=>{
    user.classList.add("user-visible");
    carrito.classList.remove("carrito-visible");
    menu.classList.remove("visible");
});

cerrar_user.addEventListener("click", ()=>{
    user.classList.remove("user-visible");
});


let caja_compartir=document.querySelector(".caja-compartir");
let abrir_compartir=document.getElementById("abrir-compartir");
let cerrar_compartir=document.querySelector(".cerrar-compartir");

abrir_compartir.addEventListener("click", ()=>{
    caja_compartir.classList.add("caja-compartir-visible");
});

cerrar_compartir.addEventListener("click", ()=>{
    caja_compartir.classList.remove("caja-compartir-visible");
});





