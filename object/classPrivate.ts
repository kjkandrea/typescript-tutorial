export {}

class Person {
  protected name: string = 'Andrea'
  private age: number = 29

  getAge(): number {
    return this.age
  }
}

class Developer extends Person {
  protected job: string = 'FE Developer'
}

const person = new Person()
const developer = new Developer()

console.log(person.getAge()) // 29
// console.log(person.age) // syntax error
// console.log(developer.age) // syntax error