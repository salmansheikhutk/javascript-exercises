const repeatString = function(string,timesrepeat) {
    if (timesrepeat >= 0) {
    
    let output = '';
    for (let i = 0; i < (timesrepeat); i += 1) {
        output = output + string;
        console.log(output)
    }
    return output
}   else {
    console.log("ERROR")
    return "ERROR"
}
    
};

repeatString("hey", -1);

// Do not edit below this line
module.exports = repeatString;
