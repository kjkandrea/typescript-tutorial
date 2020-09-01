export {}

class Person<T extends string|number> {
  private _name: T
  constructor(name: T) {
    this._name = name
  }
}

const minho = new Person('minho')
const iloh = new Person(15)
// const jinsil = new Person(true) // type error