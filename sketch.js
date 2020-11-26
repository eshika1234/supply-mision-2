var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bottomBox;
var sideBox1,sideBox2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

    bottomBox = createSprite(width/2,650,200,20,{isStatic:true});
    bottomBox.shapeColor = color(255,0,0);
	bottomBox = Bodies.rectangle(width/2,620,200,20);
	World.add(world, bottomBox);

	sideBox1 = createSprite(300,610,20,100,{isStatic:true});
	sideBox1.shapeColor = color(255,0,0);
	sideBox1 = Bodies.rectangle(300,610,20,100);
	World.add(world, sideBox1);
	
	sideBox2 = createSprite(500,610,20,100,{isStatic:true});
	sideBox2.shapeColor = color(255,0,0);
	sideBox2 = Bodies.rectangle(500,610,20,100);
	World.add(world, sideBox2)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  

  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();

  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

     Matter.Body.setStatic(packageBody,false);	
 }
}



