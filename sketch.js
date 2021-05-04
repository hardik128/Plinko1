const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  ground01=new Ground(450,590,900,20)
  ground02=new Ground(0,300,1,600)
  ground03=new Ground(600,300,1,600)
  
  
  for(var i=100; i<=500;i=i+100){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=7.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,70));
  }

  for(var j=22.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,120));
  } 

  for(var j=7.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,170));
  }

  for(var j=22.5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,220));
  } 

}



function draw() {
  frameRate(120);
  background(0);  
  Engine.update(engine);
  ground01.display(); 
  ground02.display();
  ground03.display();
  
  if (frameCount % 20 === 0) {
    particles.push(new Particle(random(150, 250), 20, 20));
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  
  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
 
}


