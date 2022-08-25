rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550 , 500);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML="font size of text will be: "+difference+"px";
    textSize(difference);
    fill("red");
    text("Saanvi",50,400);
}