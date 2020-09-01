export {}

class Person {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

const person = new Person("Andrea")
person.name = "Haebogoyang" // public 으로 선언된 요소이기에 제어 가능

console.log(person) // Person { name: 'Haebogoyang' }