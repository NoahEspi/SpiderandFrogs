// https://keycode.info/
// https://p5js.org/reference/

// DVD bouncing
// https://editor.p5js.org/Lllucas/sketches/zRcCe8EKM

/*
IF MOVEMENT WITH ARROW KEYS IS BEING BUGGY, MAKE SURE THE BLACK WINDOW IS AT FULL SIZE (pull down the console until you see white)
*/


let x = 100;
let y = 100;
let energy = 100;
let energyLoss = false;
let xspeed;
let frogWidth;

let frog1;

let buttonActive = false;

function preload() {
  spider = loadImage('Spider.png');
  frog = loadImage('phrogFinal2.png');
}

// frogWidth = frog.width;

class Frog {
  constructor(enemyX, enemyY, xspeed, yspeed) {
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  move() {
    this.enemyX = this.enemyX + this.xspeed;
    this.enemyY = this.enemyY + this.yspeed;

    if (this.enemyX + frog.width >= width) {
      this.xspeed = -this.xspeed;
      this.enemyX = width - frog.width;
    } else if (this.enemyX <= 0) {
      this.xspeed = -this.xspeed;
      this.enemyX = 0;
    }

    if (this.enemyY + frog.height >= height) {
      this.yspeed = -this.yspeed;
      this.enemyY = height;
    } else if (this.enemyY <= 0) {
      this.yspeed = -this.yspeed;
      this.enemyY = 0;
    }
  }
  
  show() {
    image(frog, this.enemyX, this.enemyY);
  }
}

function setup() {
  frog1 = new Frog(random(width), random(height), 4, 4)
  // frog2 = new Frog(453, 36, 2, 2)
  createCanvas(500, 500);
  background('black');
  fill('white');
}

function mousePressed() {
  console.log(`(${mouseX}, ${mouseY})`);
}

function draw() {

  // sprint key functions
  if (keyIsDown(16) || keyIsDown(13)) {
    if (energy > 2) {
      speed = 10;
      energyLoss = true;
    }
  } else {
    speed = 5;
    energyLoss = false;
  }


  // left arrow functions
  if (keyIsDown(LEFT_ARROW) && (x > 10) || keyIsDown(65) && (x > 10)) {

    if (energyLoss && !buttonActive) {
      
      buttonActive = true;

      if (energy <= 0) {
        speed = 5
      }
      if (energy > 0) {

        energy -= 1.5
        // console.log(`Losing energy! ${energy}`)

      }

    } else if (energy < 100 && !buttonActive) {
        energy += 0.25
        // console.log(`Recovering! ${energy}`)
    }

    x -= speed;

  } else {
    if (energy < 100 && !buttonActive){
      energy += 0.25
      // console.log(`Recovering! ${energy}`)

    buttonActive = false;
    }
  }

  // right arrow functions
  if (keyIsDown(RIGHT_ARROW) && (x < 440) || keyIsDown(68) && (x < 440)) {

    if (energyLoss && !buttonActive) {
      
      buttonActive = true;

      if (energy <= 0) {
        speed = 5
      }
      if (energy > 0) {

        energy -= 1.75
        // console.log(`Losing energy! ${energy}`)

      }

    } else if (energy < 100 && !buttonActive) {
        energy += 0.25
        // console.log(`Recovering! ${energy}`)
    }

    x += speed;

  } else {
    if (energy < 100 && !buttonActive){
      energy += 0.25
      // console.log(`Recovering! ${energy}`)

    buttonActive = false;
    }
  }

  // down arrow functions
  if (keyIsDown(DOWN_ARROW) && (y < 440) || keyIsDown(83) && (y < 440)) {

    if (energyLoss && !buttonActive) {
      
      buttonActive = true;

      if (energy <= 0) {
        speed = 5
      }
      if (energy > 0) {

        energy -= 2
        // console.log(`Losing energy! ${energy}`)

      }

    } else if (energy < 100 && !buttonActive) {
        energy += 0.25
        // console.log(`Recovering! ${energy}`)
    }

    y += speed;

  } else {
    if (energy < 100 && !buttonActive){
      energy += 0.25
      // console.log(`Recovering! ${energy}`)

    buttonActive = false;
    }
  }
  

  // left arrow functions
  if (keyIsDown(UP_ARROW) && (y > 15) || keyIsDown(87) && (y > 15)) {

    if (energyLoss && !buttonActive) {
      
      buttonActive = true;

      if (energy <= 0) {
        speed = 5
      }

      if (energy > 0) {
        energy -= 2.25
        // console.log(`Losing energy! ${energy}`)
      }

    } else if (energy < 100 && !buttonActive) {
        energy += 0.25
        // console.log(`Recovering! ${energy}`)
    }

    y -= speed;

  } else {
    if (energy < 100 && !buttonActive){
      energy += 0.25
      // console.log(`Recovering! ${energy}`)

    buttonActive = false;
    }
  }

  buttonActive = false;

  clear();
  background('black');
  image(spider, x, y);
  
  frog1.move();
  frog1.show();

  fill('#CFFF99')
  rect(8, 7, 100, 5)
  fill('#87FF00')
  rect(8, 7, energy, 5)
  // frog2.move();
  // frog2.show();
  // enemy1.create();
}