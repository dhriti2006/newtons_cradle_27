 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

//function preload()

	


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	Myworld = engine.world;

  
   bob1 = new bob(100,650,25);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("BLACK");
  Engine.update(engine);
  
 

  
  bob1.display()

  drawSprites();
 
}





