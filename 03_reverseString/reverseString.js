const reverseString = function(forward) {
    let reversed = "";
    let length = forward.length - 1;
    for (let i = length; i >= 0; i--)
    {
        reversed = reversed.concat(forward[i]);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
