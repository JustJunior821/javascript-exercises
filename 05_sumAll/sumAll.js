const sumAll = function(first, second) {
    let total = 0;
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second))
        return "ERROR";
    else if (first < second)
    {
        for (let i = first; i <= second; i++)
        {
            total += i;
        }
        return total;
    }
    else
    {
        for (let i = second; i <= first; i++)
        {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
