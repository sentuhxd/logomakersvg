const {Square, Triangle, Circle} = require("../libs/shape");

// Unit testing -> testing for a triangle with a blue background to render
describe('Square', () => {
    test("should render svg for red square", () => {
        const expectSvg = `<rect x="73" y="40" width="160" height="160" fill="red" />`;

        const square = new Square();

        square.setColor("red");

        const trueSvg = square.render();

        console.log(trueSvg, expectSvg);

        expect(trueSvg).toEqual(expectSvg);
        
    });
});

describe("Triangle test", () => {
  test("test for a triangle with a yellow color", () => {
    const shape = new Triangle();

    shape.setColor("yellow");

    expect(shape.render()).toEqual(

      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );

  });
});

describe('Circle', () => {
    test("should render svg for blue circle", () => {
        const expectSvg = `<circle cx="150" cy="115" r="80" fill="blue" />`;

        const circle = new Circle();

        circle.setColor("blue");

        const trueSvg = circle.render();

        console.log(trueSvg, expectSvg);

        expect(trueSvg).toEqual(expectSvg);

    });
});
