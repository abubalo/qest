import { describe, test, expect } from "../src/testSuite";

describe("Math Operations", () => {
  test("1 + 3 = 4", () => {
    expect(1 + 3).toBe(4);
  });

  test("2 * 2 = 4", () => {
    expect(2 * 2).toBe(4);
  });
  test("2 === 2 = true", () => {
    {
      expect(2 === 2).toBe(true);
    }
  });
});
