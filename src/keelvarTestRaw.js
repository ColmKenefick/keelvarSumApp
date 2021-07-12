const x = [4, 5, 15, 2, 8];
const y = [8, 1, 5, 10];

const doesThisArrayMeetCritera = (arg) => {
    // reduce the array to gather an accumulation of the sums, excluding the sum of the current value being iterated on
    let arrayOfSums = arg.reduce((acc, curr, index, arr) => {
        // filter over the arr being reduced and add the current value
        arr.filter((el, i) => {
            // when the indexes don't match we know we're not adding the value to itself (i.e. 4 + 4, 15 + 15)
            if (i !== index) {
                // push values to our accumulator
                acc.push(curr + arr[i])
            }
        })
        // return the accumulator
        return acc
    }, [])

    //  compare the arrays and return 
    return !arrayOfSums.some(value => arg.indexOf(value) >= 0)
}

console.log(doesThisArrayMeetCritera(y))