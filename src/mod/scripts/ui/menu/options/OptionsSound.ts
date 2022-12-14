import { CUIWindow, vector2, XR_CScriptXmlInit, XR_CUIWindow } from "xray16";

import { IOptionsDialog } from "@/mod/scripts/ui/menu/OptionsDialog";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("OptionsSound");

export interface IOptionsSound extends XR_CUIWindow {
  InitControls(x: number, y: number, xml: XR_CScriptXmlInit, handler: IOptionsDialog): void;
}

export const OptionsSound: IOptionsSound = declare_xr_class("OptionsSound", CUIWindow, {
  __init(): void {
    xr_class_super();
    log.info("Init");
  },
  __finalize(): void {
    log.info("Finalize");
  },
  InitControls(x: number, y: number, xml: XR_CScriptXmlInit, handler: IOptionsDialog): void {
    log.info("Init controls");

    log.info("Set pos");
    this.SetWndPos(new vector2().set(x, y));
    log.info("Set size");
    this.SetWndSize(new vector2().set(738, 416));
    log.info("Set autodel");
    this.SetAutoDelete(true);

    // -- this.bk = xml.InitFrame("frame", this)

    xml.InitStatic("tab_sound:cap_mastervolume", this);
    xml.InitStatic("tab_sound:cap_musicvolume", this);

    xml.InitStatic("tab_sound:cap_check_eax", this);
    xml.InitStatic("tab_sound:cap_check_dynamic_music", this);

    xml.InitCheck("tab_sound:check_eax", this);
    xml.InitCheck("tab_sound:check_dynamic_music", this);

    xml.InitTrackBar("tab_sound:track_musicvolume", this);
    xml.InitTrackBar("tab_sound:track_mastervolume", this);

    xml.InitStatic("tab_sound:cap_snd_device", this);
    xml.InitComboBox("tab_sound:list_snd_device", this);
  }
} as IOptionsSound);
