const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i <=width; i = i + 80){
        divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,75));}

    for(var j=50;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,175));}

    for(var j=75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,275));}

    for(var j=50;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,375));}

    //for(var k=0;k<divisions.length;k++){
      //  divisions[k].display();}
   
    ground1=new Ground(600,height,1200,20);
    ground2=new Ground(600,1,1200,15);
    ground3=new Ground(1,350,15,1200);
    ground4=new Ground(800,350,15,1200);

    GROUND=new Ground1(400,680,783,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    for(var n=0;n<divisions.length;n++){
        divisions[n].display();}
        
    if(frameCount %60 === 0){
        particles.push(new Particle(random(width/2-70,width/2+70),10,10))
    }
    for(var h=0;h<particles.length;h++){
        particles[h].display();}
    for(var j=0;j<plinkos.length;j++){
        plinkos[j].display();}
    
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    GROUND.display();
}
