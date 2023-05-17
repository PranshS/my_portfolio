const canvas = document.querySelector(".body_canvas");
let create_cursor = document.getElementById("cursor");

const ctx = canvas.getContext("2d");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

let hue = 0;
let dots = [];

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (i = 0; i < 10; i++) {
    dots.push(new Connect_dots());
    console.log(dots[i]);
  }
});

window.addEventListener("touchstart", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (i = 0; i < 10; i++) {
    dots.push(new Connect_dots());
    console.log(dots[i]);
  }
});

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;

  for (i = 0; i < 10; i++) {
    dots.push(new Connect_dots());
    console.log(dots[i]);
  }
});

class Connect_dots {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsla(${hue}, 100%, 50%, .3)`;
    // this.color = `rgba(97, 131, 209, 0.41)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handle_dots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].draw();

    if (dots[i].size <= 1) {
      dots.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hue++;
  handle_dots();
  requestAnimationFrame(animate);
}
animate();
