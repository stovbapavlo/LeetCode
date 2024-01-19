const matrix = [[2,1,3],[6,5,4],[7,8,9]];

let sum = 0;
let col = 0; // початковий стовпець

for (let i = 0; i < matrix.length; i++) {
    let minNum = Infinity;
    let indexMinEl = col;

    // Перевіряємо можливі переходи: вліво, прямо, вправо
    for (let j = col - 1; j <= col + 1; j++) {
        if (j >= 0 && j < matrix[0].length && matrix[i][j] < minNum) {
            minNum = matrix[i][j];
            indexMinEl = j;
        }
    }

    // Оновлюємо суму та стовпець для наступного кроку
    sum += minNum;
    col = indexMinEl;
}

console.log(sum);