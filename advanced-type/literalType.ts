export{}

const name: "andrea" = "andrea"

type eventType = "click"|"mouseover"|"mouseout"

const on = (event: eventType, callback: (message: string) => void): void => {
  console.log(event)
  callback("callback!")
}

on("click", (message => console.log(message))) // click , callback!



