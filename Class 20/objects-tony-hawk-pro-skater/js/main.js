//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name,age,pronoun,speed)
{
  this.name = name
  this.age = age
  this.pronoun = pronoun
  this.speed = speed

  this.kickOlly = function() { console.log('Sick olly', this.pronoun)}
  this.goFaster = function() {
    this.speed = "Even Faster!"
    console.log(this.name, 'is',this.speed)
  }
  this.slowDown = function() {
    this.speed = "Slowing down"
    console.log(this.name, 'is',this.speed)
  }
}

let tony = new Skater("Hawk", 25, 'bro', 'Normal Speed')
