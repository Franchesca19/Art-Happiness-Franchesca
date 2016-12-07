var paragraphs;
var paragraph;

function setup() {
  createCanvas(100, 100);
  background(255);
  
  for (var i = 0; i < 5; i++) {
    var par = createP('Happiness');
    par.position(random(200), random(200));
  }
   for (var i = 0; i < 10; i++) {
    var par = createP('Franchesca');
    par.position(random(50), random(50));
  }
   for (var i = 0; i < 1; i++) {
    var par = createP('Art');
    par.position(random(200), random(200));
  }
  paragraphs = selectAll('p');

  
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].mouseOver(unmove);
    paragraphs[i].mouseOut(move);
  }
  
}

function move() {
  this.style('padding', '16pt');
  this.style('background-color', '#A5A');
}

function unmove() {
  this.style('padding', '0pt');
  this.style('background-color', '#VFV');
}