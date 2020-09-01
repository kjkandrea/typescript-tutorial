export {}

const myIndexOf = (value: string|number, key: string): number => {
  if (typeof value === 'number') return -1

  return value.indexOf(key)
}

console.log(myIndexOf("andrea", "e"))