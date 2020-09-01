export {}

class Person {
  protected name: string = 'Andrea'
}

class Developer extends Person {
  getName(): string {
    return this.name
  }
}

const developer = new Developer()

console.log(developer.getName()) // Andrea