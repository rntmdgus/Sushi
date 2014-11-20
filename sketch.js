var bg, chopsticks, left, right, count1, count2, cat1, cat2, sushi1, sushi2, sushi3, dishw, dishy, dishr, dishb;
var countCat;

function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    chopsticks = loadImage("chopsticks.png");
    sushi1 = loadImage("sushi1.png");
    sushi2 = loadImage("sushi2.png");
    sushi3 = loadImage("sushi3.png");
    dishw = loadImage("dishw.png");
    dishy = loadImage("dishy.png");
    dishr = loadImage("dishr.png");
    dishb = loadImage("dishb.png");
    left = loadImage("left.png");
    right = loadImage("right.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");

	count1 = 0;
	count2 = 0;
	countCat =0;
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
	image(left,count1,0);
	count1=count1-20;
	if(count1<-2000){
	count1=0;
	} 

	//발오른쪽 이동
	image(right,count2,0);
	count2=count2+20;
	if(count2>2000){
	count2=0;
	} 

	//위라인
	noFill();
	stroke(255);
	ellipse(1000,1300,4000,1500);


	if(50*sin(t*2*PI)<0){
		//위
		image(sushi1,1000+cos(t*2*PI)*2000,100+50*sin(t*2*PI),272,158);
	}
	if(50*sin(t*2*PI+PI/3)<0){
		image(sushi2,+cos(t*2*PI+PI/3)*2000,100+50*sin(t*2*PI+PI/3),272,158);
		
	}


	if(countCat < 50){
	//고양이1
 	image(cat1,0,0,2000,1000);
	} else if(countCat < 100){
 	//고양이2
 	image(cat2,0,0,2000,1000);	
	} else{
	countCat=0;
	}
	countCat++;



	if(50*sin(t*2*PI)>=0){
		//위
		image(sushi1,1000+cos(t*2*PI)*2000,100+50*sin(t*2*PI),302,188);
	}
	if(50*sin(t*2*PI+PI/3)>=0){
		image(sushi2,+cos(t*2*PI+PI/3)*2000,100+50*sin(t*2*PI+PI/3),302,188);
		
	}


	//아래라인
	noFill();
	stroke(255);
	ellipse(1000,120,4500,1500);

	//젓가락
	image(chopsticks,mouseX,mouseY,700,700);

}
