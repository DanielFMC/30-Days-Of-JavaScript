const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");
words.forEach((word, i) => {
  if (word.endsWith(",") || word.endsWith(".")) {
    words[i] = word.slice(0, -1);
  }
});
console.log(words);
console.log(words.length);

// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// 4
const existsEthiopia = countries.includes("Ethiopia");
if (existsEthiopia) {
  const indexEthiopia = countries.indexOf("Ethiopia");
  console.log(countries[indexEthiopia].toUpperCase());
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// 5
const existsSass = webTechs.includes("Sass");
if (existsSass) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
