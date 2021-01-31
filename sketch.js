function setup() {
  createCanvas(800,400);
  A = createSprite(600,400,50,80);
  B = createSprite(400,200,20,20);
  //Colors
  A.shapeColor = "yellow" ;
  B.shapeColor = "yellow" ;
}

function draw() {
  background(255,255,255); 
  
    A.x = World.mouseX ;
    B.y = World.mouseY ;

    if (A.x - B.x<A.width/2 + B.width/2 && B.x - A.x<A.width/2 + B.width/2) {
        A.shapeColor = "red" ;
        B.shapeColor = "red" ;
    } else {
      A.shapeColor = "yellow" ;
      B.shapeColor = "yellow" ;
    }
    if (A.y - B.y<A.height/2 + B.height/2 && B.y - A.y<A.height/2 + B.height/2) {
      A.shapeColor = "red" ;
      B.shapeColor = "red" ;
    } else {
      A.shapeColor = "yellow" ;
      B.shapeColor = "yellow" ;
    }

  drawSprites();
}