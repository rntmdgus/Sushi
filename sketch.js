var solar, bg, earth, moon;
function setup() {
    createCanvas(2000, 1000);
	solar = loadImage("sun.png");
	bg = loadImage("bg.png");
	earth = loadImage("earth.png");
	moon = loadImage("moon.png");
}


function draw() {

	background(bg);

	var duration1 = 15000;
	var timing1 = (new Date()%duration1)/duration1;
	var duration2 = 5000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 4000;
	var timing3 = (new Date()%duration3)/duration3;
	var duration4 = 3000;
	var timing4 = (new Date()%duration4)/duration4;

	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1000,3000,1000)

	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,-1000,3000,1000)

	//고양이
 	image(solar,250,250,500,500);

 	//스시
	image(earth,500 + Math.cos(timing1*2*PI)*300-150,500 + Math.sin(timing1*2*PI)*300-150,300,300);
}
