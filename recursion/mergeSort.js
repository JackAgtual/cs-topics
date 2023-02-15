function combineSortedArrays(sortedArray1, sortedArray2) {
    combinedArray = []

    while (sortedArray1.length > 0 || sortedArray2.length > 0) {
        if (sortedArray1.length == 0 || sortedArray2[0] < sortedArray1[0]) combinedArray.push(sortedArray2.shift())
        else combinedArray.push(sortedArray1.shift())
    }
    return combinedArray
}

function splitArrayIntoTwoArrays(array) {
    const midIdx = Math.floor(array.length / 2)

    return [
        array.slice(0, midIdx),
        array.slice(midIdx)
    ]
}

function mergeSort(array) {
    if (array.length < 2) return array

    const [leftArray, rightArray] = splitArrayIntoTwoArrays(array)

    const sortedLeft = mergeSort(leftArray)
    const sortedRight = mergeSort(rightArray)

    return combineSortedArrays(sortedLeft, sortedRight)
}

testArray = [4, 1, 6, 2, 3, 5]

console.log(mergeSort(testArray))