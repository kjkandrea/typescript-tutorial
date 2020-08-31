export {};

interface IPerson {
    name: string,
    hello(): void
}

class Person implements IPerson {
    name: string = "andrea"

    hello(): void {
        console.log('hello, %s', this.name)
    }
}

const person = new Person()
person.hello()