// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./generatedSVG.js');
const {writeFile} = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const { type } = require('os');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo text (example: MIT, IBM, or SVG).',
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Enter a keyword or hexadecimal number for your text color. (example: Yellow or #FFFF00).',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Square', 'Triangle', 'Circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a keyword or hexadecimal number for your background color. (example: Yellow or #FFFF00).',
    } 
];

// Function to create the logo.svg file
function writeSVG(content) {
    console.log(content);

    fs.writeFile('./examples/logo.svg', content, (err) => {
        if (err) {
            console.error('Error writing logo.svg:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
};

// Function to initialize app
function init() {
    console.log('Application Initialized');
    inquirer
    .prompt(questions)
    .then(({text, txtColor, shape, shapeColor}) => {
        // console.log(text);
        const svg = new SVG();
        const userText = `<text x="150" y="125" font-size="45" text-anchor="middle">${text}</text>`;
        svg.svgText(userText);
        svg.svgTxtColor(txtColor);
        let currentShape
        
              if (shape === 'Square'){
                currentShape = new Square;
              }
              if (shape === 'Triangle'){
                currentShape = new Triangle;
              }
              if (shape === 'Circle'){
                currentShape = new Circle;
              }

        currentShape.setColor(shapeColor)
        svg.svgShape(currentShape.render());
        writeSVG(svg.render());      
        return writeFile('logo.svg', svg.render());  
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Function call to initialize app
init();