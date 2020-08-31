export {}

interface Quackable {
  quack(): void
}

class Duck implements Quackable {
  quack() {
    console.log('꽥!')
  }
}

class Person {
  quack() {
    console.log('꽥!')
  }
}

function makeSomeNoiseWith(duck: Quackable): void {
  duck.quack()
}

makeSomeNoiseWith(new Duck()) // 꽥!
makeSomeNoiseWith(new Person()) // 꽥!