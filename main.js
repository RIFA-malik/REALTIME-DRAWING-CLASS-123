noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(550,150);

    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(result){
    if(result.length >0)
    {
        console.log(result);
        noseX=result[0].pose.nose.X;
        noseY=result[0].pose.nose.Y;
        console.log("noseX= "+noseX+"noseY= "+noseY);
        rightwristX=result[0].pose.rightwrist.X;
        leftwristX=result[0].pose.leftwrist.X;
        difference=floor(leftwristX-rightwristX);

        console.log("leftwristX= "+leftwristX+"rightwristX= "+rightwristX+"difference= "+difference);
    }
}
function draw(){
    background('beige');

    document.getElementById("square_side").innerHTML="width and height of a square will be "+ difference;
    fill('lightblue');
    stroke('darkblue');
    square(noseX,noseY,difference);
}