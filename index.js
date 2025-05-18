export default function isBalancedBrackets(str) {
    const stack = [];
    const pairs = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.at(-1) === pairs[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalancedBrackets("[][{[]}]"));
