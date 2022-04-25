//Create an a class and extend it - Can be anything you would like it to be!
class tablet {
  constructor(size,weight,price,numButtons)
  {
    this.size = size
    this.weight = weight
    this.price = price
    this.numButtons = numButtons
  }
  turnOn()
  {
    console.log('Device turning on')
  }
  turnOff()
  {
    console.log('Device turning off')
  }
  update()
  {
    console.log('Checking for updates...')
  }
  get numberOfButtons()
  {
    return Math.floor(this.numButtons)
  }
}

class IPad extends tablet {
  constructor(size,weight,price,numButtons,hasEarphonesJack=false)
  {
    super(size,weight/2,price*5,numButtons/2)
    if(hasEarphonesJack === true) throw new Error('Cannot order iPad with earphones jack')
    this.hasEarphonesJack = hasEarphonesJack
  }
  charge()
  {
    console.log("Buy an iCharge Custom iPad Charger and plug it into the iPad!")
  }
  enableHeadphonesJack()
  {
    console.log("Buy a couple pairs of AirPods today!")
  }
  update()
  {
    console.log("Your iPad updates automatically when you charge it for the night! :)")
  }
  set enableEarphonesJack(bool)
  {
    if(bool === false) this.hasEarphonesJack = false
    else throw new Error("Cannot enable earphones jack")
  }
}

let tryPad = new IPad("UltraThin", 14, 400, 3, false) //iPads don't come with a jack, but you can choose to not have one while ordering it too!
tryPad.turnOn()
tryPad.turnOff()
tryPad.turnOn()
tryPad.update()
console.log(tryPad)
console.log(`Your iPad has ${tryPad.numberOfButtons} button!`)
