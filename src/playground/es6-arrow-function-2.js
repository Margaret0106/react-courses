// argument object - no longer bound with arrow function


const add = function(a, b) {
    console.log(arguments)
    return a + b;
}
console.log(add(2,7))

const addArrow = (a, b) => {
     // console.log(arguments)
    return a + b;
}



// this keyword - no longer bound with arrow function

const user = {
    name: "Margo",
    cities: ['Almaty', 'Moscow', 'Astana'],
    printPlacesLived() {
        // console.log(this.name)
        // console.log(this.cities)
        // const that = this
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has lived in ' + city)
        // })

       return this.cities.map((city) => city + '!!!')
     
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

console.log(user.printPlacesLived())


//Challenge

const multiplier = {
    numbers: [5,8,13],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())