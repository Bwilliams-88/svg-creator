class GeneratedSVG {
  constructor() {
    this.shape = '';
    this.text = '';
  };
  render() {
    return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>${this.shape}${this.text}</svg>`
  }
  svgText(text){
    this.text = text
  }
  svgShape(shape){
    this.shape = shape
  }
}




// function generatedSVG (text, txtColor, shape, shapeColor) {
// const svgContent = `<svg txtColor='${txtColor}' shape='${shape}' shapeColor='${shapeColor}' xmlns='http://www.w3.org/2000/svg'>
// <rect width='100%' height='100%' fill=${shapeColor}'>
// </svg>`;

//     return svgContent;
// };
// Function to rend background color of logo

module.exports = GeneratedSVG;