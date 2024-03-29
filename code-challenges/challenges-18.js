'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//


let newArr = [];
let midLength = 0;
let len = 0;
const wordLength = (str) => {

    let newArr = str.split(" ");
    let len = (newArr.length - 1) / 2;
    if (len % 2 != 0) {
        len = ((newArr.length) / 2)
    }
    midLength = newArr[len].length;
    return midLength;
}


// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let input1=str1.split("").sort();
    let input2=str2.split("").sort();

    let result = true;

    if (input1.join()== input2.join()){
        return(true)
    }else{
        return(false)
    }
    return result; 
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let indexofint =0;
    if(arr.includes(int)){
        indexofint = arr.indexOf(int)
    } else {
        let newArr =arr;
        newArr.push(int)
        newArr.sort()
        indexofint = arr.indexOf(int)
    }
    return indexofint;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };