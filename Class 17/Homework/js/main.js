/*
Hello, object
importance: 5

Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.

*/

let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"

console.log("User properties:\n",user)
delete user.name
console.log("Updated user properties:\n",user)

/*
Check for emptiness
importance: 5

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

let testObj = new Object()

function isEmpty(obj)
{
  return Object.keys(obj).length==0
}

console.log("Is the test object empty? ", isEmpty(testObj) ? 'yes' : 'no')
testObj.name = "Hello World!"
console.log("Is the test object empty? ", isEmpty(testObj) ? 'yes' : 'no')


/*
Sum object properties
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {}

function sumSalaries(obj)
{
  let dollars = Object.keys(obj)
  if(dollars.length==0) return 0

  let sum = 0
  dollars.forEach(d => sum+=obj[d])
  return sum
}

console.log("Empty salaries test:\n", sumSalaries(salaries))

salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log("Non-empty salaries test:\n", sumSalaries(salaries))

/*
Multiply numeric property values by 2
importance: 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj)
{
  let keys = Object.keys(obj)
  keys.forEach(
    key =>
    {
      if(typeof obj[key] ==="number") obj[key] *= 2
    }
  )
}

console.log("Original menu object:\n", menu)
multiplyNumeric(menu)
console.log("Updated menu object:\n", menu)
