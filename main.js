function preload() {
    
}

function setup() {
canvas = createCanvas(400,400);
canvas.position(110,200);
video=createCapture(VIDEO);
video.hide()

}

function draw() {

 image(video,50,50,300,300);

fill(235,0,0,1);
stroke(235,0,0,1);

 circle(375,25,50);
 circle(375,375,50);
 circle(25,25,50);
 circle(25,375,50);

 fill(0,235,0,1);
stroke(0,235,0,1);

 rect(370,48,15,305);
 rect(17,48,15,305);
 rect(45, 20, 305, 15);
 rect(45, 365, 305, 15);
  
}

function take_snapshot() {

    save("img.png");

}