import { describe, test, expect } from "../src/testSuite";

describe('Asynchronous Test with Promise', () => {
    test('Delayed Addition', () => {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = 2 + 3;
                expect(result).toBe(5);
                resolve(result);
            }, 1000); // Delay execution by 1 second
        });
    });
});
