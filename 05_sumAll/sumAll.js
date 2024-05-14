

// console.log(R.range(1,11))

// fix code so that it returns ERROR with non-number parameters
// fix code so that it returns ERROR with negative numbers
// fix code so that it returns ERROR with non-number parameters
const R = require('ramda')
const sumAll = function(start,end) {
    if (start < 0 && end < 0 || start < 0 || end < 0) {
        return "ERROR"
    }

    if (typeof(start) != "number" && typeof(end) != "number" || typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR"
    }

    if (start > end) {
        temp = start
        start = end
        end = temp
    }

    let values = R.range(start,end)
    values.push(end)
    let result = 0
    for (i=0; i<values.length; i++) {
        result = result + values[i]
    }
    return result
};


console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
