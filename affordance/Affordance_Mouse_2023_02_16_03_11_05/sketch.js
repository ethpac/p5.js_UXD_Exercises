var clickPosition;
var value = "pink";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let back = background('grey');
  
  fill(value);
  rect(10,10, 580)
  
  fill("darkgrey");
  stroke('black');
  strokeWeight(1);
  ellipse(300,300,320);
  
  fill(0,200,0);
  noStroke();
  ellipse(300,265,290);
  
  fill(0, 170, 0, 200);
  noStroke();
  ellipse(300,290,290);
  
  fill(0, 175, 0, 175);
  noStroke();
  ellipse(300,290,280);
  
  fill(0, 180, 0, 165);
  noStroke();
  ellipse(300,290,270);
  
  fill(0, 185, 0, 200);
  noStroke();
  ellipse(300,290,260);
  
  fill(0, 190, 0, 155);
  noStroke();
  ellipse(300,290,260);
  
  fill(0, 255, 0, 350);
  ellipse(300,265,285);
  
  fill(255, 255, 255, 95);
  ellipse(305,257,260);
  
  fill(255, 255, 255, 105);
  ellipse(360,170,50);
  
  if (clickPosition) {
    fill(0, 90, 0, 110);
    ellipse(300,265,280);
    value = "lightblue";
    }
  }

function mousePressed() {
  if ((mouseX >= 157.5 && mouseX <= 435) && (mouseY >= 141                 && mouseY <= 395)) {
    print(mouseX);
    print(mouseY);
    
    clickPosition = [mouseX, mouseY];
  }
}