const teksArray = [
  "..........",
  "kayaknya aku sudah tergila-gila sama kamu deh",
  "hehehehehehehehe",
  "Bisa ga si liat senyum kamu tiap hari?",
  "harusnya bisa si, kan bisa ekhm(pap)",
  "intinya love u YAHAHAHAHAHAHHA😜😜😜",
];

let index = 0;

function gantiTeks() {
  index = (index + 1) % teksArray.length;
  document.getElementById("romantisText").textContent = teksArray[index];

  if (teksArray[index] === "intinya love u YAHAHAHAHAHAHHA😜😜😜") {
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







