export {};

interface IPerson {
    name: string,
    hello(): void
}

class Person implements IPerson {
    name: string = "andrea"

    constructor(name: string) {
        this.name = name
    }

    hello(): void {
        console.log('hello, %s', this.name)
    }
}

const person = new Person('andrea')
person.hello()