// Write a function that takes a date and returns the name of the day of the week.
// Example:
// Input: new Date(2019, 10, 10)
// Output: "Thursday"
// Input: new Date(2019, 10, 11)
// Output: "Friday"
function getDayOfWeek(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(date.getDay());
    return days[date.getDay()];
  }
  
getDayOfWeek(new Date(2019, 11, 11)); // "Thursday"
  

module.exports = getDayOfWeek;

// Path: 05_sumAll/test.js