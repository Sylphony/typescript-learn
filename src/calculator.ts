interface MathOp {
    add(num1: number, num2: number): number;
    subtract(num1: number, num2: number): number;
    multiply(num1: number, num2: number): number;
    divide(num1: number, num2: number): number;
}

class Calculator implements MathOp {
    add(num1: number, num2: number) {
        return num1 + num2;
    }

    subtract(num1: number, num2: number) {
        return num1 - num2;
    }

    multiply(num1: number, num2: number) {
        return num1 * num2;
    }

    divide(num1: number, num2: number) {
        return num1 / num2;
    }
}

export default Calculator;
