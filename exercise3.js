//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
function isEmpty(string){
    
   return (!string || /^\s*$/.test(string));

}

console.log(isEmpty("bob"));
console.log(isEmpty(""));


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
let excitedString = "Learning JavaScript is fun!";

function lastWordReplacer(newWord){
    stringToArray = excitedString.split(" ");
    popper = stringToArray.pop();
    stringToArray.push(newWord);
    excitedString = stringToArray.join(" ");
    console.log(excitedString);
}
lastWordReplacer("cool!");


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. 
// Use an arrow function and one of the built-in array methods. 



//your code...





function arrayOfNums(){
    const nums = [1, 2, 3, 4, 5];
    let newArray = nums.map(num => num * num);
    console.log(newArray);
    return newArray;
}
arrayOfNums();


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...
const arrOfNums = [1, 3, 5, 7, 9, 1, 3, 5];

console.log(arrOfNums.filter(num => num > 3));





/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

const arrOfNums2 = [10,20,30,40,50];


console.log(arrOfNums2.reduce((a,b) => a + b, 0));


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...
function dnaMatch(string){
    let stringToArray = string.split("");
    let complementaryStrand=[];
    for(letter of stringToArray){
        switch(letter){
            case "G":
                complementaryStrand.push("C");
            break;
            case "C":
                complementaryStrand.push("G");
            break;
            case "T":
                complementaryStrand.push("A");
            break;
            case "A":
                complementaryStrand.push("T");
            break;
            default:
                console.log("No DNA strand provided");    
        }
    }
    
    console.log(complementaryStrand);
    console.log(complementaryStrand.join(""));
}
dnaMatch("GCTA");




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  
//Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];



function maxNumber(numbers) {
    //your code...
    let newArray = [];

    let map1 = numbers.map(num => {
        if(Number.isInteger(num)){
            newArray.push(num);
        }else if(num == "one"){
            newArray.push(1);
        }else if(num == "two"){
            newArray.push(2)
        }else if(num == "three"){
            newArray.push(3);
        }else if(num == "3"){
            newArray.push(3);
        }else if(num.k == 1){
            newArray.push(1);

        }else {
            return delete(num);
        }

    
    });
   return Math.max(...newArray);

}
console.log(maxNumber(numbers));



// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...
    return numbers.sort().reverse();
};


console.log(sortNums(numbers,false));

/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  
//An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set("object",{company : "TEKsystems"});
mapObj.set("integer", 1);
mapObj.set("boolean", false);
mapObj.set("array", []);
mapObj.set("string", "this is a string");
    

//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
//Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log(mapObj.has('object'));  
console.log("it is returning false because you are asking if it has the value instead of the key. ")
//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
console.log(mapObj.keys());

/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
console.log(ones.reverse());

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.
function greeting(name){
    console.log('Hello ' + name);
}

function performer(cb) {
    //code goes here
    var name = 'Caleb';
    cb(name);
}
performer(greeting);


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


//Template Literals in ES6

let name = "Rosa"

var sayName = "Your name is " + name + "."; // this is the old way

var sayNameNew = `Your name is ${name}.` //this is the new way in es6. This allows for much cleaner code as you are inserting the variables directly. 
                                        //Note - You need to use backticks ` instead of "" or ''. This also allows for you to write almost normally. 

console.log(sayName);
console.log(sayNameNew);