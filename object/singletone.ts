export {}

class Singletone {
  private static Instance: Singletone = null

  public static getInstance(): Singletone {
    if(Singletone.Instance === null) {
      Singletone.Instance = new Singletone()
    }

    return Singletone.Instance
  }

  private constructor() {
  }
}

const cl = Singletone.getInstance()