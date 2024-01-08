function setup() { //runs one time
createCanvas(720,720);
  background(50, 50, 50);
  fill("red");
  strokeWeight(8);
}

function draw() { //runs in a loop

  translate(60,60); //resets orgin point
  for(var y=0; y<600; y+=300)
    {
      for(var x=0; x<600; x+=300)
        {
          quad (x,y,
               x+300, y,
               x+300 , y+300,
               x, y+300);
        }
    }

}
