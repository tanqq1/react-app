function randomColor() {
  const ColorKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var colorHex = "#";
  for (var i = 0; i < 6; i++) {
    const randomKey = Math.floor(Math.random() * 15);
    colorHex += ColorKey[randomKey];
  }
  return colorHex;
}

class Circle {
  constructor({ origin, speed, color, angle, context }) {
    this.origin = origin;
    this.position = { ...this.origin };
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.context = context;
    this.renderCount = 0;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.position.x, this.position.y, 6, 0, Math.PI * 2);
    this.context.fill();
  }

  move() {
    this.position.x = Math.sin(this.angle) * this.speed + this.position.x;
    this.position.y =
      Math.cos(this.angle) * this.speed +
      this.position.y +
      this.renderCount * 0.3;
    this.renderCount++;
  }
}

class Firework {
  constructor({ origin, speed, color, angle, context }) {
    this.origin = origin;
    this.position = { ...this.origin };
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.context = context;
    this.renderCount = 0;
  }

  draw() {
    for (var i = 0; i < 6; i++) {
      const isOdd = i % 2 === 0;
      const x = isOdd
        ? this.position.x - (8 - i) * i
        : this.position.x + (8 - i) * 5;
      const y = isOdd ? this.position.y - (8 - i) * 5 : this.position.y - i * i;
      this.context.strokeStyle = randomColor();
      this.context.beginPath();
      this.context.moveTo(
        this.position.x + Math.random() * 7,
        this.position.y - Math.random() * 7
      );
      this.context.quadraticCurveTo(
        x,
        isOdd ? y - 10 : y - 10,
        isOdd ? x - i * 15 : x + 10,
        y
      );
      this.context.stroke();
    }
  }

  move() {
    this.position.x = Math.sin(this.angle) * this.speed + this.position.x;
    this.position.y =
      Math.cos(this.angle) * this.speed +
      this.position.y +
      this.renderCount * 0.3;
    this.renderCount++;
  }
}

class WaterMelon {
  constructor({ context, origin, speed, color, angle }) {
    this.origin = origin;
    this.position = { ...this.origin };
    this.ctx = context;
    this.color = color;
    this.renderCount = 0;
    this.speed = speed;
    this.angle = angle;
  }
  draw() {
    // 西瓜皮
    this.ctx.fillStyle = "green";
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,
      this.position.y,
      30,
      (Math.PI * 2) / 8,
      (Math.PI * 2) / 2,
      false
    );
    this.ctx.fill();
    // 西瓜瓤
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,
      this.position.y,
      28,
      (Math.PI * 2) / 8,
      (Math.PI * 2) / 2,
      false
    );
    this.ctx.fill();
    // 西瓜肉
    this.ctx.fillStyle = "#e65555";
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,
      this.position.y,
      26,
      (Math.PI * 2) / 8,
      (Math.PI * 2) / 2,
      false
    );
    this.ctx.fill();
    // 西瓜籽
    this.ctx.fillStyle = "black";
    for (var i = 1; i < 4; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.position.x - 20 + i * 6,
        this.position.y + 8 + i * 4
      );
      this.ctx.lineTo(
        this.position.x - 24 + i * 6,
        this.position.y + 9 + i * 4
      );
      this.ctx.lineTo(
        this.position.x - 22 + i * 6,
        this.position.y + 6 + i * 4
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  move() {
    this.position.x = Math.sin(this.angle) * this.speed + this.position.x;
    this.position.y =
      Math.cos(this.angle) * this.speed +
      this.position.y +
      this.renderCount * 0.3;
    this.renderCount++;
  }
}
class Boom {
  constructor({ origin, context, circleCount = 10, area }) {
    this.origin = origin;
    this.context = context;
    this.circleCount = circleCount;
    this.area = area;
    this.stop = false;
    this.circles = [];
  }

  randomRange(start, end) {
    return (end - start) * Math.random() + start;
  }

  renderCircle() {
    // 实心圆
    const circle = new Circle({
      context: this.context,
      origin: this.origin,
      color: randomColor(),
      angle: this.randomRange(Math.PI - 1, Math.PI + 1),
      speed: this.randomRange(1, 6),
    });
    this.circles.push(circle);
  }

  renderWaterMelon() {
    // 西瓜
    const watermelon = new WaterMelon({
      context: this.context,
      origin: this.origin,
      color: randomColor(),
      angle: this.randomRange(Math.PI - 1, Math.PI + 1),
      speed: this.randomRange(1, 8),
    });
    this.circles.push(watermelon);
  }

  renderFirework() {
    // 烟花
    const firework = new Firework({
      context: this.context,
      origin: this.origin,
      color: randomColor(),
      angle: this.randomRange(Math.PI - 1, Math.PI + 1),
      speed: this.randomRange(1, 6),
    });
    this.circles.push(firework);
  }

  init() {
    for (let i = 0; i < this.circleCount; i++) {
      if (i % 3 === 0) {
        this.renderWaterMelon();
      } else if (i % 2 === 0) {
        this.renderCircle();
      } else {
        this.renderFirework();
      }
    }
  }

  move() {
    this.circles.forEach((circle, index) => {
      if (
        circle.position.x > this.area.width ||
        circle.position.y > this.area.height
      ) {
        return this.circles.splice(index, 1);
      }
      circle.move();
    });
    if (this.circles.length == 0) {
      this.stop = true;
    }
  }

  draw() {
    this.circles.forEach((circle) => circle.draw());
  }
}

class CursorSpecialEffects {
  constructor() {
    this.computerCanvas = document.createElement("canvas");
    this.renderCanvas = document.createElement("canvas");

    this.computerContext = this.computerCanvas.getContext("2d");
    this.renderContext = this.renderCanvas.getContext("2d");

    this.globalWidth = window.innerWidth;
    this.globalHeight = window.innerHeight;

    this.booms = [];
    this.running = false;
  }

  handleMouseDown(e) {
    const boom = new Boom({
      origin: { x: e.clientX, y: e.clientY },
      context: this.computerContext,
      area: {
        width: this.globalWidth,
        height: this.globalHeight,
      },
    });
    boom.init();
    this.booms.push(boom);
    this.running || this.run();
  }

  handlePageHide() {
    this.booms = [];
    this.running = false;
  }

  init() {
    const style = this.renderCanvas.style;
    style.position = "fixed";
    style.top = style.left = 0;
    style.zIndex = "999999999999999999999999999999999999999999";
    style.pointerEvents = "none";

    style.width =
      this.renderCanvas.width =
      this.computerCanvas.width =
        this.globalWidth;
    style.height =
      this.renderCanvas.height =
      this.computerCanvas.height =
        this.globalHeight;

    document.body.append(this.renderCanvas);

    window.addEventListener("mousedown", this.handleMouseDown.bind(this));
    window.addEventListener("pagehide", this.handlePageHide.bind(this));
  }

  run() {
    this.running = true;
    if (this.booms.length == 0) {
      return (this.running = false);
    }

    requestAnimationFrame(this.run.bind(this));

    this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight);
    this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight);

    this.booms.forEach((boom, index) => {
      if (boom.stop) {
        return this.booms.splice(index, 1);
      }
      boom.move();
      boom.draw();
    });
    this.renderContext.drawImage(
      this.computerCanvas,
      0,
      0,
      this.globalWidth,
      this.globalHeight
    );
  }
}

const cursorSpecialEffects = new CursorSpecialEffects();
cursorSpecialEffects.init();

console.log("click.....");
