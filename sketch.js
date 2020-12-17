let treesA = [];
let treesB = [];
let treesC = [];
let treesD = [];
let baseTree;
let BG;
let temp_layer;
let endImg;
let bg_sky;
let riverImg;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let rainbow;

let sqr01;
let sqr02;
let stage = 0; // 0~1,2,3 - 4단계
let offset = 30;
let rewind = false;

let shot = false;
let checkKey = false;
let imgGreen = [];
let imgGrey = [];

let serial;
let gtog1;
let gtog2;
let gtog3;
let gtog4;
let gtogR;


let charA_a;
let charA_b;
let charA_c;
let charA_d;

let charB_a;
let charB_b;
let charB_c;
let charB_d;
let timer = 0;
function preload() {
  BG = loadAnimation('bg/bg_resized/bg_124.png', 'bg/bg_resized/bg_504.png');

  charA_a = loadAnimation('images/char_a/char00.png', 'images/char_a/char49.png');
  charA_b = charA_a.clone();
  charA_c = charA_a.clone();
  charA_d = charA_a.clone();

  charB_a = loadAnimation('images/char_b/char00.png', 'images/char_b/char49.png');
  charB_b = charB_a.clone();
  charB_c = charB_a.clone();
  charB_d = charB_a.clone();

  endImg = loadAnimation('images/end/end_124.png', 'images/end/end_173.png');
  baseTree = loadAnimation('tree/flat/Tree_000.png', 'tree/flat/Tree_066.png');
  gtog1 = loadAnimation('images/gtg_a/gtg124.png', 'images/gtg_a/gtg197.png');
  gtog2 = loadAnimation('images/gtg_b/gtg00.png', 'images/gtg_b/gtg89.png');
  gtog3 = loadAnimation('images/gtg_c/gtg00.png', 'images/gtg_c/gtg91.png');
  gtog4 = loadAnimation('images/gtg_d/gtg00.png', 'images/gtg_d/gtg69.png');
  gtogR = loadAnimation('images/gtg_river/gtg00.png', 'images/gtg_river/gtg55.png');

  temp_layer = loadImage('images/bottom.png');
  bg_sky = loadImage('bg/sky.png');
  riverImg = loadImage('images/river.png');

  sqr01 = loadImage('images/sqr/1/173.png');
  sqr02 = loadImage('images/sqr/2/173.png');

  cloud1 = loadImage('images/cloud1.png');
  cloud2 = loadImage('images/cloud2.png');
  cloud3 = loadImage('images/cloud3.png');
  cloud4 = loadImage('images/cloud4.png');
  rainbow = loadImage('images/rainbow.png');

  for (let i = 0; i < 13; i++) {
    imgGrey[i] = loadImage('images/grey_Asset_' + i + '.png');
  }
  for (let i = 0; i < 10; i++) {
    imgGreen[i] = loadImage('images/green_Asset_' + i + '.png');
  }

  for (let i = 0; i < 8; i++) {
    treesA[i] = new Tree();
  }
  for (let i = 0; i < 13; i++) {
    treesB[i] = new Tree();
  }
  for (let i = 0; i < 16; i++) {
    treesC[i] = new Tree();
  }
  for (let i = 0; i < 13; i++) {
    treesD[i] = new Tree();
  }
}

let loading = false;
let go = true;


function setup() {
  createCanvas(1920, 1080);
  // serial = new p5.SerialPort();
  // let portlist = serial.list();
  // serial.open('COM7');

  // serial.on('connected', serverConnected);
  // serial.on('list', gotList);
  // serial.on('data', gotData);
  // serial.on('error', gotError);
  // serial.on('open', gotOpen);
}
let count = 0;
let gotPoint = false;

function draw() {
  if (shot) {
    count += 7;
    background(0);
  } else {
    count--;
  }
  if (count < 0) {
    count = 0;
  } else if (count > 15) {
    count = 15;
  }
  if (count > 0) {
    gotPoint = true;
  } else {
    gotPoint = false;
  }

  if (go) {
    background(255);
    image(bg_sky, 0, 0, width, height);

    push();
    translate(width / 2, height / 2);
    scale(2);
    animation(BG, 0, 0);
    pop();
   
    imageMode(CORNER);
    animation(gtogR, 1024, 525);
    image(temp_layer, 0, 0);
    animation(gtog1, 347, 664);
    animation(gtog2, 855, 690);
    animation(gtog3, 1040, 444);
    animation(gtog4, 1470, 234);

    imageMode(CORNER);
    treesA[0].playTree(445, 684);
    treesA[1].playTree(388, 697);
    treesA[2].playTree(318, 681);
    treesA[3].playTree(469, 635);
    treesA[4].playTree(397, 604);
    treesA[5].playTree(276, 579);
    treesA[6].playTree(349, 626);
    treesA[7].playTree(343, 750);

    treesB[0].playTree(313, 439);
    treesB[1].playTree(676, 452);
    treesB[2].playTree(992, 585);
    treesB[3].playTree(702, 568);
    treesB[4].playTree(888, 649);
    treesB[5].playTree(878, 762);
    treesB[6].playTree(1023, 799);
    treesB[7].playTree(921, 790);
    treesB[8].playTree(906, 863);
    treesB[9].playTree(727, 856);
    treesB[10].playTree(961, 887);
    treesB[11].playTree(1064, 874);
    treesB[12].playTree(782, 880);

    treesC[0].playTree(1244, 763);
    treesC[1].playTree(1305, 744);
    treesC[2].playTree(1372, 736);
    treesC[3].playTree(1408, 580);
    treesC[4].playTree(720, 323);
    treesC[5].playTree(781, 330);
    treesC[6].playTree(996, 300);
    treesC[7].playTree(1063, 270);
    treesC[8].playTree(1434, 444);
    treesC[9].playTree(1566, 444);
    treesC[10].playTree(1460, 335);
    treesC[11].playTree(1490, 380);
    treesC[12].playTree(995, 203);
    treesC[13].playTree(1077, 171);
    treesC[14].playTree(1246, 210);
    treesC[15].playTree(1392, 303);

    treesD[0].playTree(1617, 387);
    treesD[1].playTree(1303, 120);
    treesD[2].playTree(1548, 255);
    treesD[3].playTree(1644, 216);
    treesD[4].playTree(1702, 211.625);
    treesD[5].playTree(1162, 91.625);
    treesD[6].playTree(1609, 246.625);
    treesD[7].playTree(1701, 266.625);
    treesD[8].playTree(1233, 156);
    treesD[9].playTree(1273, 173);
    treesD[10].playTree(1311, 188);
    treesD[11].playTree(1359, 205);
    treesD[12].playTree(1640, 305);

    animation(charA_a, 238, 508);
    animation(charA_b, 1023, 549);
    animation(charA_c, 1424, 480);
    animation(charA_d, 1590, 270);

    animation(charB_a, 961, 925);
    animation(charB_b, 564, 336);
    animation(charB_c, 930, 162);
    animation(charB_d, 1200, 270);

    if (stage == 0) {
      for (let i = 0; i < 8; i++) {
        if (gotPoint && !BG.playing) {
          if (i == 0 || treesA[i - 1].tree.getFrame() > offset) {
            treesA[i].playing = true;
          }
        } else {
          treesA[i].playing = false;
        }
      }
      BG.goToFrame(0);
      endImg.goToFrame(0);
      gtog1.goToFrame(0);
      gtog2.goToFrame(0);
      gtog3.goToFrame(0);
      gtog4.goToFrame(0);
      gtogR.goToFrame(0);

      charA_a.goToFrame(0);
      charA_b.goToFrame(0);
      charA_c.goToFrame(0);
      charA_d.goToFrame(0);

      charB_a.goToFrame(0);
      charB_b.goToFrame(0);
      charB_c.goToFrame(0);
      charB_d.goToFrame(0);

    } else if (stage == 1) {
      gtog1.goToFrame(gtog1.getLastFrame());
      gtog2.goToFrame(0);
      gtog3.goToFrame(0);
      gtog4.goToFrame(0);
      gtogR.goToFrame(0);

      charA_a.goToFrame(charA_a.getLastFrame());
      charA_b.goToFrame(0);
      charA_c.goToFrame(0);
      charA_d.goToFrame(0);

      charB_a.goToFrame(charB_a.getLastFrame());
      charB_b.goToFrame(0);
      charB_c.goToFrame(0);
      charB_d.goToFrame(0);

      for (let i = 0; i < 13; i++) {
        if (gotPoint && !BG.playing) {
          if (i == 0 || treesB[i - 1].tree.getFrame() > offset) {
            treesB[i].playing = true;
          }
        } else {
          treesB[i].playing = false;
        }
      }
      BG.goToFrame(91);
    } else if (stage == 2) {
      gtog1.goToFrame(gtog1.getLastFrame());
      gtog2.goToFrame(gtog2.getLastFrame());
      gtog3.goToFrame(0);
      gtog4.goToFrame(0);
      gtogR.goToFrame(0);

      charA_a.goToFrame(charA_a.getLastFrame());
      charA_b.goToFrame(charA_b.getLastFrame());
      charA_c.goToFrame(0);
      charA_d.goToFrame(0);

      charB_a.goToFrame(charB_a.getLastFrame());
      charB_b.goToFrame(charB_b.getLastFrame());
      charB_c.goToFrame(0);
      charB_d.goToFrame(0);

      for (let i = 0; i < 16; i++) {
        if (gotPoint && !BG.playing) {
          if (i == 0 || treesC[i - 1].tree.getFrame() > offset) {
            treesC[i].playing = true;
          }
        } else {
          treesC[i].playing = false;
        }
      }
      BG.goToFrame(200);
    } else if (stage == 3) {
      gtog1.goToFrame(gtog1.getLastFrame());
      gtog2.goToFrame(gtog2.getLastFrame());
      gtog3.goToFrame(gtog3.getLastFrame());
      gtog4.goToFrame(0);
      gtogR.goToFrame(gtogR.getLastFrame());

      charA_a.goToFrame(charA_a.getLastFrame());
      charA_b.goToFrame(charA_b.getLastFrame());
      charA_c.goToFrame(charA_c.getLastFrame());
      charA_d.goToFrame(0);

      charB_a.goToFrame(charB_a.getLastFrame());
      charB_b.goToFrame(charB_b.getLastFrame());
      charB_c.goToFrame(charB_c.getLastFrame());
      charB_d.goToFrame(0);

      for (let i = 0; i < 13; i++) {
        if (gotPoint && !BG.playing) {
          if (i == 0 || treesD[i - 1].tree.getFrame() > offset) {
            treesD[i].playing = true;
          }
        } else {
          treesD[i].playing = false;
        }
      }
      BG.goToFrame(307);
    }
    if (stage == 4) {
      gtog1.goToFrame(gtog1.getLastFrame());
      gtog2.goToFrame(gtog2.getLastFrame());
      gtog3.goToFrame(gtog3.getLastFrame());
      gtog4.goToFrame(gtog4.getLastFrame());
      gtogR.goToFrame(gtogR.getLastFrame());

      charA_a.goToFrame(charA_a.getLastFrame());
      charA_b.goToFrame(charA_b.getLastFrame());
      charA_c.goToFrame(charA_c.getLastFrame());
      charA_d.goToFrame(charA_d.getLastFrame());

      charB_a.goToFrame(charB_a.getLastFrame());
      charB_b.goToFrame(charB_b.getLastFrame());
      charB_c.goToFrame(charB_c.getLastFrame());
      charB_d.goToFrame(charB_d.getLastFrame());

      if (BG.getFrame() >= 380 && !BG.playing) {
        stage = 5;
        console.log('go stage 5', BG.getFrame(), stage, !BG.playing);
      }
      BG.goToFrame(380);
    }
    if (stage == 5) {

      charA_a.goToFrame(charA_a.getLastFrame());
      charA_b.goToFrame(charA_b.getLastFrame());
      charA_c.goToFrame(charA_c.getLastFrame());
      charA_d.goToFrame(charA_d.getLastFrame());

      charB_a.goToFrame(charB_a.getLastFrame());
      charB_b.goToFrame(charB_b.getLastFrame());
      charB_c.goToFrame(charB_c.getLastFrame());
      charB_d.goToFrame(charB_d.getLastFrame());

      image(rainbow, 532, 98);
      image(cloud1, 232, 530);
      image(cloud2, 1256, 402);
      image(cloud3, 1660, 276);
      image(cloud4, 628, 68);

      // serial.write('H');
      endImg.goToFrame(49);
      rewind = true;
      BG.goToFrame(0);

      console.log('now stage 5, rewinding');
      if (BG.getFrame() <= 1 && !BG.playing) {
        endImg.goToFrame(0);
        rewind = false;
        console.log('go stage 0, finished rewinding');
        serial.write('0');
        stage = 0;
      }
    }

    if (!rewind) {
      if (treesD[12].done) {
        stage = 4;
      } else if (treesC[15].done) {
        stage = 3;
      } else if (treesB[12].done) {
        stage = 2;
      } else if (treesA[7].done) {
        stage = 1;
      } else {
        stage = 0;
      }
    }
  }
}

function keyPressed() {
  checkKey = false;
  if (!checkKey) {
    count += 10;
    shot = true;
    checkKey = true;
  }
  shot = false;
}

function drawImg() {
  imageMode(CENTER);
  if (!treesD[2].done) {
    image(imgGrey[7], 1585.5, 169);
    image(imgGrey[10], 1489.75, 282.5);

  } else {
    image(imgGreen[9], 1472, 92.5);
    image(imgGreen[8], 1584, 170.5);
    image(imgGreen[7], 1202.5, 110);
    image(imgGreen[6], 1501, 269);
    image(imgGreen[1], 1735.75, 368);
  }

  if (!treesC[2].done) {
    image(imgGrey[8], 1032, 366.5);
    image(imgGrey[9], 777, 265.5);
    image(imgGrey[11], 1091.25, 171.5);
    image(imgGrey[0], 871.5, 245); //큐브
    image(imgGrey[3], 1249.5, 193.5);
    image(imgGrey[5], 1295, 738);
    image(imgGrey[6], 1169.5, 319.5);
  } else {
    image(imgGreen[5], 849, 266);
    image(imgGreen[3], 1179.5, 233.5);
    image(imgGreen[0], 1073, 411);
    image(imgGreen[1], 1262.75, 352);
  }
  if (!treesB[2].done) {
    image(imgGrey[12], 753.5, 602.5);
    image(imgGrey[4], 884, 532);
  } else {
    image(imgGreen[2], 656, 633);
    image(imgGreen[1], 1111.75, 890);
    image(imgGreen[1], 934.75, 708);
    image(imgGreen[4], 838.5, 525);
  }
  if (!treesA[2].done) {
    image(imgGrey[1], 349.5, 662);
    image(imgGrey[2], 417.5, 694.5);
  } else {
    image(imgGreen[1], 250.5, 680.5);
  }
}

function keyReleased() {
  checkKey = true;
  timer = 0;
}

class Tree {
  constructor() {
    this.playing = false;
    this.done = false;
    this.tree = baseTree.clone();
    this.tree.looping = false;
  }

  playTree(x, y) {
    this.x = x;
    this.y = y;

    if (this.tree.getFrame() >= 40) {
      this.done = true;
    }
    if (!rewind) {
      if (this.done) {
        this.tree.goToFrame(66);
      } else if (this.playing) {
        this.tree.goToFrame(40);
      } else {
        this.tree.goToFrame(0);
      }
    } else {
      this.done = false;
      this.playing = false;
      this.tree.goToFrame(0);
    }
    animation(this.tree, this.x, this.y);
  }
}

function serverConnected() {
  print("We are connected!");
}

// function gotList(thelist) {
//   for (let i = 0; i < thelist.length; i++) {
//     print(i + " " + thelist[i]);
//   }
// }

// function gotOpen() {
//   print("Serial Port is open!");
// }

// function gotError(theerror) {
//   print(theerror);
// }

// function gotData() {
//   let currentString = serial.readStringUntil("\r\n");
//   console.log(currentString);
// }

// function sendData() {
// }

// function mouseReleased() {
// }