class Shape {
    constructor() {
        this.color='';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="50 15, 100 100, 0 100" fill=${this.color}' />`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="100" height="100" fill='${this.color}' />`
    }
}

const NewCircle = new Circle();
NewCircle.setColor('green')
console.log(NewCircle.color);
console.log(NewCircle.render());
// const newShape = new Shape()
// newShape.setColor('blue')
// const oldShape = new Shape()
// oldShape.setColor('red')
// console.log(newShape.color)


module.exports = {Circle};
module.exports = {Triangle};
module.exports = {Square};