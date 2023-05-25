

function setup() {
  createCanvas(windowWidth, windowHeight); //controls the height and width of the canvas
  background(255); //controls how big canvas background is 
}

function draw() {

  //The Ground
  noStroke()      //removes stroke along ground
  fill('green');  //Colors ground/rectangke
  rect(0, 400, windowWidth, 100); //setting height and width 


  //The House
  fill('beige');//colors the house/square beige 
  stroke('pink');//colors pink lines around square
  rect(50, 200, 220, 200);//deturmine height n width

  //Windows
  fill('white');//colors windows
  strokeWeight(10);//controls stroke size
  stroke('black'); //colors the strole
  rect(80, 250, 50, 50); //controls left window height n width
  rect(180, 250, 50, 50); //controls right window height n width 

  //Triangle
  fill('pink'); //controls color of roof/triangle
  triangle(50, 200, 100, 100, 270, 200);//controls placement,width n height

  //Door
  rect(129, 315, 50, 75); //coordinates of door/height n width

//treetrunk
  fill('brown') //controls color
  rect(350, 200, 100, 200); //controls where tree is and size

  //treeleaves
  fill('green') //controls color of leaves
  ellipse(400, 210, 200, 200) //placement of circle and size


  
}