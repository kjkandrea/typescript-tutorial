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