console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

console.log("10" == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));

let randomNumber0to100 = Math.floor(Math.random() * 101);
console.log("Random between 0 and 100", randomNumber0to100);

let randomNumber50to100 = Math.floor(Math.random() * 51) + 50;
console.log("Random between 50 and 100", randomNumber50to100);

let randomNumber0to255 = Math.floor(Math.random() * 256);
console.log("Random between 0 and 255", randomNumber0to255);

let randomNumber = Math.floor(Math.random() * 11);
console.log("JavaScript".charAt(randomNumber - 1));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    23
  )
);
