// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#content

function findLongestSubstring(str: string): number {
    let start = 0;
    let longest = 0;
    const seen = new Map<string, number>();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (seen.has(char)) {
            start = Math.max(start, seen.get(char) ?? 0);
        }

        longest = Math.max(longest, i - start + 1);
        seen.set(char, i + 1);
    }

    return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
