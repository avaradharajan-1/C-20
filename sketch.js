var fixBox,movingBox;
function setup() {
  createCanvas(800,400);
  fixBox = createSprite(200, 200, 50, 80);
  fixBox.shapeColor = "green";
  movingBox = createSprite(400, 200, 80, 30);
  movingBox.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

movingBox.x = World.mouseX;
movingBox.y = World.mouseY;
console.log("hi",movingBox.x-fixBox.x)
if(movingBox.x-fixBox.x<fixBox.width/2+movingBox.width/2&&fixBox.x-movingBox.x<movingBox.width/2+fixBox.width/2&&fixBox.y-movingBox.y<fixBox.height/2+movingBox.height/2&&movingBox.y-fixBox.y<movingBox.height/2
  +fixBox.height/2){
  movingBox.shapeColor = "red";
  fixBox.shapeColor = "red";
}
else {

  movingBox.shapeColor = "green";
  fixBox.shapeColor = "green"
}



  drawSprites();

}