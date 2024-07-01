// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
const names = ["Charlie", "Samip", "Ann"];
function writeCards(names, eventName) {
  const thanksMessages = [];
  for (let i = 0; i < names.length; i++) {
    const messages = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    thanksMessages.push(messages);
  }
  return thanksMessages;
}

function countDown(countSequence) {
  let count = countSequence;
  while (count >= 0) {
    console.log(count--);
  }
}

//Function Calls
//wrapGifts(gifts);
const message = writeCards(names, "birthday");
console.log(message);
countDown(10);
