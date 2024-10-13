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
