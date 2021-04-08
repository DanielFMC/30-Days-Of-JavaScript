// 1
/*let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);*/

// 2
/*let sideA = prompt("Enter side A");
let sideB = prompt("Enter side B");
let sideC = prompt("Enter side C");
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
alert(`The perimeter of the triangle is ${perimeter}`);*/

// 3
/*let lenght = prompt("Enter the lenght");
let width = prompt("Enter the width");
let area = lenght * width;
let perimeter = 2 * (parseInt(lenght) + parseInt(width));
alert(`The area of the rectangle is ${area} and the perimeter is ${perimeter}`);*/

// 4
/*let radius = prompt("Enter the radius");
let area = Math.PI * radius * radius;
let circumference = 2 * Math.PI * radius;
alert(
  `The area of the circle is ${area} and the circumference is ${circumference}`
);*/

// 8
console.log("y = x^2 +6x +9");
let x = 0;
console.log(`x = ${x}, ${x ** 2 + 6 * x-- + 9}`);
console.log(`x = ${x}, ${x ** 2 + 6 * x-- + 9}`);
console.log(`x = ${x}, ${x ** 2 + 6 * x-- + 9}`);
console.log(`x = ${x}, ${x ** 2 + 6 * x-- + 9}`);

// 9
/*let hours = prompt("Enter the hours");
let ratePerHour = prompt("Enter rate per hour");
let earning = hours * ratePerHour;
alert(`Your weekly earning is ${earning}`);*/

// 10
"Daniel".length > 7
  ? console.log("My name is long")
  : console.log("My name is short");

// 11
let firstName = "Asabeneh";
let lastName = "Yetayeh";
firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(
      `Your first name, ${firstName} is smaller than your family name, ${lastName}`
    );

// 12
let myAge = 250;
let yourAge = 25;
let dif = myAge - yourAge;
myAge > yourAge
  ? console.log(`I am ${dif} years older than you.`)
  : console.log(`I am ${-dif} years younger than you.`);

// 13
/*let age = prompt("Enter birth year");
let difAge = 2021 - age;
difAge >= 18
  ? alert(`You are ${difAge}. You are old enough to drive`)
  : alert(
      `You are ${difAge}. You will be allowed to drive after ${
        18 - difAge
      } years.`
    );*/

// 14
/*let years = prompt("Enter number of yours you live");
let time = years * 31536000;
alert(`You lived ${time} seconds`);*/

// 15
const date = new Date();
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours().toString();
let minute = date.getMinutes().toString();

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year} ${hour}:${minute}`);
console.log(`${day}/${month}/${year} ${hour}:${minute}`);
