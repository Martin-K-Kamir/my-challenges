// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4413076#overview

function minCoinChange(coins, amount) {
    const result = [];
    let remaining = amount;

    for (let i = coins.length - 1; i >= 0; i--) {
        const coin = coins[i];

        while (remaining >= coin) {
            console.log({ remaining });
            result.push(coin);
            remaining -= coin;
        }
    }

    return result;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11)); // this should return: [5, 5, 1]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // this should return: [25, 25, 25, 10]
console.log(minCoinChange([1, 5, 6, 9], 11)); // this should return: [9, 1, 1]
