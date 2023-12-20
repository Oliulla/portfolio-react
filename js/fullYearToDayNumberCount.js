function getDayInfoFromDate() {
  // Get the current date
  const currentDate = new Date();

  // Get the day of the year (1-based)
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const dayNumber =
    Math.ceil((currentDate - startOfYear) / (24 * 60 * 60 * 1000)) + 1;

  // Get the total number of days in the year
//   const lastDayOfYear = new Date(currentDate.getFullYear(), 11, 31);
//   const totalDaysInYear =
//     Math.ceil((lastDayOfYear - startOfYear) / (24 * 60 * 60 * 1000)) + 1;

  return {
    dayNumber: dayNumber,
    // totalDaysInYear: totalDaysInYear,
  };
}

// Example usage
const dayInfo = getDayInfoFromDate();
console.log(dayInfo);
