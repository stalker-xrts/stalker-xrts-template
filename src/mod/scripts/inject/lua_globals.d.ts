/**
 * Utility to declare global variables.
 */
declare const declare_global: (key: string, value: unknown) => void;

/**
 * Binding of native lua string interface.
 */
declare const lua_string: LUA_String;

/**
 * Binding of implemented class defining function.
 * todo: Infer + more type safety.
 */
declare const declare_xr_class: <T, B extends abstract new () => any>(
  name: string,
  base?: B | null,
  implementation?: Partial<T>
) => T & InstanceType<B>;

/**
 * Binding of implemented class creation function.
 */
declare const create_xr_class_instance: <T>(it: T, ...params: Array<any>) => T;
