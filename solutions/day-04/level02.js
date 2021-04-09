// 1
let score = prompt("Enter the score");
switch (true) {
  case score >= 0 && score < 50:
    console.log("Grade F");
    break;

  case score >= 50 && score < 60:
    console.log("Grade D");
    break;

  case score >= 60 && score < 70:
    console.log("Grade C");
    break;

  case score >= 70 && score < 90:
    console.log("Grade B");
    break;

  case score >= 90 && score <= 100:
    console.log("Grade A");
    break;

  default:
    console.log("It is not a score");
    break;
}

// 2
let month = prompt("Enter a month").toLowerCase();
switch (true) {
  case month === "september" || month === "october" || month === "november":
    console.log("The season is Autumn");
    break;

  case month === "december" || month === "january" || month === "febraury":
    console.log("The season is Winter");
    break;

  case month === "march" || month === "april" || month === "may":
    console.log("The season is Spring");
    break;

  case month === "june" || month === "july" || month === "august":
    console.log("The season is Summer");
    break;

  default:
    console.log("It is not a month");
    break;
}

// 3
let day = prompt("Enter a day").toLowerCase();
switch (true) {
  case day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday":
    console.log(`${day} is a working day`);
    break;

  case day === "saturday" || day === "sunday":
    console.log(`${day} is a weekend`);
    break;

  default:
    console.log("It is not a day");
    break;
}
