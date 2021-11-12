noseX=0;
noseY=0;
function preload(){
    clown=loadImage('https://i.postimg.cc/J0pHnYGf/musta-CHE-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    save('myImage.png');
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y+15;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown,noseX,noseY,30,30);
}