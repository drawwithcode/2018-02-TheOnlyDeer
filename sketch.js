function setup() {
    createCanvas(500, 500);
    background('#002c59');
    translate(width / 2, height);
    noStroke();
    fill(200);
    triangle(-60, -80, 0, -400, 60, -80);
    push()
        fill(150);
        translate(0, -height * 2 / 3);
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        rect(0, 30, 60, 10);
        rect(0, -30, 60, 10);
        triangle(-25, -30, 0, -50, 25, -30);
        push()
            fill(50);
            rect(0, 0, 10, 10);
            rect(0, 80, 10, 10);
            rect(0, 160, 10, 10);
        pop()
    pop()
    fill(100);
    beginShape();
    vertex(-150, 0);
    vertex(-70, -80);
    vertex(-20, -105);
    vertex(70, -80);
    vertex(150, 0);
    endShape();
}

function draw() {
    push();
        stroke('#0988e220');
        translate(0, height);
        line(frameCount % width, 0, frameCount % width, cos(frameCount / 100) * 50 - 55);
        line(frameCount % width, 0, frameCount % width, sin(frameCount / 100) * 50 - 55);
    pop()
    push();
        stroke('#fffa0011');
        translate(width / 2, height / 3);
        line(-25, 0, cos(frameCount / 40) * 100 - 150, sin(frameCount / 10) * 100);
        push();
            rotate(Math.PI);
            line(-25, 0, cos(frameCount / 40) * 100 - 150, sin(frameCount / 10) * 100);
        pop();
    pop();




}
