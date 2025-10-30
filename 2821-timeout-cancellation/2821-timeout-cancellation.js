/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Schedule the execution of fn after t milliseconds
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    const cancelFn = function() {
        clearTimeout(timeoutId);
    };

    return cancelFn;
};
