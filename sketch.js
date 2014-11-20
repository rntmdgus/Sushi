var bg, chopsticks, left, right, count1, count2, cat1, cat2, sushi1, dishw;

function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    chopsticks = loadImage("chopsticks.png");
    sushi1 = loadImage("sushi1.png");
    dishw = loadImage("dishw.png");
    left = loadImage("left.png");
    right = loadImage("right.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");

	count1 = 0;
	count2 = 0;
}

function draw() {

	background(bg);
	noCursor();

	var duration1 = 50000;
	var timing1 = (new Date()%duration1)/duration1;
	var duration2 = 50000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 50000;
	var timing3 = (new Date()%duration3)/duration3;


	//발왼쪽 이동
	image(drawleft,0,count1);
	count1=count1+2;
	if(count1>-300){
	count1=0;
	} 

	//발오른쪽 이동
	image(drawright,0,count2);
	count2=count2+2;
	if(count2>300){
	count2=0;
	} 

	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1300,4000,1500);

 	//위스시1-새우접시
	image(dishw,1000 + Math.cos(timing1*2*PI)*2000-250,1300 + Math.sin(timing1*2*PI)*750-100,500,200);
 	//위스시1-새우
	image(sushi1,1000 + Math.cos(timing1*2*PI)*2000-136,1300 + Math.sin(timing1*2*PI)*750-99,272,158);


	//고양이1
 	image(cat1,0,0,2000,1000);

 	//고양이2
 	image(cat2,0,0,2000,1000);	


	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,120,4500,1500);

	//아래스시1
	image(earth,1000 + Math.cos(timing1*2*PI)*2250-300,120 + Math.sin(timing1*2*PI)*750-300,600,600);

	//젓가락
	image(chopsticks,mouseX,mouseY,700,700);

}
