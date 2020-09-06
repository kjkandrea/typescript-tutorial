// 타입 알리아스 (type alias)
type Status = 'open'|'close'
let issue: Status = 'open'

function changeStatus(arg: Status): void {
  issue = arg
}

changeStatus('close')
console.log(issue) // close
