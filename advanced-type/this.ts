class Counter {
  constructor(private count: number = 0) {
    this.count = count
    console.log(this) // Counter
  }

  getCount(): number {
    return this.count
  }

  increment(): this {
    this.count += 1
    return this
  }

  decrement(): this {
    this.count -= 1
    return this
  }
}

const counter = new Counter()

console.log(counter.increment().increment().increment().decrement().getCount()) // 2