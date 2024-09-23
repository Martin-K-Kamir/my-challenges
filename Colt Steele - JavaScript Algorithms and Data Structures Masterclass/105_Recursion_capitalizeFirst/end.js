function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeFirst(array) {
    if (array.length === 0) {
        return [];
    }

    return [capitalize(array[0]), ...capitalizeFirst(array.slice(1))];
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
