$(document).ready(function(){});

basket1= [width/4, height/2];
basket2= [(width/4) * 3, height/2];

//var xStart = 30;
//var xEnd = 80;

function drawBaskets () {
  scale(10.0,10.0)
  quad(20,30,40,30,35,50,25,50)
  quad(70,30,90,30,85,50,75,50)
  text("Tasks",20,60)
  text("Done",70,60)

  ellipse(30, 30, 5, 5);
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background('white');
  fill('tan');
  strokeWeight(.5)
  drawBaskets();
}

function draw() {
  background(color(255));
  drawBaskets();

  //xStart = xStart +2;

  //if(xStart < xEnd){
  //  ellipse(xStart, 30, 5, 5);
  //}

  lerp(basket1[0], basket2[0], .2);

}
