const jest = require('jest');
const svg = require('./generatedSVG.js');
const {Circle, Triangle, Square} = require('./shapes.js');

describe('Square', () => {
    Test('Testing for SVG shapes', () => {
        const shape = `${shape}`;
        const svg = GeneratedSVG(shape);
        const NewSquare = new Square();

        expect(svg).toContain(`<svg shape='${shape}'`);
        expect(svg).toContain(`<rect width="100" height="100" fill='${this.color}' />`);
    });
});

describe('Triangle', () => {
    Test('Testing for SVG shapes', () => {
        const shape = `${shape}`;
        const svg = GeneratedSVG(shape);
        const NewTriangle = new Triangle();
    
        expect(svg).toContain(`<svg shape='${shape}'`);
        expect(svg).toContain(`<polygon points="50 15, 100 100, 0 100" fill=${this.color} />`);
    });
});

describe('Circle', () => {
    Test('Testing for SVG shapes', () => {
        const shape = `${shape}`;
        const svg = GeneratedSVG(shape);
        const NewCircle = new Circle();
    
        expect(svg).toContain(`<svg shape='${shape}'`);
        expect(svg).toContain(`<circle cx='150' cy='100' fill='${this.color}' shape='${shape}' />`);
    });
});