/*
stopwatch:
start, stop, reset methods
start, end, duration, running properties
*/

class Stopwatch {
  constructor()
  {
    this.duration = 0
    this.begin = 0
    this.end = 0
    this.running = false
  }

  start()
  {
    if(this.running) throw new Error("Stopwatch is already running")

    this.running = true
    this.begin = new Date()
  }

  stop()
  {
    if(!this.running) throw new Error("Stopwatch is not running")

    this.running = false
    this.end = new Date()
    this.duration = this.end.valueOf() - this.begin.valueOf()
    this.duration /= 1000
  }

  reset()
  {
    this.duration = 0
    this.begin = 0
    this.end = 0
    this.running = false
  }

  get time()
  {
    return this.duration.toString() + " seconds"
  }
}

let testWatch = new Stopwatch()

console.log("testWatch has start, stop, reset methods\ntestWatch has begin, end, duration, and running properties")
