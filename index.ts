{
    // https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#content

    function findLongestSubstring(str: string) {
        const map = new Map<string, number>();
        let longest = 0;
        let start = 0;

        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (map.has(char)) {
                start = Math.max(start, map.get(char) ?? 0);
            }

            longest = Math.max(longest, i - start + 1);
            map.set(char, i + 1);
        }

        return longest;
    }

    // console.log(findLongestSubstring("")); // 0
    console.log(findLongestSubstring("rithmschool")); // 7
    console.log(findLongestSubstring("thisisawesome")); // 6
    console.log(findLongestSubstring("thecatinthehat")); // 7
    console.log(findLongestSubstring("bbbbbb")); // 1
    console.log(findLongestSubstring("longestsubstring")); // 8
    console.log(findLongestSubstring("thisishowwedoit")); // 6
}
