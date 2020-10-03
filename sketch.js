const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box;
var object;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box = new Box(100,100,50,50);
    object = new Ground (200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box.display();
    object.display();
   
}