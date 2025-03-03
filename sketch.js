var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	boxSprite=createSprite(width/1.9, height-40,width, 30,40);
	boxSprite.scale=0.3
	boxSprite.shapeColor=color("red");

	
	boxSprite=createSprite(width/2.6, 610,-30,300, 30,40);
	boxSprite.scale=0.3
	boxSprite.shapeColor=color("red");

	boxSprite=createSprite(width/1.5, 610,-30,300, 30,40);
	boxSprite.scale=0.3
	boxSprite.shapeColor=color("red");
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
   
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
    drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.velocityY= 4; 
	Matter.Body.setStatic(packageBody,false);

  }
}



