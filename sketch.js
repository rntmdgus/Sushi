var bg, chopsticks, left, right, count1, count2, cat1, cat2, sushi1, sushi2, sushi3, sushi4, dishw, dishy, dishr, dishb;
var countCat;
var bigSizeW=462;
var bigSizeH=268;
var smallSizeW=272;
var smallSizeH=158;
var sushiX=[];
var sushiY=[];
var checkPick=[];
var sushiImg=[];
function setup() {

    createCanvas(2000, 1000);

    bg = loadImage("bg.png");
    chopsticks = loadImage("chopsticks.png");
   
    sushiImg[0]= loadImage("sushi1.png");
	sushiImg[1]= loadImage("sushi2.png");
	sushiImg[2]= loadImage("sushi3.png");
	sushiImg[3]= loadImage("sushi4.png");

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
	for(var i = 0 ; i <4 ; i++){
		checkPick[i]=false;
	}
}

function draw() {

	background(bg);
	noCursor();

	var t=(new Date()%20000)/20000;


	for(var i = 0 ; i < 4 ; i++){
		sushiX[i]=1000+cos(t*2*PI+PI/6*i)*1200;
		sushiY[i]=730+150*sin(t*2*PI+PI/6*i);
	}
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


	for(var i = 0 ; i <4 ; i++){
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



	for(var i = 0 ; i <4 ; i++){
		if(50*sin(t*2*PI+PI/6*i)>=0){
			if(!checkPick[i]){
				image(sushiImg[i],sushiX[i]-bigSizeW/2,sushiY[i]-bigSizeH/2,bigSizeW,bigSizeH);
			}
		}
	}


	//위라인
	noFill();
	stroke(255);
	ellipse(1000,730,2100,300);


	//젓가락
	image(chopsticks,mouseX-250,mouseY-20,500,500);
	console.log(dist(sushiX[0],sushiY[0],mouseX,mouseY)+','+dist(sushiX[1],sushiY[1],mouseX,mouseY)+','+dist(sushiX[2],sushiY[2],mouseX,mouseY)+','+dist(sushiX[3],sushiY[3],mouseX,mouseY));

}

function dist(x1,y1,x2,y2){
	return sqrt(pow(x1-x2,2)+pow(y1-y2,2));
}

function mouseClicked(){
	for(var i =0 ; i <4 ;i++){
		if(dist(sushiX[i],sushiY[i],mouseX,mouseY)<40){
			checkPick[i]=true;
		}
	}

}