// Calculate monthly savings growth until reaching the goal of KES 5,000
const goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {
  total += saving;
  
  let line = `Month ${month}: saved KES ${saving}, total KES ${total}`;
  if (saving >= 500) {
    line += " - Big month!";
  }
  console.log(line);

  // Safety net to prevent infinite loops
  if (month > 24) {
    console.log("Safety net triggered: Stopped after 24 months.");
    break;
  }

  month++;
  saving += 50;
}

if (total >= goal) {
  console.log(`Goal reached in month ${month - 1} with KES ${total}!`);
}