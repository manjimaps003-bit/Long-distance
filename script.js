const cards = document.querySelectorAll(".card");
let current = 0;
let musicStarted = false;

const music = document.getElementById("bgMusic");

function nextScreen() {
  cards[current].classList.remove("active");
  current++;
  if (current < cards.length) {
    cards[current].classList.add("active");
  }

  if (!musicStarted) {
    startMusic();
    musicStarted = true;
  }
}

function startMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}
