const removeFromArray = function() {
    numOfArguements = arguments.length;
    list = arguments[0]
    for (i=1;i<numOfArguements;i++){
        for (argument of list)
            if (arguments[i]===argument)
                list.splice(list.indexOf(argument),1)
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
