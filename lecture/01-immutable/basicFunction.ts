function sum (arg1: number, arg2: number): number {
  return arg1 + arg2
}

const total = sum(60, '30')
// TS2345 : Argument of type '"30"' is not assignable to parameter of type 'number'.

console.log(total)
