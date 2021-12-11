var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  sea=createSprite(300,10,600,10);
   //sea.x=sea.width/2
  sea.velocityX=-2;
  sea.addImage(seaImage);
  
  ship=createSprite(300,185,20,20);
  ship.addAnimation("ship-1",shipImg);
  ship.scale=0.3;

}
function draw() {
  
  background("blue")
  


if (sea.x < 0) {
  sea.x = 300;
}


drawSprites() 
  
}  
  
