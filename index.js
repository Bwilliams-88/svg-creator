// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('generatedSVG.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo text (example: MIT or IBM).',
    },
    {
        type: 'input',
        name: 'txtcolor',
        message: 'What color text would you like? (example: Yellow or #FFFF00).',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Square', 'Triangle', 'Circle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a keyword or hexadecimal number for your background color. (example: Yellow or #FFFF00).',
    } 
];

// Function to create the logo.svg file
function writeSVG(content) {
    console.log(content);
    const svgContent = svg(content);
    console.log(svgContent);

    fs.writeFile('logo.svg', svgContent, (err) => {
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
    .then(answers => {
        writeSVG(answers);        
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Function call to initialize app
init();