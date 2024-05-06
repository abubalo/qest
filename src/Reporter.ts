export interface Reporter {
  suiteStart(description: string): void;
  suiteDone(): void;
  testStart(description: string): void;
  testPass(description: string): void;
  testFail(description: string, error: Error | unknown): void;
}

export class ConsoleReporter implements Reporter {
  suiteStart(description: string): void {
    console.log(`Suite: ${description}`);
  }

  suiteDone(): void {
    console.log(`Test Suite Completed`);
  }

  testStart(description: string): void {
    console.log(` ${description} ...`);
  }

  testPass(description: string): void {
    console.log(`✅ PASS`);
  }

  testFail(description: string, error: Error | unknown): void {
    console.log(`❌ Fail`);
    if (error instanceof Error) {
      console.log(` ${error.message}`);
    } else {
      console.log(` ${error}`);
    }
  }
}

// export class JsonReporter implements Reporter {
//   results: { type: string; description?: string; error?: string }[] = [];

//   suiteStart(description: string) {
//     this.results.push({ type: "suite-start", description });
//   }

//   suiteDone() {
//     this.results.push({ type: "suite-done" });
//   }

//   testStart(description: string) {
//     this.results.push({ type: "test-start", description });
//   }

//   testPass(description: string) {
//     this.results.push({ type: "test-pass", description });
//   }

//   testFail(description: string, error: Error | string) {
//     this.results.push({ type: "test-fail", description, error: error.message });
//   }
// }
