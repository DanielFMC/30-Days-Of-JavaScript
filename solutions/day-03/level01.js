// 1
const firstName = "Daniel";
const lastName = "Moreno";
const country = "Colombia";
const city = "Bogotá";
const age = 23;
const isMarried = false;
const year = 2020;

// 2
console.log("10" === 10);

// 3
console.log(parseInt("9.8") == 10);

// 4.a
console.log(4 > 1);
console.log(1 == true);
console.log(0 == false);

// 4.b
console.log(10 < 3);
console.log(0 === "0");
console.log(1 == false);

// 5
console.log("Punto 5");
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("Python".length > "Jargon".length);

// 6
console.log("Punto 6");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(!("Python".includes("on") && "Dragon".includes("on")));

// 7
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay() + 1);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
