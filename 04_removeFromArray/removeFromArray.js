const removeFromArray = function(test,...remove) {
    let result = test;
    for (let i =0; i < remove.length; i += 1){
        result = result.filter(item => item !== remove[i]);
    }
    return result;
};

console.log(removeFromArray([1,2,3,3,3,6],3,6))
// Do not edit below this line
module.exports = removeFromArray;
