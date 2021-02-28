var spacing = 40;
let x = 0;
let y = 0;
let t = 0;
let colorsPalette = {}

function setup() {
    createCanvas (windowWidth, windowHeight);
    // background('#ffffff');

    colorsPalette = [ 
        color('#e73815'),
        color('#f4adbc'),
        color('#104898'),
        color('#009c74'),
        color('#ffffff'),
    ];
};

function randomizeColor() {
    return fill(colorsPalette[floor(random(5))]);
}

function draw() {
    let pos = random() < 0.5 ? -1 : 1;
    // let angle = 90 * noise(t);

    let rm  = 2;
    noStroke()

    randomizeColor();
    ellipse(x,y,spacing,spacing);
    randomizeColor();
    ellipse(x + pos * spacing/4, y + pos * spacing/4, spacing/rm, spacing/rm);
    randomizeColor();
    ellipse(x + pos * spacing/4, y + pos * spacing/4, spacing/rm, spacing/rm);

    x += spacing;
    t = t + 1;

    if (x > width) {
        x = 0;
        y += spacing;
    } 
    
    if (y > height) {
        noLoop()
        saveCanvas('png');
    }
}