var nameVar = "Margo"
var nameVar = "Ivan"
console.log('nameVar', nameVar)

let nameLet = "Olga"
nameLet = "Oleg"
console.log('nameLet', nameLet)

const nameConst = "Roman"
console.log('nameConst', nameConst)


// function getPetName() {
//     var petName = "Dog"
//     return petName;
// }

// const petName = getPetName() 
// console.log(petName)

//Block scoping

const fullName = "Margo Blinkova"
let firstName 
if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)