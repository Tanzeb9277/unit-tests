function analizeArray(arr){

    results = {
        average: undefined,
        min: undefined,
        max: undefined,
        length: undefined
    }

    results.min = Math.min( ...arr );
    results.max = Math.max( ...arr );

    results.length = arr.length;
  
    results.average = arr.reduce((previousValue, currentValue) => previousValue + currentValue,0) / arr.length;

    return results;
}

module.exports = analizeArray;