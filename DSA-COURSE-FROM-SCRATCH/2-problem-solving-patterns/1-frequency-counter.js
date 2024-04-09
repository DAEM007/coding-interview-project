// ============= PROBLEM SOLVING PATTERNS =================

// ==== Frequency counter pattern =====

// challenge: write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};

// OR, if you don't want to use the index of method. You can say...
function same2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let squaredNumber = arr1[i] ** 2;
        let correctIndex = -1;
        for (let j = 0; j < arr2.length; j++) {
            if(arr2[j] === squaredNumber) {
               correctIndex = j;
            }
        }
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};

// solving the above with the frequency counter pattern...
function same3(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] ? frequencyCounter1[val]++ : frequencyCounter1[val] = 1;
        // frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // This is the refactored version of the above.
    }
    for(let val of arr2) {
        frequencyCounter2[val] ? frequencyCounter2[val]++ : frequencyCounter2[val] = 1;
        // frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; // This is the refactored version of the above.
    }
    // console.log(frequencyCounter1, frequencyCounter2); // This is to track and check what we have in the counter...completely optional. You can skip this part of the code.
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
};

// solution at o(n^2) run-time...this is because indexOf is a loop nested in the for loop.
// console.log(same([1,2,3], [9,1,4])); 
// console.log(same2([1,2,3], [9,1,4])); // check solution for same2 again...
// console.log(same3([1,2,3], [9,4,1]));

//  challenge (Anagram): Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by the rearranging the letters of another, such as "cinema", formed from "iceman". 
function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of str1) {
        frequencyCounter1[char] ? frequencyCounter1[char]++ : frequencyCounter1[char] = 1;
    }
    for(let char of str2) {
        frequencyCounter2[char] ? frequencyCounter2[char]++ : frequencyCounter2[char] = 1;
    }
    // console.log(frequencyCounter1, frequencyCounter2);
    for(let key in frequencyCounter1) {
        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
};

// console.log(validAnagram('', ''));
// console.log(validAnagram('aaz', 'zza'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('awesome', 'awesom'));
// console.log(validAnagram('qwerty', 'qeywrt'));
// console.log(validAnagram('texttwisttime', 'timetwisttext'));