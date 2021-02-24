var spacing = 50;
let x = 0;
let y = 0;
let t = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background('#ffffff')
};

function draw() {
    // stroke(0);
    fill(0)
    let i = floor(random(10));
    let pos = random() < 0.5 ? -1 : 1;
    let angle = 90 * noise(t);
    
    // console.log(i);
    switch (i) {
        case 1:
            line (x , y - pos * random(spacing), x + pos * spacing, y + spacing);
            break;
        case 2:
            line (x , y - pos * random(spacing), x + pos * spacing, y + spacing);
            break;
        default : 
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