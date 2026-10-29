// Right Eye Coordinates
var eyerx = 490;
var eyery = 260;
var eyeDirection = 0.5;

// Left Eye Coordinates
var eyelx = 140;
var eyely = 250;

// Nose
var Lnosey = 360;
var LnoseDirection = 1;
var Snosey = 360;
var SnoseDirection = 1;

// Eyebrow Coordinates
var browrx = 500
var browry = 170
var browRXDirection = -1
var browRYDirection = 1
var browlx = 85
var browly = 170
var browLDirection = 1

// Text
var size = 35;
var count = 0;
var sizeDirection = 2;


function setup(){
    createCanvas(650, 650);
}

function draw(){
    background(230, 181, 163);

    // Coordinates
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);


    // Eyewhites
    fill(255);
    ellipse(490,265,100,90);
    ellipse(135,255,100,90);


    // Pupils and Irises
    stroke(111, 155, 179);
    strokeWeight(10);
    fill(0);
    circle(eyerx,eyery,75);
        eyerx+=eyeDirection;
        if(eyerx >= 540 || eyerx <= 440){
        eyeDirection *= -1;
    }

    circle(eyelx,eyely,75);
        eyelx+=eyeDirection;
        if(eyelx >= 185 || eyelx <= 85){
        eyeDirection *= -1;
    }


    // Background
    fill(0);
    noStroke();
    triangle(440, 650, 650, 220, 650, 650);
    triangle(100, 650, 0, 360, 0, 650);
    rect(600, 0, 100, 350)

    // Eyebrows
    fill(48, 37, 31);
    rect(browrx,browry,75,25);
        browrx+=browRXDirection;
        if(browrx >= 500 || browrx <= 400){
        browRXDirection *= -1;
        }
        browry+=browRYDirection;
        if(browry >= 210 || browry <= 145){
        browRYDirection *= -1
        }
    triangle(430, 240, 500, 170, 500, 195);
    rect(85,170,75,25);
    triangle(160, 170, 210, 240, 160, 195);


    // Eyebrow Piercing
    stroke(146, 146, 161);
    strokeWeight(10);
    point(100,210);
    point(120,160);

    stroke(255, 255, 255);
    strokeWeight(4);
    point(98,208);
    point(118,158);


    // Wrinklies
    stroke(214, 133, 133);
    strokeWeight(4);
    line(235,225, 265,150);
    line(425,220, 400,160);
    line(235,235, 285,224);
    line(425,230, 375,225);


    // Nose
    fill(214, 153, 141);
    ellipse(240,Snosey, 100,70);
    ellipse(390,Snosey, 100,70);
    Snosey+=SnoseDirection;
        if(Snosey <= 320 || Snosey >= 380){
        SnoseDirection *= -1;
    }

    ellipse(320,Lnosey, 170,120);
    Lnosey+=LnoseDirection;
        if(Lnosey <= 310 || Lnosey >= 370){
        LnoseDirection *= -1;
    }

        

    // Lips
    fill(171, 97, 97);
    noStroke();
    triangle(55,520, 250,470, 230,590);
    triangle(250,470, 230,590, 320,590);
    triangle(230,590, 380,470, 320,590);
    triangle(320,590, 380,470, 513,500);


    // Text
    fill(0);
    textSize(20);
    textFont('Times New Roman');
    text('Eliana Francik', 230, 630);
    
    fill(0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5){
        sizeDirection *=-1;
        count = 0;
    }
    text("Seething Rage", 200, 65);
    
}