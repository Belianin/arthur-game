const snowCount = 35;
const flakes = []

function draw() {
    for (let flake of flakes) {
        flake.posY++;
    }
}

function initSnow() {
    setTimeout(draw, 100);
}

let conte
for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake'
    flake.posX += i * 20;

    flakes.push(flake);
    document.body.appendChild(flake);
}

window.addEventListener('load', initSnow);