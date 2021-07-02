const sum = require("../src/index");

describe("The function sum() used in the Calculator", () => {
  it("should be a function", () => {
    expect(typeof sum).toBe("function");
  });

  it("should return number if two numbers are passed", () => {
    expect(sum([1, 2])).toBe(3);
  });

  it("should throw an error if no parameter is provided", () => {
    expect(() => {
      sum();
    }).toThrow(new Error("No parameter provided"));
  });
});
