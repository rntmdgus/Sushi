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
	var duration2 = 35000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 35000;
	var timing3 = (new Date()%duration3)/duration3;


	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1000,4500,1000)

 	//위스시1
	image(earth,1000 + Math.cos(timing1*2*PI)*2250-300,1000 + Math.sin(timing1*2*PI)*500-200,600,600);

 	//위스시2
	image(earth,1000 + Math.cos(timing2*2*PI)*2250-300,1000 + Math.sin(timing2*2*PI)*500-200,600,600);

 	//위스시2
	image(earth,1000 + Math.cos(timing3*2*PI)*2250-300,1000 + Math.sin(timing3*2*PI)*500-200,600,600);


	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,200,4500,1500)

	//아래스시1
	image(earth,1000 + Math.cos(timing1*2*PI)*2250-400,200 + Math.sin(timing1*2*PI)*750-300,800,800);

	//아래스시1
	image(earth,1000 + Math.cos(timing2*2*PI)*2250-400,200 + Math.sin(timing2*2*PI)*750-300,800,800);

	//아래스시1
	image(earth,1000 + Math.cos(timing3*2*PI)*2250-400,200 + Math.sin(timing3*2*PI)*750-300,800,800);


	//고양이(태양)
 	image(solar,750,400,500,500);
}
