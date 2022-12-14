import { alife, level, XR_cse_abstract, TXR_cls_id, XR_game_object } from "xray16";

import { Optional } from "@/mod/lib/types";
import { getStoryObjectsRegistry } from "@/mod/scripts/core/StoryObjectsRegistry";

/**
 * todo;
 */
export function getClsId(object: null): null;
export function getClsId(object: XR_cse_abstract | XR_game_object): TXR_cls_id;
export function getClsId(object: Optional<XR_game_object | XR_cse_abstract>): Optional<TXR_cls_id> {
  return object ? object.clsid() : null;
}

/**
 * todo;
 */
export function levelObjectBySid(sid: number): Optional<XR_game_object> {
  const se_obj: Optional<XR_cse_abstract> = alife()?.story_object(sid);

  return se_obj === null ? null : level.object_by_id(se_obj.id);
}

/**
 * todo;
 */
export function getObjectStoryId(objectId: number): Optional<string> {
  return getStoryObjectsRegistry().get_story_id(objectId);
}

/**
 * todo: description
 */
export function getStoryObjectId(storyObjectId: string): Optional<number> {
  return getStoryObjectsRegistry().id_by_story_id.get(storyObjectId);
}

/**
 * todo;
 */
export function getIdBySid(sid: number): Optional<number> {
  return alife()?.story_object(sid)?.id;
}
