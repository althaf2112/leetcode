/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
};/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if (Array.isArray(obj)) {
    // Check if array has any elements
    return obj.length === 0;
  } else {
    // Check if object has any keys
    return Object.keys(obj).length === 0;
  }
};
