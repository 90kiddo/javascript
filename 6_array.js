// const persons = [1,2,3,4]
// console.log(persons.at(0))
// console.log(persons.at(-4))

// const fruits = ['apple', 'banana', 'litchi', 'grapes']

// for (item in fruits){
//     console.log(item)
// }

// array.forEach((currentValue, index, array) =>{
// }, thisValue)

// const fruits = ['apple', 'banana', 'litchi', 'grapes']

// // for(let i=0; i<fruits.length; i++){
// //     console.log(fruits)
// // }

// const item = fruits.forEach((currElem, index, arr) =>{

//     return(`${currElem}`)
// })

// console.log(item)
// console.log(fruits)

// const numbers = [1,2,3,4,5]

// numbers.forEach((curr, index, arr) => {
//      console.log(`${curr * 2}`)
// })
// const numbers = [1,2,3,4,5]

// const mul = numbers.map((curr, index, arr) => {
//       return( 2* curr)
// })

// console.log(mul)
// console.log(numbers)

// how to insert, add, replace and delete elements in array (CRUD)

//push() add one more element to the end of an array
//pop() removes the last element from an array
//unshift() add one more element to the beginning of an array
//shift() removes first element from an array
//splice() removing or replacing existing elements anywhere in an array
//replace()

// const arr = [10, 11, 12, 13, 14]
// const result = arr.splice(1, 3, 16)
// console.log(arr)


// const arr = [10, 11, 12, 13, 14]
// const result = arr.toString().replace('10','26')
// const result = arr.toString().replaceAll('10','26')
// console.log(result)
///////////////////////////////////////////////////////////////////////////////////////

//searching and filter in array

// indexOf   returns the first index at which in array or -1 if not present
//  indexof(searchElement, fromIndex)
// lastIndexOf  return last index at which a given element is found
// includes   check whether an array includes a certain element returning true or false
//  includes(searchElement, fromIndex)

// const arr = [10, 11, 12, 13, 14, 13]
// console.log(arr.indexOf(13))
// console.log(arr.lastIndexOf(13))
// console.log(arr.includes(13))

// const year = ['jan', 'feb']
// // const addMonth = year.push('mar')
// // console.log(year)
// const addMonth = year.splice(year.length,0, 'mar')
// console.log(year)

// const year = ['jan', 'feb', 'mar', 'apr']

// const indexToUpdate = year.indexOf('apr')
// year.splice(indexToUpdate, 1, 'Apr')
// console.log(year)

// const year = ['jan', 'feb', 'mar', 'apr']
// const deleteIndex = year.indexOf('feb')
// year.splice(deleteIndex, 1)
// console.log(year)

/////////////////////////////////////////////////////////////////////////////////////////////

//search + filter

// find method  find the first matching element in array or undefined
// finIndex method   returns the first element in the typed array or -1
// filter method  creates new array with all elements that pass the test implemented by the provided function

// const arr = [10, 11, 12, 13, 14, 13, 10, 12]

// const result = arr.findIndex((curr) => {
//     return curr > 13
// })

// console.log(result)

// const arr = [10, 11, 12, 13, 14, 13, 10, 12]

// const result = arr.filter((curr) => {
//     return curr > 11
// })

// console.log(result)

// let value = 12
// const arr = [10, 11, 12, 13, 14, 13, 10, 12]

// const result = arr.filter((curr) => {
//     return curr !== value
// })

// console.log(result)

// let rupe = 500

// const products = [
//     {
//         name: 'laptop',
//         price: 1200
//     },
//     {
//         name: 'phone',
//         price: 800
//     },
//     {
//         name: 'tablet',
//         price: 300
//     },
//     {
//         name: 'smartwatch',
//         price: 300
//     }
// ]

// const cart = products.filter((curr) => {
//       return curr.price <= rupe
// })

// console.log(cart)

// const values = [10, 11, 12, 13, 14, 13, 10, 12]

// const unique = values.filter((curr, index, arr) =>{
//     return arr.indexOf(curr) === index
// })

// console.log(unique)

// console.log([...new Set(values)])

///////////////////////////////////////////////////////////////////////////////////////

// Sort and Compare an array

// const fruits = ["apple", "banana", "oranges", "grapes"];
// // const values = [10, 11, 12, 13, 14, 13, 10, 12]

// fruits.sort()
// console.log(fruits)

// const values = [10, 11, 12, 13, 14, 13, 10, 12];

// values.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   }
// });

// console.log(values);

// const numbers = [1, 2, 3, 4, 5]

// const square = numbers.map((curr) =>{
//    return curr = curr * curr
// })

// console.log(square)

// const fruits = ["apple", "banana", "oranges", "grapes"];

// const upperCase = fruits.map((curr) => {
//     return curr.toUpperCase()
// })

// console.log(upperCase)

// const numbers = [1, 2, 3, 4, 5];

// const evenSquare = numbers
//   .map((curr) => {
//     if (curr % 2 === 0) {
//       return (curr = curr * curr);
//     }
//   })
//   .filter((curr) => curr !== undefined);

// console.log(evenSquare);

// const fruits = ["apple", "banana", "oranges", "grapes"];

// const mr = fruits.map((curr) => {
//       return `Mr. ${curr}`
// })

// console.log(mr)


///////////////////////////////////////////////////////////////////////////////

// reduce method  reduce an array to a single value

// array.reduce((accumulator, curr, index, arr) => {
//    }, initialValue)


// const productPrice = [1, 2, 3, 4, 5];

// const totalPrice = productPrice.reduce((acc, curr) =>{
//     return acc + curr
// },10)

// console.log(totalPrice)
