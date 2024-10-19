function negativeInRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            const filteredArr = arr[rowIdx].filter((e) => {
                return e < 0;
            });

            filteredArr.length > 0 ? resolve(`Negative number found: ${arr[rowIdx]}`) : reject('No negatives found');
        } else {
            reject('Row index out of bounds');
        }
    })
}

const array2D_9 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negativesInRowPromises: Promise<string>[] = [];

for(let x = 0; x < array2D_9.length; x++) {
    negativesInRowPromises.push(negativeInRow(array2D_9, x));
}

Promise.any(negativesInRowPromises)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));