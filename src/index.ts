import type { CAC } from "cac";
import { execCommand, loggerError, printError, printInfo } from "code-genius";

const npmDepCheck = async () => {
  try {
    await execCommand("npx", ["depcheck"], {
      stdio: "inherit",
    });
    printInfo("项目依赖检查通过");
  } catch (error) {
    printError(`项目依赖存在一些问题`);
    loggerError(error);
    process.exit(1);
  }
};

const npmDepCheckInstaller = () => {
  return {
    name: "depcheck",
    describe: "运行 depcheck 检查过时的、不正确的和未使用的依赖项",
    command: "depcheck",
    setup: (cli: CAC) => {
      cli
        .command(
          "depcheck",
          "运行 depcheck 检查过时的、不正确的和未使用的依赖项",
        )
        .action(async () => await npmDepCheck());
    },
  };
};

export { npmDepCheck, npmDepCheckInstaller };
