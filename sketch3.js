var spacing = 50;
let x = 0;
let y = 0;
let t = 0;
let colorsPalette = {}



function setup() {
    createCanvas (windowWidth, windowHeight);
    background('#ffffff');
    colorsPalette = [ 
        color(146, 167, 202,200),
        color(186, 196, 219,200),
        color(118, 135, 172,200),
        color(76, 41, 81,200),
        color(144, 62, 92,200),
        color(178, 93, 119,200),
        color(215, 118, 136,200),
        color(246, 156, 164,200),
    ];
};

function draw() {
    fill(colorsPalette[floor(random(8))]);
    let i = floor(random(10));
    let pos = random() < 0.5 ? -1 : 1;
    let angle = 90 * noise(t);
    
    // console.log(i);
    switch (i) {
        default : 
            color(0);
            // rect(x + pos * spacing ,y, spacing/random(2,5), spacing/random(2,5));
            noStroke()
            arc (x , y, spacing, spacing, angle, angle * PI, PIE);
            break;  
    }

    x += spacing;
    t = t + 1;
    console.log(t);

    if (x > width) {
        x = 0;
        y += spacing;
    } 
    
    if (y > height) {
        noLoop()
    }

}