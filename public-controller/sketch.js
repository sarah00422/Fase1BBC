let socket = io();

let mainImg;

let startButton;

let screens = 0;

let shots = 0;

let onScreen;

let button;

let emailScreen;

let win;

let winBoolean;

let emailInput;

let endImg;

function setup() {

    frameRate(60);
    createCanvas(350, 650);

    mainImg = loadImage('assets/mainPhone.png');
    startButton = loadImage('assets/start_button.png');
    onScreen = loadImage('assets/controllerBack.png')
    button = loadImage('assets/controllerButton.png')
    emailScreen = loadImage('assets/emailScreen.png')
    endImg = loadImage('./assets/end.png')


    emailInput = createInput('');
    emailInput.position(58, 440);
    emailInput.size(226, 22);
    emailInput.input(myInputEmail);

    emailInput.style('display', 'none');
}



function draw() {
    background(255);
    
    switch (screens) {
        case 0:
            image(mainImg, 0, 0);
            image(startButton, 30, 420, 300);
            break;

            
        
        case 1:

            socket.emit('screens', true);
            image(onScreen, 0, 0)
            image(button, 125, 400, 100, 100);

            if (winBoolean===true) {
                screens=2
            }

            break;

        case 2:

            //mostrar casilla del email
            emailInput.style('display', 'block');
            image(emailScreen,0,0, 350, 650)
            break;

        case 3:
            // ocultar 
            emailInput.style('display', 'none');
            image(endImg,0,0, 350, 650)
            break;
        
    }

    socket.on('win', (boolean) => {
        win = boolean
    })

    if (win === true) {
        
        winBoolean = true;
    }
}

function myInputEmail(){
    myEmail = this.value();
}

function mousePressed() { 

    switch (screens) {
        case 0:
            
            if (dist(mouseX, mouseY, 180, 450) < 300) {
                screens = 1;
            }
            
            break;
        
        case 1:
            
            if (dist(mouseX, mouseY, 175, 450) < 100) {
                shots++;
                console.log(shots)
                socket.emit('shot', true);
            }

            break;
        
        case 2:

            if (mouseX > 120 && mouseY > 548
                && mouseX < 228 && mouseY < 584) {
                
                    screens=3;
            }
            console.log(mouseX + " " + mouseY)
            socket.emit('emailSent', true);
            break;

        case 3:

            console.log(mouseX + " " + mouseY)
            break;
}

}

function counter() { 

    if (frameCount % 15 === 0 ) { 
      timer++;
      console.log(timer)
    }
  }
  