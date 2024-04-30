
let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  for(i = 0; i < 150; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    walkers[i] = new Walker(x, y, r, g, b);
  }
}
function draw(){
  for(x = 0; x < walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
    walkers[x].checkEdges();
}
}

class Walker {

  constructor(x, y, r, g, b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  step(){
    this.x += random(-2, 1);
    this.y += random(-0, 2);
  }

  show(){
    strokeWeight(10);
    stroke(this.r, this.g, this.b);
    point(this.x, this.y);
  }

  checkEdges(){
    if (this.x < 15){
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }
    if (this.y > height - 15){
      this.y = 15;
    } else if (this.y > height - 15){
      this.y = 15;
    }

  }
}