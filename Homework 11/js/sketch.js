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
var canvasx = 600
var canvasy = 600

//exit relevant dimensions
var exitY = 60

//obtacle properties
var obstacleAX = 500;
var obstacleAY = 100;
var obstacleBX = 90;
var obstacleBY = 350;
var obstacleXSpeed;
var obstacleYSpeed;


function setup(){
    createCanvas(canvasx, canvasy);

    obstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}


function draw()
{
    // Environment
    backgroundColor();
    borders();
    exit();

    // Player
    player();
    playermovement();
    

    // Obstacles
    circleRed();
    circleOrange();
    obstacleBounds();
    obstacleMovement();
    
    // Defense
    mouseObstacle();
    //mouseClicked();

    // Result
    winning();
}

function borders()
{
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
    fill(181, 67, 124);
    stroke(107, 27, 67);
    strokeWeight(1);
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

function circleRed()
{
    fill(200, 0, 0);
    stroke(80, 0, 0);
    strokeWeight(3);
    circle(obstacleAX, obstacleAY, 50);
}

function circleOrange()
{
    fill(255, 102, 0);
    stroke(170, 20, 0);
    strokeWeight(3);
    circle(obstacleBX, obstacleBY, 150);
}

function obstacleBounds()
{
    if(obstacleAX > canvasx){
        obstacleAX = 0;
    }

    if(obstacleAX < 0){
        obstacleAX = canvasx;
    }

    if(obstacleBX > canvasx){
        obstacleBX = 0;
    }

    if(obstacleBX < 0){
        obstacleBX = canvasx;
    }

    if(obstacleAY > canvasy){
        obstacleAY = 0;
    }

     if(obstacleAY < 0){
        obstacleAY = canvasy;
    }

    if(obstacleBY > canvasy){
        obstacleBY = 0;
    }

     if(obstacleBY < 0){
        obstacleBY = canvasy;
    }
}

function obstacleMovement()
{
    obstacleAX += obstacleXSpeed;
    obstacleAY += obstacleYSpeed;
    obstacleBX += obstacleXSpeed;
    obstacleBY += obstacleYSpeed;
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