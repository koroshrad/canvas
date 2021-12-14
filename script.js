"use strict";
"strict";
//  let canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
//  let ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
//  let ballRadius = 15;
//  let x = canvas.width/2;
//  let y = canvas.height-30;
//  let dx =5;
//  let dy = 2;
//  function ballDrwwing() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "black";
//     ctx.fill();
//     ctx.closePath();
//     requestAnimationFrame(ballDrwwing)
// }
// function circuit() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ballDrwwing();
//     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
// }
// setInterval(circuit, 10);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// let numberOfBall  = parseInt(<HTMLElement>document.querySelector('#number-of-balls'));
let numberOfBalls = 5;
let pos = {
    x: 100,
    y: 100,
};
class Ball {
    constructor(pos) {
        this.pos = pos;
        this.radius = Math.floor(Math.random() * 25);
        this.color = randomColor();
        this.dx = Math.floor(Math.random() * 5 + 1);
        this.dy = -Math.floor(Math.random() * 5 + 1);
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.closePath();
    }
    updateBall() {
        if (this.pos.x + this.dx > canvas.width - this.radius ||
            this.pos.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.pos.y + this.dy > canvas.height - this.radius ||
            this.pos.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        this.pos.x += this.dx;
        this.pos.y += this.dy;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
function randomColor() {
    const rc1 = Math.random() * 16777215;
    const rc2 = Math.floor(rc1);
    const rc3 = rc2.toString(16);
    return "#" + rc3;
}
function randomPos() {
    pos = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
    };
    return pos;
}
let balls = [];
for (let i = 0; i < numberOfBalls; i++) {
    balls.push(new Ball(randomPos()));
    balls[i].drawBall();
}
const control = setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numberOfBalls; i++) {
        balls[i].updateBall();
    }
}, 10);
// (<HTMLElement>document.getElementById('number-of-balls')).addEventListener('input', control)
//# sourceMappingURL=script.js.map