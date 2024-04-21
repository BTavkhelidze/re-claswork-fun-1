let barrier = 51;

let name = prompt('enter your name').toUpperCase();
let score = Number(prompt('enter your test score'));

function getFeedBack(score, name) {
  if (score >= 90) {
    return `${name} გილოცავთ, თქვენ მიიღეთ ძალიან კარგი შეფასება`;
  } else if (score >= 51 && score < 90) {
    if ((score = 51)) {
      return `${name} თქვენ გადალახეთ ზღვარი  `;
    }
    return `გილოცავთ ${name} , თქვენ ${
      score - barrier
    } ქულით მეტი აიღეთ ბარიერზე `;
  } else if (score >= 0 && score < 51) {
    return ` სამწუხაროდ ${name} თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${
      barrier - score
    } ქულა, უკეთესად მოემზადეთ`;
  } else {
    return 'invalid score';
  }
}

console.log(`your score: ${score}`);
console.log(`barrier: ${barrier}`);

console.log(getFeedBack(score, name));
