import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("utils/game_saves");
const save_markers: Record<string, number> = {};

export function fileExists(folderAlias: string, filename: string): boolean {
  return getFS().exist(folderAlias, filename) !== null;
}

export function isGameSaveFileExist(filename: string): boolean {
  const fs: XR_FS = getFS();
  const flist: XR_FS_file_list_ex = fs.file_list_open_ex(
    "$game_saves$",
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename
  );

  return flist.Size() > 0;
}

export function deleteGameSave(filename: string): void {
  const save_file: string = filename + gameConfig.GAME_SAVE_EXTENSION;
  const dds_file: string = filename + ".dds";

  const fs: XR_FS = getFS();

  fs.file_delete("$game_saves$", save_file);

  if (isGameSaveFileExist(dds_file)) {
    fs.file_delete("$game_saves$", dds_file);
  }
}

function AddTimeDigit(str: string, dig: number): string {
  if (dig > 9) {
    return str + dig;
  } else {
    return str + "0" + dig;
  }
}

export function gatFileDataForGameSave(filename: string) {
  const fs: XR_FS = getFS();
  const flist: XR_FS_file_list_ex = fs.file_list_open_ex(
    "$game_saves$",
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename + gameConfig.GAME_SAVE_EXTENSION
  );
  const filesCount: number = flist.Size();

  if (filesCount > 0) {
    const sg: XR_CSavedGameWrapper = new CSavedGameWrapper(filename);
    const [y, m, d, h, min] = sg.game_time().get(0, 0, 0, 0, 0, 0, 0);

    let date_time = "";

    date_time = AddTimeDigit(date_time, h);
    date_time = date_time + ":";
    date_time = AddTimeDigit(date_time, min);
    date_time = date_time + " ";
    date_time = AddTimeDigit(date_time, m);
    date_time = date_time + "/";
    date_time = AddTimeDigit(date_time, d);
    date_time = date_time + "/";
    date_time = date_time + y;

    // --string.format("[%d/%d/%d %d]",m,d,h,min,y)
    const health = string.format(
      "\\n%s %d%s",
      game.translate_string("st_ui_health_sensor"),
      sg.actor_health() * 100,
      "%"
    );

    return (
      game.translate_string("st_level") +
      ": " +
      game.translate_string(sg.level_name()) +
      "\\n" +
      game.translate_string("ui_inv_time") +
      ": " +
      date_time +
      health
    );
  } else {
    return "no file data";
  }
}

/**
 *
 * local save_markers = {}
 *
 * -- ������� ��� �������� ������������ ���� ����
 * function set_save_marker(p, mode, check, prefix)
 *
 *  -- ���������� ���� �������.
 *  local result = ""
 *  --  if debug ~= nil then
 *  --    local info_table = debug.getinfo(2)
 *  --    local script_name = string.gsub(info_table.short_src, "%.script", "")
 *  --    script_name = string.gsub(script_name, "gamedata\\scripts\\", "")
 *  --    result = script_name
 *  --  end
 *
 *  --  if prefix ~= nil then
 *  result = result .. "_" .. prefix
 *  --  end
 *
 *  if check == true then
 *    if save_markers[result] == nil then
 *      abort("Trying to check without marker %s", result)
 *    end
 *
 *    if mode == "save" then
 *      local dif = p:w_tell() - save_markers[result]
 *      printf(result..": SAVE DIF: %s", dif)
 *      if dif >= 8000 then
 *        printf("WARNING! may be this is problem save point")
 *      end
 *      if dif >= 10240 then
 *        --        abort("You are saving too much")
 *      end
 *      p:w_u16(dif)
 *    else
 *      local c_dif = p:r_tell() - save_markers[result]
 *      local dif = p:r_u16()
 *      if dif ~= c_dif then
 *        abort("INCORRECT LOAD [%s].[%s][%s]", result, dif, c_dif)
 *      else
 *        printf(result..": LOAD DIF: %s", dif)
 *      end
 *    end
 *    return
 *  end
 *
 *  if mode == "save" then
 *    printf(result..": set save marker: %s", p:w_tell())
 *    save_markers[result] = p:w_tell()
 *    if p:w_tell() > 16000 then
 *      abort("You are saving too much")
 *    end
 *  else
 *    printf(result..": set load marker: %s", p:r_tell())
 *    save_markers[result] = p:r_tell()
 *  end
 *
 * end
 */
export function setSaveMarker(p: any, mode: string, check: boolean, prefix: string): void {
  const result = "_" + prefix;
  // --  if debug ~= nil then
  // --    local info_table = debug.getinfo(2)
  // --    local script_name = string.gsub(info_table.short_src, "%.script", "")
  // --    script_name = string.gsub(script_name, "gamedata\\scripts\\", "")
  // --    result = script_name
  // --  end

  // --  if prefix ~= nil then
  // result = result + "_" + prefix;
  // --  end

  if (check === true) {
    if (save_markers[result] === null) {
      abort("Trying to check without marker: " + result);
    }

    if (mode == "save") {
      const dif = p.w_tell() - save_markers[result];

      // printf(result..": SAVE DIF: %s", dif)
      log.info("Set save marker result:", result, dif, mode);

      if (dif >= 8000) {
        log.info("May be problem with save point");
        // printf("WARNING! may be this is problem save point")
      }

      if (dif >= 10240) {
        log.info("Saving more than 10240");
        // --        abort("You are saving too much")
      }

      p.w_u16(dif);
    } else {
      const c_dif = p.r_tell() - save_markers[result];
      const dif = p.r_u16();

      if (dif !== c_dif) {
        abort("INCORRECT LOAD [%s].[%s][%s]", result, dif, c_dif);
      } else {
        log.info("Set save marker result:", result, dif, mode);
        // printf(result..": LOAD DIF: %s", dif)
      }
    }

    return;
  }

  if (mode === "save") {
    log.info("Set save marker result:", result, p.w_tell(), mode);
    save_markers[result] = p.w_tell();

    if (p.w_tell() > 16000) {
      abort("You are saving too much");
    }
  } else {
    log.info("Set save marker result:", result, p.r_tell(), mode);
    save_markers[result] = p.r_tell();
  }
}
