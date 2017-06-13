function Ball(){
	this.x=50;
	this.y=height/2;
	this.r= 30;
	
	this.gravity = 0.6;
	this.velocity = 0;
	this.lift= -15;
  
	this.show= function(){
		noStroke();
		fill(255);
		image(bird_img, this.x, this.y);
		//ellipse(this.x, this.y, this.r*2, this.r*2);
	   


	}
	this.up = function(){
		this.velocity += this.lift;
		// console.log('current Velocity is'+this.velocity);
	}

	this.update= function(){
		this.velocity += this.gravity;
		this.velocity *= 0.9; //air resistance
		this.y +=this.velocity;
		
		if(this.y > height){
			this.y=height;
			this.velocity=0;

		}if(this.y < 0){
			this.y=0;
			this.velocity=0;

		}
	}
	}