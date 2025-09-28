function gantiBucin() {
  const result = document.getElementById('loveResult');

  // bikin tulisan "I love you" melayang
  const fly = document.createElement('div');
  fly.textContent = "I love you 💖";
  fly.className = "love-fly";
  result.appendChild(fly);

  setTimeout(() => {
    fly.remove();
  }, 2500);
}

// Animasi love di background
function spawnBgLove() {
  const bg = document.getElementById('bg-loves');
  const love = document.createElement('span');
  love.className = 'bg-love';
  love.textContent = '❤️';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.fontSize = (1.2 + Math.random() * 1.8) + 'em';
  love.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
  love.style.top = '0';
  bg.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

setInterval(spawnBgLove, 400);
