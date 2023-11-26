const repeatString = function(string, num) {
    if (num < 0)
        return "ERROR";
    let initial = "";
    for (let i = 0; i < num; i++)
    {
        initial = initial.concat(string);
    }
    return initial;
};

// Do not edit below this line
module.exports = repeatString;
