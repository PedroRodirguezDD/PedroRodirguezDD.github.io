

//VARIABLE LOGO
const logo = document.getElementById('logo');
const header = document.getElementById('header');

//VARIABLES ANIMACION DE SCROLLING DEL PRIMER FONDO 
const spider_woman = document.querySelector(".spider-woman");
const spider_peter = document.querySelector(".spider-peter");
const spider_morales = document.querySelector(".spider-morales");

const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");

const edificioIzq = document.querySelector(".fondo1-edificio-izq");
const edificioDer = document.querySelector(".fondo1-edificio-der");
const edificioMedio = document.querySelector(".fondo1-edificio-medio");


//VARIABLE ANIMACION DUENDE
const duende = document.querySelector(".duende");


//VARIABLE ANIMACION DE LAS 3 CARDS
const card1=document.querySelector(".card1");
const card2=document.querySelector(".card2");
const card3=document.querySelector(".card3");


//VARIABLE ANIMACION DE LAS IMAGENES DE LOS AUTOS (FONDO ROSA CON GWEN)
const auto1=document.querySelector(".auto1");
const auto2=document.querySelector(".auto2");
const auto3=document.querySelector(".auto3");


//VARIBALE ANIMACION DE IMG FIJA
const img_fija=document.getElementById("img-fija");


window.onscroll = function () {
  let y = window.scrollY;


  //ANIMACION DE HEADER CON LOGO
  if(y>10){
    logo.style.transform=`translateY(-190px) scale(.2)`;
    logo.style.position='none';
    header.style.position='fixed';
    header.style.background='linear-gradient(180deg,rgb(84, 153, 248),rgb(84, 153, 248),rgb(84, 153, 248),rgb(84, 153, 248),rgb(84, 153, 248),transparent)';
  }
  if(y<10){
    logo.style.transform=`translateY(0) scale(1)`;
    logo.style.position='absolute';
    header.style.position='relative';
  }


  //ANIMACION DEL PRIMER FONDO
  if(y>30 && y<450){
    spider_woman.style.marginTop = y * -.3 + "px";
    spider_peter.style.marginTop = y * -.3 + "px";
    spider_morales.style.marginTop = y * -.3 + "px";

    tela1.style.marginTop = y * -.3 + "px";
    tela2.style.marginTop = y * -.3 + "px";

    edificioIzq.style.marginBottom = y * -.2 + "px";
    edificioDer.style.marginTop = y * .2 + "px";
    edificioMedio.style.marginBottom = y * -.2 + "px";

    edificioDer.style.right= y * -.1 + "px";
    edificioIzq.style.left= -50+y * -.1 + "px";
  }

  //ANIMACION DEL DUENDE VERDE
  if(y>301 && y<1300){
    duende.style.marginTop = -45 + y * .14 + "px";
  }

  //ANIMACION DE LAS 3 CARDS
  if(y>1250){
    card1.style.opacity = 0;
    card1.style.animation='fade-in 1.2s linear .2s 1 forwards';

    card2.style.opacity = 0;
    card2.style.animation='fade-in 1.2s linear .6s 1 forwards';

    card3.style.opacity = 0;
    card3.style.animation='fade-in 1.2s linear 1s 1 forwards';
  }
  if(y<1301){
    card1.style.opacity = 1;
    card1.style.animation='fade-in-alrevez .6s linear .2s 1 forwards';

    card2.style.opacity = 1;
    card2.style.animation='fade-in-alrevez 1s linear .2s 1 forwards';

    card3.style.opacity = 1;
    card3.style.animation='fade-in-alrevez 1.5s linear .2s 1 forwards';
  }

  //ANIMACION DE LOS AUTOS 
  if(y>2120 && y<2700){
    auto1.style.transform = `translateY(${y * 0.03}px)`;
    auto2.style.transform = `translateY(${y * 0.04}px)`;
    auto3.style.transform = `translateY(${y * 0.05}px)`;
  }
  if(y<2000 || y>2700){
    auto1.style.transform=`translateY(0px)`;
    auto2.style.transform=`translateY(0px)`;
    auto3.style.transform=`translateY(0px)`;
  }

  //ANIMACION DE CAMBIO DE IMG FIJAS
  if(y>3950 && y<5250){
    img_fija.classList.remove("imagen-fija-final");
    img_fija.classList.add("imagen-fija-inicio");
  }

  if(y<3950 ){
    img_fija.classList.remove("imagen-fija-inicio");
  }
  
  if(y>5250){
    img_fija.classList.remove("imagen-fija-inicio");
    img_fija.classList.add("imagen-fija-final");
  }


      //parte de cambio de img
  if(y>3950 && y<4000){
    
    cambiarConTransicion("img/100misiones.png");
    img_fija.setAttribute('nombre','img/100misiones.png');
    
  }
  if(y>4250 && y<4380){
    
    cambiarConTransicion("img/escenas-deslumbrantes.png");
    img_fija.setAttribute('nombre','img/escenas-deslumbrantes.png');
    
  }
  if(y>4700 && y<4900){
    
    cambiarConTransicion("img/pelea-boss.png");
    img_fija.setAttribute('nombre','img/pelea-boss.png');
    
  }
  if(y>5150 && y<5250){
    
    cambiarConTransicion("img/derrota-villanos.png");
    img_fija.setAttribute('nombre','img/derrota-villanos.png');
  }

};


function cambiarConTransicion(nuevaURL) {
  console.log(img_fija.getAttribute('nombre'));
  console.log(nuevaURL);
  
  var archivo=img_fija.getAttribute('nombre');

  if(archivo !== nuevaURL){
    img_fija.style.animation='transicion-img .4s linear  1 forwards'
  
    setTimeout(function() {
      img_fija.src = nuevaURL;
    }, 200);

    setTimeout(function() {
      img_fija.style.animation='none';
    }, 500); 
  }
}


//HOVER DEL SPRITESHEET
const spritesheet1=document.getElementById("spritesheet");
const spritesheet2=document.getElementById("spritesheet2");

spritesheet2.addEventListener("mouseover",function(){
  spritesheet2.style.opacity=0;
  spritesheet1.style.opacity=1;
});

spritesheet2.addEventListener("mouseleave",function(){
  spritesheet1.style.opacity=0;
  spritesheet2.style.opacity=1;
});


//ANIMACION HAMBURGUESA

const hamburguesa=document.getElementById('hamburguesa');
const ham1=document.getElementById("ham1");
const ham2=document.getElementById("ham2");
const ham3=document.getElementById("ham3");

hamburguesa.addEventListener("click", function(){
  if(hamburguesa.classList.contains("cruz")){
    hamburguesa.classList.remove("cruz");
    ham1.style.animation='menu_hamburguesa_vuelta1 .2s linear 1 forwards';
    ham2.style.animation='menu_hamburguesa_vuelta2 .2s linear 1 forwards';
    ham3.style.animation='menu_hamburguesa_vuelta3 .2s linear 1 forwards';
  }
  else{
    hamburguesa.classList.add("cruz");
    ham1.style.animation='menu_hamburguesa_ham1 .3s linear 1 forwards';
    ham2.style.animation='menu_hamburguesa_ham2 .3s linear 1 forwards';
    ham3.style.animation='menu_hamburguesa_ham3 .3s linear 1 forwards';
  }

});


//ANIMACION DE MENU DESPLEGABLE


    const menu = document.querySelector('.menu');
    const btnCerrar = document.querySelector('.close-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    
hamburguesa.addEventListener('click', () => {
  menu.classList.toggle('show-menu');

  if (menu.classList.contains('show-menu')) {
    resetMenuItems();
    let delay = 0;
    menuItems.forEach(item => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }, delay);
      delay += 250; // ajusta el tiempo de intervalo entre cada elemento (en milisegundos)
    });
  } else {
    resetMenuItems();
  }
});



function resetMenuItems() {
  menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
  });
}



//PUNTO OPCIONAL --- PARALLAX MOUSEMOVE


const parallax=document.getElementById("parallax");

const segundaCapa1=document.querySelector(".chica-poderosa");
const segundaCapa2=document.querySelector(".pantera");
const segundaCapa3=document.querySelector(".hulk");

const terceraCapa=document.querySelector(".tercera-capa");

const cuartaCapa=document.querySelector(".cuarta-capa");

const capa1= 400;
const capa2= 100;
const capa3= 500;
const capa4= 600;
const capa_pantera=50;

parallax.addEventListener("mousemove", function(e){
  const x=e.clientX- parallax.getBoundingClientRect().left;
  const y=e.clientY- parallax.getBoundingClientRect().top;


  parallax.style.transform=`translate(${x/capa1}%,${y/capa1}%)`;

  segundaCapa1.style.transform=`translate(${x/capa2}%,${y/capa2}%)`;
  segundaCapa2.style.transform=`translate(${x/capa_pantera}%,${y/capa_pantera}%)`;
  segundaCapa3.style.transform=`translate(${x/capa2}%,${y/capa2}%)`;

  terceraCapa.style.transform=`translate(${x/capa3}% , ${y/capa3}%)`;

  cuartaCapa.style.transform=`translate(${x/capa4}% , ${y/capa4}%)`;

});

parallax.addEventListener("mouseleave", function(){
  parallax.style.transform=`translate(0,0)`;

  segundaCapa1.style.transform=`translate(0%,0%)`;
  segundaCapa2.style.transform=`translate(0%,0%)`;
  segundaCapa3.style.transform=`translate(0%,0%)`;

  terceraCapa.style.transform=`translate(0%,0%)`;

  cuartaCapa.style.transform=`translate(0%,0%)`;
});




//PAGINA DE CARGA


window.addEventListener("load", function() {
  const loaderContainer = document.querySelector('.loader-container');
  const loaderText = document.querySelector('.loader-text');

  setTimeout(function() {
    loaderContainer.parentElement.classList.add('loaded');
  }, 5000); // Mostrar el loader durante 5 segundos, O SUMARLE DESDE ACA 

  function updateLoaderText(percentage) {
    loaderText.textContent = `Cargando... ${percentage}%`;
  }

  // Simulación de carga para actualizar el porcentaje
  let progreso = 0;
  const interval = setInterval(function() {
    progreso += 5;
    if (progreso > 100) {
      progreso = 100;
      clearInterval(interval);
    }
    updateLoaderText(progreso);
  }, 250); // Intervalo de actualización del porcentaje (cada 0.5 segundos)
});
