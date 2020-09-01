export {}

class Person {
  constructor(private _name: string, private _age: number) {
    this._name = _name
    this._age = _age
  }

  get name(): string {
    return this._name
  }

  set name(newName: string) {
    this._name = `${newName} Kim`
  }
}

const person: Person = new Person('Andrea', 29)
console.log(person.name) // Andrea
console.log(person.name = 'Andrea') // Andrea
console.log(person.name) // Andrea Kim