

// Array tasks
// // Write a function that takes an array and returns a new array with the last item removed.
function removeLastItem(arr) {
    return arr.slice(0, -1);
}
arr=[1,2,3,4,5]
console.log(removeLastItem(arr));


// // Write a function that takes an array and returns the length of items it has.
// 

// function getArrayLength(arr) {
//     return arr.length;
// }
// console.log(getArrayLength(arr));

// // Write a function that takes an array and an item, returns the array with the item added to the
// end of array.

// function addItemToEnd(arr, item) {
//     arr.push(item); 
//     return arr;
// }
// arr=[1,2,3,4,5]
// console.log(addItemToEnd(arr,6));



// // Write a function that takes an array and an item, returns the array with the item added to the
// beginning of array.
function addItemToBeginning(arr, item) {
    arr.unshift(item); 
    return arr;
}



// // Write a function that takes an array of words and returns a string of the words seperated by ,
function wordsToString(arr) {
    return arr.join(',');
}


// // Write a function that takes an array and two indexes (start and end). Return an array
// consisting of items between the given indexes.
function getSubArray(arr, start, end) {
    return arr.slice(start, end + 1);
}


// // Write a function that takes an array and an index, returns the item at given index.

function getItemAtIndex(arr, index) {
    return arr[index];
}


// // Write a function that takes an array and an item, removes that item from the array without
// leaving undefined items, returns the new array.

function removeItem(arr, item) {
    return arr.filter(element => element !== item);
}



// Object tasks
// // Write a function objectToArray(obj) that converts an object to an array of key-value
// pairs.


function objectToArray(obj) {
    return Object.entries(obj);
}



// // Write a function that takes an array of objects and splits them to two groups, one that fulfill the
// condition in the callback function and one that does not.

function splitByCondition(arr, callback) {
    const fulfill = [];
    const unfulfill = [];
    
    arr.forEach(obj => {
        if (callback(obj)) {
            fulfill.push(obj);
        } else {
            unfulfill.push(obj);
        }
    });
    
    return { fulfill, unfulfill };
}



const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 },
];
const result = splitByCondition(people, person => person.age >= 18);

console.log(result.fulfill); 
