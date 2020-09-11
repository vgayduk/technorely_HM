class Shape {
	constructor(container, width = 1000, height = 300) {
		this.initCanvas(container, width, height);
  }
  
	initCanvas = (container, width, height) => {
		this.c = document.createElement('canvas');
		this.root = document.querySelector(container) || document.body;
		this.root.appendChild(this.c);
		this.ctx = this.c.getContext('2d');
		this.c.width = width;
		this.c.height = height;
	}
}

class Square extends Shape {
	constructor(...args) {
		super(...args);
	}

	draw = (x, y, w, h, color = '#a6242b') => {
		this.ctx.fillStyle = color;
		this.ctx.rect(x, y, w, h);
		this.ctx.fill();
	}
}

class Circle extends Shape {
	constructor(...args) {
		super(...args);
	}

	draw = (x, y, r, color = '#a6242b') => {
		this.ctx.beginPath();
		this.ctx.fillStyle = color;
		this.ctx.arc(y, x, r, 0, 2 * Math.PI);
		this.ctx.fill();
	}
}

class Triangle extends Shape {
	constructor(...args) {
		super(...args);
	}

	draw = (x1, y1, x2, y2, x3, y3, color = '#a6242b') => {
		this.ctx.beginPath();
		this.ctx.fillStyle = color;
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.lineTo(x3, y3);
		this.ctx.lineTo(x1, y1);
		this.ctx.fill();
	}
}

const square = new Square('#canvas-container');
const circle = new Circle('#canvas-container');
const triangle = new Triangle('#canvas-container');

square.draw(25, 25, 100, 100);
circle.draw(70, 70, 50);
triangle.draw(70, 30, 100, 120, 40, 120);
