let x = 0;

function setup() {
  createCanvas(400, 400);  
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(10,50,150);
  fill(0,0,0);
  noStroke();
  rect(165,85,70,70,10);
  rect(165,165,70,70,10);
  rect(85,165,70,70,10);
  rect(245,165,70,70,10);
  
  
  if(keyIsPressed){ 
    if (key == "ArrowUp") {
      x = x + 5 
    
      fill(x,50,150);
      noStroke();
      rect(165,85,70,70,10);
      
    } else if (key == "ArrowDown") {
      x = x + 5 
    
      fill(x,x,x);
      noStroke();
      rect(165,165,70,70,10);
      
    } else if (key == "ArrowLeft") {
      x = x + 5
    
      fill(x,125,x);
      noStroke();
      rect(85,165,70,70,10);
      
      
    } else if (key == "ArrowRight") {
      x = x + 5 
    
      fill(x,x,150);
      noStroke();
      rect(245,165,70,70,10);
      
      
    }
  }
  
  if(x>=255){
    x=0;
  }
}