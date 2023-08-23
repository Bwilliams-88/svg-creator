const jest = require('jest');
const svg = require('generatedSVG.js');

Test('generates SVG with correct attributes', () => {
    const shapeColor = `${shapeColor}`;
    const svg = GeneratedSVG(shapeColor);

    expect(svg).toContain(`<svg shapeColor='${shapeColor}'`);
    expect(svg).toContain(`<rect width='100%' height='100%' shapeColor='${shapeColor}'`);
});