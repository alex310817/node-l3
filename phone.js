const createPhoneNumber = (arr) => {
    if (arr.length !== 10 || !arr.every(num => Number.isInteger(num) && num >= 0 && num <= 9)) {
        console.error("Invalid input: Input array must contain exactly 10 integers from 0 to 9.");
        process.exit(1);
    }

    const phoneNumber = `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
    console.log(phoneNumber);
    return phoneNumber;
};

// Примеры использования
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // => "(111) 111-1111"
