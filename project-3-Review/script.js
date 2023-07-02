const reviews = [
  {
    Id: 0,
    name: "Sara Hadaya",
    job: "UX designer",
    img: "./imgaes/p1.jpg",
    info: "I'm UX designer It's my responsibility to researching trends, developing design concepts, overseeing production, and collaborating with teams to create visually appealing fashion products."

  },
  {
    Id: 1,
    name: "Maria",
    job: "Fashion designer",
    img: "./imgaes/p2.jpg",
    info: "I'm fashion designer It's my responsibility to researching trends, developing design concepts, sketching designs, selecting fabrics and trims, overseeing production, and collaborating with teams to create visually appealing fashion products."

  },
  {
    Id: 2,
    name: "Benjamin",
    job: "Barber",
    img: "./imgaes/p3.jpg",
    info: "Barber responsibilities include greeting customers, cutting and styling hair, processing transactions, and sterilising equipment and tools."

  },
  {
    Id: 3,
    name: "Amelia",
    job: "An artist",
    img: "./imgaes/p4.jpg",
    info: "I'm an artist just"

  },
  {
    Id: 5,
    name: "Jack",
    job: "Medical Student",
    img: "./imgaes/p5.jpg",
    info: "lorem15"

  },
  {
    Id: 6,
    name: "Mack",
    job: "An film artist",
    img: "./imgaes/p6.jpg",
    info: "I'm himself a big film"

  },
  {
    Id: 7,
    name: "",
    job: "",
    img: "./imgaes/p7.jpg",
    info: ""

  },
  {
    Id: 8,
    name: "Emma",
    job: "danser",
    img: "./imgaes/p8.jpg",
    info: ""

  },
  {
    Id: 9,
    name: "Luna",
    job: "club DJ",
    img: "./imgaes/p9.jpg",
    info: "It's my responsibility to picking music to suit the audience and occasion. taking equipment to the venue before the function begins and setting it up. playing music all evening, coordinating the lighting to fit the music, entertaining the audience between tracks, making announcements and playing requests."

  }
]
// select items 
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
})

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});