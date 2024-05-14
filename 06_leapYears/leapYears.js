const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;


// extra


    // if ((year / 4 - Math.floor(year / 4) == 0) && 
    // (year / 100 - Math.floor(year / 100) != 0 || 
    //  year / 400 - Math.floor(year / 400) == 0)) {
    // return true;
//}
// else {
//     console.log("false")
//     return false
// }
// };