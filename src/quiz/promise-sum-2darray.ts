function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx ) {
            let sum = 0;
            for(let i = 0; i < arr[rowIdx].length; i++) {
                sum += arr[rowIdx][i];
            }
            resolve(sum);  
        }
        else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

async function calcSum(numArr: number[][]) {
    if (numArr.length == 0) {
        throw ("Cannot sum empty array");
    }

    const rowSumPromises: Promise<number>[] = [];

    for(let x = 0; x < arr2D.length; x++) {
        rowSumPromises.push(sumOfARow(arr2D, x));
    }

    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`);
        return "Sum Done";
    } catch(error) {
        console.log(`Error Msg: ${error}`);
        return "Sum Failed";
    }
}

const arr2D_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

calculateSum(array2D_2).then((status) => console.log(status));
calculateSum([]).catch((error) => console.log(error));