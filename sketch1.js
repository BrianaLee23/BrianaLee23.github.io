function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Draw head 
  fill('Navajowhite');
  ellipse(200,200,200,300)
  
  //eyebrow Left
  fill('brown');
rect(100, 99, 54, 15);
  
  //Draw left eyes
  fill('white');
  ellipse(130,150,50,50)
  
   //Draw left eyes pupils
  fill('black');
  ellipse(130,150,30,50)
  
   //Draw right eyes
  fill('white');
  ellipse(270,150,50,50)
  
   //Draw right eyes pupil
  fill('black');
  ellipse(270,150,30,50)
  
   //eyebrow right
  fill('brown');
rect(250, 100, 54, 15);
  
  //Draw middle eyes
  fill('white');
  ellipse(200,90,50,50)
  
  //Draw middle eyes pupil
  fill('black');
  ellipse(200,90,30,50)
  
   //eyebrow middle
  fill('brown');
rect(173, 40, 57, 15);
  
  //nose
fill('burlyWood');  
  triangle(210,185,176,228,231,227)

  //mouth
  line(5, 20,90, 30);
  stroke(1);

}