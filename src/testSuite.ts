//testSuite.ts
export const describe = (name: string, testFunction: () => void): void => {
  console.log(`\n${name}`);
  try {
    testFunction();
  } catch (error) {
    console.log(error);
  }
};

interface Hooks {
  beforeEach: (() => void)[];
  afterEach: (() => void)[];
};

const hooks: Hooks = {
  beforeEach: [],
  afterEach: [],
};

export const beforeEach = (hook: () => void): void => {
  hooks.beforeEach.push(hook);
};
export const afterEach = (hook: () => void): void => {
  hooks.afterEach.push(hook);
};

// Test runner
export const test = <T>(
  description: string,
  testFunction: () => T | Promise<T>
): void => {
  const runTest = async () => {
    try {
      // Execute beforeEach hooks
      for (const hook of hooks.beforeEach) {
        hook();
      }
      // Execute the test function
      const result = await Promise.resolve(testFunction());
      console.log(`✅ - ${description}`);
      return result;
    } catch (error) {
      console.log(`❌ - ${description}: ${error}`);
    } finally {
      // Execute afterEach hooks
      for (const hook of hooks.afterEach) {
        hook();
      }
    }
  };


  if (testFunction instanceof Promise) {
    runTest();
  } else {
    runTest().then(() => {});
  }
};


export const expect = <T>(actual: T) => ({
  // Assertion functions
  toBe(expected: T) {
    if (actual !== expected) {
      throw Error(`Expected ${expected} but recieved ${actual}`);
    }
  },
  toBeNull() {
    if (actual !== null) {
      throw Error(`Expected null but recieved ${actual}`);
    }
  },
  toEqual(expected: T) {
    if (
      typeof actual !== "object" ||
      typeof expected !== "object" ||
      JSON.stringify(actual) !== JSON.stringify(expected)
    ) {
      throw Error(`Expected ${expected} but recieved ${actual}`);
    }
  },
  toBeTruthy() {
    if (!actual) {
      throw Error(`Expected truthy value but recieved ${actual}`);
    }
  },
  toBeFalsy() {
    if (actual) {
      throw Error(`Expected falsy but recieved ${actual}`);
    }
  },
});

