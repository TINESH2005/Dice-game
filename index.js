var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img1').setAttribute('src', `dice${randomNumber1}.png`);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector('.img2').setAttribute('src', `dice${randomNumber2}.png`);
var header = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
  header.innerHTML = "Player 1 Wins! 🎉";
} else if (randomNumber1 < randomNumber2) {
  header.innerHTML = "Player 2 Wins! 🎉";
} else {
  header.innerHTML = "It's a Draw! 🤝";
}
