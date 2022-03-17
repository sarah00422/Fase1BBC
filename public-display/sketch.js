
let socket = io();

let ball = new Ball(30, 950, 1000);

let balls = [];

let numberOfBalls = 0;

let mainImg;

let ballImg;

let winnerImg;

let barrelOnImg;

let barrelImg;

let starter = false;

let barrels = [];

let waitingImg;

let emailSent;

let endScreen;

function preload() { 
  
  mainImg = loadImage('./assets/game_back.png');
  barrelImg = loadImage('./assets/barril.png')
  barrelImgOn = loadImage('./assets/barrilOn.png')
  ballImg = loadImage('./assets/ball.png')
  waitingImg = loadImage('./assets/header.png')
  winnerImg = loadImage('./assets/card.png')
  endScreen = loadImage('./assets/info.png')
}

let barrel = new Barrel(200, 200);
let barrel2 = new Barrel(600, 400);
let barrel3 = new Barrel(0, 600);
let barrel4 = new Barrel(800, 800);


function setup() {

  //Canvas settings
  createCanvas(1920, 1080);
  
}

function draw() {

  background(255);

  socket.on('screens', (boolean) => {
    starter = boolean
  })

  if (starter === true) {

    image(mainImg, 0, 0);


    barrel.drawBarrel(barrelImg, barrelImgOn);
    barrel.move();
    barrel.changeSpeed();

    barrel2.drawBarrel(barrelImg, barrelImgOn);
    barrel2.move();
    barrel2.changeSpeed();

    barrel3.drawBarrel(barrelImg, barrelImgOn);
    barrel3.move();
    barrel3.changeSpeed();


    barrel4.drawBarrel(barrelImg, barrelImgOn);
    barrel4.move();
    barrel4.changeSpeed();

    //ball.drawBall(ballImg);
    //ball.move();

    //recibe la orden de disparo 
    socket.on('shot', (number) => {
      console.log(number);
      ball.setPressed(number);
    })
  
    //console.log(numberOfBalls);
    ball.drawBall(ballImg);
    ball.move();
  
  
    if (dist(ball.getX(), ball.getY(), barrel.getX(), barrel.getY()) < 100) {
      console.log("choque")
      ball.setPressed(true);
      barrel.setPressed(true)
    }

    if (dist(ball.getX(), ball.getY(), barrel2.getX(), barrel2.getY()) < 100) {
      console.log("choque")
      ball.setPressed(true);
      barrel2.setPressed(true)
    }

    if (dist(ball.getX(), ball.getY(), barrel3.getX(), barrel3.getY()) < 100) {
      console.log("choque")
      ball.setPressed(true);
      barrel3.setPressed(true)
    }

    if (dist(ball.getX(), ball.getY(), barrel4.getX(), barrel4.getY()) < 100) {
      console.log("choque")
      ball.setPressed(true);
      barrel4.setPressed(true)
    }

    if (barrel.getPressed() === true && barrel2.getPressed() === true && barrel3.getPressed() === true && barrel4.getPressed() === true) { 
      image(winnerImg, 0, 0)
      socket.emit('win', true);
    }

  } else { 
    image(waitingImg, 0, 0)
  }

  socket.on('emailSent', (boolean) => {
    emailSent = boolean
  })

  if (emailSent === true) {
    
    image(endScreen, 0, 0)
  }
  
}

  


    

  



  