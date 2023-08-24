const jest = require('jest');
const svg = require('generatedSVG.js');

describe('generates SVG with background color', () => {
    Test('Test for shape colors', () => {
        const shapeColor = `${shapeColor}`;
        const svg = GeneratedSVG(shapeColor);
    
        expect(svg).toContain(`<svg shapeColor='${shapeColor}'`);
        expect(svg).toContain(`<rect width='100%' height='100%' shapeColor='${shapeColor}'`);
    });   
});