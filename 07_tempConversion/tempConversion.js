const convertToCelsius = function(f_value) {
  result = (f_value - 32) * 5/9

  if (result % 1 != 0) {
    result = (f_value - 32) * 5/9
    result = result.toFixed(1)
    return Number(result)
  }

  return result
};

const convertToFahrenheit = function(c_value) {
  result = (c_value * 9/5) + 32

  if (result % 1 != 0) {
    result = (c_value * 9/5) + 32
    result = result.toFixed(1)
    return Number(result)
  }

  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
