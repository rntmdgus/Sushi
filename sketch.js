var bg, chopsticks, left, right, count1, count2, cat1, cat2, sushi1, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, dishw, dishy, dishr, dishb;
var countCat;
var bigSizeW=462;
var bigSizeH=268;
var smallSizeW=272;
var smallSizeH=158;
var bigSizeW1=850;
var bigSizeH1=340;
var smallSizeW1=500;
var smallSizeH1=200;
var sushiX=[];
var sushiY=[];
var dishX=[];
var dishY=[];
var checkPick=[];
var sushiImg=[];
var dishImg=[];
var sushiCount=[];

function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    chopsticks = loadImage("chopsticks.png");
    sushiImg[0]= loadImage("sushi1.png");
	sushiImg[1]= loadImage("sushi2.png");
	sushiImg[2]= loadImage("sushi3.png");
	sushiImg[3]= loadImage("sushi4.png");
	sushiImg[4]= loadImage("sushi5.png");
	sushiImg[5]= loadImage("sushi6.png");
	sushiImg[6]= loadImage("sushi7.png");
	sushiImg[7]= loadImage("sushi8.png");
    dishImg[0]=loadImage("dishr.png");
    dishImg[1]=loadImage("dishy.png");
    dishImg[2]=loadImage("dishb.png");
    dishImg[3]=loadImage("dishw.png");
    dishImg[4]=loadImage("dishr.png");
    dishImg[5]=loadImage("dishy.png");
    dishImg[6]=loadImage("dishw.png");
    dishImg[7]=loadImage("dishb.png");
    left = loadImage("left.png");
    right = loadImage("right.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");

	count1 = 0;
	count2 = 0;
	countCat =0;
	for(var i = 0 ; i <8 ; i++){
		checkPick[i]=false;
		sushiCount[i]=0;
	}
}

function draw() {

	background(bg);
	noCursor();

	var t=(new Date()%20000)/20000;


	for(var i = 0 ; i < 8 ; i++){
		sushiX[i]=1000+cos(t*2*PI+PI/6*i)*1450;
		sushiY[i]=730+150*sin(t*2*PI+PI/6*i);
	}

	for(var i = 0 ; i < 8 ; i++){
		dishX[i]=1000+cos(t*2*PI+PI/6*i)*1450;
		dishY[i]=730+150*sin(t*2*PI+PI/6*i);
	}

	//발왼쪽 이동
	image(left,count1,0);
	count1=count1-25;
	if(count1<-2000){
	count1=0;
	} 

	//발오른쪽 이동
	image(right,count2,0);
	count2=count2+25;
	if(count2>2000){
	count2=0;
	} 

	for(var i = 0 ; i <8 ; i++){
		if(50*sin(t*2*PI+PI/6*i)<0){
				image(dishImg[i],dishX[i]-smallSizeW1/2,dishY[i]-smallSizeH1/2,smallSizeW1,smallSizeH1);
			}
		}

	for(var i = 0 ; i <8 ; i++){
		if(50*sin(t*2*PI+PI/6*i)<0){
			if(!checkPick[i]){
				image(sushiImg[i],sushiX[i]-smallSizeW/2,sushiY[i]-smallSizeH/2,smallSizeW,smallSizeH);

			}
		}
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


	for(var i = 0 ; i <8 ; i++){
		if(50*sin(t*2*PI+PI/6*i)>=0){
				image(dishImg[i],dishX[i]-bigSizeW1/2,dishY[i]-bigSizeH1/2,bigSizeW1,bigSizeH1);
		}
	}

	for(var i = 0 ; i <8 ; i++){
		if(50*sin(t*2*PI+PI/6*i)>=0){
			if(!checkPick[i]){
				image(sushiImg[i],sushiX[i]-bigSizeW/2,sushiY[i]-bigSizeH/2,bigSizeW,bigSizeH);
			}
		}
	}



	//위라인
	//noFill();
	//stroke(255);
	//ellipse(1000,730,2100,300);


	//젓가락
	image(chopsticks,mouseX-250,mouseY-20,500,500);

	for(var i = 0 ; i < 8 ; i++){
		if(checkPick[i]){
			sushiCount[i]+=5;
			if(sushiCount[i] > 300){
				sushiCount[i] = 0;
				checkPick[i] = false;
			}
		}
	}
}

function dist(x1,y1,x2,y2){
	return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}

function mouseClicked(){
	for(var i =0 ; i <8 ;i++){
		if(dist(sushiX[i],sushiY[i],mouseX,mouseY)<60){
			checkPick[i]=true;
		}
	}
}