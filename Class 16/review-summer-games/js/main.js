//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function arrNums(array)
{
  let prod = 1
  array.forEach(x=>prod*=x)
  alert(prod)
}

let test = [1,2,3,4,5,6,7,8,9,10]
arrNums(test)
