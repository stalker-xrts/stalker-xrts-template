import { LuaLogger } from "@/mod/scripts/debug_tools/LuaLogger";
import { collectLuaGarbage, getLuaMemoryUsed } from "@/mod/scripts/utils/ram";
import { resolveXmlFormPath } from "@/mod/scripts/utils/rendering";

const base: string = "debug\\DebugGeneralSection.component";
const log: LuaLogger = new LuaLogger("DebugGeneralSection");

export interface IDebugGeneralSection extends XR_CUIScriptWnd {
  owner: XR_CUIScriptWnd;

  luaVersionLabel: XR_CUIStatic;
  memoryUsageCountLabel: XR_CUIStatic;

  InitControls(): void;
  InitCallBacks(): void;
  InitState(): void;

  onRefreshMemoryButtonClick(): void;
  onCollectMemoryButtonClick(): void;

  getUsedMemoryLabel(): string;
}

export const DebugGeneralSection: IDebugGeneralSection = declare_xr_class("DebugGeneralSection", CUIWindow, {
  __init(this: IDebugGeneralSection, owner: XR_CUIScriptWnd): void {
    xr_class_super();

    log.info("Init");

    this.owner = owner;

    this.InitControls();
    this.InitCallBacks();
    this.InitState();
  },
  __finalize(): void {
    log.info("Finalize");
  },
  InitControls(): void {
    log.info("Init controls");

    const xml: XR_CScriptXmlInit = new CScriptXmlInit();

    xml.ParseFile(resolveXmlFormPath(base));

    xml.InitStatic("lua_version_label", this);

    this.memoryUsageCountLabel = xml.InitStatic("memory_usage_count", this);
    this.luaVersionLabel = xml.InitStatic("lua_version_label", this);

    this.owner.Register(xml.Init3tButton("refresh_memory_button", this), "refresh_memory_button");
    this.owner.Register(xml.Init3tButton("collect_memory_button", this), "collect_memory_button");
  },
  InitCallBacks(): void {
    log.info("Init callbacks");

    this.owner.AddCallback(
      "refresh_memory_button",
      ui_events.BUTTON_CLICKED,
      () => this.onRefreshMemoryButtonClick(),
      this
    );

    this.owner.AddCallback(
      "collect_memory_button",
      ui_events.BUTTON_CLICKED,
      () => this.onCollectMemoryButtonClick(),
      this
    );
  },
  InitState(): void {
    log.info("Init state");

    this.memoryUsageCountLabel.TextControl().SetText(this.getUsedMemoryLabel());
    this.luaVersionLabel.TextControl().SetText("Lua version: " + (_VERSION || "unknown"));
  },
  onCollectMemoryButtonClick(): void {
    log.info("Collect memory garbage");

    collectLuaGarbage();
    this.memoryUsageCountLabel.TextControl().SetText(this.getUsedMemoryLabel());
  },
  onRefreshMemoryButtonClick(): void {
    log.info("Collect memory usage");

    this.memoryUsageCountLabel.TextControl().SetText(this.getUsedMemoryLabel());
  },
  getUsedMemoryLabel(): string {
    return lua_string.format("RAM: %.03f MB", getLuaMemoryUsed() / 1000);
  }
} as IDebugGeneralSection);