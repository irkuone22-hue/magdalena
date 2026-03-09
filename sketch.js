var sary= 400;
var luk= 100;


let x1 = 0;
let x2 = 100;
let x3 = 20;
let speed = 2;

function setup() {
  createCanvas(700, 500); 


}

//The draw function happens over and over again
function draw() {
  background(48, 59, 8); 

  stroke(210,255,127);// yellow border
  strokeWeight(1);
  fill(140,255,mouseX,150); // blue marine center
//line (150,sary,40,sary); // oval on the left side
  luk=luk-5;
  fill (random(130,255),random(30,255), random (235,167));
  stroke(0,0,0);
  strokeWeight(5);
  fill (211, 222, 100);
  line(random(0,250),random(height),400,120);
  stroke (199, 199, 255);
  fill(151, 184, 40);
  ellipse(350,250, luk ,200,150)
  stroke(0,0,0);
  strokeWeight(5);
  fill (211, 255, 171);
  ellipse(150,120,luk,100,sary);
  stroke(0,0,0);
  strokeWeight(5);
  fill (211, 222, 255);
  //ellipse(mouseX,120,115,mouseY);
   strokeWeight(5);
  fill (255, 192, 0);
  //ellipse(429,120,215,mouseY);w32

  stroke(0,0,0);
  strokeWeight(5);
  fill (mouseX, 222, 255);
  ellipse(40,367,luk,85,sary);

   stroke(0,0,0);
  strokeWeight(5);
  fill (mouseY, 224, 36);
  ellipse(10,267,luk,35,sary);
   stroke(206, 212, 108);
  strokeWeight(5);
  fill (206, 212, 108);
  ellipse(7,247,luk,30,sary);
   stroke(245, 212, 108);
  strokeWeight(5);
  fill (136, 140, 76);
  ellipse(5,300,luk,25,sary);



  luk=luk+2
  sary=sary-8
  stroke(255,255,255);
  line (random(97,250),random(height),220,sary);
  fill(230,30,210);
  stroke(255, 255,255);
  strokeWeight(5);

  fill(134,54,255);
  stroke(255,255,255);
  line (random(34,250),random(height),220,40);

  line (random(100,340),random(height),230,500);
  stroke(247,192,2);
  strokeWeight(5);


  luk=luk-2
  sary=sary+2



  line (random(120,250),random(height),260,240);
  stroke(237, 189, 24);
  strokeWeight(5);

  line (random(190,150),random(height),190,140);
  stroke(237, 189, 24);
  strokeWeight(5);

   line (random(170,156),random(height),110,230);
  stroke(237, 189, 24);
  strokeWeight(5);
  


  //line (random(120,250),random(height),620,240);
  //stroke(255, 95, 15);
  //trokeWeight(5);
  //line(80, sary, 225, 210);

 
  




// Dibujar la línea
 // line(x1, 50, x2, 50);
  //line(10, x3, x2, 170);
  line ()

  
  // Mover la línea
  x1 += speed;
  x2 += speed;
  x3 += speed;
  
  // Rebotar si llega al borde
  if (x1 > width || x1 < 0) {
    speed *= -1;
  }



  
}

function mousePressed(){
  if (sary>=100) {
    sary=0;
  } else {
     sary = sary+10;}

}


