var spacing = 20;
let x = 0;
let y = 0;

function setup() {
    createCanvas (windowWidth, windowHeight);
    background('#111111')
};

function draw() {
    stroke('#FF5050');

    if (random() > 0.5) {
        line(x, y, x + spacing, y + spacing);
    } else {
        // line(x, y + spacing, x + spacing, y);
        noFill()
        circle(x, y + noise(y), spacing * noise(x*y));
        circle(x, y + noise(x), spacing * noise(x*y));
    }

    x += spacing;

    if (x > width) {
        x = 0;
        y += spacing;
    }        
}