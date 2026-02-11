// MUSIC
let music = document.getElementById("bgMusic");
let musicBtn = document.getElementById("musicBtn");
let playing = false;

function toggleMusic() {
  if (playing) {
    music.pause();
    musicBtn.innerText = "🔇";
  } else {
    music.play();
    musicBtn.innerText = "🔊";
  }
  playing = !playing;
}

// PAGE NAVIGATION
function goToPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// NO BUTTON IMPOSSIBLE
const noBtn = document.getElementById("noBtn");
function moveNo() {
  if (!noBtn) return;
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
}
if (noBtn) {
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("touchstart", moveNo);
}

// QUIZ
function checkQuiz() {
  let score = 0;
  if (document.getElementById("q1").value == 100) score++;
  if (document.getElementById("q2").value === "correct") score++;
  if (document.getElementById("q3").value === "correct") score++;
  if (document.getElementById("q4").value === "correct") score++;

  goToPage("page3");

 const result = document.getElementById("resultText");

  if (score === 4) {
    result.innerHTML = "FULL MARKS 💯🎆<br>I LOVE YOU SO MUCH 💖";
  } else {
    result.innerHTML = `
      Some ans are wrong! Still I love you 😤❤️<br><br>
      <img src="gif/still.jpeg" class="result-gif">
    `;
  }

  setTimeout(() => goToPage("page4"), 3000);
}

// BEGGING
let begs = [
  "Please accept ra🥺",
  "I cannot live without you 💔",
  "Na bangaram kada kiss istaa 💋😭",
  "Don't break my heart! Ill cry 😢",
  "Lifetime love promise 💍"
];

// 👇 ADD GIF FILE NAMES HERE
let begGifs = [
  "gif/beg1.gif",
  "gif/beg4.gif",
  "gif/beg2.gif",
  "gif/beg5.gif",
  "gif/beg3.gif"
];

let begIndex = 0;

function beg() {
  const text = document.getElementById("begText");
  const gif = document.getElementById("begGif");
  
  sadMode = true; 

  let i = begIndex % begs.length;

  text.innerText = begs[i];
  gif.src = begGifs[i];

  gif.classList.remove("hidden");

  begIndex++;

  setTimeout(() => sadMode = false, 3000); // ⭐ back to hearts after 3s
}



// FLOATING HEARTS
const hearts = document.querySelector(".hearts");
const isMobile = window.innerWidth < 600;
let sadMode = false;

setInterval(() => {
  if (isMobile && Math.random() > 0.5) return;
  const heart = document.createElement("span");
  const happy = ["💜","💖","💗","💘","💕"];
  const sad = ["😢","😭","🥺","💔","😞"];

  heart.innerHTML = (sadMode ? sad : happy)[Math.floor(Math.random()*5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (isMobile ? 16 : 22) + "px";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, isMobile ? 500 : 300);

// HEART EXPLOSION
function heartExplosion() {
  const container = document.getElementById("heartExplosion");
  const emojis = ["💜","💖","💗","💘","💞","💕"];
  for (let i = 0; i < 40; i++) {
    const h = document.createElement("span");
    h.className = "explode-heart";
    h.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = "50%";
    h.style.top = "60%";
    h.style.setProperty("--x", (Math.random()-0.5)*400 + "px");
    h.style.setProperty("--y", (Math.random()-0.5)*400 + "px");
    container.appendChild(h);
    setTimeout(() => h.remove(), 1500);
  }
}

// VIBRATION
function vibrate() {
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
}

// COUNTDOWN
const startDate = new Date("2018-04-08");
setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const mins = Math.floor((diff / (1000*60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").innerHTML =
    `💜 Together since April 8, 2018<br>
     <b>${days}</b> days ${hours}h ${mins}m ${secs}s 💖`;
}, 1000);

// SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (i + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

function changeSlide(step) {
  showSlide(slideIndex + step);
}

// auto slide every 3 sec
setInterval(() => {
  if (document.getElementById("page7").classList.contains("active")) {
    changeSlide(1);
  }
}, 6000);









