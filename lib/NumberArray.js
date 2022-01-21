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
const count = (arr, input) => {
    let res = 0
    for (let num of arr) {
        if (num === input) {
            res += 1
        }
    }
    return res
}
const filter = (arr, mode, div) => {
    const filteredNums = []
    if (mode === "even") {
        for (let num of arr) {
            if (num % 2 === 0) {
                filteredNums.push(num)
            }
        }
    }
    if (mode === "odd") {
        for (let num of arr) {
            if (num % 2 === 1) {
                filteredNums.push(num)
            }
        }
    }
    if (mode === "div") {
        for (let num of arr) {
            if (num % div===0) {
                filteredNums.push(num)
            }
        }
    }
    return filteredNums
}
module.exports = {
    max: max,
    min: min,
    avg: avg,
    count: count,
    filter: filter,
}
