//Create a mouse object that has four properties and three methods
let mouse = {
  size: "small",
  color: "grey",
  speed: "speedy",
  name: "Rocky",

  getName() { return this.name},
  setSize(newSize) { this.size = newSize},
  changeColor(newColor) { this.color = newColor},
  changeName(newName) {this.name = newName}
}
