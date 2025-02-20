// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/quiz/6078334#content

//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function calculates the maximum profit     |
//   |   that can be made by buying and selling stock    |
//   |   once in the given array `prices`.               |
//   |                                                   |
//   | Output:                                           |
//   | - The function returns the maximum possible       |
//   |   profit.                                         |
//   |                                                   |
//   | Tips:                                             |
//   | - `minPrice` keeps track of the lowest price      |
//   |   encountered so far.                             |
//   | - `maxProfit` stores the highest profit we can    |
//   |   make so far.                                    |
//   +===================================================+

function maxProfit(array) {
    let minPrice = array[0];
    let maxProfit = 0;

    for (let i = 1; i < array.length; i++) {
        const curPrice = array[i];
        minPrice = Math.min(minPrice, curPrice);
        maxProfit = Math.max(maxProfit, curPrice - minPrice);
    }

    return maxProfit;
}

console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]));
