interface IPerson {
  name: string,
  hello(): void
}

class Person implements IPerson {
  name: string

  constructor(name: string) {
    this.name = name
  }

  hello(): void {
    console.log('hello, %s', this.name)
  }
}

const andrea = new Person('andrea')
andrea.hello()
