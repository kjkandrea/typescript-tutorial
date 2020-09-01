export {}

class Person<T> {
  private _name: T

  constructor(name: T) {
    this._name = name
  }

  getName (): T {
    return this._name
  }

  nameTypeChecker (): string {
    return typeof this._name
  }
}

const andrea = new Person<string>("andrea")
const foo = new Person<number>(1)
console.log(andrea.getName())
console.log(andrea.nameTypeChecker())
console.log(foo.getName())
console.log(foo.nameTypeChecker())
