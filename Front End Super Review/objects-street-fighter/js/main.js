//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter
{
  constructor(name, health, specialMove, level)
  {
    this.name = name
    this.health = health
    this.specialMove = specialMove
    this.level = level
  }
  defeated()
  {
    return `${this.name} has ${this.health} health, ${this.name} is dead`
  }
  doSpecialMove()
  {
    return `${this.name} has used ${this.specialMove}!`
  }
  levelUp()
  {
    ++this.level
    this.health += this.level
    return `${this.name} has reached level ${this.level} and regained some health!`
  }
}
