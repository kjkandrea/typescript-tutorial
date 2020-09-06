export {}

class Person {
  protected name: string = 'Andrea'
  private age: number = 29

  public getAge(): number {
    return this.age
  }
}

class Developer extends Person {
  public job: string = 'FE Developer'
}

const person = new Person()
const developer = new Developer()

person.getAge() // 29
developer.getAge() // 29
developer.job // FE Developter

person.name // error
developer.age // error
