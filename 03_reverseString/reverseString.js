const reverseString = function(string) {
    let result = ""
    amount = string.length
    for (let i = 0; i < (amount); i += 1){
        let lastChar = string[string.length - 1]
        result += lastChar
        string = string.slice(0, -1);
    }
    return result;
    

};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;

