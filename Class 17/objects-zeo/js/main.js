//Create a stopwatch object that has four properties and three methods
let stopwatch =
{
  minutes:0,
  seconds:0,
  milliseconds:0,
  getTime : function() {
    return `${minutes}: ${seconds}.${milliseconds}`
  },
  setTime : function (min=0,sec=0, ms=0) {
    minutes = min
    seconds = sec
    milliseconds = ms
  },
  resetTime : function() {
    this.setTime()
  }
}

stopwatch.color = "green"
stopwatch.style = "sporty"
stopwatch.changeColor = function (newColor) { this.color = newColor }
