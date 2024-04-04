function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(224,227,0);
  
  createSmallSquares();

}

function createSmallSquares() {
  
  for (let i = 50; i < 350; i =                       i+25) { 
    rect(i,100,25,25);
    rect(i,275,25,25);
  }
  
    for (let i = 75; i <= 300; i =                       i+25) { 
    rect(i,250,25,25);
    rect(i,125,25,25);
  }
  
      for (let i = 100; i < 300; i =                       i+25) { 
    rect(i,225,25,25);
    rect(i,150,25,25);
  }
  
        for (let i = 125; i < 275; i =                       i+25) { 
    rect(i,200,25,25);
    rect(i,175,25,25);
  }
  
  fill(1,221,221);
  stroke(220);
}