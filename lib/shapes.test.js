const jest = require('jest');
const svg = require('generatedSVG.js');

Test('generates SVG with correct attributes', () => {
    const shape = `${shape}`;
    const svg = GeneratedSVG(shape);

    expect(svg).toContain(`<svg shape='${shape}'`);
    expect(svg).toContain(`<rect width='100%' height='100%' shapeColor='${shapeColor}'`);
});