# 학습 리포지토리

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
## enum 타입 (enum type)

enum 타입은 숫자 열거형과 문자 열거형으로 나뉘는데, 주로 **유한한 자료를 열거 하고자 할 때** 사용한다. 
가령 다국어 코드를 자료형으로 만들기 위해 `국가:국가 코드` 를 열거하고자 한 다면 다음과 같이 사용할 수 있다.

```
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