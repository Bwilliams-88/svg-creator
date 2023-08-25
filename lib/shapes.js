class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150 15, 250 175, 50 175" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="45" width="150" height="125" fill="${this.color}" />`
    }
}

// const NewCircle = new Circle();
// console.log(NewCircle.color);
// console.log(NewCircle.render());

// const NewTriangle = new Triangle();
// console.log(NewTriangle.color);
// console.log(NewTriangle.render());

// const NewSquare = new Square();
// console.log(NewSquare.color);
// console.log(NewSquare.render());


module.exports = {Circle, Triangle, Square};