const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;


var myengine, ground, myworld,ball;

function setup() 
{
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  var options=
  {
    isStatic : true
  }

  ground=Bodies.rectangle(300,580,600,50,options);
 // console.log(mybody);

  World.add(myworld,ground);

  var Boptions=
  {
    restitution :1.0
  }

  ball=Bodies.circle(300,100,20,Boptions);
 // console.log(mybody);

  World.add(myworld,ball);
 
}

function draw() 
{
  background(0); 

  Engine.update(myengine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,600,50);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}
