// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let newArray = require('./data.js')

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
      userFirstNames.push(user.firstName)
  }
  console.log(userFirstNames)
};

getFirstNames(newArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
    userFullNames = []
    for (let name of arr) {
        userFullNames.push(`${name.firstName} ${name.lastName}`)
    }
    console.log(userFullNames)
};

getFullNames(newArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// // ***************************************************************************
// // Iteration 3 - ES6 destructuring , for of loop, object literal
// // ***************************************************************************

const getUsersCreditDetails = arr => {
    let usersCreditDetails = []
  for (let balanceObject of arr) {
    let  {firstName, lastName, balance} = balanceObject
    const userDetails = {
        firstName,
        lastName,
        balance
      };
      usersCreditDetails.push(userDetails)
  }
  return usersCreditDetails
}

console.log(getUsersCreditDetails(newArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// // ***************************************************************************
// // Iteration 4 - practice `.filter()` method and how to return two elements
// // // ***************************************************************************
let emptyObject = {}
const genderView = users => {

  let filteredFemale = users
  .filter((element) => element.gender === 'female')
  .map ((element) =>`${element.firstName} ${element.lastName}` )
    let filteredMales = users
    .filter((element) => element.gender === 'male')
    .map((element) => `${element.firstName} ${element.lastName}`)
    // console.log(filteredFemale, filteredMales)
    emptyObject.femaleUsers = filteredFemale
    emptyObject.maleUsers = filteredMales
    console.log(emptyObject)
};
// genderView(newArray);
// // expected output:
// // {
// //    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
// //    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// // }

// // // // ***************************************************************************
// // // // Bonus - Iteration 5
// // // // ***************************************************************************

const data = genderView(newArray);

const genderCount = data => {
    console.log(`Female : ${emptyObject.femaleUsers.length}`)
    console.log(`Male : ${emptyObject.maleUsers.length}`)
};

genderCount(data);
// // expected output:
// // Female: 4
// // Male: 3

// // ***************************************************************************
// // Bonus - Iteration 6
// // ***************************************************************************

const promo20 = users => {
  let filteredBalance = users
  .filter ((element) => element.balance >= '20000')
};
// Logic : cancel the $ sign in all balances and make them a number with the Number method. 
//Then filter it and return those over 20000 with a message

// // expected output:
// // Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// // Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// // ***************************************************************************
// // Bonus - Iteration 7
// // ***************************************************************************

const addActive = users => {
  users.forEach(element => element.isActive = true )
    return users
};
console.log(addActive(newArray));
// // expected output:
// // [
// //    { firstName: 'Kirby',
// //      lastName: 'Doyle',
// //      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
// //      isActive: true,
// //      balance: '$3,570.06',
// //      gender: 'male'
// //    },
// //    {
// //      // ...
// //    }
// // ]
