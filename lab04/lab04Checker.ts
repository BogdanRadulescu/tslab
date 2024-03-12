import { CalculatorWithMemory } from "./CalculatorWithMemory";

let totalScore = 0;
const printResult = (testText: string, testResult: boolean) => {
    testResult && totalScore++;
    console.log(`${testText}: ${testResult ? 'passed' : 'failed'}!`);
}

const tests = [
    (testName = 'Should return undefined if no elements in RAM and RAM unchanged') => {
        const calculator = new CalculatorWithMemory();
        let result = true;

        result = result && calculator.dif() == undefined;
        result = result && calculator.sum() == undefined;
        result = result && calculator.mul() == undefined;
        result = result && calculator.div() == undefined;

        printResult(testName, result);
    },
    (testName = 'Should return undefined if no elements in RAM after RAM Add and Remove') => {
        const calculator = new CalculatorWithMemory();
        let result = true;

        calculator.addToRam(5);
        calculator.removeFromRam();

        result = result && calculator.dif() == undefined;
        result = result && calculator.sum() == undefined;
        result = result && calculator.mul() == undefined;
        result = result && calculator.div() == undefined;

        printResult(testName, result);
    },
    (testName = 'Should return number if one element in RAM after RAM Add') => {
        const calculator = new CalculatorWithMemory();

        const value = 5;
        calculator.addToRam(value);

        let result = true;
        result = result && calculator.dif() == value;
        result = result && calculator.sum() == value;
        result = result && calculator.mul() == value;
        result = result && calculator.div() == value;

        printResult(testName, result);
    },
    (testName = 'Should return number if one element in RAM after 2 RAM Adds and 1 Remove') => {
        const calculator = new CalculatorWithMemory();

        const value = 5;
        calculator.addToRam(value);
        calculator.addToRam(7);
        calculator.removeFromRam();

        let result = true;
        result = result && calculator.dif() == value;
        result = result && calculator.sum() == value;
        result = result && calculator.mul() == value;
        result = result && calculator.div() == value;

        printResult(testName, result);
    },
    (testName = 'Should apply operation between two numbers after Add/Add') => {
        const calculator = new CalculatorWithMemory();

        const value1 = 10;
        const value2 = 5;
        calculator.addToRam(value1);
        calculator.addToRam(value2);

        let result = true;
        result = result && calculator.dif() == value1 - value2;
        result = result && calculator.sum() == value1 + value2;
        result = result && calculator.mul() == value1 * value2;
        result = result && calculator.div() == value1 / value2;

        printResult(testName, result);
    },
    (testName = 'Should apply operation between two numbers after Add/Remove/Add') => {
        const calculator = new CalculatorWithMemory();

        const value1 = 10;
        const value2 = 5;
        calculator.addToRam(value1);
        calculator.addToRam(100);
        calculator.removeFromRam();
        calculator.addToRam(value2);

        let result = true;
        result = result && calculator.dif() == value1 - value2;
        result = result && calculator.sum() == value1 + value2;
        result = result && calculator.mul() == value1 * value2;
        result = result && calculator.div() == value1 / value2;

        printResult(testName, result);
    },
    (testName = 'Should apply operation between three numbers after Add/Add/Add') => {
        const calculator = new CalculatorWithMemory();

        const value1 = 8;
        const value2 = 4;
        const value3 = 2;

        calculator.addToRam(value1);
        calculator.addToRam(value2);
        calculator.addToRam(value3);

        let result = true;
        result = result && calculator.dif() == value1 - value2 - value3;
        result = result && calculator.sum() == value1 + value2 + value3;
        result = result && calculator.mul() == value1 * value2 * value3;
        result = result && calculator.div() == value1 / value2 / value3;

        printResult(testName, result);
    },
    (testName = 'Should apply operation between three numbers after several Add & Removes') => {
        const calculator = new CalculatorWithMemory();

        const value1 = 8;
        const value2 = 4;
        const value3 = 2;

        calculator.addToRam(10);
        calculator.removeFromRam();

        calculator.addToRam(value1);

        calculator.addToRam(10);
        calculator.removeFromRam();

        calculator.addToRam(10);
        calculator.removeFromRam();

        calculator.addToRam(value2);
        calculator.addToRam(value3);

        calculator.addToRam(10);
        calculator.removeFromRam();

        let result = true;
        result = result && calculator.dif() == value1 - value2 - value3;
        result = result && calculator.sum() == value1 + value2 + value3;
        result = result && calculator.mul() == value1 * value2 * value3;
        result = result && calculator.div() == value1 / value2 / value3;

        printResult(testName, result);
    },
];

console.log('\nRunning tests:\n');
tests.forEach(test => test());
console.log(`\nTotal: ${totalScore / tests.length * 100}%`);
