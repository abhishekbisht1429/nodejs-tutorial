var rect = {
    perimeter: (x,y) => 2*(x+y),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    if(l<=0 || b<=0) {
        console.log("lenght and bredth must be greater than zero")
    } else {
        console.log("Area : " + rect.area(l,b));
        console.log("perimeter : " + rect.perimeter(l,b))
    }
}

solveRect(2,4);