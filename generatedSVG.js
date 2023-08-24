const {Circle, Square, Triangle} = require('./lib/shapes.js')

class GeneratedSVG {
  constructor() {
    this.shape = '';
    this.text = '';
    this.txtColor = '';
    this.shapeColor = '';
  };
  render() {
    return `
    <svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${this.shape}
    ${this.text}
    </svg>`
  }
  svgText(text){
    this.text = text
  }
  svgShape(shape){
    this.shape = shape
  }
  svgTxtColor(txtColor) {
    this.txtColor = txtColor
  }
  svgShapeColor(shapeColor) {
    this.shapeColor = shapeColor
  }
}


module.exports = GeneratedSVG;