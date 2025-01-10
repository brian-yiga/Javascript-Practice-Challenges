//function that reurns 'Hello [Nmae]'
//The function will take a name as an argument


function greet (name) {
    const hello = document.getElementById("hello");
    hello.textContent = `Hello ${name}`;
};

greet("Brian");

//function to take two numbers and return their sum
//assign two variables to the numbers
//add the two numbers and assign to a variable


function addNumbers (num1, num2) {
    let sumOfNums = num1 + num2;
    const numbers = document.getElementById("numbers");
    numbers.textContent = `The sum of the two numbers is ${sumOfNums}`;
};

addNumbers(15, 56);

//Checking if a number is even
//Even number needs to be divisible by two and has no remainder


 function isEven (number) {
    if (number%2 === 0) {
        const even = document.getElementById("even");
        even.textContent = "This Number is Even";
    } else { 
        const even = document.getElementById("even");
        even.textContent = "This Number is Odd";
    }
 };

 isEven(12);
 
 //Printing numbers 1 - 10 using a for loop
 //The for loop will iterate through each number, perform the print statement on it and move on to the next till the loop is done

 const numsArray = [1,2,3,4,5,6,7,8,9,10];
 const print = document.getElementById("print");

function printNumbers () {
    for (let i=0; i<numsArray.length; i++) {
        const printList = document.createElement("li");
        printList.textContent = `number ${numsArray[i]}`;
        print.appendChild(printList);
    }
        
};

printNumbers();

//while loop to print the first 5 multiples of 3 
//the function will continue multipying numbers froom 1 t0 5 by 3 until the loop reaches a conditon that says 6 is abpve 3 and stop. 

let digit = 1;
const multiply = document.getElementById("multiply");

while (digit <= 5) {
    let multipleList = document.createElement("li");
    multipleList.textContent = `multiplied by 3 = ${digit * 3}`
    multiply.appendChild(multipleList);
    digit++
}

//Use a for loop to calculate the factoriol of a number n
//a factorial is where we multiply all the numbers below the number n together
//if n = 5 we have to multiply 1*2*3*4*5

let factorialDigit = 1;

function calculateFactorial () {
    for (i=1; i<=5; i++) {
        factorialDigit = factorialDigit * i 
    }
    const factorial = document.getElementById("factorial");
    factorial.textContent = `The factorial value of 5 is ${factorialDigit}`
}

calculateFactorial();

