export {}
interface Person {
  name: string
  age: number
}

// Generic과 type alias를 결합하여 사용하여 type을 찾아낼 수 있는 시스템을 만든다.
function getProperty<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key]
}

// Generic과 type alias를 결합하여 사용하여 type을 찾아내고, 타입을 다시 재정의 하는 함수
function setProperty<T, K extends keyof T> (obj: T, key: K, value: T[K]): void {
  obj[key] = value
}

const person: Person = {
  name: 'Andrea',
  age: 29
}

console.log(getProperty(person, 'age'))
setProperty(person, 'name', 'Haebogoyang')
console.log(getProperty(person, 'name'))
