const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var G1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15
var polygon1
var sling1
var score = 0
var backgroundImg,platform;
function preload(){

getBgI();

}
function setup() {

    engine = Engine.create();
    world = engine.world;

    createCanvas(1000, 500);
G1 = new Ground(700, 400, 250, 20);

//push();
//fill("white");

box1 = new Box(600, 370, 25, 35);
box2 = new Box(625, 370, 25, 35);
box3 = new Box(650, 370, 25, 35);
box4 = new Box(675, 370, 25, 35);
box5 = new Box(700, 370, 25, 35);
box6  = new Box(725, 370, 25, 35);
box7 = new Box(750, 370, 25, 35);
box14 =  new Box(725, 335, 25, 35)
box15 = new Box(625, 335, 25, 35);
//pop();

//push();
//fill("black");
box8 = new Box(650, 335, 25, 35);
box9 = new Box(675, 335, 25, 35);
box10 = new Box(700, 335, 25, 35);
//pop();

box11 = new Box(665, 300, 25, 35);
box12 = new Box(690, 300, 25, 35);
box13 = new Box(680, 265, 25, 35);

polygon1 = new Polygon(300, 250, 50, 50);

sling1 = new Sling(polygon1.body, {x: 300, y: 220});

Engine.run(engine);

}

function draw() {
    if(backgroundImg){
        background(backgroundImg);
        }
//background(203, 246, 244);
Engine.update(engine);
G1.display();
push();
fill("pink");

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
pop();

push();
fill("white");
box8.display();
box9.display();
box10.display();
pop();

box11.display();
box12.display();

box13.display();
box14.display();
box15.display();

polygon1.display();


sling1.display();
textSize(25);
textFont("times new roman");
fill(0, 0, 0);
text("SCORE: "+score, 700,100)

keyPressed();
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 
 
    sling1.fly();


}
function keyPressed(){
    if (keyCode===32){
        
        sling1.attach(polygon1.body);

    }
}
async function getBgI(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13); //incl, excl
   
    console.log(hour);

    if(hour>=6 && hour<=19){

        bg = color(96, 187, 227)
        
}


    else{
        bg = color(252, 97, 147)
    }
 backgroundImg = (bg);

}
