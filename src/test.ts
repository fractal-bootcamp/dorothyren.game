

// function isArrayFull(arr: Array<string | null>) {
//     // return or false depending on if the array is full.
//     return arr.every(value => value !== null)
// }

function isArrayFullWithForLoop(arr: Array<string | null>) {

    let isAnyNull = false
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (element == null) isAnyNull = true
    }

    const isArrayFull = !isAnyNull

    return isArrayFull
}