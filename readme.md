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