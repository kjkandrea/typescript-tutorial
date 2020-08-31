export {}

interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  job: string
}

const developer: Developer = {
  name: 'andrea',
  age: 29,
  job: 'front-end'
}

console.log(developer)