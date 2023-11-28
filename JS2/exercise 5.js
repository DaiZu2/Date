function getSecondsFromNewYear() {
    let now = new Date();
    let currentyear = now.getFullYear();
    let beginningofyear = new Date(currentyear, 0, 1, 0, 0, 0);
    let secondsfromnewyear = Math.floor((now - beginningofyear) / 1000);
    return secondsfromnewyear;
}
const seconds = getSecondsFromNewYear();
console.log(`amount of seconds that passed since beginning of the year: ${seconds}`);