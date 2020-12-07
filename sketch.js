const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;	
	
  ground = new Ground(400,300,700,30);
  bob1 = new Bob(200,400,80,80);
  bob2 = new Bob(250,400,80,80);
  bob3 = new Bob(300,400,80,80);
  bob4 = new Bob(150,400,80,80);
  bob5 = new Bob(100,400,80,80);
  rope1 = new SlingShot(bob1.body,{x:350,y:300})
  rope2 = new SlingShot(bob2.body,{x:450,y:300})
  rope3 = new SlingShot(bob3.body,{x:550,y:300})
  rope4 = new SlingShot(bob4.body,{x:250,y:300})
  rope5 = new SlingShot(bob5.body,{x:150,y:300})
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();  
  rope5.display();
}



