// 1
const emptyArray = [];

// 2
const twoArray = [34, 56, 12, 1, 0];

// 3
twoArray.length;

// 4
twoArray[0];
twoArray[Math.floor(twoArray.length / 2)];
twoArray[twoArray.length - 1];

// 5
const mixedDataTypes = ["Hi", 3.14, "World", true, "JavaScript", "NodeJs"];
mixedDataTypes.length;

// 6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// 10
itCompanies.forEach((company) => {
  console.log(company);
});

// 11
itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});

// 12
console.log(itCompanies.join(", "), "are big IT companies.");

// 13
const company = "Facebook";
itCompanies.includes(company) ? console.log(company) : console.log("Not found");

// 14
itCompanies.forEach((company) => {
  let vocalO = 0;
  let companyFr = company.split("");
  companyFr.forEach((letter) => {
    if (letter === "o") {
      vocalO++;
    }
  });
  if (vocalO >= 1) {
    console.log(company);
  }
});

// 15
// itCompanies.sort();

// 16
// itCompanies.reverse();

// 17
// itCompanies.splice(0, 3);
// console.log(itCompanies);

// 18
// itCompanies.splice(itCompanies.length - 3, 3);
// console.log(itCompanies);

// 19
// itCompanies.splice(
//   Math.floor(itCompanies.length - 1) / 2,
//   itCompanies.length - 1
// );
// console.log(itCompanies);

// 20
// itCompanies.shift();
// console.log(itCompanies);

// 21
// itCompanies.splice(Math.floor(itCompanies.length - 1) / 2, 1);
// console.log(itCompanies);

// 22
// itCompanies.pop();
// console.log(itCompanies);

// 23
// itCompanies.splice(0);
// console.log(itCompanies);
