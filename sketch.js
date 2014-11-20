var bg, chopsticks, left, right, count1, count2, cat1, cat2, sushi1, sushi2, sushi3, sushi4, dishw, dishy, dishr, dishb;
var countCat;
var bigSizeW=462;
var bigSizeH=268;
var smallSizeW=272;
var smallSizeH=158;



function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    chopsticks = loadImage("chopsticks.png");
    sushi1 = loadImage("sushi1.png");
    sushi2 = loadImage("sushi2.png");
    sushi3 = loadImage("sushi3.png");
    sushi4 = loadImage("sushi4.png");
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

	var t=(new Date()%20000)/20000;

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




	if(50*sin(t*2*PI)<0){
		image(sushi1,1000+cos(t*2*PI)*1050-smallSizeW/2,730+150*sin(t*2*PI)-smallSizeH/2,smallSizeW,smallSizeH);
	}
	if(50*sin(t*2*PI+PI/6)<0){
		image(sushi2,1000+cos(t*2*PI+PI/6)*1050-smallSizeW/2,730+150*sin(t*2*PI+PI/6)-smallSizeH/2,smallSizeW,smallSizeH);	
	}
	if(50*sin(t*2*PI+PI/3)<0){
		image(sushi3,1000+cos(t*2*PI+PI/3)*1050-smallSizeW/2,730+150*sin(t*2*PI+PI/3)-smallSizeH/2,smallSizeW,smallSizeH);	
	}
	if(50*sin(t*2*PI+PI/2)<0){
		image(sushi4,1000+cos(t*2*PI+PI/2)*1050-smallSizeW/2,730+150*sin(t*2*PI+PI/2)-smallSizeH/2,smallSizeW,smallSizeH);	
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
		image(sushi1,1000+cos(t*2*PI)*1050-bigSizeW/2,730+150*sin(t*2*PI)-bigSizeH/2,bigSizeW,bigSizeH);
	}
	if(50*sin(t*2*PI+PI/6)>=0){
		image(sushi2,1000+cos(t*2*PI+PI/6)*1050-bigSizeW/2,730+150*sin(t*2*PI+PI/6)-bigSizeH/2,bigSizeW,bigSizeH);
	}
	if(50*sin(t*2*PI+PI/3)>=0){
		image(sushi3,1000+cos(t*2*PI+PI/3)*1050-bigSizeW/2,730+150*sin(t*2*PI+PI/3)-bigSizeH/2,bigSizeW,bigSizeH);	
	}
	if(50*sin(t*2*PI+PI/2)>=0){
		image(sushi4,1000+cos(t*2*PI+PI/2)*1050-bigSizeW/2,730+150*sin(t*2*PI+PI/2)-bigSizeH/2,bigSizeW,bigSizeH);
		
	}

	//위라인
	noFill();
	stroke(255);
	ellipse(1000,730,2100,300);


	//젓가락
	image(chopsticks,mouseX,mouseY,500,500);

}
