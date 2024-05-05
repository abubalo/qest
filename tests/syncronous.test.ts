import { describe, test, expect } from "../src/testSuite";

describe('Simple Synchronous Test', () => {
    test('Adding Numbers', () => {
        const result = 1 + 2;
        expect(result).toBe(3);
    });
});
