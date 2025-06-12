type MatrixRow = [number, number, number];
export type Matrix = [MatrixRow, MatrixRow, MatrixRow];

export const identity = (): Matrix => [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]
export const translate = (x: number, y: number): Matrix => [
    [1, 0, x],
    [0, 1, y],
    [0, 0, 1]
]
export const rotate = (angle: number): Matrix => [
    [Math.cos(angle), -Math.sin(angle), 0],
    [Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1]
]
export const dilate = (scaleFactor: number): Matrix => [
    [scaleFactor, 0, 0],
    [0, scaleFactor, 0],
    [0, 0, 1]
]

export function matrixToCss([[a, c, x], [b, d, y]]: Matrix) {
    return `matrix(${a}, ${b}, ${c}, ${d}, ${x}, ${y})`;
}

export function multiply(matrix1: Matrix, ...matrices: Matrix[]): Matrix {
    if (matrices.length === 0) return matrix1;

    const matrix2 = multiply(matrices[0], ...matrices.slice(1));
    if (matrix1[0].length !== matrix2.length)
        throw new Error(`Left operand's row count (${matrix1[0].length}) is not equal to the right operand's column count (${matrix2.length}).`)

    const product = Array.from(
        { length: matrix1.length },
        () => new Array(matrix2[0].length)
    ) as Matrix;

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix2[0].length; col++) {
            let sum = 0;
            for (let i = 0; i < matrix2.length; i++) {
                sum += matrix1[row][i] * matrix2[i][col];
            }
            product[row][col] = sum;
        }
    }
    return product;
}
