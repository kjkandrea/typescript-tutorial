export {}

class Rabbit {
  name = "Rabbit"
  age = 2
}

class Bird {
  name = "Bird"
  leg = 2
  singing = true
}

function diffCheck(x: Rabbit|Bird) {
  if (x instanceof Rabbit) {
    console.log(x.name)
    console.log(x.age)
  }

  console.log(x.name)
  // console.log(x.leg) // error
  // console.log(x.age) // error
  // console.log(x.singing) // error
}

diffCheck(new Rabbit()) // Rabbit, 2, Rabbit