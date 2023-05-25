function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
   line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill('blue');
  textSize(30);
    text('I..',mouseX-20,mouseY-35);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill('purple');
    text('Really!!!',mouseX-20,mouseY-35);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill('red');
    text('Love <3',mouseX-20,mouseY-35);
  }
  
   
  else if (mouseX > 300 && mouseX <= 400) {
    fill('orange');
     text('You!',mouseX-20,mouseY-35);
  }
  
}







