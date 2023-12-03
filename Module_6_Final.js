let table;
let test, loc;
let hoverOver75;
let showInfo75 = false;
let hoverOver158;
let showInfo158 = false;
let hoverOver163;
let showInfo163 = false;
let hoverOver238;
let showInfo238 = false;
let hoverOver242;
let showInfo242 = false;
let yoff = 0.0;
let flag75;
let canvasDiv;

function preload() {
  table = loadTable("Sheet7.csv", "csv", "header")
}

function setup() {
  canvasDiv = document.getElementById("mySketch");
  
  let canvas = createCanvas(canvasDiv.offsetWidth, windowHeight);
  canvas.parent("mySketch");
  
  test = table.getArray();
  
}

function draw() {
   background(32, 41, 109);

//tower 75
  loc = table.getString(3, "Freq");
  console.log(loc);
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(300, 500, 50, loc*100);
  }
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(295, 490, 60, 15);
  rect (295, 475, 15, 15);
  rect(318, 475, 15, 15);
  rect(340, 475, 15, 15);
  }
  //flag 75
  stroke("white");{
  line(325, 420, 325, 475);
  }
  noStroke();
  fill(184, 113, 59);{
    triangle(325, 420, 325, 450, 360, 435);  
  }
  //fill('white');
  //noStroke();
  //textSize(10);
  //flag75 = text('75', 329, 387);
  hoverOver75 = createElement("h6", "75");
  hoverOver75.position(329, 405);
  hoverOver75.mouseOver(() => showInfo75 = true);
  hoverOver75.mouseOut(() => showInfo75 = false);
  
  //tower 158
  loc = table.getString(12, "Freq");
  console.log(loc);
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(600, 500, 50, loc*100);
  }
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(595, 490, 60, 15);
  rect (595, 475, 15, 15);
  rect(618, 475, 15, 15);
  rect(640, 475, 15, 15);
  }
  
  //flag 158
  stroke("white");{
  line(625, 420, 625, 475);
  }
  noStroke();
  fill(184, 113, 59);{
    triangle(625, 420, 625, 450, 660, 435);  
  }
  //fill("white");
  //noStroke();
  //textSize(10);
  //text('158', 627, 437);
  push();
  hoverOver158 = createElement("h6", "158");
  hoverOver158.position(627, 405);
  hoverOver158.mouseOver(() => showInfo158 = true);
  hoverOver158.mouseOut(() => showInfo158 = false);
  pop();
  
  //tower 163
  loc = table.getString(14, "Freq");
  console.log(loc);
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(700, 400, 50, loc*100);
  }
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(695, 390, 60, 15);
  rect (695, 375, 15, 15);
  rect(718, 375, 15, 15);
  rect(740, 375, 15, 15);
  }
  
  //flag 163
  stroke("white");{
  line(725, 330, 725, 375);
  }
  noStroke();
  fill(184, 113, 59);{
    triangle(725, 330, 725, 360, 760, 345);  
  }
  //fill("white");
  //noStroke();
  //textSize(10);
  //text('163', 727, 347);
  hoverOver163 = createElement("h6", "163");
  hoverOver163.position(727, 315);
  hoverOver163.mouseOver(() => showInfo163 = true);
  hoverOver163.mouseOut(() => showInfo163 = false);
  
  //tower 238
  loc = table.getString(18, "Freq");
  console.log(loc);
  
 fill(245, 219, 173);
 stroke(153, 123, 70);{
 rect(900, 300, 50, loc*100);
 }
  
  fill(245, 219, 173);
  stroke(153, 123, 70);{
  rect(895, 300, 60, 15);
  rect (895, 285, 15, 15);
  rect(918, 285, 15, 15);
  rect(940, 285, 15, 15);
  }
  
 //flag 238
  stroke("white");{
  line(925, 230, 925, 285);
  }
  noStroke();
  fill(184, 113, 59);{
    triangle(925, 230, 925, 260, 960, 245);  
  }
  //fill("white");
  //noStroke();
  //textSize(10);
  //text('238', 927, 247);
  hoverOver238 = createElement("h6", "238");
  hoverOver238.position(928, 214);
  hoverOver238.mouseOver(() => showInfo238 = true);
  hoverOver238.mouseOut(() => showInfo238 = false);
  
  //tower 242
 loc = table.getString(21, "Freq");
 console.log(loc);
  
 fill(245, 219, 173);
 stroke(153, 123, 70);{
 rect (1000, 450, 50, loc*100);
 }
 
 fill(245, 219, 173);
 stroke(153, 123, 70);{
 rect(995, 450, 60, 15);
 rect (995, 435, 15, 15);
 rect(1018, 435, 15, 15);
 rect(1040, 435, 15, 15);
 }
 
//flag 242
  stroke("white");{
  line(1025, 380, 1025, 435);
  }
  noStroke();
  fill(184, 113, 59);{
    triangle (1025, 380, 1025, 410, 1060, 395);  
  }
  //fill("white");
  //noStroke();
  //textSize(10);
  //text('242', 1027, 397);
  hoverOver242 = createElement("h6", "242");
  hoverOver242.position(1029, 364);
  hoverOver242.mouseOver(() => showInfo242 = true);
  hoverOver242.mouseOut(() => showInfo242 = false);
  
fill("white");
  noStroke();
  textSize(40);
  textFont('Georgia');
  text('Piranesi, The Man of The House', 425, 100);
  
  fill(255, 207, 0);
  noStroke();
  textSize(15);
  text('“Piranesi” by Susanna Clarke follows its titular character as he navigates a mystery surrounding the place he calls home, an endless castle in the middle of the ocean. \nPiranesi’s name holds a very crucial role in the book’s unfolding. Here, the towers represent the pages where his name is mentioned most. ', 200, 140);
  
   fill(255, 207, 0);
  noStroke();
  textSize(12);
  text('Hover your cursor to each flag to read the notable mentions in each page (of the Kindle version of the book),\nand see how the narrative framing of his name changes over time.', 200, 200);
  
  fill(255, 207, 0);
  noStroke();
  textSize(12);
  text('(Dive—or scroll—below the waves to read about this project!)', 200, 240);
  
  push();
  fill(135, 206, 250);
  beginShape();
   let xoff = yoff;
  for (let x = 0; x <= width; x += 10) {
    let y = map(noise(xoff), 0, 1, 500, 700);
    vertex(x, y);   
    xoff += 0.01;
  }
  
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  pop();
  
   if (showInfo75) {
    push();
    fill("white");
    textSize(10);
    text('Page 75: Piranesi is mentioned twice. \n"No. Piranesi. I know that this means a great deal to you \nand I’m sorry to have to break it to you. \nBut this is not a cause for celebration."', 150, 350)
 pop();  
 }
   
    if (showInfo158) {
    push();
    fill("white");
    textSize(10);
    text('Page 158: Piranesi is mentioned twice. \n"Dear Piranesi, \nReading your useful and informative messages, \nI have come to realise that if only I were to cast off \nmy wickedness then we could be friends."', 450, 350)
 pop();  
 }
   
   if (showInfo163) {
    push();
    fill("white");
    textSize(10);
    text('Page 163: Piranesi is mentioned four times. \n"I once asked the Other why he called me Piranesi."', 640, 285)
 pop();  
 }
   
   if (showInfo238) {
    push();
    fill("white");
    textSize(10);
    text('Page 238: Piranesi is mentioned six times. \n"I no longer look like Piranesi."', 885, 200)
  pop(); 
 }
   
   if (showInfo242) {
    push();
    fill("white");
    textSize(10);
    text('Page 242: Piranesi is mentioned three times. \n"I understand much better now - better than \nPiranesi ever could..."', 1000, 330)
  pop(); 
 }
  function windowResized() {
    resizeCanvas(canvasDiv.offsetWidth, windowHeight);
  }
}
