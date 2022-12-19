import * as fsPromises from "fs/promises";

import { default as chalk } from "chalk";
import * as tstl from "typescript-to-lua";

import { BUILD_LUA_TSCONFIG, TARGET_GAME_DATA_DIR } from "#/build/globals";
import { Logger, readDirContent } from "#/utils";

const log: Logger = new Logger("BUILD_LUA_SCRIPTS");

/**
 * In provided file matches pattern 'from', rename it to match 'to'.
 */
async function renameTargetScripts(
  contents: Array<string | Array<string>> | string,
  from: RegExp,
  to: string
): Promise<number> {
  let renamedFiles: number = 0;

  const renameContents = (it: Array<string | Array<string>> | string) => {
    if (Array.isArray(it)) {
      return Promise.all(it.map(renameContents));
    } else if (from.test(it)) {
      renamedFiles += 1;

      return fsPromises.rename(it, it.replace(from, to));
    }
  };

  await renameContents(contents);

  return renamedFiles;
}

/**
 * Transform typescript codebase to lua scripts and replace .lua with .script extensions.
 */
export async function buildDynamicScripts(): Promise<void> {
  log.warn("Build lua scripts");

  const startedAt: number = Date.now();
  const scriptsExtension: string = "script";
  const result = tstl.transpileProject(BUILD_LUA_TSCONFIG, {
    noHeader: true,
    tstlVerbose: false
    // Issues of builder: breaks module resolution
    // extension: "script"
  });

  if (result.diagnostics?.length) {
    log.warn(chalk.redBright("Lua build issues:"));

    result.diagnostics.forEach((it) => log.error(chalk.red("Lua issue:"), it.code, it.category, it.messageText));

    throw new Error(`Build failed, got ${result.diagnostics.length} lua issues.`);
  }

  log.info("Built lua scripts:", chalk.blue((Date.now() - startedAt) / 1000), "sec");

  const content: Array<string | Array<string>> = await readDirContent(TARGET_GAME_DATA_DIR);
  const renamedFilesCount: number = await renameTargetScripts(content, /\.lua$/, `.${scriptsExtension}`);

  log.info("Renamed lua scripts:", renamedFilesCount);
}
