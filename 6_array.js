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

// const arr = [10, 11, 12, 13, 14]
// const result = arr.splice(1, 3, 16)
// console.log(arr)



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
