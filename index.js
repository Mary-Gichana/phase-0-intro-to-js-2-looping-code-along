// Code your solutions in this file

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

const thankYouCards = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(thankYouCards);

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(9);
