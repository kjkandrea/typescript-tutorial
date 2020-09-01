export {}

function hello<T>(message: T): T {
  return message
}

console.log(
  hello('Andrea'), // Generic 타입을 쓰지 않으면 T로 추론
  hello<string>('Andrea') // Generic 타입을 쓰면 T를 확인
)

console.log(
  // hello<string>(1) // error
)