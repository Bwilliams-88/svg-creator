const jest = require('jest');
const svg = require('generatedSVG.js');

Test('generates SVG with correct attributes', () => {
    const text = `${text}`;
    const svg = GeneratedSVG(text);

    expect(svg).toContain(`<svg text='${text}'`);
    expect(svg).toContain(`<rect width='100%' height='100%' shapeColor='${text}'`);
});