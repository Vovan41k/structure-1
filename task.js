const arr = ['a', 'b', 'c', 'a', 'd', 'c', 'c']
let i = 0
const d = {}
for (let letter of arr) {
    if (!d[letter]){
        d[letter]=0
    }
    d[letter]+=1
    console.log(d)
    // let res = 0
    // for (let letter2 of arr) {
    //     if (letter === letter2) {
    //         res += 1

    //     }
    //     i += 1
    // }
    // console.log (res)
}
console.log(d)