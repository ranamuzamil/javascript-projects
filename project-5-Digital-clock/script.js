let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let meridiem = document.getElementById("meridiem");

let dayed = document.getElementById("day");    
let dated = document.getElementById("date");    
let monthed = document.getElementById("month"); 
let yeared = document.getElementById("year"); 

setInterval(() => {

let date = new Date()




let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();
let miliseconds = date.getMilliseconds();
    if (hours < 10) {
        hour.innerHTML = "0" + hours      
    } else {
        hour.innerHTML = hours - 12        
    }
    
    if (minutes < 10) {
        min.innerHTML = "0" + minutes        
    } else {
        min.innerHTML = minutes
    }
    if (seconds < 10) {
        sec.innerHTML = "0" + seconds        
    } else {
        sec.innerHTML = seconds
    }
    if (hours < 12) {
        meridiem.innerHTML = "AM"
        
    } else {
        meridiem.innerHTML = "PM"
    }   




    let day = date.getDay();
    let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    dayed.innerHTML = dayName[day]


    let month = date.getMonth();
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    monthed.innerHTML = monthName[month];


    dated.innerHTML = date.getDate();

    
    yeared.innerHTML = date.getFullYear();
    
}, 100);

   

