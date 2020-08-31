type StringOrArray = string | Array<string> // type alias
const str: StringOrArray = '안녕'
const arr: StringOrArray = ['잘', '가']

function printWord (arg: StringOrArray) : void {
  for (let word of arg) {
    console.log(word)
  }
}

printWord(str)
printWord(arr)