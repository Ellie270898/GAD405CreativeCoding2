///////GAD-405 CREATIVE CODING - ASSIGNEMNT ///////#
//These are the variables
let Opacityshape;
let angle = 0;
let speed;
let starParameters = [];
let r = 255;
let g = 255;
let b = 255;
let colourSlider;
let colourSlider2;
let colourSlider3;

let colourSlider4;
let colourSlider5;
let colourSlider6;

let colourSlider7;
let colourSlider8;
let colourSlider9;

var value= (255, 255, 255);

//This is the setup function - the first things to load on the page
function setup() {
  //the canvas is where the sketch will be
  var canvas = createCanvas(594, 841);
  //How many FPS
  frameRate(45);
  //Allows me to further edit the canvas if it is a var
  canvas.parent("myContainer");
  canvas.class("myCanvas");
  //rgb sliders for planet 1
  colourSlider=createSlider(0, 255, 100);
  colourSlider.parent("colourSliderContainer");
  colourSlider2=createSlider(0, 255, 0);
  colourSlider2.parent("colourSlider2Container");
  colourSlider3=createSlider(0, 255, 255);
  colourSlider3.parent("colourSlider3Container");
  //rgb sliders for planet 2
  colourSlider4=createSlider(0, 255, 100);
  colourSlider4.parent("colourSlider4Container");
  colourSlider5=createSlider(0, 255, 0);
  colourSlider5.parent("colourSlider5Container");
  colourSlider6=createSlider(0, 255, 255);
  colourSlider6.parent("colourSlider6Container");
  //rgb sliders for planet 3
  colourSlider7=createSlider(0, 255, 100);
  colourSlider7.parent("colourSlider7Container");
  colourSlider8=createSlider(0, 255, 0);
  colourSlider8.parent("colourSlider8Container");
  colourSlider9=createSlider(0, 255, 255);
  colourSlider9.parent("colourSlider9Container");
//This will create and randomly plot the stars
  setupBackgroundStars();
}


function draw(){
  //makes the background black
  background(0,0,0);
  //planet 1 rgb
  colourValue=colourSlider.value();
  colourValue2=colourSlider2.value();
  colourValue3=colourSlider3.value();
  //planet 2 rgb
  colourValue4=colourSlider4.value();
  colourValue5=colourSlider5.value();
  colourValue6=colourSlider6.value();
  //planet 3 rgb
  colourValue7=colourSlider7.value();
  colourValue8=colourSlider8.value();
  colourValue9=colourSlider9.value();
  //second layer of galaxy rgb
  //redraw the stars again
  drawBackgroundStars();
  //This code should create the circular motion for the galaxy.
    angle += 0.0006;
    let sinValueX = sin(angle);
    let sinValueY = cos(angle)*0.5;

    let x = map(sinValueX, -1, 1, 0, width-50);
    let y = map(sinValueY, -1, 1, 0, width-50);

  //The induvidual circles making up the galaxy
  noStroke();
    ellipse(7+x, 17+y, 5, 5);
    ellipse(2+x, 38+y, 7, 7);
    ellipse(-10+x, 35+y, 5, 5);
    ellipse(-18+x, 24+y, 7, 7);
    ellipse(-15+x, 4+y, 5, 5);
      fill(255, 255, 255, 140);
    ellipse(-6+x, -4+y, 8, 8);
    ellipse(6+x,  -7+y, 4, 5);
    ellipse(8+x,  -0+y, 5, 5);
    ellipse(-4+x,  14+y, 7, 7);
      fill(255, 255, 255);
    ellipse(-25+x, 15+y, 5, 5);
    ellipse(-34+x, 16+y, 5, 4);
    ellipse(-45+x, 12+y, 7, 5);
      fill(255, 255, 255, 175);
    ellipse(-32+x, 2+y, 5, 5);
    ellipse(-38+x,-4+y, 5, 5);
    ellipse(-46+x, -8+y, 5, 5);
    ellipse(-40+x, -14+y, 5, 7);
    ellipse(-32+x, -24+y, 4, 5);
      fill(255, 255, 255);
    ellipse(-25+x, -29+y, 8, 8);
    ellipse(-15+x, -34+y, 6, 6);
    ellipse(-24+x, -15+y, 5, 7);
    ellipse(-10+x, -17+y, 5, 5);
    ellipse(-3+x,  -20+y, 8, 8);
    ellipse(-24+x, -40+y, 6, 5);
    ellipse(-32+x, -48+y, 7, 7);
    ellipse(-10+x, -40+y, 7, 7);
    ellipse(-4+x, -34+y, 5, 5);
      fill(255, 255, 255, 137);
    ellipse(4+x,  -40+y, 5, 5);
    ellipse(7+x, -49+y, 5, 5);
    ellipse(10+x, -59+y, 7, 7);
      fill(255, 255, 255);
    ellipse(17+x, -65+y, 5, 5);
    ellipse(25+x, -72+y, 5, 5);
    ellipse(34+x, -63+y, 7, 7);
    ellipse(1+x, -62+y, 5, 5);
    ellipse(-5+x, -54+y, 10, 10);
    ellipse(50+x, -72+y, 8, 7);
      fill(255, 255, 255, 162);
    ellipse(60+x, -83+y, 10, 10);
    ellipse(45+x, -60+y, 6, 6);
    ellipse(41+x, -53+y, 5, 5);
    ellipse(37+x, -47+y, 5, 5);
    ellipse(46+x, -90+y, 5, 5);
    ellipse(50+x, -100+y, 4, 5);
    ellipse(36+x, -85+y, 5, 5);
      fill(255, 255, 255);
    ellipse(20+x, -90+y, 7, 7);
    ellipse(-13+x, -72+y, 8, 8);
    ellipse(-20+x, -62+y, 5, 5);
    ellipse(-30+x, -80+y, 9, 9);
    ellipse(-45+x, -69+y, 5, 8);
      fill(255, 255, 255, 150);
    ellipse(-50+x, -59+y, 5, 5);
    ellipse(-58+x, -42+y, 9, 9);
    ellipse(-54+x, -30+y, 3, 4);
      fill(255, 255, 255);
    ellipse(-44+x, -26+y, 4, 4);
    ellipse(70+x, -60+y, 8, 8);
    ellipse(62+x, -48+y, 5, 5);
    ellipse(54+x, -48+y, 5, 5);
    ellipse(70+x, -70+y, 5, 5);
      fill(255, 255, 255, 173);
    ellipse(54+x, -110+y, 7, 7);
    ellipse(60+x, -120+y, 5, 5);
    ellipse(35+x, -120+y, 5, 5);
    ellipse(40+x, -130+y, 8, 8);
    ellipse(50+x, -140+y, 6, 6);
      fill(255, 255, 255);
    ellipse(26+x, -130+y, 5, 5);
    ellipse(15+x, -115+y, 8, 8);
    ellipse(30+x, -114+y, 4, 5);
    ellipse(40+x, -100+y, 5, 5);
    ellipse(-10+x, -90+y, 4, 5);
      fill(255, 255, 255, 176);
    ellipse(0+x, -80+y, 6, 7);
    ellipse(-20+x, -100+y, 6, 6);
    ellipse(70+x, -140+y, 5, 5);
    ellipse(75+x, -150+y, 6, 5);
      fill(255, 255, 255);
    ellipse(55+x, -155+y, 7, 7);
    ellipse(65+x, -165+y, 5, 5);
    ellipse(57+x, -163+y, 5, 5);
      fill(255, 255, 255, 172);
    ellipse(45+x, -175+y, 6, 5);
    ellipse(40+x, -160+y, 5, 5);
    ellipse(20+x, -140+y, 8, 5);
    ellipse(-10+x, -120+y, 6, 7);
    ellipse(3+x, -135+y, 5, 5);
    ellipse(80+x, -170+y, 5, 5);
    ellipse(70+x, -190+y, 4, 5);
    ellipse(75+x, -182+y, 4, 4);
    ellipse(70+x, -100+y, 6, 7);
    ellipse(76+x, -90+y, 5, 5);
    ellipse(25+x, 25+y, 8, 8);
    ellipse(40+x, 2+y, 6, 6);
    ellipse(47+x, 14+y, 6, 6);
    ellipse(31+x, 2+y, 6, 6);
    ellipse(28+x, 7+y, 8, 8);
    ellipse(21+x, 12+y, 3, 3);
    ellipse(50+x, 10+y, 3, 3);
    ellipse(40+x, 12+y, 3, 3);
    ellipse(67+x, 13+y, 4, 4);
    ellipse(58+x, 20+y, 4, 4);
      fill(255, 255, 255);
    ellipse(42+x, 13+y, 4, 4);
    ellipse(34+x, 20+y, 4, 4);
    ellipse(34+x, 24+y, 4, 4);
    ellipse(24+x, 34+y, 4, 4);
    ellipse(72+x, 28+y, 4, 4);
      fill(255, 255, 255, 169);
    ellipse(74+x, 22+y, 4, 4);
    ellipse(55+x, 55+y, 3, 3);
    ellipse(70+x, 32+y, 3, 3);
    ellipse(77+x, 44+y, 6, 6);
    ellipse(61+x, 32+y, 6, 6);
      fill(255, 255, 255);
    ellipse(58+x, 37+y, 2, 2);
    ellipse(51+x, 52+y, 3, 3);
      fill(255, 255, 255, 174);
    ellipse(80+x, 40+y, 3, 3);
    ellipse(70+x, 42+y, 3, 3);
    ellipse(97+x, 43+y, 4, 4);
    ellipse(68+x, 30+y, 4, 4);
    ellipse(52+x, 23+y, 4, 4);
    ellipse(44+x, 30+y, 2, 2);
      fill(255, 255, 255);
    ellipse(44+x, 34+y, 4, 4);
    ellipse(34+x, 44+y, 4, 4);
    ellipse(82+x, 38+y, 2, 2);
      fill(255, 255, 255, 166);
    ellipse(84+x, 32+y, 4, 4);
    ellipse(80+x, -50+y, 8, 8);
    ellipse(40+x, -20+y, 6, 6);
      fill(255, 255, 255);
    ellipse(47+x, -14+y, 6, 6);
    ellipse(31+x, -2+y, 6, 6);
      fill(255, 255, 255, 152);
    ellipse(28+x, -7+y, 8, 8);
    ellipse(21+x, -12+y, 3, 3);
    ellipse(50+x, -10+y, 3, 3);
    ellipse(40+x, -12+y, 3, 3);
        fill(255, 255, 255);
    ellipse(67+x, -13+y, 4, 4);
    ellipse(58+x, -20+y, 4, 4);
    ellipse(42+x, -13+y, 4, 4);
    ellipse(34+x, -20+y, 4, 4);
    ellipse(34+x, -24+y, 4, 4);
      fill(255, 255, 255, 172);
    ellipse(24+x, -34+y, 4, 4);
    ellipse(72+x, -28+y, 4, 4);
    ellipse(74+x, -22+y, 4, 4);
    ellipse(80+x, -10+y, 8, 8);
      fill(255, 255, 255);
    ellipse(40+x, -35+y, 6, 6);
    ellipse(47+x, -29+y, 6, 6);
    ellipse(31+x, -6+y, 6, 6);
    ellipse(28+x, -15+y, 8, 8);
      fill(255, 255, 255, 200);
    ellipse(21+x, -23+y, 3, 3);
    ellipse(50+x, -25+y, 3, 3);
    ellipse(40+x, -17+y, 3, 3);
    ellipse(67+x, -14+y, 4, 4);
      fill(255, 255, 255);
    ellipse(58+x, -36+y, 4, 4);
    ellipse(42+x, -26+y, 4, 4);
    ellipse(34+x, -34+y, 4, 4);
    ellipse(34+x, -37+y, 4, 4);
      fill(255, 255, 255, 179);
    ellipse(24+x, -50+y, 4, 4);
    ellipse(72+x, -37+y, 4, 4);
    ellipse(74+x, -36+y, 4, 4);
    ellipse(100+x, -100+y, 8, 8);
    ellipse(120+x, -70+y, 6, 6);
      fill(255, 255, 255, 172);
    ellipse(130+x, -50+y, 6, 6);
    ellipse(124+x, -78+y, 4, 4);
    ellipse(150+x, -30+y, 7, 8);
    ellipse(104+x, -40+y, 3, 3);
    ellipse(112+x, -60+y, 3, 3);
    ellipse(134+x, -70+y, 3, 3);
    ellipse(111+x, -13+y, 4, 4);
      fill(255, 255, 255);
    ellipse(125+x, -40+y, 4, 4);
    ellipse(109+x, -58+y, 4, 5);
    ellipse(107+x, -200+y, 4, 4);
    ellipse(102+x, -24+y, 4, 4);
    ellipse(113+x, -104+y, 4, 4);
    ellipse(103+x, -28+y, 4, 4);
    ellipse(107+x, -22+y, 4, 4);
    ellipse(50+x, -0+y, 8, 9);
      fill(255, 255, 255, 162);
    ellipse(55+x, -12+y, 6, 6);
    ellipse(47+x, -10+y, 6, 6);
    ellipse(50+x, -6+y, 4, 4);
    ellipse(52+x, -15+y, 8, 8);
    ellipse(60+x, -17+y, 3, 3);
      fill(255, 255, 255);
    ellipse(80+x, -3+y, 3, 3);
    ellipse(84+x, -27+y, 3, 3);
    ellipse(100+x, 20+y, 4, 4);
      fill(255, 255, 255, 173);
    ellipse(95+x, 12+y, 4, 4);
    ellipse(100+x, 10+y, 4, 8);
    ellipse(84+x, -0+y, 6, 6);
    ellipse(65+x, -0+y, 6, 4);
    ellipse(53+x, -2+y, 6, 4);
      fill(255, 255, 255);
    ellipse(100+x, -40+y, 5, 4);
    ellipse(130+x, -20+y, 6, 6);
      fill(255, 255, 255, 176);
    ellipse(120+x, -10+y, 10, 10);
    ellipse(150+x, -150+y, 8, 8);
    ellipse(170+x, -120+y, 6, 6);
    ellipse(190+x, -100+y, 6, 6);
    ellipse(174+x, -128+y, 4, 4);
    ellipse(200+x, -80+y, 7, 8);
    ellipse(154+x, -90+y, 3, 3);
    ellipse(162+x, -110+y, 3, 3);
      fill(255, 255, 255);
    ellipse(184+x, -120+y, 3, 3);
    ellipse(161+x, -63+y, 4, 4);
    ellipse(175+x, -90+y, 4, 4);
    ellipse(159+x, -108+y, 4, 5);
    ellipse(157+x, -250+y, 4, 4);
    ellipse(152+x, -74+y, 4, 4);
    ellipse(163+x, -154+y, 4, 4);
      fill(255, 255, 255, 192);
    ellipse(153+x, -88+y, 4, 4);
    ellipse(157+x, -72+y, 4, 4);
    ellipse(200+x, -120+y, 6, 6);
    ellipse(180+x, -110+y, 8, 8);
      fill(255, 255, 255);
    ellipse(0+x, -100+y, 3, 3);
    ellipse(200+x, -200+y, 5, 5);
    ellipse(180+x, -180+y, 10, 10);
      fill(255, 255, 255, 176);
    ellipse(174+x, -167+y, 5, 5);
    ellipse(192+x, -183+y, 4, 3);
      fill(255, 255, 255);
    ellipse(200+x, -150+y, 5, 4);
    ellipse(175+x, -200+y, 6, 6);
    ellipse(145+x, -170+y, 5, 5);
      fill(255, 255, 255, 152);
    ellipse(160+x, -180+y, 8, 8);
    ellipse(190+x, -160+y, 4, 4);
    ellipse(186+x, -140+y, 6, 6);
    ellipse(170+x, -140+y, 7, 7);
      fill(255, 255, 255);
    ellipse(140+x, -120+y, 4, 4);
    ellipse(150+x, -130+y, 6, 4);
      fill(255, 255, 255, 189);
    ellipse(170+x, -190+y, 5, 4);
    ellipse(178+x, -172+y, 5, 7);
    ellipse(163+x, -190+y, 6, 8);
    ellipse(154+x, -200+y, 8, 8);
      fill(255, 255, 255);
    ellipse(190+x, -210+y, 6, 8);
    ellipse(184+x, -215+y, 4, 4);
    ellipse(184+x, -235+y, 4, 4);
    ellipse(179+x, -223+y, 7, 7);
    ellipse(170+x, -235+y, 4, 5);
      fill(255, 255, 255, 192);
    ellipse(150+x, -234+y, 6, 5);
    ellipse(150+x, -218+y, 5, 5);
    ellipse(158+x, -218+y, 5, 5);
    ellipse(142+x, -220+y, 7, 7);
    ellipse(122+x, -250+y, 6, 7);
    ellipse(102+x, -260+y, 7, 7);
    ellipse(97+x,  -243+y, 4, 4);
      fill(255, 255, 255);
    ellipse(90+x,  -253+y, 4, 4);
    ellipse(81+x,  -263+y, 7, 8);
    ellipse(86+x,  -270+y, 4, 4);
      fill(255, 255, 255, 172);
    ellipse(79+x,  -278+y, 5, 4);
    ellipse(63+x,  -288+y, 7, 7);
      fill(255, 255, 255);
    ellipse(87+x,  -290+y, 4, 4);
    ellipse(96+x,  -283+y, 4, 4);
      fill(255, 255, 255, 175);
    ellipse(120+x, -280+y, 4, 4);
    ellipse(120+x, -290+y, 7, 6);
    ellipse(125+x, -270+y, 7, 6);
    ellipse(132+x, -263+y, 3, 4);
    ellipse(130+x, -272+y, 3, 4);
    ellipse(138+x, -278+y, 5, 4);
    ellipse(140+x, -285+y, 4, 4);
    ellipse(146+x, -293+y, 4, 4);
    ellipse(148+x, -282+y, 5, 4);
    ellipse(112+x, -260+y, 5, 4);
    ellipse(159+x, -270+y, 5, 4);
      fill(255, 255, 255);
    ellipse(167+x, -254+y, 7, 7);
    ellipse(150+x, -260+y, 6, 6);
    ellipse(143+x, -258+y, 5, 5);
      fill(255, 255, 255);
    ellipse(120+x, -290+y, 9, 6);
      fill(255, 255, 255, 182);
    ellipse(78+x,  -280+y, 5, 5);
    ellipse(40+x,  -283+y, 6, 7);
    ellipse(46+x,  -270+y, 4, 4);
      fill(255, 255, 255);
    ellipse(53+x,  -272+y, 6, 6);
    ellipse(50+x,  -248+y, 4, 4);
    ellipse(56+x,  -255+y, 5, 7);
    ellipse(64+x,  -258+y, 6, 5);
      fill(255, 255, 255, 172);
    ellipse(50+x,  -250+y, 4, 5);
    ellipse(43+x,  -260+y, 5, 8);
    ellipse(33+x,  -270+y, 6, 7);
    ellipse(27+x,  -263+y, 8, 10);
    ellipse(20+x,  -270+y, 5, 5);
    ellipse(17+x,  -264+y, 7, 7);
    ellipse(19+x,  -254+y, 4, 4);
    ellipse(22+x,  -248+y, 5, 5);
      fill(255, 255, 255);
    ellipse(30+x,  -240+y, 4, 5);
    ellipse(37+x,  -249+y, 4, 8);
    ellipse(15+x,  -243+y, 7, 7);
    ellipse(8+x,   -235+y, 9, 9);
      fill(255, 255, 255, 183);
    ellipse(3+x,   -230+y, 5, 5);
    ellipse(7+x,   -220+y, 3, 3);
    ellipse(-4+x,  -215+y, 5, 5);
    ellipse(-9+x,  -208+y, 5, 4);
    ellipse(-6+x,  -225+y, 5, 7);
    ellipse(3+x,   -249+y, 7, 7);
    ellipse(-3+x,  -240+y, 4, 5);
      fill(255, 255, 255);
    ellipse(-9+x,  -248+y, 10, 8);
      fill(255, 255, 255, 172);
    ellipse(-20+x, -247+y, 6, 5);
    ellipse(-28+x, -253+y, 3, 4);
    ellipse(-2+x,  -260+y, 4, 4);
    ellipse(-35+x, -235+y, 6, 5);
      fill(255, 255, 255);
    ellipse(-28+x, -223+y, 8, 8);
    ellipse(-20+x, -236+y, 5, 5);
    ellipse(-40+x, -223+y, 5, 5);
      fill(255, 255, 255, 182);
    ellipse(-47+x, -220+y, 6, 6);
    ellipse(-55+x, -203+y, 7, 8);
      fill(255);
    ellipse(-38+x, -193+y, 4, 4);
    ellipse(-25+x, -202+y, 5, 5);
    ellipse(-30+x, -206+y, 6, 6);
    ellipse(-60+x, -184+y, 8, 5);

 mouseReleased();

      ellipse(7+x, 17+y, 5, 5);
      ellipse(2+x, 38+y, 7, 7);
      ellipse(8+x,  -0+y, 5, 5);
      ellipse(-4+x,  14+y, 7, 7);
      ellipse(-25+x, 15+y, 5, 5);
      ellipse(-38+x,-4+y, 5, 5);
      ellipse(-27+x, -24+y, 8, 8);
      ellipse(-3+x,  -20+y, 8, 8);
      ellipse(-10+x, -40+y, 7, 7);
      ellipse(-8+x, -52+y, 10, 10);
      ellipse(50+x, -72+y, 8, 7);
      ellipse(60+x, -86+y, 12, 11);
      ellipse(49+x, -64+y, 7, 7);
      ellipse(41+x, -53+y, 5, 5);
      ellipse(40+x, -43+y, 5, 5);
      ellipse(46+x, -90+y, 5, 5);
      ellipse(50+x, -100+y, 6, 6);
      ellipse(-54+x, -46+y, 9, 9);
      ellipse(-54+x, -30+y, 3, 4);
      ellipse(70+x, -60+y, 8, 8);
      ellipse(62+x, -48+y, 5, 5);
      ellipse(60+x, -120+y, 5, 5);
      ellipse(40+x, -130+y, 8, 8);
      ellipse(20+x, -140+y, 8, 5);
      ellipse(80+x, -170+y, 5, 5);
      ellipse(77+x, -190+y, 8, 8);
      ellipse(40+x, 2+y, 6, 6);
      ellipse(47+x, 14+y, 6, 6);
      ellipse(31+x, 2+y, 6, 6);
      ellipse(20+x, 7+y, 10, 8);
      ellipse(61+x, 39+y, 2, 2);
      ellipse(51+x, 52+y, 3, 3);
      ellipse(97+x, 43+y, 4, 4);
      ellipse(34+x, 44+y, 4, 4);
      ellipse(40+x, -12+y, 3, 3);
      ellipse(72+x, -28+y, 4, 4);
      ellipse(74+x, -22+y, 4, 4);
      ellipse(80+x, -10+y, 8, 8);
      ellipse(44+x, -32+y, 6, 6);
      ellipse(47+x, -29+y, 6, 6);
      ellipse(21+x, -23+y, 3, 3);
      ellipse(74+x, -36+y, 4, 4);
      ellipse(100+x, -110+y, 8, 8);
      ellipse(150+x, -30+y, 7, 8);
      ellipse(109+x, -58+y, 4, 5);
      ellipse(107+x, -200+y, 4, 4);
      ellipse(52+x, -15+y, 10, 10);
      ellipse(95+x, 12+y, 4, 4);
      ellipse(100+x, 10+y, 4, 8);
      ellipse(65+x, -0+y, 6, 4);
      ellipse(100+x, -40+y, 5, 4);
      ellipse(138+x, -17+y, 6, 6);
      ellipse(150+x, -150+y, 8, 8);
      ellipse(200+x, -80+y, 7, 8);
      ellipse(157+x, -250+y, 4, 4);
      ellipse(152+x, -74+y, 4, 4);
      ellipse(205+x, -150+y, 6, 6);
      ellipse(175+x, -200+y, 6, 6);
      ellipse(160+x, -180+y, 8, 8);
      ellipse(190+x, -160+y, 4, 4);
      ellipse(163+x, -190+y, 6, 8);
      ellipse(184+x, -215+y, 4, 4);
      ellipse(184+x, -235+y, 4, 4);
      ellipse(147+x, -225+y, 9, 9);
      ellipse(63+x,  -288+y, 7, 7);
      ellipse(87+x,  -290+y, 4, 4);
      ellipse(120+x, -290+y, 9, 6);
      ellipse(53+x,  -272+y, 6, 6);
      ellipse(50+x,  -248+y, 4, 4);
      ellipse(27+x,  -263+y, 8, 10);
      ellipse(17+x,  -264+y, 7, 7);
      ellipse(15+x,  -243+y, 7, 7);
      ellipse(8+x,   -235+y, 9, 9);
      ellipse(3+x,   -255+y, 7, 7);
      ellipse(-28+x, -223+y, 8, 8);
      ellipse(-32+x, -210+y, 6, 6);
      ellipse(-60+x, -174+y, 8, 5);

  //This code is for the induvidual planets
    fill(colourValue, colourValue2, colourValue3);
    ellipse(-230+x, -200+x, 40, 40);
    fill(colourValue4, colourValue5, colourValue6);
    ellipse(25+y, 282+y, 65, 65);
    fill(colourValue7, colourValue8, colourValue9);
    ellipse(-350+y, 450+y, 250, 250);

 }
function drawBackgroundStars(){
 //create 100 stars in random positions on the canvas
 for(let i=0; i < 1000; i++){

   push();
   translate(starParameters[i].x,starParameters[i].y);
   //console.log (starParameters[i]);
   drawStar();
   pop();
   //noLoop();
  }


 //This is the code for a singular star. The opacity is random, the colour is white and the size is 3 pixels.
 function drawStar(){
   Opacityshape=random(255)
   fill(255,255,255,Opacityshape);
   //Opacity(random());
   ellipse(3,3,3,3);
   }
 }

 function setupBackgroundStars() {
   for(let i=0; i < 1000; i++){
     let s = {x: random(0, width), y: random(0, height)};
     starParameters.push(s);
   }

 }

function mouseReleased() {
   if (value == 255, 255, 255) {
      fill(0, 26, 102);
    }
  }

  function mouseReleased() {
     if (value == 255) {

        fill(0, 26, 102);}
      }



    //function mouseClicked1() {
      //ellipse(mouseX, mouseY, 5, 5);
      // prevent default
      //return false;
