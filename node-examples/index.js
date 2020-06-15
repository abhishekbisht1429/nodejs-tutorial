var rect = require('./rectangle')

function solveRect(l,b) {
    rect(l,b,(err, rectangle) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("Area : " + rectangle.area());
            console.log("Perimeter : " + rectangle.perimeter());
        }
    });

    console.log("This statement is after call to rect")
}

solveRect(2,4);