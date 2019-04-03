// const square = function(x) {
//     return x * x
// }

// // const squareArrow = (x) => {
// //     return x * x
// // }

// const squareArrow = (x) => x * x

// console.log(squareArrow(5))


const getFirstName = (fullname) => {
    return fullname.split(' ')[0]
}

const getFirstNameArrow = (fullname) => fullname.split(' ')[0]

console.log('getFirstName', getFirstName('Ivan Mosiagin'))
console.log('getFirstNameArrow', getFirstNameArrow('Ivan Mosiagin'))