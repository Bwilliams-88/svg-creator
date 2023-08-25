const {Circle, Triangle, Square} = require('./shapes.js');

describe('Square', () => {
    test('Testing for SVG shapes', () => {
        const shape = `<rect x="80" y="45" width="150" height="125" fill="green" />`;
        const NewSquare = new Square();
        NewSquare.setColor('green'); 
        const squareRender = NewSquare.render();

        expect(squareRender).toEqual(shape);
    });
});

describe('Triangle', () => {
    test('Testing for SVG shapes', () => {
        const shape = `<polygon points="150 15, 250 175, 50 175" fill="green" />`;
        const NewTriangle = new Triangle();
        NewTriangle.setColor('green');
        const triangleRender = NewTriangle.render();
    
        expect(triangleRender).toEqual(shape);
    });
});

describe('Circle', () => {
    test('Testing for SVG shapes', () => {
        const shape = `<circle cx="150" cy="100" r="80" fill="green" />`;
        const NewCircle = new Circle();
        NewCircle.setColor('green');
        const circleRender = NewCircle.render();
    
        expect(circleRender).toEqual(shape);
    });
});