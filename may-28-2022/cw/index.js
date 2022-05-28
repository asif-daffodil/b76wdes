// console.log("This is a text");
// console.log("hmmmmm");

// single line comment

/* multi line
comment */

// operators

/**
 * arethmetic operator
 * +
 * -
 * *
 * /
 * %
 */

/**assignment operator
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 */

/**Increment/decrement operator
 * ++
 * --
 */

var x = 10;
x += 3; // x = x + 3
x -= 2;
++x;
x++;
// console.log(x++);

x *= 2;

// console.log(++x);

/**comparison operator
 * ==  (1 == "1")
 * === (1 === "1")
 * != (5 != "5")
 * !== (5 != "5")
 * <
 * >
 * <=
 * >=
 */

/**Conditional operator
 * && (5 < 6 && 6 > 7)
 * ||   (5 < 6 || 6 > 7)
 */

/**Concatenation operator
 * +  "Dhaka" + 123
 * +=
 */

let myVar = "This is a text";
let myVar2 = 123;
let myVar3 = true;
let myVar5 = null;
let myVar6 = ["Dhaka", "Bogura", "Rajshahi", "Shyleth", "Jhalokathi"];
let myVar4 = {
  name: "Asif Abir",
};

/* console.log(
  typeof myVar,
  typeof myVar2,
  typeof myVar3,
  typeof myVar4,
  typeof myVar5,
  typeof myVar6
); */

// variable
let xyz = 123;
const abc = 123;

/**way to declare a variable
 * use let/const
 * unique name
 * use = sign
 * value
 * semicolon
 */

/**how to declare a variable name
 * you can use abc
 * you can use _ sign
 * you can use camel case
 * you can use number at the middle or ending part of ca variable (i.e. abc123, abc, aBc, vuya_mua, kaka12kaku,)
 * you cant use number at athe begining (123abc - wrong way)
 * you cant use special carrecter (abir@gmail.com - wrong way)
 */

function capital(city = "London", country = "England") {
  return city + " is the capital of " + country;
}

/* console.log(capital("Dhaka", "Bangladesh"));
console.log(capital("Isalamabad", "Pakistan"));
console.log(capital("Dilli", "India"));
console.log(capital("Barishal"));
console.log(capital()); */

const city = (city = "Mumbai", features = "faltu") => {
  return city + " is a " + features + " city!";
};

console.log(city("Dhaka", "Beautiful"));
