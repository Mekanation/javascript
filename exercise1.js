//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

function ftoc(ft) {
    ct = (((ft - 32)*5)/9);
    console.log(ct);
   
}
function ctof(ft) {
    ft = (((ct * 9)/5)+32);
    console.log(ft);
    
}

//tests
ftoc(90);
ctof(32);







/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...


function oldEnoughToVote(age){
    if(age >= 18){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
}
//tests
oldEnoughToVote(23);
oldEnoughToVote(17);
oldEnoughToVote(18);




/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

function stringToArray(sentence){
    splitter = sentence.split(" ");
    console.log(splitter);
    rejoined = splitter.join(" ");
    console.log(rejoined);
}
//test
stringToArray("The five boxing wizards jump quickly.");




/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
function phoneReversal(phone){
    phoneToArray = phone.toString(10).split("");
    reversedPhone = phoneToArray.reverse().join("");
    console.log(reversedPhone);
}
phoneReversal(8174049873);




/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

let Car = function(make,model,year,color){
    this.make= make;
    this.model = model;
    this.year = year;
    this.color = color;
}

var myCar = new Car('Mazda',"3",2017,'blue');
function carViewer(car){
    console.log(car.make,car.model,car.year,car.color);
}
carViewer(myCar);




/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...
function oddOrEven(number){
    count=0;
    while(count <= number){
        if((count % 2) == 0){
            console.log(count + ": is even");
        }else{
            console.log(count + ": is odd");
        }
        count++;
    }
}
oddOrEven(15);



/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function tekFizzBuzz(number){
    for (i = 0; i <= number; i++){
        if(((i % 3) == 0) && (((i % 5) == 0))){
            console.log("TEKcamp");
        }else if(((i % 3) == 0)) {
            console.log("TEK");
        }else if(((i % 5) == 0)){
            console.log("camp");
        }else {
            console.log(i);
        }
    }
}
tekFizzBuzz(100);

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
function arrayElementLogger(array){
    for(i = 0; i <= array.length; i++){
        if( (i % 3 == 0) ) {
            console.log(array[i]);
        }
    }
}
arrayElementLogger(nums);


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.


const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".
//code
var school = foodArray[foodArray.length -1].school;
console.log(school);

//helper function to simplify array loop.
function pluralityChecker(word){
    if(word[word.length -1] == 's'){
        return true;
    }else {
        return false;
    }

}


foodArray.forEach((value, index) => {
    const value2 = adjectiveArray[index];
    if(value.school !== undefined && (pluralityChecker(value) == false)){
        console.log(value.school + ' is ' + value2 );
    }else if(pluralityChecker(value)== false){
        console.log(value + ' is ' + value2);
    }else {
        console.log(value + ' are '+ value2);
    }

});
    

    


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
var operations = [
    add = function(a,b){
    return a + b; },

    subtract = function(a,b){
    return  a - b;},

    multiply = function(a,b){
        return a * b; },
    
    divide = function(a,b){
            return a / b; }


];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


function doMath(a,b) {
   console.log("Function Ran: " + operations[getRandomInt(4)].name + "| Calculation: "+ operations[getRandomInt(4)](a,b));
   
    
    
};
doMath(1,2);
doMath(15,5);
