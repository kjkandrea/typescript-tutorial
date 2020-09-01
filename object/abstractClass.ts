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