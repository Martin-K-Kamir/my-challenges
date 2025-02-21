function capitalizeWords(array) {
    if (array.length === 0) {
        return [];
    }

    return [array[0].toUpperCase(), ...capitalizeWords(array.slice(1))];
}
