// Code your solutions in this fil

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
      }
    return messages;
}


const countDown = (number) => {
    console.log(number);
  
    if (number === 0) {
      return;
    } else {
      countDown(number - 1);
    }
  };
  
  countDown(10);