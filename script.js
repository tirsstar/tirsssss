const teksArray = [
  "Jangan lupa istirahat ya 💖",
  "Semangat terus sayang 💪",
  "Jangan telat makan juga okeii",
  "YAHAHAHA LOVE LAGI ORANG TUA",
];

let index = 0;

function gantiTeks() {
  index = (index + 1) % teksArray.length;
  document.getElementById("romantisText").textContent = teksArray[index];

  if (teksArray[index] === "YAHAHAHA LOVE LAGI ORANG TUA") {
    document.getElementById("gantiBtn").style.display = "none";
  }
}

const hearts = document.querySelector('.hearts');
for (let i = 0; i < 20; i++) {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'absolute';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${Math.random() * -100}%`;
  heart.style.fontSize = `${Math.random() * 30 + 10}px`;
  heart.style.animation = `fall ${Math.random() * 5 + 3}s infinite linear`;
  heart.style.setProperty('--i', Math.random());
  hearts.appendChild(heart);
}
