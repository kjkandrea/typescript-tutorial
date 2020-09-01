export {}

class Parent {
  constructor(protected name:string, private age:number) { }

  print(): void {
    console.log(`이름은 ${this.name} 이고 나이는 ${this.age} 입니다.`)
  }
}

class Child extends Parent {
  constructor() {
    super('Andrea Jr.', 5)
  }
}

const child = new Child()

child.print()

/*
1. constructor를 정의하고 this를 사용하려면, super를 통해 부모의 생성자를 호출해야한다.
2. super를 생성할때에 부모의 생성자와 입력 타입이 같아야 한다.
 */