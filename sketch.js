var ball;
var pipes=[];
var mic;
var bird_img;
function preload(){
  bird_img = loadImage('bird0.jpg');
}
function setup() {
createCanvas(800, 600);
mic = new p5.AudioIn();
mic.start();
ball = new Ball();
pipes.push(new Pipe());
slider= createSlider(0, 1, 0.2, 0.01);
}

function draw() {
  background(0);
 
  var vol = mic.getLevel();
   for (var i= pipes.length-1; i >= 0; i--){
  	pipes[i].show();
  	pipes[i].update();

   if(pipes[i].hits(ball))

  	if(pipes[i].offscreen()){//delete pipes offscreen
  		pipes.splice(i, 1);
  		
  	}

  }

  ball.show();
  ball.update();

  if(frameCount %40 == 0){
  	pipes.push(new Pipe());

  }
   var threshold = slider.value();

if(vol> threshold){
	ball.up();
}

  fill(0, 255, 0);
  noStroke();
  var y= map(vol, 0, 1, height, 0);
  rect(width-50, y, 50, height-y);
 
 var ty = map(threshold, 0, 1, height, 0);
 stroke(255, 0, 0);
 strokeWeight(4);
 line(width -50, ty, width, ty);
 
}

 function keyPressed(){
	if(key==' '){
		// console.log('space');
		ball.up();
	}
}