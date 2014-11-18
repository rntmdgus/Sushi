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

	var duration1 = 35000;
	var timing1 = (new Date()%duration1)/duration1;


	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1000,5000,1000)

	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,200,4000,1500)

	//고양이(태양)
 	image(solar,750,400,500,500);

 	//스시
	image(earth,1000 + Math.cos(timing1*2*PI)*1500-150,1000 + Math.sin(timing1*2*PI)*500-150,300,300);
}
