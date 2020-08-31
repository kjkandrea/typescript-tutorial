export {}

interface Shape {
  (width: number, height: number, radius?: number): void
}

const getArea: Shape = (width, height) => {
  console.log(width * height)
}

getArea(2,2)