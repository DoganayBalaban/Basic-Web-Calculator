const btns = document.querySelectorAll("button");
const screen = document.querySelector("#screen");
/* HTML de bulunan ekran ve butonlar */
const eq = document.querySelector("#equals");
const clear = document.querySelector("#clear");
/* hesaplama yapmak için, sonucu saklamak için ve geçerli hesaplamayı tutmak için değişkenler  */
let calculation = [];
let accumulativeCalculation;

/* Event listenerlar */
btns.forEach((btn) => {
  btn.addEventListener("click", clickButtons);
});
clear.addEventListener("click", temizle);

/* Tıklanan butonun değerini number'a atıyoruz eğer = e basıldıysa hesaplama yapıyor değilse butonun değerini ekrana basıyor. */
function clickButtons(e) {
  const number = e.target.textContent;
  if (number === "=") {
    screen.textContent = eval(accumulativeCalculation);
    calculation = [screen.textContent];
  } else {
    screen.textContent += number;
    calculation.push(number);
    accumulativeCalculation = calculation.join("");
  }
}
/* calculation dizisini sıfırlıyoruz ve ekranı siliyoruz. */
function temizle(e) {
  calculation = [];
  screen.innerHTML = "";
}
