//function functionName(parameters){
// function is a block of reusable code
//}

// function sum(a, b){
//    return (a + b);
// }

// console.log(sum(2, 3))

// function greet(name){
//     console.log('hello ' + name + ' welcome')
//     console.log(`hello ${name} welcome`)
// }

// greet('rahul')

// var firstName = function (name){
//     console.log('hello ' + name + ' welcome')
//     console.log(`hello ${name} welcome`)
// }

// firstName('ajay')


// IIFE

// var result = (function (a, b){
//     console.log(a + b)
//     return(a + b)
// })(5, 6)

// console.log(result)



// const cal = (num1, num2, operator) => {

//       let result;

//       switch(operator){
//         case '+':
//            result = num1 + num2;
//            return result;
//         case '-':
//             result = num1 - num2;
//             return result;
//         case '*':
//             result = num1 * num2;
//             return result;
//         case '/':
//             result = num1 / num2;
//             return result;
//         default:
//             return('none')                
//       }
// }

// console.log(cal(2, 3, '*'))

// const isReserve = (str) => {
//      for(let char=str.length - 1; char>=0; char--){
//         console.log(str[char])
//      }
// }

// isReserve('gaurav')
// const isReserve = (str) => {
//     let reverse = ''
//      for(let char=str.length -1; char>=0; char--){
//         reverse = reverse + str[char]
//      }
//      return reverse;
// }

// console.log(isReserve('gaurav'))

const isPalindrome = (str) => {
    let reverse = ''
     for(let char=str.length -1; char>=0; char--){
        reverse = reverse + str[char]
     }
    //  if(str === reverse){
    //     return true;
    //  }else{
    //     return false
    //  }

    return str === reverse ? true : false;
}

console.log(isPalindrome('level'))

