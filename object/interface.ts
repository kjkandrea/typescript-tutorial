const personDefault : {name: string, age: number } = {
  name : 'Andrea',
  age: 29
}

console.log(personDefault) // { name: 'Andrea', age: 29 }

interface Person {
  name: string
  age: number
}

const personInterface : Person = {
  name: 'Haebogoyang',
  age: 30
}

console.log(personInterface) // { name: 'Haebogoyang', age: 30 }