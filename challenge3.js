// Filter out invalid marks, calculate grades, and generate a class summary
let marks = [78, 45, -5, 92, 60, 101, 55, 38];

let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalMarks = 0;
let highestMark = -1;
let highestStudent = 0;

for (let i = 0; i < marks.length; i++) {
  let mark = marks[i];
  let studentNumber = i + 1;

  // Skip invalid marks
  if (mark < 0 || mark > 100) {
    console.log(`Student ${studentNumber}: invalid mark, skipped`);
    continue;
  }

  validCount++;
  totalMarks += mark;

  // Track highest mark
  if (mark > highestMark) {
    highestMark = mark;
    highestStudent = studentNumber;
  }

  let grade = "";
  let status = mark >= 50 ? "Pass" : "Fail";

  if (mark >= 80) {
    grade = "A";
  } else if (mark >= 70) {
    grade = "B";
  } else if (mark >= 60) {
    grade = "C";
  } else if (mark >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  if (status === "Pass") {
    passCount++;
  } else {
    failCount++;
  }

  console.log(`Student ${studentNumber}: ${mark} - Grade ${grade} (${status})`);
}

console.log("--------------------");
console.log(`Valid marks: ${validCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
let average = validCount > 0 ? (totalMarks / validCount).toFixed(1) : 0;
console.log(`Average: ${average}`);
console.log(`Highest: ${highestMark} (Student ${highestStudent})`);