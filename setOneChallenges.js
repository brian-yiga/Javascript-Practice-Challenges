//Program to calculate the area of a triangle
//area of a triangle is calculated by the formula 1/2 * its base(width) * its height(length)


let length = 54;
let width = 30;

function areaOfTriangle (length, width) {
    const triangleArea = 1/2 * (length * width);
    const triangleHeading = document.getElementById("triangleHeading");
    triangleHeading.textContent = `The area of a triangle with length of ${length} cm and width of ${width} cm will be ${triangleArea} cm2`;
    triangleHeading.style.color = "orangered";
};

areaOfTriangle(length, width);

//program that multiplies a variable by 5 using the *= operator
//declare a variable assign it a volue and multiply by 5

let number = 30;

function multiplier (number) {
    let multipliedByFive = number *= 5;
    const text = document.getElementById("multiply");
    text.textContent = `This is the reassigned value ${multipliedByFive} of the variable 'number' when we multiply 30 by 5`;    
    text.style.color = "orangered";
    
};

multiplier(number);

//program to check if two variables have the same value and type
//assign two variables
//check if the two are the same in value and type 

let variable1 = "155";
let variable2 = 155;


function checkVariableType () {
    if (variable1 === variable2) {
        const dataText = document.getElementById("dataText");
        dataText.textContent = `The variables ${variable1} and ${variable2} are equal in type and value`;
        dataText.style.color = "orangered";
    } else {
        const dataText = document.getElementById("dataText");
        dataText.textContent = `The variables ${variable1} and ${variable2} are not equal in type and value`;
        dataText.style.color = "orangered";
    }
};

checkVariableType();


//checking if 10 is greater than or equal to 5
//we use the comparison operators > and =
//ternary function easiest function to use for a one off check

let number1 = 10;
let number2 = 5;

function one () {
    const textOne = document.createElement("h4");
    textOne.textContent = "10 is greater and not equal to 5";
    const compareHeading = document.getElementById("compareHeading");
    compareHeading.appendChild(textOne);
}

function two () {
    const textTwo = document.createElement("h4");
    textTwo.textContent = "This number1 is not greater or equal to number2";
    const compareHeading = document.getElementById("compareHeading");
    compareHeading.appendChild(textTwo);
    }

    number1 >= number2 ? one() : two();

//Concatenation

let str1 = "Hello";
let str2 = "World";

let str3 = str1 + " " + str2;
alert(str3);

//Slicing words out of a sentence using the slice();

let sentence = "coding is fun";
let removedWord = sentence.slice(10, 14);
console.log(removedWord);

//checking if a number is positive, negative or zero
//use an if statement to check if positive confirm, if not check for negativity and if not them check for zero

let figure = -10;

function figureChecker () {
    if (figure >= 1) {
        console.log("Number is Positive");
    } else if (figure < 0) {
        console.log("Number is Negative");
    } else if (figure === 0) {
        console.log("The Number is Zero")
    } else {
        console.log("This is not a Number")
    }
};

figureChecker(figure);

//Using ternary operator to check if number is odd or even

let decimalNumber = 0;

let result = decimalNumber%2 == 0 ? "Number is Even" : "Number is Odd";
console.log(result);


