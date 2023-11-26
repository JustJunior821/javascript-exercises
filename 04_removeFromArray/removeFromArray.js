const removeFromArray = function() {
    let args = Array.from(arguments);
    let size = args[0].length;
    for (let i = 1; i < args.length; i++)
    {
        for (let j = 0; j < size; j++)
        {
            if (args[i] === (args[0])[j])
                {
                    for (let k = j + 1; k < size; k++)
                    {
                        (args[0])[k-1] = (args[0])[k];
                    }
                    size--;
                    args[0].pop();
                }
        }
    }
    return args[0];

};

// Do not edit below this line
module.exports = removeFromArray;
