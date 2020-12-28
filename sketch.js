//create Physics Engine
//namespacing   short form
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    //create engine and world
    engine = Engine.create();
    world = engine.world;


//create ball
var ball_options ={
  restitution: 1.0    //look like tenis ball
}    
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
//create ground
    var option={isStatic:true}  //fixed
    ground=Bodies.rectangle(200,390,20,200,option);
    World.add(world,ground);

    console.log(ball);
    Engine.run(engine);
}

function draw(){
    background(0);
    //display ground
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //display ball
    //for circle, to show ball on screen
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}