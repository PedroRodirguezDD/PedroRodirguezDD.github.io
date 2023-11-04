
/**@type {CanvasRenderingContext2D} */

let canvas= document.getElementById('canvas');
let ctx=canvas.getContext("2d");

let canvasWidth=canvas.width;
let canvasHeight=canvas.height;

let fondo_juego=new Image();
fondo_juego.src='img-canvas/fondo_tablero_cuatro_en_linea.jpg';

//MOVER FICHA

let fichas=[];
let posFicha=null;
let mousePresionado=false;
let fichaAgarrada=null;

let cantidadFichas=0;

let turnoDe="1";

let ganador=null;

let tablero=null;

let ficha_uno=null;
let ficha_dos=null;
let num_tablero=0;


function juego(ficha1,ficha2,tipo_tablero){
    
    let cant_fichas=0;

    if(tipo_tablero==4){
        cantidadFichas=21;
        cant_fichas=4;
    }
    if(tipo_tablero==5){
        cantidadFichas=28;
        cant_fichas=5;
    }
    if(tipo_tablero==6){
        cantidadFichas=36;
        cant_fichas=6;
    }

    ficha_uno=ficha1;
    ficha_dos=ficha2;
    num_tablero=cant_fichas;

    tablero=new Tablero(ctx,num_tablero,40,19,canvasWidth,canvasHeight);

    addFigure(ficha_uno,ficha_dos);
}


function addFigure(ficha1,ficha2){
    let num=500;
    for(let i=0;i<cantidadFichas;i++){
        addFicha1(num,ficha1);
        addFicha2(num,ficha2);
        num=num-10;
    }
    drawFigure();
}

function addFicha1(num,ficha1){
    let posX=180;
    let posY=num;
    let color="red";
    let img=`img-canvas/pelota_${ficha1}.png`;
    
    let ficha=new Ficha(posX,posY,ctx,color,"uno",19,false,img);
    fichas.push(ficha);
}

function addFicha2(num,ficha2){
    let posX=830;
    let posY=num;
    let color="blue";
    let img=`img-canvas/pelota_${ficha2}.png`;
    
    let ficha=new Ficha(posX,posY,ctx,color,"dos",19,true,img);
    fichas.push(ficha);
}


    canvas.addEventListener("mousedown", agarrar);
    canvas.addEventListener("mouseup",soltar);
    canvas.addEventListener("mousemove",mover)



function agarrar(e){
    
    mousePresionado=true;

    if(fichaAgarrada!=null){
        fichaAgarrada=null;
    }

    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;

    let ficha=agarreFicha(x,y);
    if(ficha!=null && !ficha.ficha.getBloqueada()){
        fichaAgarrada=ficha.ficha;
        //ESTE ESTA MAL
        posFicha=ficha.pos;
    }
}




//// TERMINAR


function soltar(e){
    
    mousePresionado=false;

    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;

    if(fichaAgarrada!=null){
        
        let casilla=tablero.ingresoFicha(x,y);

        //PASAR LO QUE HAY ACA A OTRO METODO PARA ORGANIZAR MEJOR, NO PUEDE ESTAR TODO EN SOLTAR
        if(casilla!=null){
            fichaAgarrada.setPosX(x);
            fichaAgarrada.setPosY(y)
            
            //PINTAR LA CASILLA DONDE "CAE" LA FICHA
            let tirar=tablero.tirarFicha(casilla.posColumna,fichaAgarrada);

            //let fichaSoltada=tablero.casillas[tirar.fila][tirar.columna];

            if(tirar!=null){
                
                fichas.splice(posFicha,1);
                fichaSoltada=tablero.casillas[tirar.fila][tirar.columna]
                //verificar si alguien gano
                if(buscarGanador(tirar.fila,tirar.columna)){
                    bloquearFichas();
                    ganador=fichaSoltada.getTeam();
                    MostrarGanador(ganador);
                }else{
                    //PASAR EL TURNO
                    //cambiar el nombre del turno 
                    turnoDe=pasarTurno(fichaSoltada.getTeam());
                    mostrarTurno(turnoDe);
                }

            }
            else{
                volverPosicionInicial()
            }

        }
        else{
            volverPosicionInicial()
        }
    }

    drawFigure();
    
}


function mover(e){
    if(fichaAgarrada!=null && mousePresionado && !fichaAgarrada.getBloqueada()){
        let x = e.clientX - canvas.getBoundingClientRect().left;
        let y = e.clientY - canvas.getBoundingClientRect().top;
        fichaAgarrada.setPosX(x);
        fichaAgarrada.setPosY(y);
        drawFigure();
    }
}

function agarreFicha(x,y){
    for(let i=0;i<fichas.length;i++){
        const fig=fichas[i];
        if(fig.punteroEncima(x,y)){
            return{
                ficha:fig,
                pos:i
            }
        }
    }
}

function drawFigure(){
    
    clearCanvas();

    tablero.draw();

    for(let i=0;i<fichas.length;i++){
        fichas[i].draw();
    }

    if(ganador!=null){
        MostrarGanador(ganador);
        btn_reiniciar();
        borrar_timer();
    }
    else if(fichas.length==0){
        mostrarMensajeGanador("Empataron");
        btn_reiniciar();
        borrar_timer();
    }
    else{
        mostrarTurno(turnoDe);
        btn_reiniciar();
        drawTimer();
    }

}



function clearCanvas(){
    //ctx.fillStyle='rgb(19, 49, 74)';
    ctx.drawImage(fondo_juego,0,0,canvasWidth,canvasHeight);
    //ctx.fillRect(0,0,canvasWidth,canvasHeight);
}


function volverPosicionInicial(){
    fichaAgarrada.setPosX(fichaAgarrada.getPosInicialX());
    fichaAgarrada.setPosY(fichaAgarrada.getPosInicialY());
}



function buscarGanador(fila,columna){

    if(ganoHorizontal() || ganoVertical() || ganoDiagonalIzqArribaDerAbajo() || ganoDiagonalIzqAbajoDerArriba()){
        return true;
        
    }else{
        return false;
    }



    function ganoHorizontal(){

        let columnas=tablero.columnas;
        
        let pos=columna;
        let contador=0;

        let equipo=tablero.casillas[fila][columna];

        let sig=tablero.casillas[fila][pos];

        //pintar las casillas ganadoras
        let casillasGanadoras= [];

        while(sig.getTeam() == equipo.getTeam() && pos<columnas){
            pos++;
            contador++;

            casillasGanadoras.push(sig);

            if(pos<columnas){
                sig=tablero.casillas[fila][pos];
            }
        }

        

        pos=columna;
        contador--;

        casillasGanadoras.splice(0,1);

        sig=tablero.casillas[fila][pos];
        
        while(sig.getTeam() == equipo.getTeam() && pos>=0){
            contador++;
            pos--;

            casillasGanadoras.push(sig);

            if(pos>=0){    
                sig=tablero.casillas[fila][pos];
            }
        }
        
        if(contador>=tablero.cantidadFichas){
            console.log(casillasGanadoras);
            for(let i=0;i<casillasGanadoras.length;i++){
                let casillaGana=casillasGanadoras[i];
                casillaGana.setStrokeStyle("green");
            }
            return true;
        }

    }


    function ganoVertical(){

        let filas=tablero.filas;

        let pos=fila;
        let contador=0;

        let equipo=tablero.casillas[fila][columna];

        let sig=tablero.casillas[pos][columna];

        //pintar las casillas ganadoras
        let casillasGanadoras= [];

        while(sig.getTeam()==equipo.getTeam() && pos<filas){
            pos++;
            contador++;

            casillasGanadoras.push(sig);

            if(pos<filas){
                sig=tablero.casillas[pos][columna];
            }
        }

        pos=fila;
        contador--;

        casillasGanadoras.splice(0,1);

        sig=tablero.casillas[pos][columna];

        while(sig.getTeam() == equipo.getTeam() && pos>=0){
            contador++;
            pos--;

            casillasGanadoras.push(sig);

            if(pos>=0){
                sig=tablero.casillas[pos][columna];
            }
        }

        if(contador>=tablero.cantidadFichas){
            console.log(casillasGanadoras);
            for(let i=0;i<casillasGanadoras.length;i++){
                let casillaGana=casillasGanadoras[i];
                casillaGana.setStrokeStyle("green");
            }
            return true;
        }

    }

   

    function ganoDiagonalIzqArribaDerAbajo(){
        let filas=tablero.filas;
        let columnas=tablero.columnas;

        let posFila=fila;
        let posColumna=columna;

        let contador=0;

        let equipo=tablero.casillas[fila][columna];
        let sig=tablero.casillas[posFila][posColumna];

        //pintar las casillas ganadoras
        let casillasGanadoras= [];
        //diagonal abajo derecha
        while(equipo.getTeam()==sig.getTeam() && (posFila<filas && posColumna<columnas)){

            contador++;
            posFila++;
            posColumna++;

            casillasGanadoras.push(sig);

            if(posFila<filas && posColumna<columnas){
                sig=tablero.casillas[posFila][posColumna];
            }

            }

            posColumna=columna;
            posFila=fila;

            contador--;

            casillasGanadoras.splice(0,1);

            sig=tablero.casillas[posFila][posColumna];

             //diagonal arriba izquierda
            while(equipo.getTeam()==sig.getTeam() && (posFila>=0 && posColumna>=0)){

                contador++;
                posFila--;
                posColumna--;

                casillasGanadoras.push(sig);

                if(posFila>=0 && posColumna>=0){
                    sig=tablero.casillas[posFila][posColumna];
                }

            }

            if(contador>=tablero.cantidadFichas){
                console.log(casillasGanadoras);
                for(let i=0;i<casillasGanadoras.length;i++){
                    let casillaGana=casillasGanadoras[i];
                    casillaGana.setStrokeStyle("green");
                }
                return true;
            }

    }

    function ganoDiagonalIzqAbajoDerArriba(){
        let filas=tablero.filas;
        let columnas=tablero.columnas;

        let posFila=fila;
        let posColumna=columna;

        let contador=0;

        let equipo=tablero.casillas[fila][columna];
        let sig=tablero.casillas[posFila][posColumna];

        //pintar las casillas ganadoras
        let casillasGanadoras= [];

        //diagonal arriba derecha
        while(equipo.getTeam()==sig.getTeam() && (posFila>=0 && posColumna<columnas)){

            contador++;
            posFila--;
            posColumna++;

            casillasGanadoras.push(sig);

            if(posFila>=0 && posColumna<columnas){
                sig=tablero.casillas[posFila][posColumna];
            }

        }

        posColumna=columna;
        posFila=fila;

        contador--;

        casillasGanadoras.splice(0,1);

        sig=tablero.casillas[posFila][posColumna];

        //diagonal abajo izquierda
        while(equipo.getTeam()==sig.getTeam() && (posFila<filas && posColumna>=0)){

            contador++;
            posFila++;
            posColumna--;

            casillasGanadoras.push(sig);

            if(posFila<filas && posColumna>=0){
                sig=tablero.casillas[posFila][posColumna];
            }

        }


        
        if(contador>=tablero.cantidadFichas){
            console.log(casillasGanadoras);
            for(let i=0;i<casillasGanadoras.length;i++){
                let casillaGana=casillasGanadoras[i];
                casillaGana.setStrokeStyle("green");
            }
            return true;
        }
    }

}


//ES TURNO DE 
function pasarTurno(team){
    for(let i=0; i<fichas.length; i++){
        let fichaTeam=fichas[i];
        if(fichaTeam.getTeam()==team){
            fichaTeam.setBloqueada(true);
        }
        else{
            fichaTeam.setBloqueada(false);
            turnoEquipo=fichaTeam.getTeam();
        }
    }

    //cambiamos texto del cartel con el turno
    if(team=="uno"){
        return "2";
    }
    else{
        return "1";
    }
}

function bloquearFichas(){
    for(let i=0;i<fichas.length;i++){
        let ficha=fichas[i];
        ficha.setBloqueada(true);
    }
}

function MostrarGanador(team){
    let gano="";
    if(team=="uno"){
        gano="1";
    }
    else{
        gano="2";
    }
    turnoDe="terminado";
    mostrarMensajeGanador("Gano jugador "+gano+"!");
}

function mostrarMensajeGanador(mensaje) {
    // Tamaño y posición del rectángulo
    const rectanguloWidth = canvas.width * 0.25;
    const rectanguloHeight = canvas.height * 0.07;
    const rectanguloX = (canvas.width - rectanguloWidth) / 2;
    const rectanguloY = 2;
    
    // Dibujar el Letrero
    //ctx.fillStyle="rgb(0,121,222)";
    ctx.fillStyle="rgb(0, 121, 222)";
    ctx.fillRect(rectanguloX,rectanguloY,rectanguloWidth,rectanguloHeight);
    
    
    //ctx.drawImage(smoke,0,-260,canvas.width*1.5,canvas.height);
    //ctx.drawImage(letrero, rectanguloX, rectanguloY, rectanguloWidth, rectanguloHeight);
    // Dibujar el texto del mensaje
    ctx.font = "30px Montserrat";
    ctx.fillStyle = "white";
    //ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.textAlign = "center";
    let x = canvas.width / 2;
    let y = 30;
    ctx.strokeText(mensaje, x, y);
    ctx.fillText(mensaje, x, y);

    //MOSTRAR CARTEL PARA VOLVER A JUGAR
}


function mostrarTurno(team) {
    let turno="Turno: jugador "+team;
    // Tamaño y posición del rectángulo
    const rectanguloWidth = canvas.width * 0.25;
    const rectanguloHeight = canvas.height * 0.07;
    const rectanguloX = (canvas.width - rectanguloWidth) / 2;
    const rectanguloY = 3;
    
    // Dibujar el Letrero
    ctx.fillStyle="rgb(4, 28, 48)";
    ctx.fillRect(rectanguloX,rectanguloY,rectanguloWidth,rectanguloHeight);
    
    
    //ctx.drawImage(smoke,0,-260,canvas.width*1.5,canvas.height);
    //ctx.drawImage(letrero, rectanguloX, rectanguloY, rectanguloWidth, rectanguloHeight);
    // Dibujar el texto del mensaje
    ctx.font = "30px Montserrat";
    ctx.fillStyle = "white";
    //ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.textAlign = "center";
    let x = canvas.width / 2;
    let y = 30;
    ctx.strokeText(turno, x, y);
    ctx.fillText(turno, x, y);
}

function btn_reiniciar() {
    let reiniciar="Reiniciar";
    // Tamaño y posición del rectángulo
    const rectanguloWidth = canvas.width * 0.12;
    const rectanguloHeight = canvas.height * 0.07;
    const rectanguloX = ((canvas.width - rectanguloWidth) / 2)-370;
    const rectanguloY = 5;

    
    
    // Dibujar el Letrero
    ctx.fillStyle='rgb(4, 28, 48)';
    ctx.fillRect(rectanguloX,rectanguloY,rectanguloWidth,rectanguloHeight);
    
    
    //ctx.drawImage(smoke,0,-260,canvas.width*1.5,canvas.height);
    //ctx.drawImage(letrero, rectanguloX, rectanguloY, rectanguloWidth, rectanguloHeight);
    // Dibujar el texto del mensaje
    ctx.font = "25px Montserrat";
    ctx.fillStyle = "white";
    //ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.textAlign = "center";
    let x = (canvas.width / 2)-370;
    let y = 30;
    ctx.strokeText(reiniciar, x, y);
    ctx.fillText(reiniciar, x, y);

}



function  reiniciar_timer(){
    let time = new Date().getTime();
    startTime=time;
    duration = 10 * 60 * 1000;
    drawTimer();
}

function borrar_timer(){
    borrar=true;
    drawTimer()
}

let borrar=false;

//TEMPORIZADOR


/*    
// Dibuja los elementos estáticos en el canvas
function drawStaticElements() {
    // Dibuja tus elementos estáticos aquí
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);
}*/

// Define la fecha y hora de inicio
let startTime = new Date().getTime();

// Duración en milisegundos (10 minutos)
let duration = 10 * 60 * 1000;

// Función para dibujar el temporizador en el canvas
function drawTimer() {
    if(!borrar){
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const remainingTime = Math.max(0, duration - elapsedTime);

        // Borra solo el área donde se muestra el temporizador
        ctx.clearRect(725, 5, 250, (canvas.height * 0.07));
        

        // Dibuja el temporizador
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        ctx.font = "25px Montserrat";
        ctx.fillText(`Tiempo restante: ${minutes}:${seconds}`, 850, 30);
        
        // Si el tiempo restante es mayor que 0, sigue dibujando
        if (remainingTime > 0){    
            requestAnimationFrame(drawTimer);
        } 
        else {
            bloquearFichas();
            mostrarMensajeGanador("Empataron");
        }
    }
    
}

// Dibuja los elementos estáticos una vez al principio
//drawStaticElements();

// Comienza a dibujar el temporizador


//drawTimer();



//INICIA JUEGO

//juego();




//MENUS

let play=document.getElementById("play");
let div_play=document.getElementById("div-play-btn");

let menu_cuatro_linea=document.getElementById("menu-juego");

let btn_play_cuatro_linea=document.getElementById("iniciar-juego");


play.addEventListener("click", ()=>{
    div_play.classList.add("esconder-menu-play");
    menu_cuatro_linea.classList.remove("esconder-div");
});


//FORMULARIO 4 EN LINEA

//formdata, agarrar informacion

const form_cuatro_linea= document.getElementById("formulario-cuatro-linea");

form_cuatro_linea.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData_cuatro_linea = new FormData(form_cuatro_linea);

    let tipo_ficha1=formData_cuatro_linea.get("ficha1");
    let tipo_ficha2=formData_cuatro_linea.get("ficha2");
    let tipo_tablero=formData_cuatro_linea.get("tablero");

    console.log(tipo_ficha1,  tipo_ficha2, tipo_tablero )

    if(tipo_ficha1==tipo_ficha2){
        alert("Los jugadores deben seleccionar fichas distintas");
    }else{
        menu_cuatro_linea.classList.add("esconder-div");
        canvas.classList.remove("esconder-div");
        reiniciar_timer();
        juego(tipo_ficha1,tipo_ficha2,tipo_tablero);
    }

});



canvas.addEventListener("click", function(e){

    const rectanguloWidth = canvas.width * 0.12;
    const rectanguloHeight = canvas.height * 0.07;
    const rectanguloX = ((canvas.width - rectanguloWidth) / 2)-370;
    const rectanguloY = 5;

    let clickX = e.clientX - canvas.getBoundingClientRect().left;
    let clickY = e.clientY - canvas.getBoundingClientRect().top;
    if(clickX >= rectanguloX && clickX <=(rectanguloX + rectanguloWidth) && clickY >= rectanguloY && clickY <= (rectanguloY + rectanguloHeight)){
        turnoDe="1";
        pasarTurno("dos");
        borrar=false;
        ganador=null;
        reiniciar_timer();
        //reiniciar podria llevar para el menu en vez de llamar a juego
        juego(ficha_uno,ficha_dos,num_tablero);
    }
});










