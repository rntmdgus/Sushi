var bg, sushi1, earth, moon, solar;

function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    sushi1 = loadImage("sushi1.png")

	earth = loadImage("earth.png");
	moon = loadImage("moon.png");
	solar = loadImage("sun.png");
}


function draw() {

	background(bg);

	var duration1 = 50000;
	var timing1 = (new Date()%duration1)/duration1;
	var duration2 = 50000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 50000;
	var timing3 = (new Date()%duration3)/duration3;



	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1300,4500,1500)

 	//위스시1-새우
	image(sushi1,1000 + Math.cos(timing1*2*PI)*2250-150,1300 + Math.sin(timing1*2*PI)*750-95,300,190);


	//고양이(태양)
 	image(solar,750,400,500,500);


	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,200,4500,1500)

	//아래스시1
	image(earth,1000 + Math.cos(timing1*2*PI)*2250-300,200 + Math.sin(timing1*2*PI)*750-300,600,600);
}
