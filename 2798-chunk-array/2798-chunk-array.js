// // /**
// //  * @param {Array} arr
// //  * @param {number} size
// //  * @return {Array}
// //  */
// // var chunk = function(arr, size) {
    
// // };
// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };
/**
 * Enhances all arrays with a .last() method
 * Returns the last element, or -1 if the array is empty
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
};

/**
 * Splits an array into chunks of given size
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

// ------------------------------
// \U0001f50d Example usage:
// ------------------------------

// Example 1: Using last()
const nums = [null, {}, 3];
console.log(nums.last());  // Output: 3

const empty = [];
console.log(empty.last()); // Output: -1

// Example 2: Using chunk()
console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1,2],[3,4],[5]]

