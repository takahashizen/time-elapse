const date = document.querySelector(".date");
const calcButton = document.querySelector(".calc-btn");
const Result = document.querySelector(".result");

// Action
calcButton.addEventListener("click", calculateTime);

function calculateTime(){

    setInterval(updateTime, 100);
}
function updateTime(){

    const userDate = new Date(date.value).getTime();
    const currentDate = new Date().getTime();

    const dateDifference = currentDate - userDate;

    const Year = Math.floor(dateDifference / (365 * 24 * 60 * 60 * 1000));
    const Month = Math.floor((dateDifference / (30.44 * 24 * 60 * 60 * 1000)) % 12);
    const Day = Math.floor((dateDifference / (24 * 60 * 60 * 1000)) % 30.44);
    const Hour = Math.floor((dateDifference / (60 * 60 * 1000)) % 24) + 7;
    const Minutes = Math.floor((dateDifference / (60 * 1000)) % 60);
    const Second = Math.floor((dateDifference / 1000) % 60);
    const miliSecond = dateDifference % 1000;

    Result.textContent = `Elapsed time is ${Year} year, ${Month} month, ${Day} days, ${Hour} hours, ${Minutes} minutes, ${Second} seconds, and ${miliSecond} miliseconds`;
}