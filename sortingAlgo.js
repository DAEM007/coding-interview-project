// Bubble sort- Note this the poorest of all the sorting algorithms but it give a very good intro to sorting alogorithms
// Example 1: Given an array return the sorted array in ascending order
function BubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// BubbleSort(array);
// console.log(array);
// Note: Here that the big - o of the algorithm is o(n^2) since there are two nested loops...notice that this is a poor algorithm just as we have established...
// Example 2: Given an array return the sorted array in descending order
function BubbleSortDesc(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// BubbleSortDesc(array);
// console.log(array);

// Insertion sort
// Example 3: Solve Example 1 using insertion sort algorithm
function InsertionSort(arr) {
    // since we assume that first element in the array is sorted
    // Hence, we traverse the unsorted part
    // Note we use i for sorted index and j for unsorted index
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// InsertionSort(array);
// console.log(array);
// Note: Big-o = o(n^2)...since as the inputs(number of elements in the array)increases, the number of comparisms increases by square of that number...also recall we have two nested loops

// Example 4: implement insertion sort in descending order for Example 3
function InsertionSortDesc(arr) {
    // since we assume that the first element in the array is sorted
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] < numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// InsertionSortDesc(array);
// console.log(array);
// Note: The big-o = o(n^2)...since as the input grows the number of comparism increases by square of the input...recall that we have two nested loops