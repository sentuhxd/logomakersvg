const inquirer = require('inquirer');
const {writeFile} = require('fs/promises')
const {Square, Circle, Triangle} = require('./libs/shape.js')
const Svg = require('./libs/svg.js');





function start() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'Enter 1-3 Letters for Your Logo',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a colorkeyword or HEXADECIMAL number for the logos text color',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Choose a Logo Shape',
            choices: ['square', 'circle', 'triangle'],

        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Enter a colorkeyword or HEXADECIMAL number for the logos background color',
                
        },
       
    ])
    .then(({logoName, textColor, logoShape, logoColor}) => {
        let choiceofShape; 
        switch(logoShape) {
            case 'square':
                choiceofShape = new Square()
                break;

            case 'triangle':
                choiceofShape = new Triangle()
                break;
            
            case 'circle': 
                choiceofShape = new Circle()
                break;
        }
        choiceofShape.setColor(logoColor);
        const svg = new Svg();
        svg.setTextMessageColor(textColor, logoName);
        svg.setShape(choiceofShape);
        return writeFile('logo.svg', svg.render())
    })
    .then(() => {
        console.log("successfully created logo.svg")
        })
    .catch((error) => {
        console.log(error);
    })

}

start();

module.exports = {};