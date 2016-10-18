var bubbles = [];
var cat = [];
var bg;

function preload() {
  bg=loadImage("Images/pinkglitter.jpg");
  for (var i = 0; i < 4; i++) {
    cat[i] = loadImage('Images/cats' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  var r = floor(random(0, cat.length));
  var b = new Bubble(mouseX, mouseY, cat[r]);
  bubbles.push(b);
}


function draw() {
  background(0);
  image(bg, 0,0,1200,800,bg.x,bg.y,windowWidth,windowHeight);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    clearScreen();
  }
}

function Bubble(x, y, cat) {
  this.x = x;
  this.y = y;
  this.cat = cat;

  this.display = function() {
    imageMode(CENTER);
    image(this.cat, this.x, this.y);
  }

  this.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
}

}