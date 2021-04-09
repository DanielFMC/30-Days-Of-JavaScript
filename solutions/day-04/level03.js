// 1
/*let month = prompt("Enter a month").toLowerCase();
switch (true) {
  case month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december":
    console.log(`${month} has 31 days`);
    break;

  case month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november":
    console.log(`${month} has 30 days`);
    break;

  case month === "febraury":
    console.log(`${month} has 28 days`);
    break;

  default:
    console.log("It is not a month");
    break;
}*/

// 2
let month = prompt("Enter a month").toLowerCase();
let year = prompt("Enter a year");
let daysOfFebraury = 28;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  daysOfFebraury = 29;
}
switch (true) {
  case month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december":
    console.log(`${month} has 31 days`);
    break;

  case month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november":
    console.log(`${month} has 30 days`);
    break;

  case month === "febraury":
    console.log(`${month} has ${daysOfFebraury} days`);
    break;

  default:
    console.log(`${month} is not a month`);
    break;
}
