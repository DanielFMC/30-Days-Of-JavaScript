let challenge = "30 Days Of JavaScript";
let challenge1 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(challenge1.indexOf("because"));
console.log(challenge1.lastIndexOf("because"));
console.log(challenge1.search("because"));
console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("30 "));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/g));
console.log("30 Days of".concat(" JavaScript"));
console.log(challenge.repeat(2));
