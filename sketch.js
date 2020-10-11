const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    ground1 = new Ground(600,height,1200,20)

    pig1 = new Pigs(810,350);

    log1 = new logs(810,260,300,PI/2)
    //PI means radients or 360
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
}