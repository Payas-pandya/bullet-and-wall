var speed, weight
var bullet, wall;
var thickness = random(22,83);

function setup() {
  createCanvas(1600,400);
  speed=random(223, 321);
  weight=random(30, 52);

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX= speed;
  bullet.shapeColor=(255);



  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);
}

function draw() {
background(0);
if(bullet.isTouching(wall)){
  bullet.velocityX = 0;
}
  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;
    if(damage>180){
    bullet.shapeColor=(0, 255, 0);
  }
  if(damage<180 && damage>100){
    bullet.shapeColor=(230, 230, 0);
  }
  if(damage<100){
    bullet.shapeColor=(0, 0, 0);
  }
}

  drawSprites();
}