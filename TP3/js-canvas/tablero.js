class Tablero{

    constructor(ctx,cantFichas,espacioCasillas,sizeFicha,canvasWidth,canvasHeight){
        this.ctx=ctx;
        this.cantidadFichas=cantFichas;
        this.espacioCasillas=espacioCasillas;
        this.sizeFicha=sizeFicha;
        this.filas = cantFichas+2;
        this.columnas = cantFichas+3;
        this.casillas=[];
        this.posColumnas=[];
        this.canvasWidth=canvasWidth;
        this.canvasHeight=canvasHeight;
        
        this.cargarCasillas();
        this.cargarPosColumas();
    }

    getSuperior(){
        return canvasHeight-10-this.filas*this.sizeFicha*2.75;
    }
    getLateral(){
        return (canvasWidth-this.columnas*this.sizeFicha*2.75)/2;
    }

    cargarPosColumas(){
        //if(this.cantidadFichas==4){

        //}
        for(let i=0;i<this.columnas;i++){
            this.posColumnas[i]=new Casilla((i*this.sizeFicha*2.75-12)+((canvasWidth-this.columnas*this.sizeFicha*2.75)/2),this.getSuperior()-this.sizeFicha*4,this.sizeFicha*2.75,this.ctx, this.sizeFicha, "grey");
        }
    }
    

    cargarCasillas(){
        for(let i=0;i<this.filas;i++){
            this.casillas[i]=[];
            for(let j=0;j<this.columnas;j++){
                const x = j * (this.sizeFicha + this.espacioCasillas)+canvasWidth/3;
                const y = i * (this.sizeFicha + this.espacioCasillas)+canvasHeight/3;
                this.casillas[i][j] = new Casilla((j*this.sizeFicha*2.75)+((canvasWidth-this.columnas*this.sizeFicha*2.75)/2),(i*this.sizeFicha*2.75)+this.getSuperior()-5,this.espacioCasillas,this.ctx,this.sizeFicha,"rgb(155,155,155)");
            }
        }
    }

    draw(){
        
        
        this.ctx.beginPath();
        this.ctx.fillStyle="rgb(19, 49, 74)";
        this.ctx.fillRect(((canvasWidth-this.columnas*this.sizeFicha*2.75)/2)-10, this.getSuperior()+8, this.columnas*this.sizeFicha*2.75+45, this.filas*this.sizeFicha*2.75);
        
        let imagen=new Image();
        imagen.src='img-canvas/introducir-ficha.png';
        for(let i=0;i<this.columnas;i++){
            this.posColumnas[i].setImg(imagen);
            this.posColumnas[i].draw();
        }
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
              this.casillas[i][j].draw();
            }
        }
    }

    //revisa si elegi una columna donde tirar la ficha
    ingresoFicha(x,y){
        for(let i=0;i < this.posColumnas.length;i++){
            let entrada=this.posColumnas[i];
            if(entrada.punteroEncima(x,y)){
                return {
                    casilla:entrada,
                    posColumna:i
                }
            }
        }
    }

    //TERMINAR
    tirarFicha(pos,ficha){
        let fila=-1;

        for(let i=0;i<this.filas;i++){
            let casilla=this.casillas[i][pos];

            if(!casilla.getOcupado()){
                fila=fila+1;
            }
        }
        if(fila>=0){
            if(!this.casillas[fila][pos].getOcupado()){
                let cas=this.casillas[fila][pos]
                let color=ficha.getFill();
                //cas.setFill(color);
                cas.setImg(ficha.getImg());
                cas.setOcupado(true);
                cas.setTeam(ficha.getTeam());
            }
            //verificar si alguien gano
        }
        else{
            //return false;
            return null;
        }
        //return true;
        return {
            fila:fila,
            columna:pos
        }
    }





}