//creating a gif
let gif;

function preload (){
gif = loadImage ('assets/GilbertCatGif.gif');
}

function setup() {
  //runs one time
  createCanvas(windowWidth, windowHeight*2);
  fill("lightyellow");
  strokeWeight(1);
}


function draw() {
  //runs in a loop
  
  background("lightyellow")

  var num = 10; //num squares
  var sideLen = windowWidth / num; //side length of each square

  for (var y = 0; y < windowHeight*2; y += sideLen) {
    for (var x = 0; x < windowWidth; x += sideLen) {
      image(gif, x, y, sideLen, sideLen);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

