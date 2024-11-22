// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/425976#content

function reverse2(str: string): string {
    if (str.length === 0) {
        return "";
    }

    let result: string[] = [];

    function reversing(array: string[]) {
        if (array.length === 0) {
            return;
        }

        result.push(array.pop() ?? "");
        reversing(array);
    }

    reversing(str.split(""));

    return result.join("");
}

function reverse(str: string): string {
    if (str === "") {
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse2("rithmschool")); // 'loohcsmhtir'
