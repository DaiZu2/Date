function getLastDayOfMonth(year, month) {
    let firstdayofmonth = new Date(year, month - 1, 1); 
    firstdayofmonth.setMonth(firstdayofmonth.getMonth() - 1);
    let lastdayofpreviousmonth = new Date(firstdayofmonth.getFullYear(), firstdayofmonth.getMonth() + 1, 0);
    return lastdayofpreviousmonth.getDate();
}
let currentyear = 2023;
let currentmonth = 11;
let lastdayofpreviousmonth = getLastDayOfMonth(currentyear, currentmonth);
console.log(`Last day month ago was: ${lastdayofpreviousmonth}`);