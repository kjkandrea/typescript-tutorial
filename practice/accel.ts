export {}
// Class로 엑셀 기능이 있는 차 만들기

interface ICar {
  honk(): void
  accel(speed: number): void
  getSpeed(): number
}

class Car implements ICar {
  private speed: number
  constructor(private name: string) {
    this.name = name
    this.speed = 0
  }

  public honk(): void {
    console.log('부우우웅')
  }

  public accel(speed: number): void {
    this.speed += speed
  }

  public getSpeed(): number {
    return this.speed
  }
}

const car = new Car('spark')
car.honk()
car.accel(30)
car.accel(80)
console.log(car.getSpeed())