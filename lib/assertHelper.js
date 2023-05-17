/**
 * Assert a condition is true
 * @function assertTrue
 * @param {boolean} condition condition
 * @param {string} message failure message.
 * @returns {boolean} result
 */
function assertTrue(condition, message = "assertion failed") {
    if (!condition) {
        throw new Error(message);
    }
    return condition;
}
export {
    assertTrue
};
