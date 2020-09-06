export {}

// 타입 알리아스 (type alias)
type Status = 'open'|'close'
let issue: Status = 'open'

function setIssueStatus(arg: Status): void {
  issue = arg
}

issue = ''

setIssueStatus('close')
console.log(issue) // close
