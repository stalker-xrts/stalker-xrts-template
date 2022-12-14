import { CUIWindow, vector2, XR_CScriptXmlInit, XR_CUI3tButton, XR_CUIWindow } from "xray16";

import { IOptionsDialog } from "@/mod/scripts/ui/menu/OptionsDialog";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("OptionsControls");

export interface IOptionsControls extends XR_CUIWindow {
  InitControls(x: number, y: number, xml: XR_CScriptXmlInit, handler: IOptionsDialog): void;
}

export const OptionsControls: IOptionsControls = declare_xr_class("OptionsControls", CUIWindow, {
  __init(): void {
    xr_class_super();
    log.info("Init");
  },
  __finalize(): void {
    log.info("Finalize");
  },
  InitControls(x: number, y: number, xml: XR_CScriptXmlInit, handler: IOptionsDialog): void {
    log.info("Init controls");

    this.SetWndPos(new vector2().set(x, y));
    this.SetWndSize(new vector2().set(738, 416));

    this.SetAutoDelete(true);

    // -- this.bk = xml.InitFrame("frame", this)

    xml.InitStatic("tab_controls:cap_mousesens", this);
    xml.InitFrameLine("tab_controls:cap_keyboardsetup", this);
    xml.InitFrameLine("tab_controls:cap_keyboardsetup", this);
    xml.InitTrackBar("tab_controls:track_mousesens", this);
    xml.InitStatic("tab_controls:cap_check_mouseinvert", this);
    xml.InitCheck("tab_controls:check_mouseinvert", this);
    xml.InitKeyBinding("tab_controls:key_binding", this);

    const btn: XR_CUI3tButton = xml.Init3tButton("tab_controls:btn_default", this);

    handler.Register(btn, "btn_keyb_default");
  }
} as IOptionsControls);
