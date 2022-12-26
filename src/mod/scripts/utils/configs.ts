import { abort } from "@/mod/scripts/utils/debug";

/**
 * todo: Description
 */
export function getConfigString(
  ini: XR_ini_file,
  section: string,
  field: string,
  object: XR_game_object,
  mandatory: boolean,
  gulagName: unknown,
  defaultVal?: string
): string {
  if (mandatory == null || gulagName == null) {
    abort("section '%s': wrong arguments order in call to cfg_get_string", section);
  }

  if (section && ini.section_exist(section) && ini.line_exist(section, field)) {
    if (gulagName && gulagName !== "") {
      return gulagName + "_" + ini.r_string(section, field);
    } else {
      return ini.r_string(section, field);
    }
  }

  if (!mandatory) {
    return defaultVal as string;
  }

  return abort("'Attempt to read a non-existent string field '" + field + "' in section '" + section + "'") as never;
}