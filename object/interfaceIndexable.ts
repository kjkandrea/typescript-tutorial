interface Person2 {
  name: string
  [index: string]: string
}

const person: Person2 = {
  name: 'kim andrea'
}

person.lastname = 'kim'
person.firstname = 'andrea'

console.log(person)