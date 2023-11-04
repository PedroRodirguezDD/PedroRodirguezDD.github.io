class Casilla{

    constructor(posX,posY,espacio,ctx,sizeFicha,fill){
        this.posX=posX;
        this.posY=posY;
        this.ctx=ctx;
        this.sizeFicha=sizeFicha;
        this.espacio=espacio;
        this.ocupado=false;
        this.fill=fill;
        //this.ficha=null;
        this.team=null;
        this.strokeStyle="rgb(19, 49, 74)";
        this.img=null;
        /*
        this.img=new Image();
        this.img.src='img-canvas/pelota_basquet.png';
        */
    }

    getOcupado(){
        return this.ocupado;
    }

    setOcupado(ocupado){
        this.ocupado=ocupado;
    }
    
    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    setPosX(x){
        posX=x;
    }

    setPosY(y){
        posY=y;
    }

    setFill(color){
        this.fill=color;
    }

    getEspacio(){
        return this.espacio;
    }

    //arreglar
    getTeam(){
        /*
        if(this.ficha){
            return this.ficha.getTeam();
        }else{
            return null;
        }
        */
       return this.team;
    }

    setTeam(team){
        this.team=team;
    }

    setFicha(ficha){
        this.ficha=ficha;
    }

    getFill(){
        return this.fill;
    }

    getStrokeStyle(){
        return this.strokeStyle;
    }

    setStrokeStyle(color){
        this.strokeStyle=color
    }

    setImg(imagen){
        this.img=imagen;
    }


    draw(){
        const centerX = this.posX + this.espacio;
        const centerY = this.posY + this.espacio;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.sizeFicha, 0, Math.PI * 2);
        
        this.ctx.lineWidth=5;
        if(this.img!=null){
            this.ctx.fillStyle=this.img;
            if(this.fill=="grey"){
                this.ctx.drawImage(this.img, this.posX-this.sizeFicha+52, this.posY-this.sizeFicha+53, this.sizeFicha * 2, this.sizeFicha * 2);
                this.ctx.strokeStyle="black";
            }
            else{
                this.ctx.drawImage(this.img, this.posX-this.sizeFicha+40, this.posY-this.sizeFicha+40, this.sizeFicha * 2, this.sizeFicha * 2);
                this.ctx.strokeStyle=this.strokeStyle;
            }
        }else{
            this.ctx.fillStyle=this.fill;
            this.ctx.fill();
            this.ctx.strokeStyle=this.strokeStyle;
        }
        //this.ctx.fill();
        
        this.ctx.stroke();
       
        this.ctx.closePath();
    }

    punteroEncima(x,y){
        let _x=this.posX+this.espacio - x;
        let _y=this.posY+this.espacio - y;

        return Math.sqrt(_x * _x + _y * _y) < this.sizeFicha;
    }



}