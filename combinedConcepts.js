//Write a program that counts how many times the letter "a" appears in the string "JavaScript is amazing!"
//convert the string into an array
//loop through the array picking out count the indices witn the letter "a"
//add them up and get the sum

let sentence = "Javascript is amazing";
let sum = 0;

function countLettersInSentence() {
  const sentenceArray = sentence.split("");
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] === "a") {
      sum += 1;
    }
  }
  const character = document.getElementById("character");
  character.textContent = `There are ${sum} 'a's in the string Java is amazing`;
}

countLettersInSentence();

//Create a function sumArray that takes an array of numbers and returns their sum.
//create an array and get the sum

let numsArray = [13, 24, 39, 4];
let total = 0;

function sumOfNums() {
  for (let i = 0; i < numsArray.length; i++) {
    total += numsArray[i];
  }
  const addition = document.getElementById("addition");
  addition.textContent = `The sum of the numbers is ${total}`;
}

sumOfNums();

//Write a loop to log all key-value pairs of the object{a:1,b:2,c:3}
//can use Object.keys() and Object.values()

const myObject = { a: 1, b: 2, c: 3 };

function accessObject() {
  for (let item in myObject) {
    console.log(item, myObject[item]);
  }
}

accessObject();

//Check if the number 5 exists in the array [1,2,3,4,5]
//Using the includes() method

let numberArray = [1, 2, 3, 4, 5];

console.log(numberArray.includes(5));

// Write a function findMax that returns the largest number from an array of numbers

let digitsArray = [6, 7, 8, 9, 4, 3];
let largest = 0;

function findMax() {
  for (let i = 0; i < digitsArray.length; i++) {
    if (digitsArray[i] > largest) {
      largest = digitsArray[i];
    }
  }
  const large = document.getElementById("large");
  large.textContent = `The largest of the numbers is ${largest}`;
}

findMax();

//Create a program that combines two arrays [1,2] and [3,4] into one using the concat() method.

let arr1 = [1, 2];
let arr2 = [3, 4];

let arr3 = arr1.concat(arr2);

const add = document.getElementById("add");
add.textContent = `The concatated array will be ${arr3}`;

//Write a function that reverses a string, e.g., "hello" becomes "olleh"
//first convert the string into an array
//reverse the array
//convert the array back into a string (without commas!!!!)

let word = "hello";

function reverseWord() {
  const convertedWord = word.split("");
  const reversedArray = convertedWord.reverse();
  const reversedStriing = reversedArray.toString();
  console.log(reversedStriing);
}

reverseWord();

//Write a function that takes a number and an array, checks if the number exists in the array, and returns a message "Found" or "Not Found"
//with an IF statement and includes() metjod check whether the number is in the array, if not return 'not Found'

let arrNumber = 0;
let arrayOfNumbers = [];

function checkArrayOfNumbers(arrNumber, arrayOfNumbers) {
  if (arrayOfNumbers.includes(arrNumber)) {
    const search = document.getElementById("search");
    search.textContent = "Found";
  } else {
    const search = document.getElementById("search");
    search.textContent = "Not Found";
  }
}

checkArrayOfNumbers(7, [1, 2, 3, 4, 5]);

//Create a function that accepts a string and counts how many vowels (a, e, i, o, u) it contains.
//create a loop that will check if each character in this string "the boy is in the house today" is in the characters of the vowels string
//if found it will then count them

let vowels = "a,e,i,o,u";
let string = "";

function vowelCheck(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  console.log(count);
}

vowelCheck("the boy is in the house today");

//Write a program to check if two arrays are equal (contain the same elements in the same order). Develop a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.
//CHATGPT

// let array1 = [1,2,3,4,5];
// let array2 = ["a","b","c","d","e"];

// function compareArrays () {
//     if (array1.length !== array2.length) {
//         console.log("not equal in length") 
//     }

//     for (let i=0; i<array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             console.log("not equal in content")
//         }
//     }
//     console.log("The arrays are the same")
// }


//Develop a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.
//Sort out the array in ascending order using the sort() callback function then choose the index[0] as min and index[end] as max
//Push these two to form an object

let mixedArray = [40, 100, 1, 5, 25, 10];

function findMinMax () {
    const sortedArray = mixedArray.sort(function(a, b) {return a-b})
    
    const smallestValue = sortedArray[0];
    const largestValue = sortedArray[sortedArray.length - 1];

    const minMaxValues = {minValue : smallestValue, maxValue : largestValue}
    
    const minMax = document.getElementById("minMax");
    minMax.textContent = `mixedArray = [40, 100, 1, 5, 25, 10], The smallest number in the array is ${smallestValue} and the largest is ${largestValue}`;
};

findMinMax();


//Write a program that filters out all numbers greater than 10 from an array and returns the result. (without using filter() method)

let ageArray = [34,7,9,11,2,34,67,2,10];
let newAgeArray = [];

function sortAboveTen () {
    for (let i=0; i<ageArray.length; i++) {
        if (ageArray[i] >= 10) {
            newAgeArray.push(ageArray[i])
        }
    }
    const filter = document.getElementById("filter");
    filter.textContent = `These are the ages above ten in the array, ${newAgeArray}`;
};

sortAboveTen();

//FILTER () METHOD

//newAgeArray = ageArray.filter(age => age >= 10);

//
