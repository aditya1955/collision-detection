var fixedr, movingr;
 

function setup() {
  createCanvas(800,400);
  fixedr=createSprite(400, 200, 50, 50);
  movingr=createSprite(400, 80, 20, 60);
fixedr.shapeColor = "blue";
movingr.shapeColor="green"
}

function draw() {
  background(0);  

  movingr.x=mouseX;
  movingr.y=mouseY;

  if(movingr.x - fixedr.x < movingr.width/2 + fixedr.width/2 && 
    fixedr.x - movingr.x <movingr.width/2 + fixedr.width/2&&
    movingr.y- fixedr.y< movingr.height/2+fixedr.height/2&&
    fixedr.y-movingr.y< movingr.height/2+fixedr.height/2){
    fixedr.shapeColor = "red";
    movingr.shapeColor="red"
  }
  else {
    fixedr.shapeColor = "blue";
    movingr.shapeColor="green"
  }

  drawSprites();
}