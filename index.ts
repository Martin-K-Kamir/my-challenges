export default function isAnagram(str1: string, str2: string) {
    if (str1.length !== str2.length) {
        return false;
    }

    const map = new Map<string, number>();

    [...str1].forEach(char => {
        if (map.has(char)) {
            map.set(char, map.get(char)! + 1);
        } else {
            map.set(char, 1);
        }
    });

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!char) {
            return false;
        }

        if (map.has(char)) {
            if (map.get(char) === 0) {
                map.delete(char);
            } else {
                map.set(char, map.get(char)! - 1);
            }
        } else {
            return false;
        }
    }

    return true;
}
