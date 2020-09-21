var car,wall;
var speed,weight;
var deformation;
var restart,restartImg;

function preload(){
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  car=createSprite(20,200,50,50);
  car.velocityX=speed;
  //car.debug=true;

  wall=createSprite(1500,200,60,width/2);
  wall.shapeColor=color(80,80,80);
  wall.debug=true;

  restart=createSprite(800,350,20,20);
  restart.addImage(restartImg);
  
}

function draw() {
  background(255,255,255); 
  text("weight: "+weight,800,10);
  text("speed: "+speed,800,20);

  if(wall.x-car.x <= (car.width+wall.width)/2){
    car.velocityX=0;
    deformation =(0.5*weight*speed*speed)/22509;

    if(deformation<100){
      car.shapeColor="green";
      wall.shapeColor="green";
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
      wall.shapeColor="yellow";
    }
    else if(deformation>180){
      car.shapeColor="red";
      wall.shapeColor="red";
    }
  }

  if(mousePressedOver(restart)){
    reset();
  }
  
  drawSprites();
}

function reset(){
  car.x=20;
  
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  
  car.velocityX=speed;

  car.shapeColor=color(80,80,80);
  wall.shapeColor=color(80,80,80);
}
