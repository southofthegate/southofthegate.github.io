let shapes = [];

function setup() {
  createCanvas(document.body.clientWidth, document.body.clientHeight);
  
  for (let i = 0; i < 500; i++) {
    shapes.push(new Shape());
  }

}

function draw() {
  setGradient(0, 0, width, height, color(0, 0, 0), color(0, 0, 20));

  for (let shape of shapes) {
    shape.move();
    shape.display();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Re-initialize or update any variables or elements that depend on the canvas size
  shapes = [];
  for (let i = 0; i < 100; i++) {
    shapes.push(new Shape());
  }
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c2, c1, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

class Shape {
  constructor() {
    this.trail = []; // Array to store previous positions
    this.trailMaxLength = 0;
    
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(0.25, 3);
    this.speedX = random(0.1, 0.2);
    this.speedY = random(0.015, 0.2);
    this.color = color(255, 255, 255, 255);
  }

  move() {
    // Store previous position
    this.trail.push(createVector(this.x, this.y));
    if (this.trail.length > this.trailMaxLength) {
      this.trail.shift(); // Remove oldest position
    }
    
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > width + this.diameter) {
      this.x = -this.diameter;
    }
    if (this.x < -this.diameter) {
      this.x = width + this.diameter;
    }
    if (this.y > height + this.diameter) {
      this.y = -this.diameter;
    }
    if (this.y < -this.diameter) {
      this.y = height + this.diameter;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    // Draw trail
    for (let i = 0; i < this.trail.length; i++) {
      let alpha = map(i, 0, this.trail.length - 1, 0, 255);
      fill(red(this.color), green(this.color), blue(this.color), alpha);
      ellipse(this.trail[i].x, this.trail[i].y, this.diameter * (1 + i * 0.1));
    }
    // Draw current shape
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}


// Click functionality

const meButton = document.getElementById('mebut');
const projButton = document.getElementById('projbut');
const contButton = document.getElementById('contbut');
const expButton = document.getElementById('expbut');
const pewcontainer = document.getElementById('pewcontainer');
const container = document.getElementById('container');
const intcontainer = document.getElementById('indtext-container');
const floating_name = document.getElementById('floating_text');

// Fade-in effect for pewcontainer
window.addEventListener('load', function() {
  pewcontainer.classList.add('fade-in-active');
});

function navigate(button, url, elements) {
  button.addEventListener('click', () => {
    setTimeout(() => {
      elements.forEach(el => el.style.opacity = 0);
    }, 100);

    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  });
}

navigate(meButton, 'me.html', [container, floating_name]);
navigate(expButton, 'experience.html', [intcontainer, floating_name]);
navigate(projButton, 'projects.html', [container, floating_name, pewcontainer]);
navigate(contButton, 'contact.html', [container, floating_name]);



// ~ ~ ~ ~ ~ ~ ~~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~


// Other JavaScript code goes here...
