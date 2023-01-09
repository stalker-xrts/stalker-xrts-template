import { property_evaluator, XR_property_evaluator } from "xray16";

import { StateManager } from "@/mod/scripts/core/state_management/StateManager";

export interface IStateManagerEvaInSmartCover extends XR_property_evaluator {
  st: StateManager;
}

export const StateManagerEvaInSmartCover: IStateManagerEvaInSmartCover = declare_xr_class(
  "StateManagerEvaInSmartCover",
  property_evaluator,
  {
    __init(name: string, st: StateManager): void {
      xr_class_super(null, name);
      this.st = st;
    },
    evaluate(): boolean {
      return this.object.in_smart_cover();
    }
  } as IStateManagerEvaInSmartCover
);
