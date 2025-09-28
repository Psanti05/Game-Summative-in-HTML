//creation of the needed values
let score = 0;
let highScore = 0;
let gameOver = true;
let pause = false;

let startPicture = new Image();
startPicture.src = "GStartScreen.jpg";

const obstacleCarColors = [
	'red',
	'blue',
	'cyan',
	'yellow',
	'black',
	'purple',
	'green'
];

const backgroundState = {
	NORMAL: 1,
	SANDY: 2,
	RAINY: 3,
	SNOWY: 4,
}

const colorState = {
	RED: 1,
	BLUE: 2,
	GREEN: 3,
}

const carState = {
	RIDING: 1,
	MAINSCREEN: 2,
}

const obstacleState = {
	NORMAL: 1,
	OUT: 2,
	PASSED: 3,
	CRASHED: 4,
}

class RaceCar {
	constructor(w, ctx, width, height, state){ //creation of the needed values for the class RaceCar
		this.ctx = ctx;
		this.x = width;
		this.y = height;
		this.dirn = 0;
		this.switchv = 0;
		this.yup = w.innerHeight*0.2;
		this.ydown = w.innerHeight*0.9;
		this.speedymax = 100;
		this.speedy = 0;
		this.xleft = w.innerWidth*0.25+20;
		this.xright = w.innerWidth*0.75-20;
		this.speedx = 0;
		this.pass = 0;
		this.state = colorState.RED;
		this.carState = state;
		this.color1 = "red";
		this.color2 = "yellow";
		this.gameSwitch = 0;

	}

	draw(){ //full drawing of the player's car
		if (this.carState == carState.DRIVING){
			this.ctx.beginPath();
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.strokeStyle = 'grey';
			this.ctx.lineWidth = "1";
			this.ctx.strokeRect(this.x-18, this.y-26, 6, 9);
			this.ctx.strokeRect(this.x+18, this.y-26, -6, 9);
			this.ctx.strokeRect(this.x-20, this.y+23, 8, 12);
			this.ctx.strokeRect(this.x+20, this.y+23, -8, 12);

			this.ctx.beginPath();
			this.ctx.fillStyle = this.color1;
			this.ctx.moveTo(this.x-16, this.y-35);
			this.ctx.lineTo(this.x+16, this.y-35);
			this.ctx.lineTo(this.x+16, this.y-28);
			this.ctx.lineTo(this.x+10.5, this.y-28);
			this.ctx.lineTo(this.x+10.5, this.y-15);
			this.ctx.lineTo(this.x+17, this.y-15);
			this.ctx.lineTo(this.x+17, this.y+21);
			this.ctx.lineTo(this.x+10.5, this.y+21);
			this.ctx.lineTo(this.x+10.5, this.y+32);
			this.ctx.lineTo(this.x+7, this.y+32);
			this.ctx.lineTo(this.x+7, this.y+20);
			this.ctx.lineTo(this.x+4, this.y+18);
			this.ctx.lineTo(this.x+4, this.y+22);
			this.ctx.lineTo(this.x+6, this.y+25);
			this.ctx.lineTo(this.x+4, this.y+25);
			this.ctx.lineTo(this.x+4, this.y+31);
			this.ctx.lineTo(this.x+7, this.y+35);
			this.ctx.lineTo(this.x-7, this.y+35);
			this.ctx.lineTo(this.x-4, this.y+31);
			this.ctx.lineTo(this.x-4, this.y+25);
			this.ctx.lineTo(this.x-6, this.y+25);
			this.ctx.lineTo(this.x-4, this.y+22);
			this.ctx.lineTo(this.x-4, this.y+18);
			this.ctx.lineTo(this.x-7, this.y+20);
			this.ctx.lineTo(this.x-7, this.y+32);
			this.ctx.lineTo(this.x-10.5, this.y+32);
			this.ctx.lineTo(this.x-10.5, this.y+21);
			this.ctx.lineTo(this.x-17, this.y+21);
			this.ctx.lineTo(this.x-17, this.y-15);
			this.ctx.lineTo(this.x-10.5, this.y-15);
			this.ctx.lineTo(this.x-10.5, this.y-28);
			this.ctx.lineTo(this.x-16, this.y-28);
			this.ctx.lineTo(this.x-16, this.y-35);
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
			this.ctx.moveTo(this.x-4, this.y+14);
			this.ctx.lineTo(this.x-4, this.y+5);
			this.ctx.lineTo(this.x-3, this.y+5);
			this.ctx.lineTo(this.x-3, this.y+4);
			this.ctx.lineTo(this.x+3, this.y+4);
			this.ctx.lineTo(this.x+3, this.y+5);
			this.ctx.lineTo(this.x+4, this.y+5);
			this.ctx.lineTo(this.x+4, this.y+14);
			this.ctx.lineTo(this.x-4, this.y+14);
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = this.color2;
			this.ctx.moveTo(this.x+1, this.y-27);
			this.ctx.lineTo(this.x+1, this.y-13);
			this.ctx.lineTo(this.x+3, this.y-16);
			this.ctx.lineTo(this.x+7, this.y-14);
			this.ctx.lineTo(this.x+2, this.y-7);
			this.ctx.lineTo(this.x-4, this.y-7);
			this.ctx.lineTo(this.x-4, this.y-27);
			this.ctx.lineTo(this.x+1, this.y-27);
			this.ctx.arc(this.x, this.y+9, 4, 0, 2*Math.PI)
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = 'pink';
			this.ctx.rect(this.x-13, this.y-3, 5, 20);
			this.ctx.rect(this.x+13, this.y-3, -5, 20);
			this.ctx.rect(this.x-8, this.y-3, 16, 3);
			this.ctx.moveTo(this.x+12, this.y-35);
			this.ctx.lineTo(this.x-12, this.y-35);
			this.ctx.lineTo(this.x-12, this.y-31);
			this.ctx.lineTo(this.x+12, this.y-31);
			this.ctx.lineTo(this.x+12, this.y-35);
			this.ctx.fill();

			if (this.switchv == 0){ //for switching the black and white colors on the wheels to simulate the car driving
				this.ctx.beginPath();
				this.ctx.fillStyle = 'white';
				this.ctx.rect(this.x-18, this.y-26, 2, 3);
				this.ctx.rect(this.x-18, this.y-17, 2, -3);
				this.ctx.rect(this.x-16, this.y-23, 2, 3);
				this.ctx.rect(this.x-12, this.y-26, -2, 3);
				this.ctx.rect(this.x-12, this.y-17, -2, -3);

				this.ctx.rect(this.x+18, this.y-26, -2, 3);
				this.ctx.rect(this.x+18, this.y-17, -2, -3);
				this.ctx.rect(this.x+16, this.y-23, -2, 3);
				this.ctx.rect(this.x+12, this.y-26, 2, 3);
				this.ctx.rect(this.x+12, this.y-17, 2, -3);

				this.ctx.rect(this.x-18, this.y+23, 2, 3);
				this.ctx.rect(this.x-14, this.y+23, 2, 3);
				this.ctx.rect(this.x-20, this.y+26, 2, 3);
				this.ctx.rect(this.x-16, this.y+26, 2, 3);
				this.ctx.rect(this.x-18, this.y+29, 2, 3);
				this.ctx.rect(this.x-14, this.y+29, 2, 3);
				this.ctx.rect(this.x-20, this.y+32, 2, 3);
				this.ctx.rect(this.x-16, this.y+32, 2, 3);

				this.ctx.rect(this.x+18, this.y+23, -2, 3);
				this.ctx.rect(this.x+14, this.y+23, -2, 3);
				this.ctx.rect(this.x+20, this.y+26, -2, 3);
				this.ctx.rect(this.x+16, this.y+26, -2, 3);
				this.ctx.rect(this.x+18, this.y+29, -2, 3);
				this.ctx.rect(this.x+14, this.y+29, -2, 3);
				this.ctx.rect(this.x+20, this.y+32, -2, 3);
				this.ctx.rect(this.x+16, this.y+32, -2, 3);

				this.ctx.fill();
			} else {
				this.ctx.beginPath();
				this.ctx.fillStyle = 'white';
				this.ctx.rect(this.x-16, this.y-26, 2, 3);
				this.ctx.rect(this.x-18, this.y-23, 2, 3);
				this.ctx.rect(this.x-14, this.y-23, 2, 3);
				this.ctx.rect(this.x-16, this.y-20, 2, 3);

				this.ctx.rect(this.x+16, this.y-26, -2, 3);
				this.ctx.rect(this.x+18, this.y-23, -2, 3);
				this.ctx.rect(this.x+14, this.y-23, -2, 3);
				this.ctx.rect(this.x+16, this.y-20, -2, 3);

				this.ctx.rect(this.x-20, this.y+23, 2, 3);
				this.ctx.rect(this.x-16, this.y+23, 2, 3);
				this.ctx.rect(this.x-18, this.y+26, 2, 3);
				this.ctx.rect(this.x-14, this.y+26, 2, 3);
				this.ctx.rect(this.x-20, this.y+29, 2, 3);
				this.ctx.rect(this.x-16, this.y+29, 2, 3);
				this.ctx.rect(this.x-18, this.y+32, 2, 3);
				this.ctx.rect(this.x-14, this.y+32, 2, 3);

				this.ctx.rect(this.x+20, this.y+23, -2, 3);
				this.ctx.rect(this.x+16, this.y+23, -2, 3);
				this.ctx.rect(this.x+18, this.y+26, -2, 3);
				this.ctx.rect(this.x+14, this.y+26, -2, 3);
				this.ctx.rect(this.x+20, this.y+29, -2, 3);
				this.ctx.rect(this.x+16, this.y+29, -2, 3);
				this.ctx.rect(this.x+18, this.y+32, -2, 3);
				this.ctx.rect(this.x+14, this.y+32, -2, 3);

				this.ctx.fill();
			}
		} else {
			this.ctx.beginPath();
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.strokeStyle = 'grey';
			this.ctx.lineWidth = "1";
			this.ctx.strokeRect(this.x+26*3, this.y+18*3, -9*3, -6*3);
			this.ctx.strokeRect(this.x+26*3, this.y-18*3, -9*3, 6*3);
			this.ctx.strokeRect(this.x-23*3, this.y+20*3, -12*3, -8*3);
			this.ctx.strokeRect(this.x-23*3, this.y-20*3, -12*3, 8*3);

			this.ctx.beginPath();
			this.ctx.fillStyle = this.color1;
			this.ctx.moveTo(this.x+35*3, this.y-16*3);
			this.ctx.lineTo(this.x+35*3, this.y+16*3);
			this.ctx.lineTo(this.x+28*3, this.y+16*3);
			this.ctx.lineTo(this.x+28*3, this.y+10.5*3);
			this.ctx.lineTo(this.x+15*3, this.y+10.5*3);
			this.ctx.lineTo(this.x+15*3, this.y+17*3);
			this.ctx.lineTo(this.x-21*3, this.y+17*3);
			this.ctx.lineTo(this.x-21*3, this.y+10.5*3);
			this.ctx.lineTo(this.x-32*3, this.y+10.5*3);
			this.ctx.lineTo(this.x-32*3, this.y+7*3);
			this.ctx.lineTo(this.x-20*3, this.y+7*3);
			this.ctx.lineTo(this.x-18*3, this.y+4*3);
			this.ctx.lineTo(this.x-22*3, this.y+4*3);
			this.ctx.lineTo(this.x-25*3, this.y+6*3);
			this.ctx.lineTo(this.x-25*3, this.y+4*3);
			this.ctx.lineTo(this.x-31*3, this.y+4*3);
			this.ctx.lineTo(this.x-35*3, this.y+7*3);
			this.ctx.lineTo(this.x-35*3, this.y-7*3);
			this.ctx.lineTo(this.x-31*3, this.y-4*3);
			this.ctx.lineTo(this.x-25*3, this.y-4*3);
			this.ctx.lineTo(this.x-25*3, this.y-6*3);
			this.ctx.lineTo(this.x-22*3, this.y-4*3);
			this.ctx.lineTo(this.x-18*3, this.y-4*3);
			this.ctx.lineTo(this.x-20*3, this.y-7*3);
			this.ctx.lineTo(this.x-32*3, this.y-7*3);
			this.ctx.lineTo(this.x-32*3, this.y-10.5*3);
			this.ctx.lineTo(this.x-21*3, this.y-10.5*3);
			this.ctx.lineTo(this.x-21*3, this.y-17*3);
			this.ctx.lineTo(this.x+15*3, this.y-17*3);
			this.ctx.lineTo(this.x+15*3, this.y-10.5*3);
			this.ctx.lineTo(this.x+28*3, this.y-10.5*3);
			this.ctx.lineTo(this.x+28*3, this.y-16*3);
			this.ctx.lineTo(this.x+35*3, this.y-16*3);
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
			this.ctx.moveTo(this.x-14*3, this.y-4*3);
			this.ctx.lineTo(this.x-5*3, this.y-4*3);
			this.ctx.lineTo(this.x-5*3, this.y-3*3);
			this.ctx.lineTo(this.x-4*3, this.y-3*3);
			this.ctx.lineTo(this.x-4*3, this.y+3*3);
			this.ctx.lineTo(this.x-5*3, this.y+3*3);
			this.ctx.lineTo(this.x-5*3, this.y+4*3);
			this.ctx.lineTo(this.x-14*3, this.y+4*3);
			this.ctx.lineTo(this.x-14*3, this.y-4*3);
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = this.color2;
			this.ctx.moveTo(this.x+27*3, this.y+1*3);
			this.ctx.lineTo(this.x+13*3, this.y+1*3);
			this.ctx.lineTo(this.x+16*3, this.y+3*3);
			this.ctx.lineTo(this.x+14*3, this.y+7*3);
			this.ctx.lineTo(this.x+7*3, this.y+2*3);
			this.ctx.lineTo(this.x+7*3, this.y-4*3);
			this.ctx.lineTo(this.x+27*3, this.y-4*3);
			this.ctx.lineTo(this.x+27*3, this.y+1*3);
			this.ctx.arc(this.x-9*3, this.y, 4*3, 0, 2*Math.PI)
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = 'pink';
			this.ctx.rect(this.x+3*3, this.y-13*3, -20*3, 5*3);
			this.ctx.rect(this.x+3*3, this.y+13*3, -20*3, -5*3);
			this.ctx.rect(this.x+3*3, this.y-8*3, -3*3, 16*3);
			this.ctx.moveTo(this.x+35*3, this.y+12*3);
			this.ctx.lineTo(this.x+35*3, this.y-12*3);
			this.ctx.lineTo(this.x+31*3, this.y-12*3);
			this.ctx.lineTo(this.x+31*3, this.y+12*3);
			this.ctx.lineTo(this.x+35*3, this.y+12*3);
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = 'white';
			this.ctx.rect(this.x+26*3, this.y-18*3, -3*3, 2*3);
			this.ctx.rect(this.x+17*3, this.y-18*3, 3*3, 2*3);
			this.ctx.rect(this.x+23*3, this.y-16*3, -3*3, 2*3);
			this.ctx.rect(this.x+26*3, this.y-12*3, -3*3, -2*3);
			this.ctx.rect(this.x+17*3, this.y-12*3, 3*3, -2*3);

			this.ctx.rect(this.x+26*3, this.y+18*3, -3*3, -2*3);
			this.ctx.rect(this.x+17*3, this.y+18*3, 3*3, -2*3);
			this.ctx.rect(this.x+23*3, this.y+16*3, -3*3, -2*3);
			this.ctx.rect(this.x+26*3, this.y+12*3, -3*3, 2*3);
			this.ctx.rect(this.x+17*3, this.y+12*3, 3*3, 2*3);

			this.ctx.rect(this.x-23*3, this.y-18*3, -3*3, 2*3);
			this.ctx.rect(this.x-23*3, this.y-14*3, -3*3, 2*3);
			this.ctx.rect(this.x-26*3, this.y-20*3, -3*3, 2*3);
			this.ctx.rect(this.x-26*3, this.y-16*3, -3*3, 2*3);
			this.ctx.rect(this.x-29*3, this.y-18*3, -3*3, 2*3);
			this.ctx.rect(this.x-29*3, this.y-14*3, -3*3, 2*3);
			this.ctx.rect(this.x-32*3, this.y-20*3, -3*3, 2*3);
			this.ctx.rect(this.x-32*3, this.y-16*3, -3*3, 2*3);

			this.ctx.rect(this.x-23*3, this.y+18*3, -3*3, -2*3);
			this.ctx.rect(this.x-23*3, this.y+14*3, -3*3, -2*3);
			this.ctx.rect(this.x-26*3, this.y+20*3, -3*3, -2*3);
			this.ctx.rect(this.x-26*3, this.y+16*3, -3*3, -2*3);
			this.ctx.rect(this.x-29*3, this.y+18*3, -3*3, -2*3);
			this.ctx.rect(this.x-29*3, this.y+14*3, -3*3, -2*3);
			this.ctx.rect(this.x-32*3, this.y+20*3, -3*3, -2*3);
			this.ctx.rect(this.x-32*3, this.y+16*3, -3*3, -2*3);

			this.ctx.fill();
		}
	} //end of method draw

	update(w, obstacleCars, roadState, keysPressed){
		//working for limiting borders of the cars and defining x and y
		//car will glitch at yup to make it seem like it is hitting too hard on the motor and it can't go faster than that
		if (this.y > this.ydown){
			this.y = this.ydown;
			this.speedy = 0;
		} else if (this.y < this.yup){
			this.y = this.yup;
			this.speedy = 0;
		} else if (this.y == this.ydown){
			this.speedy = 0;
		}else{
			this.y += this.speedy;
		}
		if(this.y < this.ydown){
			this.y /= 0.999;
		}

		if (this.x < w.innerWidth*0.25+20){
			this.x = w.innerWidth*0.25+20;
			this.speedx = 0;
		} else if (this.x > w.innerWidth*0.75-20){
			this.x = w.innerWidth*0.75-20;
			this.speedx = 0;
		} else {
			this.x += this.speedx;
		}

		if (roadState == 0 || roadState == 1){
			this.speedy *= 0.7;
			this.speedx *= 0.8;
		} else if (roadState == 2 || roadState == 3){
			this.speedy *= 0.75;
			this.speedx *= 0.85;
		} else if (roadState == 4 || roadState == 5){
			this.speedy *= 0.8;
			this.speedx *= 0.9;
		} else if (roadState == 6 || roadState == 7){
			this.speedy *= 0.9;
			this.speedx *= 0.95;
		}

		//working for the changing colors on the wheels of the player's car
		this.dirn++;
		if (this.dirn%5 == 0 && this.y < this.ydown){ //when the car isn't moving, the wheels also stop turning
			if (this.switchv == 0){
				this.switchv = 1;
			} else if (this.switchv == 1){
				this.switchv = 0;
			}
		}

		for (var i = 0; i < obstacleCars.length; i++){
			if (this.y < obstacleCars[i].y && obstacleCars[i].state == obstacleState.NORMAL){
				this.pass += 10;
				obstacleCars[i].state = obstacleState.PASSED;
			} else if (this.y > obstacleCars[i].y && obstacleCars[i].state == obstacleState.PASSED){
				this.pass -= 10;
				obstacleCars[i].state = obstacleState.NORMAL;
			}
		}

		if (keysPressed["w"] || keysPressed["W"] || keysPressed["ArrowUp"]){
			if (pause || gameOver){
				console.log(key);
			} else {
				this.up();
			}
		}
		if (keysPressed["a"] || keysPressed["A"] || keysPressed["ArrowLeft"]){
			if (pause || gameOver){
				console.log(key);
			} else {
				this.left();
			}
		}
		if (keysPressed["d"] || keysPressed["D"] || keysPressed["ArrowRight"]){
			if (pause || gameOver){
				console.log(key);
			} else {
				this.right();
			}
		}
		if (keysPressed["s"] || keysPressed ["S"] || keysPressed["ArrowDown"]){
			if (pause || gameOver){
				console.log(key);
			} else {
				this.down();
			}
		}

	} // end of method update

	collide(obstacleCars){
		//check if the player crashes with an obstacle car and loses
		for (var i = 0; i < obstacleCars.length; i++){
			if (this.y-35 < obstacleCars[i].y+35
			&& this.y+35 > obstacleCars[i].y-35
			&& this.x-20 < obstacleCars[i].x+20
			&& this.x+20 > obstacleCars[i].x-20){
				obstacleCars[i].dy = 0;
				obstacleCars[i].dx = 0;
				obstacleCars[i].Switchv = 2;
				obstacleCars[i].state = obstacleState.CRASHED;
				this.gameSwitch = 1;
			}
		}
	} //end of method collide

	up(){
		this.speedy -= 1;
		if (this.y == this.ydown){
			this.y -= 1;
		}
	}
	left(){
		if (this.x <= this.xleft){
			this.speedx = 0;
		} else if (this.y == this.ydown){
			this.speedx = 0;
		}else{
			this.speedx -= 1.25;
		}
	}
	right(){
		if (this.x >= this.xright){
			this.speedx = 0;
		} else if (this.y == this.ydown){
			this.speedx = 0;
		}else{
			this.speedx += 1.25;
		}
	}
	down(){
		this.speedy += 1;
	}

	colorCombo1(){
		this.color1 = "red";
		this.color2 = "yellow";
		this.state = colorState.RED;
	}
	colorCombo2(){
		this.color1 = "blue";
		this.color2 = "cyan";
		this.state = colorState.BLUE;
	}
	colorCombo3(){
		this.color1 = "green";
		this.color2 = "violet";
		this.state = colorState.GREEN;
	}
} //end of class RaceCar

class ObstacleCars {
	constructor(w, ctx){ //creation of the needed values for class ObstacleCars
		this.ctx = ctx;
		this.x = Math.random()*(w.innerWidth*0.5-40)+(w.innerWidth*0.25+20); //random place inside the road
		this.y = -(Math.random()+1)*w.innerHeight; //random place inside an entire screen above the current one
		this.color1 = obstacleCarColors [Math.floor(Math.random() * obstacleCarColors.length)]; //random color in the array
		this.color2 = obstacleCarColors [Math.floor(Math.random() * obstacleCarColors.length)]; //random color in the array as well
		while (this.color1 == "black"){
			this.color1 = obstacleCarColors [Math.floor(Math.random() * obstacleCarColors.length)]; //first color can't be black because the it is hard to see since the road is also black
		}
		while (this.color2 == this.color1){
			this.color2 = obstacleCarColors [Math.floor(Math.random() * obstacleCarColors.length)]; //not 2 same colors
		}
		this.state = obstacleState.NORMAL;
		this.dy = Math.random()*15+10;
		this.dx = 0;
		this.Dirn = 0;
		this.Switchv = 0;
	}

	draw(){ //full drawing of the opponents cars
		this.ctx.beginPath();
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.strokeStyle = 'grey';
		this.ctx.strokeRect(this.x-18, this.y-26, 6, 9);
		this.ctx.strokeRect(this.x+18, this.y-26, -6, 9);
		this.ctx.strokeRect(this.x-20, this.y+23, 8, 12);
		this.ctx.strokeRect(this.x+20, this.y+23, -8, 12);

		this.ctx.beginPath();
		this.ctx.fillStyle = this.color1;
		this.ctx.moveTo(this.x-16, this.y-35);
		this.ctx.lineTo(this.x+16, this.y-35);
		this.ctx.lineTo(this.x+16, this.y-28);
		this.ctx.lineTo(this.x+10.5, this.y-28);
		this.ctx.lineTo(this.x+10.5, this.y-15);
		this.ctx.lineTo(this.x+17, this.y-15);
		this.ctx.lineTo(this.x+17, this.y+21);
		this.ctx.lineTo(this.x+10.5, this.y+21);
		this.ctx.lineTo(this.x+10.5, this.y+32);
		this.ctx.lineTo(this.x+7, this.y+32);
		this.ctx.lineTo(this.x+7, this.y+20);
		this.ctx.lineTo(this.x+4, this.y+18);
		this.ctx.lineTo(this.x+4, this.y+22);
		this.ctx.lineTo(this.x+6, this.y+25);
		this.ctx.lineTo(this.x+4, this.y+25);
		this.ctx.lineTo(this.x+4, this.y+31);
		this.ctx.lineTo(this.x+7, this.y+35);
		this.ctx.lineTo(this.x-7, this.y+35);
		this.ctx.lineTo(this.x-4, this.y+31);
		this.ctx.lineTo(this.x-4, this.y+25);
		this.ctx.lineTo(this.x-6, this.y+25);
		this.ctx.lineTo(this.x-4, this.y+22);
		this.ctx.lineTo(this.x-4, this.y+18);
		this.ctx.lineTo(this.x-7, this.y+20);
		this.ctx.lineTo(this.x-7, this.y+32);
		this.ctx.lineTo(this.x-10.5, this.y+32);
		this.ctx.lineTo(this.x-10.5, this.y+21);
		this.ctx.lineTo(this.x-17, this.y+21);
		this.ctx.lineTo(this.x-17, this.y-15);
		this.ctx.lineTo(this.x-10.5, this.y-15);
		this.ctx.lineTo(this.x-10.5, this.y-28);
		this.ctx.lineTo(this.x-16, this.y-28);
		this.ctx.lineTo(this.x-16, this.y-35);
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
		this.ctx.moveTo(this.x-5, this.y+14);
		this.ctx.lineTo(this.x-5, this.y+5);
		this.ctx.lineTo(this.x-3, this.y+5);
		this.ctx.lineTo(this.x-3, this.y+4);
		this.ctx.lineTo(this.x+3, this.y+4);
		this.ctx.lineTo(this.x+3, this.y+5);
		this.ctx.lineTo(this.x+5, this.y+5);
		this.ctx.lineTo(this.x+5, this.y+14);
		this.ctx.lineTo(this.x-5, this.y+14);
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.fillStyle = 'grey';
		this.ctx.arc(this.x, this.y+9, 4, 0, 2*Math.PI);
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.fillStyle = this.color2;
		this.ctx.moveTo(this.x-3, this.y-31);
		this.ctx.lineTo(this.x-3, this.y-1);
		this.ctx.lineTo(this.x-6, this.y-1);
		this.ctx.lineTo(this.x-6, this.y+2);
		this.ctx.lineTo(this.x-10, this.y+2);
		this.ctx.lineTo(this.x-14, this.y+10);
		this.ctx.lineTo(this.x-14, this.y+21);
		this.ctx.lineTo(this.x-11, this.y+21);
		this.ctx.lineTo(this.x-5, this.y+12);
		this.ctx.lineTo(this.x-5, this.y+5);
		this.ctx.lineTo(this.x-3, this.y+5);
		this.ctx.lineTo(this.x-3, this.y+4);
		this.ctx.lineTo(this.x+3, this.y+4);
		this.ctx.lineTo(this.x+3, this.y+5);
		this.ctx.lineTo(this.x+5, this.y+5);
		this.ctx.lineTo(this.x+5, this.y+12);
		this.ctx.lineTo(this.x+11, this.y+21);
		this.ctx.lineTo(this.x+14, this.y+21);
		this.ctx.lineTo(this.x+14, this.y+10);
		this.ctx.lineTo(this.x+10, this.y+2);
		this.ctx.lineTo(this.x+6, this.y+2);
		this.ctx.lineTo(this.x+6, this.y-1);
		this.ctx.lineTo(this.x+3, this.y-1);
		this.ctx.lineTo(this.x+3, this.y-31);
		this.ctx.lineTo(this.x+12, this.y-31);
		this.ctx.lineTo(this.x+12, this.y-35);
		this.ctx.lineTo(this.x-12, this.y-35);
		this.ctx.lineTo(this.x-12, this.y-31);
		this.ctx.lineTo(this.x-3, this.y-31);

		this.ctx.rect(this.x-15, this.y-13, 3, 8);
		this.ctx.rect(this.x+15, this.y-13, -3, 8);

		this.ctx.fill();

		if (this.Switchv == 0){ //for switching the black and white colors on the wheels to simulate the car driving
			this.ctx.beginPath();
			this.ctx.fillStyle = 'white';
			this.ctx.rect(this.x-18, this.y-26, 2, 3);
			this.ctx.rect(this.x-18, this.y-17, 2, -3);
			this.ctx.rect(this.x-16, this.y-23, 2, 3);
			this.ctx.rect(this.x-12, this.y-26, -2, 3);
			this.ctx.rect(this.x-12, this.y-17, -2, -3);

			this.ctx.rect(this.x+18, this.y-26, -2, 3);
			this.ctx.rect(this.x+18, this.y-17, -2, -3);
			this.ctx.rect(this.x+16, this.y-23, -2, 3);
			this.ctx.rect(this.x+12, this.y-26, 2, 3);
			this.ctx.rect(this.x+12, this.y-17, 2, -3);

			this.ctx.rect(this.x-18, this.y+23, 2, 3);
			this.ctx.rect(this.x-14, this.y+23, 2, 3);
			this.ctx.rect(this.x-20, this.y+26, 2, 3);
			this.ctx.rect(this.x-16, this.y+26, 2, 3);
			this.ctx.rect(this.x-18, this.y+29, 2, 3);
			this.ctx.rect(this.x-14, this.y+29, 2, 3);
			this.ctx.rect(this.x-20, this.y+32, 2, 3);
			this.ctx.rect(this.x-16, this.y+32, 2, 3);

			this.ctx.rect(this.x+18, this.y+23, -2, 3);
			this.ctx.rect(this.x+14, this.y+23, -2, 3);
			this.ctx.rect(this.x+20, this.y+26, -2, 3);
			this.ctx.rect(this.x+16, this.y+26, -2, 3);
			this.ctx.rect(this.x+18, this.y+29, -2, 3);
			this.ctx.rect(this.x+14, this.y+29, -2, 3);
			this.ctx.rect(this.x+20, this.y+32, -2, 3);
			this.ctx.rect(this.x+16, this.y+32, -2, 3);

			this.ctx.fill();
		} else {
			this.ctx.beginPath();
			this.ctx.fillStyle = 'white';
			this.ctx.rect(this.x-16, this.y-26, 2, 3);
			this.ctx.rect(this.x-18, this.y-23, 2, 3);
			this.ctx.rect(this.x-14, this.y-23, 2, 3);
			this.ctx.rect(this.x-16, this.y-20, 2, 3);

			this.ctx.rect(this.x+16, this.y-26, -2, 3);
			this.ctx.rect(this.x+18, this.y-23, -2, 3);
			this.ctx.rect(this.x+14, this.y-23, -2, 3);
			this.ctx.rect(this.x+16, this.y-20, -2, 3);

			this.ctx.rect(this.x-20, this.y+23, 2, 3);
			this.ctx.rect(this.x-16, this.y+23, 2, 3);
			this.ctx.rect(this.x-18, this.y+26, 2, 3);
			this.ctx.rect(this.x-14, this.y+26, 2, 3);
			this.ctx.rect(this.x-20, this.y+29, 2, 3);
			this.ctx.rect(this.x-16, this.y+29, 2, 3);
			this.ctx.rect(this.x-18, this.y+32, 2, 3);
			this.ctx.rect(this.x-14, this.y+32, 2, 3);

			this.ctx.rect(this.x+20, this.y+23, -2, 3);
			this.ctx.rect(this.x+16, this.y+23, -2, 3);
			this.ctx.rect(this.x+18, this.y+26, -2, 3);
			this.ctx.rect(this.x+14, this.y+26, -2, 3);
			this.ctx.rect(this.x+20, this.y+29, -2, 3);
			this.ctx.rect(this.x+16, this.y+29, -2, 3);
			this.ctx.rect(this.x+18, this.y+32, -2, 3);
			this.ctx.rect(this.x+14, this.y+32, -2, 3);
			this.ctx.fill();
		}
	} //end of method draw
} //end of class ObstacleCars

function drawRoad(ctx, w, s, roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad){ //function to draw the road and the background images
	let width = w.innerWidth;
	let height = w.innerHeight;

	ctx.beginPath();
	if (roadState == 1){
		ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
	} else if (roadState == 2){
		ctx.fillStyle = "rgba(251, 158, 109, 0.8)";
	} else if (roadState == 3){
		ctx.fillStyle = "rgba(70, 87, 100, 0.8)";
	} else if (roadState == 4){
		ctx.fillStyle = "rgba(91, 93, 92, 0.8)";
	}

	ctx.beginPath();
	if (roadState == 0){
		ctx.drawImage(normalRoad, 0, -height+s, width, height*2);
		ctx.drawImage(normalRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(normalRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 1){
		ctx.drawImage(normalRoad, 0, -height+s, width, height*2);
		ctx.drawImage(sandyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(sandyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 2){
		ctx.drawImage(sandyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(sandyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(sandyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 3){
		ctx.drawImage(sandyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(rainyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(rainyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 4){
		ctx.drawImage(rainyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(rainyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(rainyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 5){
		ctx.drawImage(rainyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(snowyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(snowyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 6){
		ctx.drawImage(snowyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(snowyRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(snowyRoad, 0, -5*height+s, width, height*2);
	} else if (roadState == 7){
		ctx.drawImage(snowyRoad, 0, -height+s, width, height*2);
		ctx.drawImage(normalRoad, 0, -3*height+s, width, height*2);
		ctx.drawImage(normalRoad, 0, -5*height+s, width, height*2);
	}
}

(function(d, w){ //function that manages the entire game
	//creation of all the needed values
	let background = d.getElementById("background");
	let foreground = d.getElementById("foreground");
	foreground.width = w.innerWidth;
	foreground.height = w.innerHeight;
	let ctx = foreground.getContext("2d");

	let normalRoad = new Image();
	normalRoad.src = "GNormalRoad.jpg";
	let sandyRoad = new Image();
	sandyRoad.src = "GSandyRoad.jpg";
	let rainyRoad = new Image();
	rainyRoad.src = "GRainyRoad.jpg";
	let snowyRoad = new Image();
	snowyRoad.src = "GSnowyRoad.jpg";

	let fire = new Image();
	fire.src = "GFire.jpg";

	let me = new RaceCar(w, ctx, w.innerWidth/2, w.innerHeight*0.9, carState.DRIVING); //create the player's race car
	let redCar = new RaceCar(w, ctx, w.innerWidth*0.175, w.innerHeight*0.3675, carState.MAINSCREEN);
	let blueCar = new RaceCar(w, ctx, w.innerWidth*0.175, w.innerHeight*(0.3675+0.094+0.15), carState.MAINSCREEN);
	let greenCar = new RaceCar(w, ctx, w.innerWidth*0.175, w.innerHeight*(0.3675+0.094*2+0.15*2), carState.MAINSCREEN);
	redCar.colorCombo1();
	blueCar.colorCombo2();
	greenCar.colorCombo3();

	let obstacleCars = [];
	let obstacleDirn = 0;
	let obstacleSwitch = 0;

	let roadState = 0;
	let s = 0;
	let r = 0;
	let vcar = 0;
	let vmax = 50;

	var startT1 = new Date().getTime();
	var startT2 = new Date().getTime();
	var startTime = 0;

	var endT1 = 0;
	var endT2 = 0;
	var endTime = 0;

	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	var time1 = 0;
	var time2 = 0;
	var timer = 0;

	let switchMillis = 0;
	let counter = 0;
	let swaper = 0;
	let counter30 = 0;
	let countdown = 30 - (timer-30*counter30);
	let randomvalue = 0;
	let anotherSwaper = 1;
	let difficulty = 0;
	let transitionPoint = 0;
	let soundPhase = 0;
	let keysPressed = {};

	requestAnimationFrame(loop); //entering the loop

	function loop() {
		if (!pause && !gameOver){
			ctx.clearRect(0, 0, w.innerWidth, w.innerHeight); //clearing the whole screen

			startTime = Math.floor((startT2-startT1)/1000);
			if (startTime >= 0 && startTime <=2){
				startT2 = new Date().getTime();
			} else if (startTime > 2 && me.gameSwitch == 0){
				if (t1 == 0){
					t1 = new Date().getTime();
				}
				t3 = t2; //t3 represents t2 from the loop right before
				t2 = new Date().getTime(); //t2 is updated every time the code goes in the loop
				timer = Math.floor((t2-t1)/1000);
				countdown = 30 - (timer-30*counter30);
				if (timer%30 == 0 && anotherSwaper == 1){
					randomvalue = 10 + Math.floor(Math.random()*10); //creating a random value between 10 and 20
					anotherSwaper = 0;
				}
				if (countdown == randomvalue && anotherSwaper == 0 && timer%30 != 0){ //check at a random moment every 30 seconds within those 30 seconds
					difficulty += 1;
					roadState += 1;
					transitionPoint = 0;
					anotherSwaper = 1;
				}
				if (transitionPoint > 2*w.innerHeight && roadState == 1){
					roadState = 2;
				}
				if (transitionPoint > 2*w.innerHeight && roadState == 3){
					roadState = 4;
				}
				if (transitionPoint > 2*w.innerHeight && roadState == 5){
					roadState = 6;
				}
				if (transitionPoint > 2*w.innerHeight && roadState == 7){
					roadState = 0;
				}

				vcar = vmax*(me.y-me.ydown)/(me.yup-me.ydown); //defining the artificial speed of the player's car
				transitionPoint += vcar;

				drawRoad(ctx, w, s = (s+vcar)%(w.innerHeight*4), roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad); //calling the function drawRoad()

				me.update(w, obstacleCars, roadState, keysPressed); //calling the update method in RaceCar for me
				me.collide(obstacleCars); //calling the collide method in RaceCar for me
				me.draw(); //calling the draw method in RaceCar for me

				obstacleCarsUpdate(); //calling the function obstacleCarsUpdate
				obstacleCarsCollide(); //calling the function obstacleCarsCollide
				obstacleCars = obstacleCars.filter(item=> item.state != obstacleState.OUT); //delete all 'dead' cars
				for (var i = 0; i < obstacleCars.length; i++){
					obstacleCars[i].draw(); //draw all the remaining cars
				}

				//working to force the player to challenge himself not to go slow
				if (timer%30 == 0 && timer != 0){
					if (swaper == 0){
						if (score-counter < 1850 && difficulty == 1){
							me.gameSwitch = 1;
						} else if (score-counter < 2000 && difficulty > 1){
							me.gameSwitch = 1;
						}
						counter = score;
						counter30 += 1;
						swaper = 1;
					}
				} else {
					swaper = 0;
				}

				score += Math.ceil((t2-t3)/1000*2*vcar); //add to the score
				score += me.pass;
				me.pass = 0;
				displayScore(ctx); //and display it

			} else if (me.gameSwitch == 1){
				endTime = Math.floor((endT2-endT1)/1000);

				if (soundPhase == 1){
					$('#audio').html('<audio autoplay><source src="You Lost.wav"></audio>');
				}
				soundPhase = 0;

				vcar = vmax*(me.y-me.ydown)/(me.yup-me.ydown); //defining the artificial speed of the player's car
				drawRoad(ctx, w, s = (s+vcar)%(w.innerHeight*4), roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad);
				me.y = me.y-(me.speedy-vcar);
				if (me.y > me.ydown){
					me.y = me.ydown;
				}
				me.draw();
				ctx.drawImage(fire, me.x-50, me.y-80, 100, 160);

				obstacleCarsUpdate(); //calling the function obstacleCarsUpdate
				obstacleCarsCollide(); //calling the function obstacleCarsCollide
				for (var i = 0; i < obstacleCars.length; i++){
					obstacleCars[i].draw(); //draw all the remaining cars
					if (obstacleCars[i].state == obstacleState.CRASHED){
						ctx.drawImage(fire, obstacleCars[i].x-50, obstacleCars[i].y-80, 100, 160);
					}
				}

				score += Math.ceil((t2-t3)/1000*2*vcar); //add to the score
				score += me.pass;
				me.pass = 0;

				ctx.beginPath();
				ctx.textBaseLine = "middle";
				ctx.textAlign = "center";
				ctx.font = "80px Arial";
				ctx.fillStyle = "white";
				ctx.fillText("Game Over", w.innerWidth/2, w.innerHeight/2);
				ctx.fill();

				if (endT1 == 0){
					endT1 = new Date().getTime();
				}
				endT2 = new Date().getTime();
				if (endTime == 2){
					gameOver = true;
				}
			}
			if (startTime == 0){
				drawRoad(ctx, w, s = (s+vcar)%(w.innerHeight*4), roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad);
				me.draw();
				if (soundPhase == 0){
					$('#audio').html('<audio autoplay><source src="3, 2, 1 Go!.wav"></audio>');
				}
				soundPhase = 1;
				ctx.beginPath();
				ctx.textBaseLine = "middle";
				ctx.textAlign = "center";
				ctx.font = "300px Arial";
				ctx.fillStyle = "white";
				ctx.fillText("3", w.innerWidth/2, w.innerHeight/2);
				ctx.fill();
			} else if (startTime == 1){
				drawRoad(ctx, w, s = (s+vcar)%(w.innerHeight*4), roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad);
				me.draw();
				ctx.beginPath();
				ctx.textBaseLine = "middle";
				ctx.textAlign = "center";
				ctx.font = "300px Arial";
				ctx.fillStyle = "white";
				ctx.fillText("2", w.innerWidth/2, w.innerHeight/2);
				ctx.fill();
			} else if (startTime == 2){
				drawRoad(ctx, w, s = (s+vcar)%(w.innerHeight*4), roadState, normalRoad, sandyRoad, rainyRoad, snowyRoad);
				me.draw();
				ctx.beginPath();
				ctx.textBaseLine = "middle";
				ctx.textAlign = "center";
				ctx.font = "300px Arial";
				ctx.fillStyle = "white";
				ctx.fillText("1", w.innerWidth/2, w.innerHeight/2);
				ctx.fill();
			}

		} else if (pause){
			ctx.beginPath();
			ctx.textBaseLine = "middle";
			ctx.textAlign = "center";
			ctx.font = "80px Arial";
			ctx.fillStyle = "white";
			ctx.fillText("PAUSED", w.innerWidth/2, w.innerHeight/2);
			ctx.fill();

		} else if (gameOver){
			ctx.clearRect(0, 0, w.innerWidth, w.innerHeight);
			t2 = new Date().getTime();
			timer = Math.floor((t2-t1)/1000);
			ctx.beginPath();
			ctx.drawImage(startPicture, 0, 0, w.innerWidth, w.innerHeight);
			ctx.textBaseLine = "middle";
			ctx.textAlign = "center";
			ctx.font = "80px Times New Roman";
			ctx.fillStyle = "violet";
			ctx.fillText("Super Cars Speed Racing", w.innerWidth/2, w.innerHeight*0.1);
			ctx.strokeStyle = "cyan";
			ctx.strokeRect(w.innerWidth*0.22, w.innerHeight*0.11, w.innerWidth*0.56, 0);

			ctx.font = "60px Arial";
			ctx.fillStyle = "yellow";
			ctx.fillText("Score: " + score, w.innerWidth/2, w.innerHeight*0.22);
			ctx.fillText("High Score: " + highScore, w.innerWidth/2, w.innerHeight*0.3);

			ctx.font = "15px Arial";
			ctx.fillText("By Santiago", w.innerWidth-60, w.innerHeight-20);

			ctx.fillStyle = "white";
			ctx.fillText("Go as fast as you can to become the", w.innerWidth*0.9, w.innerHeight*0.525);
			ctx.fillText("Number 1 racer in History!", w.innerWidth*0.9, w.innerHeight*0.525+20);
			ctx.fillText("You have to do 2000 points", w.innerWidth*0.9, w.innerHeight*0.525+40);
			ctx.fillText("every 30 seconds to keep playing.", w.innerWidth*0.9, w.innerHeight*0.525+60);
			ctx.fillText("And pay attention to the road!", w.innerWidth*0.9, w.innerHeight*0.525+80);
			ctx.fillText("Some accidents might happen!", w.innerWidth*0.9, w.innerHeight*0.525+100);
			ctx.font = "20px Arial";
			ctx.fillText("Have fun!", w.innerWidth*0.92, w.innerHeight*0.525+135);

			ctx.font = "35px Arial";
			ctx.fillText("Choose Your Race Car!", w.innerWidth*0.175, w.innerHeight*0.225);
			redCar.draw();
			blueCar.draw();
			greenCar.draw();
			ctx.beginPath();
			ctx.strokeStyle = "orange";
			ctx.lineWidth = 5;
			if (timer%2 == 0){
				if (me.state == colorState.RED){
					ctx.strokeRect(w.innerWidth*0.025, w.innerHeight*0.265, w.innerWidth*0.3, w.innerHeight*0.2);
				} else if (me.state == colorState.BLUE){
					ctx.strokeRect(w.innerWidth*0.025, w.innerHeight*0.265+w.innerHeight*0.094+w.innerHeight*0.15, w.innerWidth*0.3, w.innerHeight*0.2);
				} else if (me.state == colorState.GREEN){
					ctx.strokeRect(w.innerWidth*0.025, w.innerHeight*0.265+w.innerHeight*0.094*2+w.innerHeight*0.15*2, w.innerWidth*0.3, w.innerHeight*0.2);
				}
			}
		} //end of if (gameOver)
		requestAnimationFrame(loop); //restart the loop
	} //end of loop

	function obstacleCarsUpdate(){ //function controlling other racing cars
		//working for the changing colors on the wheels of the obstacle cars
		for (var i = 0; i < obstacleCars.length; i++){
			obstacleCars[i].Dirn++;
			if (obstacleCars[i].Dirn%5 == 0){
				if (obstacleCars[i].Switchv == 0){
					obstacleCars[i].Switchv = 1;
				} else if (obstacleCars[i].Switchv == 1){
					obstacleCars[i].Switchv = 0;
				}
			}
		}

		if (timer%2 == 0){ //check for every 2 seconds
			if (switchMillis == 0){ //to do this only once even though the timer shows 2 seconds for an entire second
				//input cars according to the level of difficulty into the array
				obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
				if (difficulty > 0){
				obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
				}
				if (difficulty > 1){
				obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));

				}
				if (difficulty > 2){
				obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
				obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
				}
				if (difficulty > 3){
					obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
					obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
					obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
					obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
					obstacleCars.push(new ObstacleCars(w, ctx, obstacleSwitch));
				}
				switchMillis = 1;
			}
		} else {
			switchMillis = 0;
		}
	} //end of function obstacleCarsUpdate

	function obstacleCarsCollide(){
		//define y of the obstacle cars
		//check if cars are too out of bounds to not overcharge the computer
		for (var i = 0; i < obstacleCars.length; i++){
			obstacleCars[i].y = obstacleCars[i].y-(obstacleCars[i].dy-vcar);
			obstacleCars[i].switchv = obstacleSwitch;
			if (obstacleCars[i].y+35 < -w.innerHeight*10
			|| obstacleCars[i].y-35 > w.innerHeight*(10+1)
			|| obstacleCars[i].x-20 < w.innerWidth*0.25
			|| obstacleCars[i].x+20 > w.innerWidth*0.75){
				obstacleCars[i].state = obstacleState.OUT;
			}
		}

		//check collision and correct x for obstacle cars
		for (var i = 0; i < obstacleCars.length; i++){
			for (var j = i+1; j < obstacleCars.length; j++){
				if (obstacleCars[i].y-60 < obstacleCars[j].y+60
				&& obstacleCars[i].y+60 > obstacleCars[j].y-60
				&& obstacleCars[i].x-25 < obstacleCars[j].x+25 //it isn't 20 so that if cars are up to 10 pixel away they will still turn so the game is doesn't look as robotic
				&& obstacleCars[i].x+25 > obstacleCars[j].x-25){
					if (obstacleCars[i].y > obstacleCars[j].y){
						if (obstacleCars[j].x < w.innerWidth*0.5){
							obstacleCars[i].dx = ((obstacleCars[j].x+25)-(obstacleCars[i].x-25))/(((obstacleCars[i].y-35)-(obstacleCars[j].y+35))/(obstacleCars[i].dy-obstacleCars[j].dy));
							obstacleCars[i].x += obstacleCars[i].dx;
						} else {
							obstacleCars[i].dx = ((obstacleCars[j].x-25)-(obstacleCars[i].x+25))/(((obstacleCars[i].y-35)-(obstacleCars[j].y+35))/(obstacleCars[i].dy-obstacleCars[j].dy));
							obstacleCars[i].x += obstacleCars[i].dx;
						}
					} else {
						if (obstacleCars[i].x < w.innerWidth*0.5){
							obstacleCars[j].dx = ((obstacleCars[i].x+25)-(obstacleCars[j].x-25))/(((obstacleCars[j].y-35)-(obstacleCars[i].y+35))/(obstacleCars[j].dy-obstacleCars[i].dy));
							obstacleCars[j].x += obstacleCars[j].dx;
						} else {
							obstacleCars[j].dx = ((obstacleCars[i].x-25)-(obstacleCars[j].x+25))/(((obstacleCars[j].y-35)-(obstacleCars[i].y+35))/(obstacleCars[j].dy-obstacleCars[i].dy));
							obstacleCars[j].x += obstacleCars[j].dx;
						} //end of if (obstacleCars[i].x < w.innerWidth*0.5)
					} // end of if (obstacleCars[i].y > obstacleCars[j].y)
				} //end of if (check collision)
			} //end of for (var j = i+1; j < obstacleCars.length; j++)
		} //end of for (var i = 0; i < obstacleCars.length; i++)

		//check for collision again and let them crash if they get trapped
		for (var i = 0; i < obstacleCars.length; i++){
			for (var j = i+1; j < obstacleCars.length; j++){
				if (obstacleCars[i].y-35 < obstacleCars[j].y+35
				&& obstacleCars[i].y+35 > obstacleCars[j].y-35
				&& obstacleCars[i].x-20 < obstacleCars[j].x+20
				&& obstacleCars[i].x+20 > obstacleCars[j].x-20){
					obstacleCars[i].dy = 0;
					obstacleCars[i].dx = 0;
					obstacleCars[j].dy = 0;
					obstacleCars[j].dx = 0;
					if (obstacleCars[i].y < -35 && obstacleCars[j].y < -35){
						obstacleCars[i].state = obstacleState.OUT;
						obstacleCars[j].state = obstacleState.OUT;
					} //end of if (obstacleCars[i].y < -35 && obstacleCars[j].y < -35)
				} //end of if (check collision)
			} //end of for (var j = i+1; j < obstacleCars.length; j++)
		} //end of for (var i = 0; i < obstacleCars.length; i++)
	} //end of function obstacleCarsCollide

	function displayScore(ctx){ //function managing scores
		if (score > highScore){
			highScore = score;
		}
		//to display score and time on top left
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(0, 0, w.innerWidth*0.12, w.innerHeight*0.3);
		ctx.fill();
		ctx.beginPath();
		ctx.textBaseLine = "alphabetic";
		ctx.textAlign = "left";
		ctx.font = "26px Arial";
		ctx.fillStyle = "white";
		ctx.fillText("Score: " + vcar, w.innerWidth*0.01, w.innerHeight*0.04);
		ctx.fillText("Time: " + transitionPoint, w.innerWidth*0.01, w.innerHeight*0.08);
		ctx.fillText("Countdown:", w.innerWidth*0.01, w.innerHeight*0.12)
		ctx.font = "120px Arial";
		ctx.fillText(countdown, w.innerWidth*0.01, w.innerHeight*0.275);
		ctx.fill();
	} //end of function displayScore

	function retry(ctx){
		//set up everything for a possible restart
		ctx.clearRect(0, 0, w.innerWidth, w.innerHeight);
		score = 0;
		gameOver = false;
		pause = false;
		me.x = w.innerWidth/2;
		me.y = w.innerHeight*0.9;
		me.speedx = 0;
		me.speedy = 0;
		me.gameSwitch = 0;
		startT1 = new Date().getTime();
		startT2 = new Date().getTime();
		startTime = 0;
		t1 = 0;
		t2 = 0;
		t3 = 0;
		timer = 0;
		counter = 0;
		counter30 = 0;
		anotherSwaper = 1;
		roadState = 0;
		difficulty = 0;
		soundPhase = 0;
		endT1 = 0;
		endT2 = 0;
		endTime = 0;

		for (var i = 0; i < obstacleCars.length; i++){
			obstacleCars[i].state = obstacleState.OUT;

		}
		obstacleCars = obstacleCars.filter(item=> item.state != obstacleState.OUT);
	}

	//to check the pressed keys and make them interact
	d.addEventListener("keydown", (event) => {
		keysPressed[event.key] = true;
		if (keysPressed["p"] || keysPressed["P"]){ //to be able to pause the game
			if (gameOver || startTime <= 2){
				console.log(key);
			} else {
				pause = !pause;
				//to remove time to t1 when the game is paused so there is no glitch with the score and time displayed
				if (pause){
					time1 = new Date().getTime();
				}
				if (!pause){
					time2 = new Date().getTime();
					t1 += (time2-time1);
					t2 += (time2-time1);
					t3 += (time2-time1);
				}
			}
		}
		if (keysPressed["r"] || keysPressed["R"] || keysPressed["Enter"]){ //if game is lost, give the option to retry by pressing r or enter
			if (gameOver){
				retry(ctx);
			} else {
				console.log(key);
			}
		}
		if (keysPressed["1"]){
			if (gameOver){
				me.colorCombo1();
				t1 = new Date().getTime();
			} else {
				console.log(key);
			}
		}
		if (keysPressed["2"]){
			if (gameOver){
				me.colorCombo2();
				t1 = new Date().getTime();
			} else {
				console.log(key);
			}
		}
		if (keysPressed["3"]){
			if (gameOver){
				me.colorCombo3();
				t1 = new Date().getTime();
			} else {
				console.log(key);
			}
		}
	});
	d.addEventListener("keyup", (event) => {
		delete keysPressed[event.key];
	});

})(document, window);
