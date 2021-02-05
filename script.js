//Authors
//p1: Pedro Rangel
//p2: Isaiah Chavez
let img
let c
let data
let x = 50
let y = 420
let locationDisplay
let offset = 270

function setup() {
  createCanvas(800, 800)
  img.loadPixels();
  c = img.get(img.width / 2, img.height / 2);
  image(img, 0, 0, 600, 400);
  legend(c)
  console.log(data.getColumnCount() + " rows")
  impact()
}

function draw() {

}

function preload() {
  img = loadImage('usaPicture.jpg');
  
  data = loadTable('corona.csv', 'csv', 'header')
}

function legend() {
  textSize(15);
  stroke('red')
  text('Confirmed Total: 4,398,994', 20, 360);
  noStroke()
  stroke('gray')
  text('Deaths Total: 150,774', 20, 375);
  noStroke()
  textSize(30)
  text('Location,      Confirmed,      Deaths', x, y);
  textSize(15)
  text('California,       467103,         8544', x, y+15);
  text('Florida,          432739,         5930',  x, y+30);
  text('New York,         417056,         32322', x, y+45);
  text('Texas,            402295,         6292',  x, y+60);
  text('New Jersey,       181732,         15804',  x, y+75);
  text('Illinois,         174442,         7619',  x, y+90);
  text('Arizona,          163918,         3320',  x, y+105);
  text('Georgia,          155907,         3435',  x, y+120);
  text('Massachusetts,    115926,         8536', x, y+135);
  text('North Carolina,   114689,         1815', x, y+150);
  text('Pennsylvannia,    112995,         7174', x, y+165);
  text('Louisiana,        110029,         3786', x, y+180);
  text('Tennessee,        93869,           965', x, y+195);
  text('Michigan,         87329,          6407', x, y+210);
  text('Virginia,         86072,          2082', x, y+225);
  text('Maryland,         85436,          3447', x, y+240);
  text('Ohio,             85177,          3344', x, y+255);
  text('South Carolina,   82417,          1506', x, y+270);
  text('Alabama,          81115,          2906', x, y+285);
  text('Indiana,          64417,          1611', x, y+300);
  text('Washington,       55548,           905', x, y+315);
  text('Wisconsin,        53323,          1501',  x, y+330);
  text('Mississippi,      52957,          1616', x, y+345);
  text('Minnesota,        51843,          4418', x, y+360);
  text('Connecticut,      48983,          1245', x, y+375);
  text('Missouri,         44813,          1800', x+offset, y+15);
  text('Colorado,         44723,           739', x+offset, y+30);
  text('Nevada,           43880,           836', x+offset, y+45);
  text('Iowa,             42696,           408', x+offset, y+60);
  text('Arkansas,         39447,           285', x+offset, y+75);
  text('Utah,             38439,           495', x+offset, y+90);
  text('Oklahoma,         32529,           726', x+offset, y+105);
  text('Kentucky,        28250,           338', x+offset, y+120);
  text('Kansas,          26439,           322', x+offset, y+135);
  text('Nebraska,        24899,           619', x+offset, y+150);
  text('New Mexico,      19502,           159', x+offset, y+165);
  text('Idaho,           18836,           1004', x+offset, y+180);
  text('Rhode Island,    18515,           289', x+offset, y+195);
  text('Oregon,          17122,           201', x+offset, y+210);
  text('Delaware,        14406,           579', x+offset, y+225);
  text('South Dakota,    8444,            123', x+offset, y+240);
  text('New Hampshire,   6441,            409', x+offset, y+255);
  text('West Virginia,   6054,            106', x+offset, y+270);
  text('North Dakota,    5990,            103', x+offset, y+285);
  text('Maine,           3832,            119', x+offset, y+300);
  text('Montana,         3406,             47', x+offset, y+315);
  text('Wyoming,         2520,             25', x+offset, y+330);
  text('Vermont,         1402,             56', x+offset, y+345);
}

function mouseClicked() {
  console.log("X Coordinate: " + mouseX + " Y Coordinate: " + mouseY);
}

function impact() {
  for (var i = 0; i < data.getRowCount(); i++) {
    var x = Number(data.getString(i, 'x_Coordinate'));
    var y = Number(data.getString(i, 'y_Coordinate'));

    var confirmed = Number(data.getString(i, 'confirmed'));
    var size = map(confirmed, 0, 500000, 10, 80);

    var death = Number(data.getString(i, 'deaths'));
    var sizeDeaths = map(death, 0, 50000, 3, 45);

    push()
    noStroke()
    fill(255, 0, 0, 50)
    ellipse(x, y, size)
    pop()
    fill(60, 60, 60, 120)
    ellipse(x, y, sizeDeaths)
  }
}