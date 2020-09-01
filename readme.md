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

## 기본 타입 (Basic Type)

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
2. `protected` 으로 선언된 요소는 성속이 가능하다. 객체를 통한 외부 접근은 불가 하다.
3. `private` 으로 선언된 요소는 상속이 되지 않아 자식 클래스에서 접근할 수 없다. 객체를 통한 외부 접근도 불가하다.

### public

public 으로 선언된 요소는 다음과 같이 객체에 자유롭게 접근할 수 있다.

``` typescript
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

### protected

protected 으로 선언된 요소는 public 처럼 객체를 통해 직접적인 접근이 불가하다.
다음과 같이 동일하게 실행하여보면..

``` typescript
class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }
}

const person = new Person("Andrea")
person.name = "Haebogoyang" // protected 으로 선언된 요소이기에 제어 불가. 문법 오류

console.log(person) // Person { name: 'Andrea' }
```

```
Property 'name' is protected and only accessible within class 'Person' and its subclasses.
```

보호되어 객체를 통해 엑세스 할 수 없다는 에러가 출력된다.

단, 선언 된 요소는 상속이 가능하다. 예제를 통해 살펴보자.

```
class Person {
  protected name: string = 'Andrea'
}

class Developer extends Person {
  getName(): string {
    return this.name
  }
}

const developer = new Developer()

console.log(developer.getName()) // Andrea
```

Person의 자식 클래스 Developer에서 `getName()` 을 통해 부모의 name 요소에 접근하여 값을 리턴한다.
이처럼 protected 으로 선언된 요소는 **성속이 가능하다.**

### private

private 로 선언된 요소는 상속이 되지 않아 **자식 클래스에서 접근할 수 없다**. **객체를 통한 외부 접근도 불가하다.**

``` typescript
class Person {
  protected name: string = 'Andrea'
  private age: number = 29

  getAge(): number {
    return this.age
  }
}

class Developer extends Person {
  protected job: string = 'FE Developer'
}

const person = new Person()
const developer = new Developer()

console.log(person.getAge()) // 1. 29
console.log(person.age) // 2. syntax error
console.log(developer.age) // 3. syntax error
```

private 요소의 값을 출력하려면 직접적인 객체 접근이 허용되지 않기에, `1` 처럼 간접적으로 접근하여야 한다.
`2`, `3` 과 같은 접근은 모두 불가하다.

## 추상 클래스 (Abstract Class)

추상 클래스는 실체 클래스의 공통적인 부분을 추출해 어느정도 규격을 잡아놓은 추상적인 클래스이다.
[참고 : 추상 클래스 란?](https://limkydev.tistory.com/188)

추상 클래스를 사용하는 순서는 다음과 같다.

1. 구현되지 않은 추상 클래스(abstract class)를 선언한다.
2. 공통적으로 사용될 변수의 구조를 abstract 으로 정의한다.
3. 공통적으로 사용될 메서드의 구조를 abstract 으로 정의한다.
4. 자식 클래스에서 추상 클래스를 상속하여 추상 클래스의 설계 대로 구현한다.

소스코드를 통해 추상클래스의 사용에 대하여 살펴보자.

``` typescript
export {}

abstract class AbstractBird {
  public abstract birdName: string
  public abstract habitat: string
  public abstract flySound(sound: string): void

  fly(): void {
    this.flySound("파닥파닥")
  }

  getHabitat(): void {
    console.log(`${this.birdName}의 서식지는 ${this.habitat}입니다.`)
  }
}

class WildGoose extends AbstractBird {
  // 추상 변수를 상속함
  constructor(public birdName: string, public habitat: string) {
    super();
  }

  // 추상 메서드를 오버라이딩
  flySound(sound: string) {
    console.log(`${this.birdName}가 ${sound} 날아갑니다.`)
  }
}

const wildGoose = new WildGoose("기러기", "순천만 갈대밭")
wildGoose.fly() // 기러기가 파닥파닥 날아갑니다.
wildGoose.getHabitat() // 기러기의 서식지는 순천만 갈대밭입니다.
```

추상 클래스 `AbstractBird` 에 공통 기능을 담은 구현 메서드 `fly()` 를 추가하고 자식 클래스 `WildGoose`가 세세한 부분을 구현한다.

한가지 짚고 넘어가자. 얼핏 보기에는 인터페이스(Interface)와 비슷한것 같은데 차이점은 무엇일까?

## Abstract Class vs Interface

추상 클래스와 인터페이스는 존재 목적이 다르다.
추상 클래스의 목적은 해당 추상 클래스를 상속 받아서 기능을 이용하고, 확장 시키는데에 있다.

반면의 인터페이스는 메서드에 대한 껍데기만 있는데, 그 이유는 함수의 구현을 강제하기 위해서이다.
구현을 강제함으로써 구현된 객체의 같은 동작을 보장할 수 있다.

추상클래스는 말그대로 클래스이고, interface는 구현하기 전에 메소드에 대해 명세를 하는 것이라고 볼 수 있다.
'이러이러한 메소드를 쓸 것이다.' 인터페이스에 선언을 해놓고, 가져다가 반드시 선언된 그대로 모두 구현하면 되는게 인터페이스이고,    
이러이러한 메소드가 있지만 가져다 쓰거나 오버라이드 하거나, abstract가 붙은 메소드는 반드시 구현하면 되는게 abstract class이다.

[참고 : 추상화클래스와 인터페이스의 용도, 차이점, 공통점](https://marobiana.tistory.com/58)

## 고급 타입 (Advanced Type)

고급 타입이란 기본 타입을 바탕으로 새로운 타입을 정의하는 것이다.

### 유니온 타입 (Union Type)

2개 이상의 타입을 묶어 한 개의 타입으로 만드는 것이다.
유니온 타입으로 선언된 변수는 나열된 타입 중 하나의 타입에 속한 값만 할당 받아야한다.

``` typescript
let year: string | number

year = "2020년" // true
year = 2020 // true
// year = false // false
```

코드와 같이 `year` 에는 `string`, `number` 타입 만 할당 가능하다.

### 타입 가드 (Type Guard)

타입 가드는 유니온 타입에 속한 타입이 특정 타입인지 검사해 타입의 안정성을 확보하는 방법이다.
유니온 타입은 1개 이상의 타입이 들어 올 수 있으므로, 타입 별로 다른 액션을 일으키거나 할 때에는 타입 가드가 필요하다.
예시를 들어보면..

``` typescript
const myIndexOf = (value: string|number, key: string): number => {
  if (typeof value === 'number') return -1

  return value.indexOf(key)
}

console.log(myIndexOf("andrea", "e"))
```

첫 번째 인자의 타입을 `typeof`로 검사하여 타입이 number 일 경우 -1을 return 시키고,
string 일 경우 `indexOf`메서드를 를 통해 검사하여 리턴한다.
이 때 if 문의 역할이 타입 가드 이다.

### 문자열 리터럴 타입 (Literal Type)

문자열 리터럴 타입은 타입에 정의한 문자열만 할당받을 수 있는 타입이다.

``` typescript
var name: "andrea" = "andrea"
// var name: "andrea" = "haebogoyang" // error
``` 

이처럼 한가지 문자열만 지정하면 활용성이 없어 보이나 유니언 타입과 결합해 사용한다면 다음과 같이 사용할 수 있다.

``` typescript
type eventType = "click"|"mouseover"|"mouseout"

const on = (event: eventType, callback: (message: string) => void): void => {
  console.log(event)
  callback("callback!")
}

on("click", (message => console.log(message))) // click , callback!
```

on 함수의 첫번째 인수를 `eventType` 에 정의된 문자열 중 하나로 강제할 수 있다.
이로서 on 함수는 정해진 문자열 리터럴 타입중 하나를 받아 동작하는것으로 인터페이스가 제한된다.