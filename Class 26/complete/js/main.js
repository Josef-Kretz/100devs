class Animal {
  constructor(name)
  {
    this._name = name
  }
  get name()
  {
    return this._name
  }
  speak()
  {
    console.log(`${this._name} makes a sound`)
  }
}

class Dog extends Animal {
  constructor(name, breed)
  {
    super(name)
    this._breed = breed
  }
  get breed()
  {
    return this._breed
  }
  speak()
  {
    super.speak()
    console.log(`${this._name} barks`)
  }
}

class Cat extends Animal {
  constructor(name, breed)
  {
    super(name)
    this._breed
  }
  get breed()
  {
    return this._breed
  }
  speak()
  {
    super.speak()
    console.log(`${this._name} meows`)
  }
}

let simba = new Dog("Simba", "Sheperd")
