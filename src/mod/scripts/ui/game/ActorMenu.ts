import { get_console, XR_CConsole, system_ini, XR_game_object, XR_ini_file } from "xray16";

import { getActor } from "@/mod/scripts/core/db";
import { AbstractActorMenu, EActorMenuMode } from "@/mod/scripts/ui/game/AbstractActorMenu";
import { getConfigString } from "@/mod/scripts/utils/configs";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("ActorMenu");

class ActorMenu extends AbstractActorMenu {
  public initQuickSlotItems(): void {
    const console: XR_CConsole = get_console();
    const ini: XR_ini_file = system_ini();
    const actor: XR_game_object = getActor()!;

    console.execute("slot_0 " + getConfigString(ini, "actor", "quick_item_1", actor, false, "", ""));
    console.execute("slot_1 " + getConfigString(ini, "actor", "quick_item_2", actor, false, "", ""));
    console.execute("slot_2 " + getConfigString(ini, "actor", "quick_item_3", actor, false, "", ""));
    console.execute("slot_3 " + getConfigString(ini, "actor", "quick_item_4", actor, false, "", ""));
  }

  public onWindowOpen(mode: EActorMenuMode) {
    log.info("Actor menu open:", EActorMenuMode[mode]);
  }

  public onWindowClosed(mode: EActorMenuMode) {
    log.info("Actor menu close:", EActorMenuMode[mode]);
  }
}

export const actorMenu: ActorMenu = ActorMenu.getInstance() as ActorMenu;
