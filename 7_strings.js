// string search methods

// indexOf  lastIndexOf  includes

// const text = "Gaurav Saini"

// const strArr = Array.from(text)
// console.log(strArr)

// const arrIndex = strArr.map((curr, index) => {
//     return `${curr} ${index}`
// })
// console.log(arrIndex)


// search()  searches a string for a string and returns the position of the match, returns the index number where thr first match is found else -1

// const text = "Gaurav Saini"

// // const searchTest = text.search('Saini')
// const searchTest = text.search(/saini/i)
// console.log(searchTest)

// match()  retruns the array of the matched values or null

// const text = "Gaurav Saini Saini"
// // const result = text.match('Saini')
// const result = text.match(/Saini/g)
// console.log(result)

// matchAll() 

// const text = "Gaurav Saini Saini"
// const result = text.matchAll('Saini')
// console.log(...result)

// startsWith()  returns true if a string begins with a specified value else false

// const text = "Gaurav Saini Saini"
// const result = text.startsWith('Gaurav')
// console.log(result)

// endsWith()  returns true if a string ends with a specified value else false

// const text = "Gaurav Saini Saini"
// const result = text.endsWith('Saini')
// console.log(result)


////////////////////////////////////////////////////////////////////////////////////////////////////


//  Extracting strings parts

// slice()  extract a part of a string and returns the extracted part in a new string

// slice(start, end)

// const text = ['Gaurav Saini']

// const result = text[0].slice(3,-1)
// console.log(result)


// substring() extract a portion of a string based on a starting and ending index
// similar to slice, but the start and end values less than 0 are treated 0 in substring



/// Extracting string characters

// charAt()  charCodeAt() UTF-code interger b/w 0 and 65535  at()

// const text = 'Gaurav Saini'
// // const result = text.charAt(3)
// // const result = text.charCodeAt(3)
// const result = text.at(-7)
// console.log(result)

// replace

// const text = 'Gaurav Saini'
// const result = text.replace('G', 't')
// console.log(result)

// trim()  remove white space from string

// const text = 'Gaurav Saini'
// const result = text.trim()
// console.log(result)


// split()  split the string into array of substring

// const text = 'Gaurav, Saini'
// // const result = text.split(',')
// const result = text.split(',').reverse().join()
// console.log(result)


// console.log('a'.charCodeAt(0))
// console.log('z'.charCodeAt(0))

// for(let char=97; char<=122; char++){
//     console.log(String.fromCharCode(char))
// }

// const text = 'Gaurav, Saini'
// const allVowelPresentOrNot = (text) =>{
//    const vowels = 'aeiou'
//    text = text.toLowerCase()

//    for(let char of vowels){
//     console.log(text.includes(char))
// //     if(!text.includes(char)){
// //         return false;
// //     }
//    }
// //    return true;
// }
// console.log(allVowelPresentOrNot(text))


// const text = 'Gaurav Saini'
// const allVowelPresentOrNots = (text) =>{
//     const vowels = 'aeiou'
//     text = text.toLowerCase()
//     let count = 0;
//     for(let char of text){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }
// console.log(allVowelPresentOrNots(text))



// pangram

// const text = 'Gaurav Saini'
// const pangramChecker = (text) => {
//    let inputArr = text.toLowerCase().split('')
//    console.log(inputArr)

//    const values = inputArr.filter((curr) =>
//              curr.charCodeAt() >= 'a'.charCodeAt() &&
//              curr.charCodeAt() <= 'z'.charCodeAt()
//    )
//    return [...new Set(values)].length === 26
// }

// console.log(pangramChecker(text))