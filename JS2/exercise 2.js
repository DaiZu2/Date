function getWeeklyDay(year, month, day){
    let date = new Date(year, month - 1, day); 
    let dayinspanish = [ "lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
    let weekinspanish = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
    return weekinspanish;
} 
let year = 2023;
let month = 11;
let day = 28;
let result = getWeeklyDay(year, month, day);
console.log(`The day of the week for ${year}-${month}-${day} is: ${result}`); 