var rect = require('./rectangle')

function solveRect(l,b) {
    if(l<=0 || b<=0) {
        console.log("lenght and bredth must be greater than zero")
    } else {
        console.log("Area : " + rect.area(l,b));
        console.log("perimeter : " + rect.perimeter(l,b))
    }
}

solveRect(2,4);