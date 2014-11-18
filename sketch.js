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

	//지구라인
	noFill();
	stroke(255);
	ellipse(500,500,600,600)

	//달타원라인1
	noFill();
	stroke(255);
	ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        100,
        300);

	//달타원라인2
	noFill();
	stroke(255);
	ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        300,
        150);

	//달라인
	noFill();
	stroke(255);
	ellipse(500 + Math.cos(timing1*2*PI)*300,
        500 + Math.sin(timing1*2*PI)*300,
        200,
        200);

	//태양
 	image(solar,250,250,500,500);


 	//달1
	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing2*4*PI)*150-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing2*4*PI)*75-100,200,200);

	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing3*4*PI)*100-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing3*4*PI)*100-100,200,200);

	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing4*4*PI)*50-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing4*4*PI)*150-100,200,200);

 	//지구
	image(earth,500 + Math.cos(timing1*2*PI)*300-150,500 + Math.sin(timing1*2*PI)*300-150,300,300);
}
