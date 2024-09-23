function reverse2(str) {
    if (str.length === 0) {
        return "";
    }

    let result = [];

    function reversing(array) {
        if (array.length === 0) {
            return;
        }

        result.push(array.pop());
        reversing(array);
    }

    reversing(str.split(""));

    return result.join("");
}

function reverse(str) {
    if (str.length === 0) {
        return "";
    }
    return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
