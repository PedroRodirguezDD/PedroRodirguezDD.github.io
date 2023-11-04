class Ficha{

    constructor(posX,posY,ctx,fill,team,radio,bloqueada,imagen){
        this.posX=posX;
        this.posY=posY;
        this.ctx=ctx;
        this.fill=fill;
        this.team=team;
        this.radio=radio;
        this.posInicialX=posX;
        this.posInicialY=posY;
        this.bloqueada=bloqueada;
        this.strokeStyle=fill;
        this.img=new Image()
        this.img.src=imagen;

        this.img.onload = () =>{
            drawFigure();
        }
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    setPosX(x){
        this.posX=x;
    }

    setPosY(y){
        this.posY=y;
    }

    getPos(){
        return{
            x:this.posX,
            y:this.posY
        }
    }

    getTeam(){
        return this.team;
    }

    getFill(){
        return this.fill;
    }

    getRadio(){
        return this.radio;
    }

    getPosInicial(){
        return {
            x:this.posInicialX,
            y:this.posInicialY
        }
    }

    getPosInicialX(){
        return this.posInicialX;
    }

    getPosInicialY(){
        return this.posInicialY;
    }

    getBloqueada(){
        return this.bloqueada;
    }

    setBloqueada(bloqueo){
        this.bloqueada=bloqueo;
    }

    getImg(){
        return this.img;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.posX,this.posY,this.radio,0,2*Math.PI);
        this.ctx.fillStyle=this.img;
        this.ctx.fill();
        //this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.strokeStyle="black";
        this.ctx.lineWidth=2;
        this.ctx.stroke();
        this.ctx.drawImage(this.img, this.posX-this.radio-5, this.posY-this.radio-5, this.radio * 2.5, this.radio * 2.5);
    }

    punteroEncima(x,y){
        let _x=this.posX - x;
        let _y=this.posY - y;

        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }

    
}