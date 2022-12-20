import * as fs from "fs";

import { default as chalk } from "chalk";

import { GAME_DATA_METADATA_FILE, TARGET_GAME_DATA_DIR } from "#/build/globals";
import {
  collectLog,
  buildDynamicUi,
  buildStaticConfigs,
  buildDynamicConfigs,
  buildDynamicScripts,
  buildMeta,
  buildResourcesStatics,
  buildScriptsStatics
} from "#/build/steps";
import { buildStaticUi } from "#/build/steps/ui_statics";
import { Logger, TimeTracker } from "#/utils";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const meta: Record<string, unknown> = require(GAME_DATA_METADATA_FILE);
const log: Logger = new Logger("BUILD_ALL");

const isCleanBuild: boolean = process.argv.includes("--clean");
const areBuildResourcesEnabled: boolean = !process.argv.includes("--no-resources");
const areUiResourcesEnabled: boolean = !process.argv.includes("--no-ui");
const areScriptsResourcesEnabled: boolean = !process.argv.includes("--no-scripts");
const areConfigResourcesEnabled: boolean = !process.argv.includes("--no-configs");

Logger.IS_FILE_ENABLED = true;

(async function buildMod(): Promise<void> {
  const timeTracker: TimeTracker = new TimeTracker().start();

  try {
    log.info("XRTS build:", chalk.green(meta?.name), chalk.blue(new Date().toLocaleString()));

    if (isCleanBuild) {
      log.info("Perform target cleanup");
      fs.rmSync(TARGET_GAME_DATA_DIR, { recursive: true, force: true });
      timeTracker.addMark("BUILD_CLEANUP");
    } else {
      log.info("Do not perform target cleanup");
      timeTracker.addMark("SKIP_CLEANUP");
    }

    if (areScriptsResourcesEnabled) {
      await buildDynamicScripts();
      timeTracker.addMark("BUILT_DYNAMIC_SCRIPTS");
      await buildScriptsStatics();
      timeTracker.addMark("BUILT_STATIC_SCRIPTS");
    } else {
      log.info("Scripts build steps skipped");
      timeTracker.addMark("SKIP_SCRIPTS");
    }

    if (areUiResourcesEnabled) {
      await buildDynamicUi();
      timeTracker.addMark("BUILT_DYNAMIC_UI");
      await buildStaticUi();
      timeTracker.addMark("BUILT_STATIC_UI");
    } else {
      log.info("UI build steps skipped");
      timeTracker.addMark("SKIP_UI");
    }

    if (areConfigResourcesEnabled) {
      await buildDynamicConfigs();
      timeTracker.addMark("BUILT_DYNAMIC_CONFIGS");
      await buildStaticConfigs();
      timeTracker.addMark("BUILT_STATIC_CONFIGS");
    } else {
      log.info("Configs build steps skipped");
      timeTracker.addMark("SKIP_CONFIGS");
    }

    if (areBuildResourcesEnabled) {
      await buildResourcesStatics();
      timeTracker.addMark("BUILT_RESOURCES");
    } else {
      log.info("Resources build steps skipped");
      timeTracker.addMark("SKIP_RESOURCES");
    }

    timeTracker.end();

    await buildMeta({ meta, timeTracker });

    log.info("Successfully executed build command, took:", timeTracker.getDuration() / 1000, "sec");
  } catch (error) {
    log.error("Build fail:", error);
    timeTracker.end();
  } finally {
    await collectLog();
  }
})();
