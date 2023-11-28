function getMyBornDay(year, month, day){
    let birthdate = new Date(year, month - 1, day); 
    let daysinweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let daysinweekindex = birthdate.getDay();
    return daysinweekindex[daysinweek];
}
let birthday = 1;
let birthmonth = 11;
let birthyear = 2006;
let mybirthday = getMyBornDay(birthday, birthmonth, birthyear);
console.log(`I arrived to the world on ${mybirthday}`);
