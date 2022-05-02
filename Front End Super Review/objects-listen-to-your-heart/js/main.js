//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  brand: "Racers",
  price: 299,
  isRunning: false,
  time: 0,

  start: function()
  {
    if(this.isRunning) throw new Error("Stopwatch is already running!")
    this.isRunning = true
    this.time = new Date()
    return "Stopwatch has started!"
  },
  stop: function()
  {
    if(this.isRunning == false) throw new Error("Stopwatch was not running!")
    this.isRunning = false
    this.time = new Date().valueOf() - this.time.valueOf()

    return `${Math.floor(this.time/1000)} seconds have passed`
  },
  reset: function()
  {
    this.isRunning = false
    this.time = null
    return "Timer has been reset!"
  }
}
