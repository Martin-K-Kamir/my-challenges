// WRITE THE MERGE FUNCTION HERE //
//                               //
//                               //
//                               //
//                               //
///////////////////////////////////
function merge(left, right) {
    const mergedArr = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArr.push(left[i])
            i++
        } else {
            mergedArr.push(right[j])
            j++
        }
    }

    return [...mergedArr, ...left.slice(i), ...right.slice(j)]
}


let myArray1 = [1, 3, 7, 8];
let myArray2 = [2, 4, 5, 6];
console.log(merge(myArray1, myArray2));


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/
