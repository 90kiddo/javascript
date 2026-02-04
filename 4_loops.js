// If.. Else, Switch, While, Do While, For Loop

// var age = 18

// if(age>=18){
//     console.log('eligible')
// }else{
//     console.log('not eligible')
// }

// var temp = 10;

// if(temp >= 30){
//     console.log('go outside')
// }else if(temp >= 25 && temp < 30){
//     console.log('go out with blanket')
// }else{
//     console.log('sleep')
// }

// var age = 18;
// var citizen = true;
// var voter = true;

// if(age >= 18 && citizen && voter){
//     console.log('eligible to vote')
// }else if(age >= 18 && !citizen && !voter){
//     console.log('not eligible to vote')
// }else if(age >= 18 && !citizen){
//     console.log('not eleigible to vote due to citizenship status')
// }else if(age >= 18 && citizen && !voter){
//     console.log('not eligible to vote due to registration status')
// }

// if(age>=18){
//     if(citizen){
//         if(voter){
//             console.log('eligible to vote')
//         }else{
//             console.log('not eligible to vote due to registration status')
//         }

//     }else{
//         console.log('not eleigible to vote due to citizenship status')
//     }

// }else{
//     console.log('not eligible to vote')
// }

// function checkVotingEligibility(age, citizen, voter) {
//   if (age < 18) return 'Not eligible to vote';
//   if (!citizen) return 'Not eligible due to citizenship status';
//   if (!voter) return 'Not eligible due to registration status';
//   return 'Eligible to vote';
// }

// console.log(checkVotingEligibility(18, true, true));


// var num = 13;

// if(num/2){
//     console.log('even')
// }else{
//     console.log('odd')
// }

/////////////////////////////////////////////////////////////////////////////////////////

//Switch

// var day = 'Thursday';

// switch(day){
//     case 'Monday':
//         console.log('study');
//         break;
//     case 'Tuesday':
//         console.log('fun');
//         break;
//     default:
//         console.log('rest');     
// }


var a = 2
var b = 3
var r = 4
var areaOfShapes = 'square'
var result;

switch(areaOfShapes){
    case 'square':
        result = a * a;
        console.log(result)
        break;
    case 'rectangle':
        result = a * b;
        console.log(result)
        break;
    case 'circle':
        result = 3.14 * (r * r)
        console.log(result)
        break;
    default:
        console.log('no shape matches')            
}