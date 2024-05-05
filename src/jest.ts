//qest.ts
import { glob } from "glob";

const testPattern = "**/*.(spec|test).(ts|js)";

const options = {
  cwd: "path/to/directory",
  dot: true,
  mark: true,
};

glob(testPattern, (error, files) => {
  console.log(files);
});
