img = "";
status = "";

function preload(){
    img = loadImage('Games.jpg')
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded !!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error,results){
    if(error){
        ocnsole.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640,420);
}
