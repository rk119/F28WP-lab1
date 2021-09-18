const num = 100
let square = (function(a) { //this is an anonymous function called immediatly when declared
    return a*a
})(num)
console.log(square)
