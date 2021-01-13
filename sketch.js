var thickness,wall;
var bullet,speed,weight;







function setup() {
  createCanvas(800,400);
speed = random(223,321);
weight = random(30,52);
thickness= random(22,83);

  bullet = createSprite(50, 200, 50, 50);
   wall = createSprite(400,200,thickness,200)
 wall.shapeColor = color(80,80,80);




}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall)){

bullet.velocityX = 0;
 var deformation= 0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(deformation >10){

  wall.shapeColor = color(255,0,0);
 }
 
if(deformation<10){

  wall.shapeColor = color(0,255,0);
}





  }


  drawSprites();
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge= lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(lbulletRightEdge>=wallLeftEdge){

  return true
}
return false;



}