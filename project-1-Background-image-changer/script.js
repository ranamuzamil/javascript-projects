let random;
let array = ["url(images/0.jpg)", "url(images/1.jpg)", "url(images/2.jpg)", "url(images/3.jpg)", "url(images/4.jpg)", "url(images/5.jpg)", "url(images/6.jpg)", "url(images/7.jpg)", "url(images/8.jpg)", "url(images/9.jpg)","url(images/10.jpg)", "url(images/11.jpg)", "url(images/12.jpg)", "url(images/13.jpg)", "url(images/14.jpg)", "url(images/15.jpg)", "url(images/16.jpg)", "url(images/17.jpg)", "url(images/18.jpg)", "url(images/19.jpg", "url(images/20.jpg)", "url(images/21.jpg)"]
let btn = document.getElementById("randomButton")
btn.addEventListener("click",function () {
    document.body.style.backgroundImage = array[random]       
    random = Math.floor(Math.random() * 21) 
})








