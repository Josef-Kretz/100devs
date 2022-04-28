// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
class Contractor
{
  constructor(name, role)
  {
    this._name = name
    this._role = role
  }
  sayHello()
  {
    console.log(`Hello, I am on the ${this.role} team at #100devs!`)
  }
  get name()
  {
    return this._name
  }
  get role()
  {
    return this._role
  }
}

class Front extends Contractor
{
  constructor(name, role, tech)
  {
    super(name, role)
    this._tech = tech
  }
  get tech()
  {
    return this._tech
  }
  sayHello()
  {
    console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
  }
}

class Back extends Contractor
{
  constructor(name, role, tech)
  {
    super(name, role)
    this._tech = tech
  }
  get tech()
  {
    this._tech
  }
  sayHello()
  {
    console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
  }
}

let bob = new Contractor('Bob', 'Front-end')
let simba = new Front("Simba", "Front-end", "React")
let machi = new Back("The Machines", "Back-end", "Node")

let agency = [bob,simba,machi]

for(person of agency) person.sayHello()
