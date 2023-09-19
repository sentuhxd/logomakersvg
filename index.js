const inquirer = require('inquirer');
const fs = require('fs')
const {writeFile} = require('fs/promises')
const Svg = require('./libs/svg.js')
const {Square, Circle, Triangle} = require('./libs/shape.js')

function start() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoName',
                message: 'Enter 1-3 Letters for Your Logo',
            },
            {
                type: 'input',
                name: 'logoColor',
                message: 'Enter a colorkeyword or HEXADECIMAL number for the logos background color',
            },
            {
                type: 'list',
                name: 'textColor',
                message: 'Enter a colorkeyword or HEXADECIMAL number for the logos text color',
            },
            {
                type: 'input',
                name: 'logoShape',
                message: 'Choose a Logo Shape',
                choices: ['square', 'circle', 'triangle'],

            },
    ])
    .then((responses) => {
        if(responses.text.length > 3) {
            console.log('Keep it 3 Letters or Under');
            start();
        } else {
            writetoFile('logo.svg', responses);
        }
    });

}

start();