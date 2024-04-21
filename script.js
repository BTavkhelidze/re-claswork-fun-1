let barrier = 51;

let name = prompt('enter your name');
let score = Number(prompt('enter your test score'));

function getFeedBack(score, name) {
  if (score >= 90) {
    return `${name} congretulation you have a great result`;
  } else if (score >= 51 && score < 90) {
    return `congretulation ${name}, you took ${
      score - barrier
    } more than barrier `;
  } else if (score >= 0 && score < 51) {
    return ` unfortunetly ${name}, you couldn't pass the test. you had ${
      barrier - score
    } less than barrier`;
  }
}

console.log(getFeedBack(score, name));
