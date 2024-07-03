// challenge: Read the question below:
/*
    Given two arrays, arrayA and arrayB put them in a new array. However, there is 
    a twist. The twist is that, the zero index of the first array must be the zero index
    of the new array, the last index of arrayB should be the one index of the new array, 
    the one index of arrayA should be the index one of the new array, the penultimate 
    index of arrayB should be the index three of the new array and so on until the new array
    contains arrayA and arrayB. 

    Note: You have 15 mins to provide a solution and do not use any special array method.
*/

function interweave(arr1, arr2) {
  let newArr = [];
  let longestArr = arr1.length > arr2.length ? arr1 : arr2;
  let curr2Index = arr2.length - 1;

  for (let i = 0; i < longestArr.length; i++) {
    if (arr1[i] || arr1[i] === 0) {
      newArr[newArr.length] = arr1[i];
    }
    if (arr2[i] || arr2[i] === 0) {
      newArr[newArr.length] = arr2[curr2Index];
      curr2Index--;
    }
  }

  return newArr;
}

// console.log(interweave([5, 7, 9, 2, 6, 1, 4, 0, 3], [12, 3, 8, 1, 6]));
