let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', ()=> {
  if (document.documentElement.hasAttribute('data-theme')) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
  
time.textContent = `${minCount + 1}:00`;
//quote start++++++++++++++++++++++++
let quote = document.getElementById("quote");
const url = "https://zenquotes.io/api/random";

let getQuote = () => {
  fetch(url)
  .then((data) => data.json())
  .then((item) => {
    quote.innerText = item.q;
  });
};

window.addEventListener("load", getQuote)
//quote end-----------------------
const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
  active = "long";
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
  })
);

startBtn.addEventListener("click", () => {
  reset.classList.add("show");
  pause.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
});
// clockkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec  = now.getSeconds(),
      pe = "AM";

      if(hou == 0){
        hou = 12;
      }
      if(hou > 12){
        hou = hou - 12;
        pe = "PM";
      }

      Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
      }

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var ids = ["dayname", "month", "daynum", "hour", "minutes", "seconds", "period"];
      var values = [week[dname], months[mo], dnum.pad(2), hou.pad(2), min.pad(2), sec.pad(2), pe];
      for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

function initClock(){
updateClock();
window.setInterval("updateClock()",1);
}
// qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
const quotes = [
  {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
  {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
  {text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett"},
  {text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs"},
  {text: "The best way to predict your future is to create it.", author: "Abraham Lincoln"},
  {text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi"},
  {text: "What you do today can improve all your tomorrows.", author: "Ralph Marston"},
  {text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson"},
  {text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
  {text: "It always seems impossible until it’s done.", author: "Nelson Mandela"},
  {text: "Dream big and dare to fail.", author: "Norman Vaughan"},
  {text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt"},
  {text: "Opportunities don't happen, you create them.", author: "Chris Grosser"},
  {text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe"},
  {text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.", author: "Samuel Beckett"},
  {text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson"},
  {text: "Act as if what you do makes a difference. It does.", author: "William James"},
  {text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
  {text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama"},
  {text: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker"},
  {text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt"},
  {text: "The mind is everything. What you think you become.", author: "Buddha"},
  {text: "An unexamined life is not worth living.", author: "Socrates"},
  {text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau"},
  {text: "Dream big dreams! Imagine that you have no limitations and then decide what’s right before you decide what’s possible.", author: "Brian Tracy"},
  {text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
  {text: "If you can dream it, you can do it.", author: "Walt Disney"},
  {text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"},
  {text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
  {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
  {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
  {text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs"},
  {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {text: "Don't let yesterday take up too much of today.", author: "Will Rogers"},
  {text: "Act as if what you do makes a difference. It does.", author: "William James"},
  {text: "Life is what happens when you’re busy making other plans.", author: "John Lennon"},
  {text: "Your limitation—it’s only your imagination.", author: "Unknown"},
  {text: "Sometimes later becomes never. Do it now.", author: "Unknown"},
  {text: "Great things never come from comfort zones.", author: "Unknown"},
  {text: "Dream it. Wish it. Do it.", author: "Unknown"},
  {text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown"},
  {text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown"},
  {text: "Dream bigger. Do bigger.", author: "Unknown"},
  {text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown"},
  {text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown"},
  {text: "Do something today that your future self will thank you for.", author: "Unknown"},
  {text: "Little things make big days.", author: "Unknown"},
  {text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown"},
  {text: "Don’t wait for opportunity. Create it.", author: "Unknown"},
  {text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown"},
  {text: "The key to success is to focus on goals, not obstacles.", author: "Unknown"},
  {text: "Dream it. Believe it. Build it.", author: "Unknown"}
];


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const quote = getRandomQuote();
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `- ${quote.author}`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayRandomQuote();
  
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  quoteText.addEventListener('mouseenter', () => {
      quoteAuthor.style.display = 'block';
  });

  quoteText.addEventListener('mousemove', (e) => {
      quoteAuthor.style.left = `${e.clientX + 25}px`; // Adjusted offset to 2px
      quoteAuthor.style.top = `${e.clientY + 25}px`; // Adjusted offset to 2px
  });

  quoteText.addEventListener('mouseleave', () => {
      quoteAuthor.style.display = 'none';
  });
});

