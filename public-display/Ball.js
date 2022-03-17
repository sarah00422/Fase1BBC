class Ball {
    constructor(size, posX, posY) {
        this.size = size,
        this.posX = posX,
        this.posY = posY,
        this.speed = 20;
        this.image;
        this.pressed = false;
    }

    drawBall(images) {
        
            this.image = images;
            image(this.image, this.posX, this.posY, this.size)
        
        
        if (this.posY < 0) {
            this.pressed = false;
            this.posY = 950;
        } 
       
    }

    move() {
        if (this.pressed === true) { 
            this.posY -= this.speed
        }
         
    }

    getX() { 
        return this.posX;
    }

    getY() { 
        return this.posY;
    }



    setPressed(x) { 
        this.pressed = x;
    }

}
