// player spawn
var playerX = 50;
var playerY = 50;

// keys
var w = 87;
var a = 65;
var s = 83;
var d = 68;

// mouse
var mouseObX;
var mouseObY;

// canvas dimensions
var canvasx = 1000
var canvasy = 600

//exit relevant dimensions
var exitY = 60


var myXs = [];
var myYs = [];
var speed = [];
var myDiameter = [];
var red = [];
var blue = [];
var green = [];


var x = canvasx;
var y = canvasy;

//var colors = ["red", "orange", "yellow", "green", "blue"];

function setup(){
    createCanvas(canvasx, canvasy);
    for(var i = 0; i<10; i++){

    myXs[i] = x;
    myYs[i] = y;
    myDiameter[i] = random(10,100);
    speed[i] = random(-4,4);
    red[i] = random(255);
    blue[i] = random(255);
    green[i] = random(255);
    x = canvasx*0.5;
    y = canvasy*0.5;
    }
}


function draw()
{

    // Environment
    backgroundColor();
    for(var i = 0; i < myXs.length; i++){
        fill(red[i], blue[i], green[i]);
        stroke(1)
        circle(myXs[i], myYs[i], myDiameter[i]);
        myXs[i] += speed[i];
        myYs[i] += speed[i];

        if (myXs[i] > canvasx){
            myXs[i]=0
        }
        if (myYs[i] > canvasy){
            myYs[i]=0
        }
        if (myXs[i] < 0){
            myXs[i]=canvasx
        }
        if (myYs[i] < 0){
            myYs[i]=canvasy
        }
    }

    borders();
    exit();

    // Player
    player();
    playermovement();
    
    // Defense
    mouseObstacle();
    //mouseClicked();

    // Result
    winning();
}

function borders()
{
    fill(0)
    //top
    rect(0, 0, canvasx, 10);
    //bottom
    rect(0, canvasy-10, canvasx, 10);
    //left
    rect(0, 0, 10, canvasy);
    //right
    rect(canvasx-10, 0, canvasx, canvasy);
}

function exit()
{
    fill(50, 121, 140);
    noStroke();
    rect(0, canvasy-110, 12, exitY);
}

function backgroundColor()
{
    background(50, 121, 140);
    stroke(0);
    fill(0);
}


function player()
{
    fill(0);
    stroke(65, 180, 70);
    strokeWeight(3);
    circle(playerX, playerY, 20);
}


function playermovement()
{
    if(keyIsDown(w)){
        playerY -= 5;
    }

    if(keyIsDown(s)){
        playerY += 5;
    }

    if(keyIsDown(a)){
        playerX -= 5;
    }      

    if(keyIsDown(d)){
        playerX += 5;
    }
}


function mouseObstacle()
{
    fill(0);
    stroke(0);
    circle(mouseObX, mouseObY, 35);
}

function mouseClicked()
{
    mouseObX = mouseX;
    mouseObY = mouseY;
}

function winning()
{
if(playerX <= 0 && playerY > canvasy-110 && playerY < canvasy-50){
        fill(0);
        noStroke();
        textSize(26);
        text("You Win!", 300, 300);
    }
}