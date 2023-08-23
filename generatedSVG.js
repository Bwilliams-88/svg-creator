// Function to render shapes
function renderShape(shape) {
  if (shape === 'square'){
    return `${shape}`
  }
  if (shape === 'triangle'){
    return `${shape}`
  }
  if (shape === 'circle'){
    return `${shape}`
  }
}
// Function to render text
function generatedSVG (text, txtColor, shape, shapeColor) {
const svgContent = `<svg text='${text}' txtColor='${txtColor}' shape='${shape}' shapeColor='${shapeColor}' xmlns='http://www.w3.org/2000/svg'>
<rect width='100%' height='100%' fill=${shapeColor}' />
</svg>`;

    return svgContent;
};
// Function to rend background color of logo

module.exports = generatedSVG;