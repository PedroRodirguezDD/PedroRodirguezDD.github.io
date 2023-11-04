


  //RESPONSIVE: CARRUSEL PARA RECOMENDADOS

  var swiper = new Swiper(".slide-content", {
    slidesPerView:4,
    spaceBetween: 60,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".next-recomendado",
      prevEl: ".prev-recomendado",
    },
  });
 
  window.addEventListener('resize', ()=>{
    if(window.innerWidth<400){
      var swiper = new Swiper(".slide-content", {
        slidesPerView:1.2,
        spaceBetween: 60,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-recomendado",
          prevEl: ".prev-recomendado",
        },
        
      });
    }else{
      var swiper = new Swiper(".slide-content", {
        slidesPerView:4,
        spaceBetween: 60,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-recomendado",
          prevEl: ".prev-recomendado",
        },
      });
    }
  });



  //RESPONSIVE: CARRUSEL PARA DEPORTES

  var swiper = new Swiper(".slide-content-deportes", {
    slidesPerView:5.2,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".next-deportes",
      prevEl: ".prev-deportes",
    },
  });
 
  window.addEventListener('resize', ()=>{
    if(window.innerWidth<400){
      var swiper = new Swiper(".slide-content-deportes", {
        slidesPerView:1.5,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-deportes",
          prevEl: ".prev-deportes",
        },
      });
    }else{
      var swiper = new Swiper(".slide-content-deportes", {
        slidesPerView:5.2,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-deportes",
          prevEl: ".prev-deportes",
        },
      });
    }
  });



  //RESPONSIVE: CARRUSEL PARA ACCION

  var swiper = new Swiper(".slide-content-accion", {
    slidesPerView:5.2,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".next-accion",
      prevEl: ".prev-accion",
    },
  });
 
  window.addEventListener('resize', ()=>{
    if(window.innerWidth<400){
      var swiper = new Swiper(".slide-content-accion", {
        slidesPerView:1.5,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-accion",
          prevEl: ".prev-accion",
        },
      });
    }else{
      var swiper = new Swiper(".slide-content-accion", {
        slidesPerView:5.2,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-accion",
          prevEl: ".prev-accion",
        },
      });
    }
  });




  //RESPONSIVE: CARRUSEL PARA AVENTURA

  var swiper = new Swiper(".slide-content-aventura", {
    slidesPerView:5.2,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".next-aventura",
      prevEl: ".prev-aventura",
    },
  });
 
  window.addEventListener('resize', ()=>{
    if(window.innerWidth<400){
      var swiper = new Swiper(".slide-content-aventura", {
        slidesPerView:1.5,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-aventura",
          prevEl: ".prev-aventura",
        },
      });
    }else{
      var swiper = new Swiper(".slide-content-aventura", {
        slidesPerView:5.2,
        spaceBetween: 40,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".next-aventura",
          prevEl: ".prev-aventura",
        },
      });
    }
  });