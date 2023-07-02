let count = 0; 
let value = document.querySelector("#value")
function increment() {
    count += 1;  
    document.getElementById("value").innerHTML = count  
    if (count > 0 ) {
        value.style.color = "green";    
        }
    }
function decrement() {
    count -= 1;    
    document.getElementById("value").innerHTML = count  
    if (count < 0 ) {
        value.style.color = "red";    
        }

}
function reset() {
    count = 0;    
    document.getElementById("value").innerHTML = count  
    value.style.color = "white";

}
