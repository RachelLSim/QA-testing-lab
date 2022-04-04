// const { expect } = require("@jest/globals")
// const { hasUncaughtExceptionCaptureCallback } = require("process")

// const { test, expect } = require("@jest/globals");
const { returnTwo, greeting, add, multiply, divide, subtract } = require("testing-lab/functions.js");
// const { describe } = require("yargs");
// const { describe } = require("yargs");



test('expect returnTwo function to equal 2', () => {
    expect(returnTwo()).toBe(2);
})

test('expect greeting James to equal Hello, James.', () => {
       expect(greeting('James')).toBe('Hello, James')
})

test('test if 1 and 2 equal 3, test 5 + 9 to equal 14', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14);
})

describe('math functions',  () => {
    
    test('test multiply function to see if 4 and 2 equal 8', () => {
        expect(multiply(4, 2)).toEqual(8);
    }), 

    test('test divide function to see if 4 and 2 equal 2', () => {
        expect(divide(4, 2)).toEqual(2);
    }), 

    test('subtract function to see if 6 and 3 equal 3', () => {
        expect(subtract(6, 3)).toEqual(3);
    })
})


