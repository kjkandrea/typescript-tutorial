export{}

let year: string | number

year = "2020년" // true
year = 2020 // true
// year = false // false

const typeChecker = (value: string|number|boolean): string => {
  enum types {
    string = "string 형식",
    number = "number 형식",
    boolean = "boolean 형식"
  }

  if (typeof value === "string") {
    return `${value}는(은) ${types.string} 입니다.`
  }

  if (typeof value === "number") {
    return `${value}는(은) ${types.number} 입니다.`
  }

  if (typeof value === "boolean") {
    return `${value}는(은) ${types.boolean} 입니다.`
  }
}

console.log('type check : %s', typeChecker(34 * 45))