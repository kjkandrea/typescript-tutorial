interface Shape {
    width?: number
    height?: number
    radius?: number
    printArea(): void
}

class Rectangle implements Shape {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    printArea(): void {
        console.log(this.width * this.height)
    }
}

class Circle implements Shape {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    printArea(): void {
        console.log(Math.PI * this.radius ** 2)
    }
}

const rectangle = new Rectangle(2, 2)
const circle = new Circle(4)
rectangle.printArea()
circle.printArea()