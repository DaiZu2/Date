function getSecondsToNewYear() {
    let now = new Date();
    let currentyear = now.getFullYear();
    let nextyear = currentyear + 1;
    let beginningofnextyear = new Date(nextyear, 0, 1, 0, 0, 0);
    let secondstonewyear = Math.floor((beginningofnextyear - now) / 1000);
    return secondstonewyear;
}
let secondstilend = getSecondsToNewYear();
console.log(`seconds until the last second of the year: ${secondstilend}`);