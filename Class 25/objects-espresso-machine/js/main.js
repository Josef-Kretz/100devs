//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
  constructor(sizeLbs, color, isPortable, remainingWarranty)
  {
    this.sizeLbs = sizeLbs
    this.color = color
    this.isPortable = isPortable
    this.remainingWarranty = remainingWarranty
  }
  pourEspresso()
  {
    console.log("Pouring coffee now! Warning: HOT!")
  }
  changeWarranty(num)
  {
    if(num<0) console.log("Warranty protection has been reduced by ", num*-1, " years.")
    else if(num>0) console.log("Warranty protection has been extended by ", num, " years.")
    this.remainingWarranty += num
    console.log(`Remaining warranty is ${this.remainingWarranty} years!`);
  }
  clean()
  {
    let cleaningTime = this.sizeLbs*0.3
    console.log("Espresso machine will be clean in ", cleaningTime, " hours.")
  }
}
