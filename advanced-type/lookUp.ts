export {}
let testUnion :"name"|"gender"|"age" = "name"

interface Profile {
  name: string
  gender: string
  age: number
}
type Profile1 = keyof Profile
let pValue: Profile1
pValue = 'name' // ok
pValue = 'gender' // ok
pValue = 'age' // ok
// pValue = 'string' // TS2322: Type '"string"' is not assignable to type '"name" | "gender" | "age"'.



