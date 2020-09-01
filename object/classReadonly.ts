export {}

class Person {
  public readonly name: string
  private readonly age: number = 29

  constructor(name: string) {
      this.name = name
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    // this.name = name // error
  }
}

const person = new Person('andrea')
console.log(person.getName())

// person.name = "Haebogoyang" // error