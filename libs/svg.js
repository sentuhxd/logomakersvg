class Svg {
    constructor() {
        this.shapeElement= '';
        this.textElement = '';
    }
    render() {
        return `<svg version="1.1" height="200" width="300">  xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    genShape(shape) {
        this.shapeElement = shape.render()
    }
    setColor(textColor, message) {
        if(message.length > 3 ) {
            throw new Error('No more than 3 Characters')
        }
        this.textElement = ` <text x="150" y="100" font-size="65" text-anchor="middle" fill="${textColor}>${message}</text>`
        
    }
}


module.exports = Svg ;