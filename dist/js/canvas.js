const canvas = document.querySelector(".body_canvas");
let create_cursor = document.getElementById("cursor");

const ctx = canvas.getContext("2d");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

// console.log(ctx);
let hue = 0;
let dots = [];

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (i = 0; i < 50; i++) {
    dots.push(new Connect_dots());
  }
});

let mouse = {
  x: undefined,
  y: undefined,
};

class Connect_dots {
  constructor() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    // this.color = `hsla(${hue}, 100%, 50%, .3)`;
    this.color = `rgba(97, 131, 209, 0.41)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) {
      this.speedX -= 0.2;
    } else if (this.y > canvas.height) {
      this.speedY -= 0.2;
    } else if (this.x <= 0) {
      this.speedX += 0.2;
    } else if (this.y <= 0) {
      this.speedY += 0.2;
    }
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

    for (let j = i; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const direction = Math.sqrt(dx * dx + dy * dy);
      if (direction > 0 && direction < 150) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.lineWidth = dots[i] / 2;
        ctx.strokeStyle = dots[i].color;
        ctx.stroke();
      }
    }

    if (dots[i].size > 5) {
      dots[i].size--;
    }
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hue++;
  handle_dots();
  requestAnimationFrame(animate);
}
animate();
