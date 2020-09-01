export {}
function arrayLength<T>(arr: T[]): number {
  return arr.length
}

console.log(
  arrayLength<number>([1,2,3,4])
)