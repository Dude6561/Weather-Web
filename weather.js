const BASE_URL = "https://wttr.pokhara";
let button = document.querySelector(".buttonhai");
let cityname = document.querySelector(".location h2");
let degree = document.querySelector(".degree h1");
let time = document.querySelector(".time h2");


function getCurrentTime12Hour() {
    // Create a new Date object
    let now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    let meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, convert to 12

    // Format the time nicely
    let formattedHours = hours < 10 ? '0' + hours : hours;
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine hours, minutes, seconds, and AM/PM
    let currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;

    return currentTime;
}
let currentTime12Hour = getCurrentTime12Hour();
time.innerText =  currentTime12Hour;

button.addEventListener("click", async() => {
   
   let search =  document.querySelector(".Search")
   let searchvalue = search.value;
   cityname.innerText = search.value;
   let response = await fetch(`https://wttr.in/${searchvalue}?format=j1`);
   let incomingdata = await response.json();
   console.log(incomingdata);
   degree.innerText = incomingdata.current_condition[0].FeelsLikeC + "℃" ;
   
   
   console.log( incomingdata.current_condition[0].weatherDesc[0].value);
   

   


});










