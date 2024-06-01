function arrayDiff(a, b) {
    const result = a.filter(item => !b.includes(item));
    console.log("Результат:", result);
}

// Примеры использования
arrayDiff([1,2], [1]); // -> [2]
arrayDiff([1,2,2,2,3], [2]); // -> [1,3]
arrayDiff([], [4,5]); // -> []
arrayDiff([3,4], [3]); // -> [4]
arrayDiff([1,8,2], []); // -> [1,8,2]
arrayDiff([1,2,3], [1,2]); // -> [3]
