const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1;
var ground;
var paper1;
var bin, BINi

function preload()
{
BINi=loadImage("green.png")	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

bin1 = new Bin(650, 470, 120, 20)
bin2 = new Bin(710, 420, 20, 180)
bin3 = new Bin(600, 420, 20, 180)
ground = new Ground(400, 490, 800, 20)
paper1 = new Paper(50, height-80, 30)

bin = createSprite(655, 395)
bin.addImage("bin", BINi)
bin.scale = 0.50


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0);
  
bin1.display();
bin2.display();
bin3.display();
ground.display();
paper1.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyDown("LEFT_ARROW")){
		Matter.body.x =  Matter.body.x+4 
	}
}



