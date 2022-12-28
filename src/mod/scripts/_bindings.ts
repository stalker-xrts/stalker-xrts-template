import { alife, clsid, XR_game_object, XR_ini_file, XR_object_binder } from "xray16";

import { AnomalyFieldBinder } from "@/mod/scripts/core/binders/AnomalyFieldBinder";
import { AnomalyZoneBinder } from "@/mod/scripts/core/binders/AnomalyZoneBinder";
import { ArtefactBinder } from "@/mod/scripts/core/binders/ArtefactBinder";
import { CampBinder } from "@/mod/scripts/core/binders/CampBinder";
import { CrowBinder } from "@/mod/scripts/core/binders/CrowBinder";
import { SmartTerrainBinder } from "@/mod/scripts/core/binders/SmartTerrainBinder";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("_bindings");

function createBinder(target: XR_object_binder): (object: XR_game_object) => void {
  return (object: XR_game_object) => object.bind_object(create_xr_class_instance(target, object));
}

// @ts-ignore, declare lua global
list = {
  bindAnomalyField: createBinder(AnomalyFieldBinder),
  bindAnomalyZone: createBinder(AnomalyZoneBinder),
  bindArtefact: createBinder(ArtefactBinder),
  bindCrow: createBinder(CrowBinder),
  bindCamp: createBinder(CampBinder),
  bindSmartTerrain: (object: XR_game_object) => {
    const ini: XR_ini_file = object.spawn_ini();

    if (ini === null) {
      return;
    }

    if (ini.section_exist("gulag1") || ini.section_exist("smart_terrain")) {
      if (object.clsid() === clsid.smart_terrain) {
        if (alife() !== null) {
          object.bind_object(create_xr_class_instance(SmartTerrainBinder, object));
        } else {
          log.info("No simulation, smart terrain will not be enabled:", object.name());
        }
      } else {
        abort("You must use SMART_TERRAIN instead of SCRIPT_ZONE %s", object.name());
      }
    }
  }
};
