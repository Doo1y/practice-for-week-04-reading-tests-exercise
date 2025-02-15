const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange } = require("../funcs"); // The functions imported for testing

describe("isFive(num)", () => { // Function isFive accepts one number as argument
  it("should return true if the num is 5 otherwise false", () => {
    // Initial test case - expecting outcome to be true
    const num1 = 5;
    // Pass in the variable into the imported function and assign (return value) to variable
    const actual1 = isFive(num1); // should be true
    // check if the variable's value is true or false 
    expect(actual1).to.be.true;
    // Other test cases - expecting outcomes to return false
    const otherInput = "not 5";
    const num2 = 4;

    const actual2 = isFive(num2); // should be false
    const actual3 = isFive(otherInput); // should be false

    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});

describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    const num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    const actual1 = isOdd(num1); // should be true
    const actual2 = isOdd(num2); // should be true
    const actual3 = isOdd(num3); // should be true

    expect(actual1).to.be.true;
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;
  });

  it("should return false if the num is even", () => {
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    const actual1 = isOdd(num1); // should be false
    const actual2 = isOdd(num2); // should be false
    const actual3 = isOdd(num3); // should be false

    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should throw an error if num is not type of Number", () => {
    const string = "i am a string";
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];

    expect(() => isOdd(string)).to.throw(Error);
    expect(() => isOdd(object)).to.throw(Error);
    expect(() => isOdd(array)).to.throw(Error);
  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => { // Condition of the test (similar to if statement)
    it("should return the correct array with default value step=1", () => { // Returned statement if Condition is true
      // Assign min1 and max1 to values in array using destructuring 
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];

      // Assign actual1 && actual2 to the code written by student
      // Assign expected1 && expected2 to the return values that the test expects
      const actual1 = myRange(min1, max1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2);
      const expected2 = [];

      // If expected1 and expected2 values === actual1 and actual2, the function is running properly
      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
    });
  });

  context("if step is provided", () => {
    it("should return the correct array", () => {
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];
      const [min3, max3, step3] = [9, 5, 2];

      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});

/*
** syntax and hierarchy of spec functions:
** 
** describe("testingFunc", function() {...});
**   containing the specs
** 
** context() == describe(): context(context, function() {...});
**   alias of describe(), allows a way to keep tests easier to read
** 
** it(case, function() {...});
**   test case with logic (case) and expression (func)
** 
** specify(case, function() {...}) ;
**   alias of it()
*/