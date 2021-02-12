//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//
var i = 0;
while( i<10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


//your code...
var i = 0;
while( i<10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
const multiply = function(a,b) {
    return a * b;
};

const add = function(a,b) {
    return a + b;
};
const divide = function(a,b) {
    return a / b;
};
const power = function(a,b) {
    return Math.pow(a,b);
};
//Answer
console.log(divide(multiply(add(30,2),20),power(10,2)));

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
let values = [20,0,"zero",'const zero = 20;',null,"0",!"",{},() =>{console.log("hello TEKcamp!");},125, undefined,""]

function truthyChecker(a){
    if(a){
        console.log(`${a} is true because javascript said so` );
    }else{
        console.log(`${a} is false because javascript said so`);
    }
};

for(const value of values){
    truthyChecker(value);
}




/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "monday";

// if(day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if(day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
// }
//code
switch(day){
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!")
        break;
    default:
        console.log("It's a weekend!")

        
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
// const age = 10;
// if (age > 21) console.log("adult"); else {
//     console.log("minor");
// }

// if (age > 13 && age < 19) console.log('teen'); else {
//     console.log("not a teenager");
// };

// if (age > 65) console.log("retired"); else {
//     console.log("still working...");
// }

const age = 13;
 let adultOrMinor = age > 21 ? console.log("adult") : console.log("minor");
    

let isTeen = age >= 13 && age <= 19 ? console.log('teen') : console.log("not a teenager");

let workingOrRetired = age > 65 ? console.log("retired") : console.log("still working...");




/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
let me = {
    name: "Caleb",
    age: 25,
    gender: "male",
    hobbies: ["programming", "gaming", "running"],
    profession: "automation engineer",
    education: "Associates",
    learn: function(){
        console.log(this.name);
    },
    sayHobbies: function(){
        this.hobbies.forEach(hobbie => console.log(`${hobbie} is something I like to do`));
    }
}

me.sayHobbies();
me.learn();

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
let orange = {
    type: "fruit",
    color: "orange",
    taste: "tart",
    weightInGrams: 30,
    peel: function(){
        console.log(`this ${this.type} is hard to peel!`);
    }
}

orange.peel();

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
function favoriteDataTypes(){
    console.log(Boolean, "is one of my favorite data types because it makes automation easier.");
    console.log(Symbol, "is one of my favorite data types because it helps prevent property name collisions in the DOM");
    console.log(null,"is one of my favorite data types because it is the absence of value");
}
favoriteDataTypes();

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  
//This HOF should return another function fn(y) that takes another single parameter y.  
//This inner function should compute the product of it's parameter with the parameter passed into multiple.  
//Use this returned "first-class" function to compute triples of any given number.

//your code...
// multiple = (x) => (y) => x * y;


function multiple(x){
    return function (y){
        return x*y;
    }
}
console.log(multiple(3)(3));
// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  
// Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  
// Run the function returned by the higher order function to display the future value of the stock.  

//your code...

function stockGain(basis){
    let message = " is how much the stock has increased."
    return function (yrs){
        let r = .05;
        
        console.log(((basis * r) * yrs), message); 
        return ((basis * r) * yrs);
    }
    
    
}

var futureValue = stockGain(100)(12) + 100;


console.log(futureValue, "is the future value");