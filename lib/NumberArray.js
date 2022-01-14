const max = (arr) => {
    let maxVal = arr[0]
    for (let num of arr) {
        if (num > maxVal) {
            maxVal = num
        }
    }
    return maxVal
}
const min = (arr) => {
    let minVal = arr[0]
    for (let num of arr) {
        if (num < minVal) {
            minVal = num
        }
    }
    return minVal
}
const avg = (arr) => {
    let sum = 0
    for (let num of arr) {
        // sum = sum + num
        sum += num
    }
    return sum / arr.length
}
module.exports = {
    max: max,
    min: min,
    avg: avg,
}
