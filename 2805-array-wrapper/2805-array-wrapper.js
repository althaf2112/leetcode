// // /**
// //  * @param {number[]} nums
// //  * @return {void}
// //  */
// // var ArrayWrapper = function(nums) {
    
// // };

// // /**
// //  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function() {
    
// }

// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function() {
    
// }

// /**
//  * const obj1 = new ArrayWrapper([1,2]);
//  * const obj2 = new ArrayWrapper([3,4]);
//  * obj1 + obj2; // 10
//  * String(obj1); // "[1,2]"
//  * String(obj2); // "[3,4]"
//  */class ArrayWrapper {
//   constructor(nums) {
//     this.nums = nums;
//   }

//   // When two ArrayWrapper objects are added, JS automatically calls valueOf()
//   valueOf() {
//     return this.nums.reduce((sum, num) => sum + num, 0);
//   }

//   // When String() or console.log() calls toString()
//   toString() {
//     return `[${this.nums.join(',')}]`;
//   }
// }
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  // When using + operator, JS automatically calls valueOf()
  valueOf() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  // When using String() or template literals, JS calls toString()
  toString() {
    return `[${this.nums.join(',')}]`;
  }
}class Calculator {
  constructor(value) {
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this; // allows method chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}

