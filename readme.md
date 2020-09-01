# 학습 리포지토리

## typescript?

타입스크립트는 자바스크립트의 슈퍼셋이다.
타입스크립트는 컴파일 언어(Complied Language)이다.


## typescript 인스톨

```
npm i -g typescript
```

## ts 실행하기 : Hello Typescript

typescript 설치 후 다음과 같은 커맨드를 실행한다. 예시에서는 hello.ts를 파일을 만들어 실행한다.

```
tcs hello.ts
```

hello.ts에 문제가 없다면 hello.js 파일이 생성된다. hello.js를 node를 통해 실행한다.

```
node hello.js
```

## watch

```
tsc hello.ts -watch
```

## tsconfig.json

init

```
tsc --init
```

지정된 범위내의 .ts파일을 tsconfig.json 설정으로 컴파일하기
(-p === --project)

```
tsc -p ./
```

* `"noImplicitAny": true` : 엄격한 타입검사. any를 명시하지않으면 컴파일 해주지 않음
* `"noImplicitAny": false` : 유연한 타입검사. any를 명시하지않아도 any로 취급해줌
=======
## ts-node

ts-node를 사용하면 위의 컴파일 -> 실행 절차를 한 단계로 줄일 수 있다.
다음과 같이 설치 후..

```
sudo npm i -g ts-node
``` 

다음과 같이 실행한다.

```
ts-node hello.ts
```

## 타입 표기 (Type Annotation)

변수 또는 값의 타입을 표기하기 위해 타입 표기를 사용한다. 
타입 표기는 식별자 또는 값 뒤에 콜론(:)을 붙여 `value: type` 의 형태로 표기한다.

``` typescript
const typescript:string = "awesome"
const hasType:Object = {
    TypeScript: true,
    JavaScript: false
}
```

## basic type

### any

any 타입은 제약이 없는 타입으로 어떠한 값도 받아들일 수 있다.

``` typescript
let foo:any = "anything"
``` 

any 로 이루어진 배열을 만들때는? 다음과 같이 사용한다

``` typescript
let bar:any[] = [1, true, "string"]
```

### 튜플 타입 (tuple type)

튜플 타입은 n개의 요소로 이뤄진 배열에 각각 대응하는 타입을 의미한다.

``` typescript
let x:[string, number] = ["typescript", 1]
```
### enum 타입 (enum type)

enum 타입은 숫자 열거형과 문자 열거형으로 나뉘는데, 주로 **유한한 자료를 열거 하고자 할 때** 사용한다. 
가령 다국어 코드를 자료형으로 만들기 위해 `국가:국가 코드` 를 열거하고자 한 다면 다음과 같이 사용할 수 있다.

``` typescript
enum LanguageCode {
    korean = 'ko',
    english = 'en',
    japanese = 'ja',
    chinese = 'zh',
    spanish = 'es'
}

const localeCode: LanguageCode = LanguageCode.korean
console.log(localeCode) // ko
```

### 타입 어설션 (Type assertions)

'타입은 이것이다' 라고 컴파일러에게 명시적으로 알려주는 행위
두가지 문법이 있다.
* `변수 as 타입`
* `<타입>변수`

``` typescript
let foo: any = "any foo"

for (let word of foo as string) {
    console.log(word)
}
```

### 타입 알리아스 (Type Alias)

타입에 직접 이름을 부여하는 행위를 일컫는다.
제너릭 타입, 유니온 타입에 이름을 붙힐 수 있는데, 유니온 타입에 유용하다.
다음과 같이 쓴다.

``` typescript
type StringOrArray = string | Array<string> // type alias
const str: StringOrArray = '안녕'
const arr: StringOrArray = ['잘', '가']

function printWord (arg: StringOrArray) : void {
  for (let word of arg) {
    console.log(word)
  }
}

printWord(str) // 안, 녕
printWord(arr) // 잘, 가
```

## (interface)

객체가 특정한 타입의 프로퍼티 혹은 메소드를 가진다고 미리 선언하는 것이다.
다음과 같이 사용한다.

``` typescript
interface Person {
  name: string
  age: number
}

const personInterface: Person = {
  name: 'Haebogoyang',
  age: 30
}
```

`interface` 를 class에 사용하기 위해서는 `implements` 키워드를 이용한다.

``` typescript
interface IPerson {
    name: string,
    hello(): void
}

class Person implements IPerson {
    name: string = "andrea"

    hello(): void {
        console.log('hello, %s', this.name)
    }
}
```

### 선택적 사용 (Optional)

타입을 선언해두되, 선택적 구현을 하게 할 수 있을까? Optional 프로퍼티를 사용하면 된다.
프로퍼티 뒤에 `?` 를 붙여주면 된다. 도형 class를 생성하는 예시를 살펴보자.

``` typescript
interface Shape {
    width?: number
    height?: number
    radius?: number
    printArea(): void
}

class Rectangle implements Shape {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    printArea(): void {
        console.log(this.width * this.height)
    }
}

class Circle implements Shape {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    printArea(): void {
        console.log(Math.PI * this.radius ** 2)
    }
}

const rectangle = new Rectangle(2, 2)
const circle = new Circle(4)
rectangle.printArea()
circle.printArea()
```

`width`, `height`, `radius`가 각각 옵셔널 프로퍼티로 지정되어 특정 프로퍼티를 사용하지 않아도 문제가 발생하지 않는다.

### 확장 (Extends)

인터페이스는 ES6에 추가된 class와 같이 extends로 확장할 수 있다. 사용법은 `class`와 동일하다.

``` typescript
export {}

interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  job: string
}

const developer: Developer = {
  name: 'andrea',
  age: 29,
  job: 'front-end'
}

console.log(developer)
```

## Class

`class`의 기본적인 사용법은 ES6의 그것과 동일하다. `interface` 를 통해 타입을 미리 선언해둔 후 class 를 작성할 수 있을 것이다.
typescript에서는 class를 통해 객체지향 프로그래밍을 할 수 있도록 보다 많은 기능을 제공한다.

## Class의 접근 제한자 (access modifier)

우선 들어가기에 앞서 접근 제한자의 개요를 간단히 살펴보자.

1. `public` 으로 선언된 요소는 상속이 가능하다. 객체를 통해 외부 접근을 할 수 있다.
2. `private` 으로 선언된 요소는 상속이 되지 않아 자식 클래스에서 접근할 수 없다. 객체를 통한 외부 접근도 불가하다.
3. `protected` 으로 선언된 요소는 성속이 가능하다. 객체를 통한 외부 접근은 불가 하다.

### public

public 으로 선언된 요소는 다음과 같이 객체에 자유롭게 접근할 수 있다.

``` typescript
export {}

class Person {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

const person = new Person("Andrea") // 1.
person.name = "Haebogoyang" // 2. public 으로 선언된 요소이기에 제어 가능

console.log(person) // 3. Person { name: 'Haebogoyang' }
```

`1`에서 constructor를 통해 인자를 넘겨 `name`을 정의 했으나,
`2`에서 person 객체에 직접적으로 접근하여 값을 변경 하였다.
따라서 person 객체는 `3` 과 같은 결과가 나타난다.

public 으로 선언된 요소에는 **객체를 통해 외부 접근을 할 수 있다.**