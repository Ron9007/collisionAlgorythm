var fixedRect, movingRect;
var obj1,obj2;
function setup() {
  createCanvas(800,600);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200, 200, 70, 100);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect.debug=true;

  obj1=createSprite(600, 400, 50, 50);
  obj2=createSprite(200, 400, 50, 50);
  obj1.velocityX=-1;
  obj2.velocityX=1;
  obj1.shapeColor="green";
  obj2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
  }
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 &&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2 ){
    
    obj1.velocityX=obj1.velocityX*(-1);
    obj2.velocityX=obj2.velocityX*(-1);
  }
  if(
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){
    
      obj1.velocityY=obj1.velocityY*(-1);
      obj2.velocityY=obj2.velocityY*(-1);
  }
  drawSprites();
}