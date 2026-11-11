// Loop from 1 to 30 to check for multiples of 3, 5, or both
let chaiMandaziCount = 0;

for (let i = 1; i <= 30; i++) {
  // Check the combined condition first
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Chai & Mandazi");
    chaiMandaziCount++;
  } else if (i % 3 === 0) {
    console.log("Chai");
  } else if (i % 5 === 0) {
    console.log("Mandazi");
  } else {
    console.log(i);
  }
}

console.log(`Chai & Mandazi was shouted ${chaiMandaziCount} times.`);