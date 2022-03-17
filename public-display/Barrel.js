class Barrel {
    constructor(posX, posY, image) {
        this.posX = posX
        this.posY = posY
        this.speed = 10
        this.size = 100
        this.offSet = this.size / 2
        this.leftLimit = this.posX - this.offSet
        this.rightLimit = this.posX + this.offSet
        this.upperLimit = this.posY - this.offSet
        this.lowerLimit = this.posY + this.offSet
        this.image;
        this.imageOn;
        this.trapped = false;
    }

    drawBarrel(images, imagesOn) {
        if (this.trapped === false) {
            this.image = images;
            image(this.image, this.posX, this.posY, this.size, this.size);
        } else { 
            this.image = imagesOn;
            image(this.image, this.posX, this.posY, this.size, this.size);
        }
        
    }

    move () {
        this.posX = this.posX + this.speed;
    }

    changeSpeed () {
        if (this.posX >= windowWidth || this.posX <= 0 ) {    
            this.speed *= -1;
        }
    }

    getX() { 
        return this.posX
    }

    getY() { 
        return this.posY
    }

      getPressed() { 
          return this.trapped;
    }

    setPressed(e) { 
        this.trapped = e;
    }

    
}