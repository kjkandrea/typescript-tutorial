interface Car {
  name: string
  speed: number
  print(): void
  hello(): string
}

const myCar: Car = {
  name: 'spack',
  speed: 100,
  print: function () {
    console.log(`내 차는 ${this.name}이고 속도는 ${this.speed}이에요.`)
  },
  hello(): string {
    return "just hello"
  }
}

myCar.print()
console.log(myCar.hello())