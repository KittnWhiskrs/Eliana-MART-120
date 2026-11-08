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


function setup(){
    createCanvas(canvasx, canvasy);
}


function draw(){
    background(50, 121, 140);
    stroke(0);
    fill(0);

    //borders
    borders();

    // Player
    playermovement();

    fill(181, 67, 124);
    stroke(107, 27, 67);
    strokeWeight(1);
    circle(playerX, playerY, 20);


    // Obstacles
    fill(200, 0, 0);
    stroke(80, 0, 0);
    strokeWeight(3);
    circle(500, 100, 50);

    fill(255, 102, 0);
    stroke(170, 20, 0);
    circle(90, 350, 150);

    // Mouse obstacle
    fill(0);
    stroke(0);
    circle(mouseObX, mouseObY, 35);

    //result
    if(playerX <= 0 && playerY > canvasy-110 && playerY < canvasy-50){
        fill(0);
        noStroke();
        textSize(26);
        text("You Win!", 300, 300);
    }
}


function playermovement(){

    if(keyIsDown(w)){
        playerY -= 5;
    }

    else if(keyIsDown(a)){
    playerX -= 5;
    }      

    else if(keyIsDown(s)){
    playerY += 5;
    }    

    else if(keyIsDown(d)){
    playerX += 5;
    }
}

function mouseClicked()
{
    mouseObX = mouseX;
    mouseObY = mouseY;

}

function borders(){

    //top
    rect(0, 0, canvasx, 10);
    //bottom
    rect(0, canvasy-10, canvasx, 10);
    //left
    rect(0, 0, 10, canvasy);
    //right
    rect(canvasx-10, 0, canvasx, canvasy);

    //exit
    fill(50, 121, 140);
    noStroke();
    rect(0, canvasy-110, 12, exitY);
}
