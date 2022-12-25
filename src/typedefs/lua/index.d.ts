declare interface ILUADebug {
  getinfo(this: void, thread: number, f?: unknown, what?: unknown): LuaIterable<any> ;
  getlocal(this: void, thread: unknown, f: unknown, d: unknown): unknown ;
  getmetatable(this: void, value: unknown): unknown ;
  getregistry(this: void): unknown ;
  getupvalue(this: void, f: unknown, up: unknown): unknown ;
  getuservalue(this: void, u: unknown, n: unknown): unknown ;
  sethook(this: void, thread: unknown, hook: unknown, mask: unknown, count: unknown): unknown ;
  setlocal(this: void, thread: unknown, level: unknown, d: unknown, value: unknown): unknown ;
  setmetatable(this: void, value: unknown, table: unknown): unknown ;
  setupvalue(this: void, f: unknown, up: unknown, value: unknown): unknown ;
  setuservalue(this: void, udata: unknown, value: unknown, n: unknown): unknown ;
  traceback(this: void, thread: number, message?: unknown, level?: unknown): unknown ;
  upvalueid(this: void, f: unknown, n: unknown): unknown ;
  upvaluejoin(this: void, f1: unknown, n1: unknown, f2: unknown, n2: unknown): unknown ;
}

declare interface ILUAString {
  byte(this: void, s: unknown, i: unknown, j: unknown): unknown;
  char(this: void, ...rest: Array<unknown>): unknown;
  dump(this: void, func: unknown, strip: unknown): unknown;
  find(this: void, s: string, pattern: unknown, init?: number, plain?: boolean): number | null;
  gfind(this: void, s: string, pattern: unknown, init?: number, plain?: boolean): LuaIterable<string>;
  format(this: void, formatstring: string, ...rest: Array<string | number>): string;
  gmatch(this: void, s: unknown, pattern: unknown): LuaIterable<LuaMultiReturn<Array<string>>>;
  gsub(this: void, s: string, pattern: string, repl: string, n?: unknown): LuaMultiReturn<[string, number]>;
  len(this: void, str: string): number;
  lower(this: void, s: unknown): unknown;
  match(this: void, s: unknown, pattern: unknown, init: unknown): unknown;
  pack(this: void, fmt: unknown, v1: unknown, v2: unknown, ...rest: Array<unknown>): unknown;
  packsize(this: void, fmt: unknown): unknown;
  rep(this: void, s: unknown, n: unknown, sep: unknown): unknown;
  reverse(this: void, s: unknown): unknown;
  sub(this: void, str: string, i: number, j: number): string;
  unpack(this: void, fmt: unknown, s: unknown, pos: unknown): unknown;
  upper(this: void, s: unknown): unknown;
}

declare interface ILUATable {
  concat(this: void, list: unknown, sep: unknown, i: unknown, j: unknown): unknown;
  insert(this: void, list: unknown, pos: unknown, value: unknown): unknown;
  insert(this: void, list: unknown, value?: unknown): unknown;
  move(this: void, a1: unknown, f: unknown, e: unknown, t: unknown, a2: unknown): unknown;
  remove(this: void, list: unknown, pos: number): unknown;
  sort(this: void, list: unknown, comp: unknown): unknown;
}

declare interface ILUAMath {
  pi: number

  abs(this: void, x: number): number
  acos(this: void, x: number): number
  asin(this: void, x: number): number
  atan(this: void, y: number, x: number): number
  ceil(this: void, x: number): number
  cos(this: void, x: number): number
  deg(this: void, x: number): unknown
  exp(this: void, x: number): unknown
  floor(this: void, x: number): number
  fmod(this: void, x: number, y: number): unknown
  log(this: void, x: number, base: number): unknown
  max(this: void, x: number, ...args: Array<number>): unknown
  mod(this: void, x: number, base: number): number
  modf(this: void, x: number): unknown
  rad(this: void, x: number): unknown
  random(this: void, min?: number, max?: number): number
  randomseed(this: void, seed: number): void
  sin(this: void, x: number): number
  sqrt(this: void, x: number): number
  tan(this: void, x: number): unknown
  tointeger(this: void, x: number): unknown
  type(this: void, x: number): unknown
  ult(this: void, m: number, n: number): unknown
}

declare interface ILUACoroutine {
  isyieldable(): boolean;
  running(): boolean;
  running(): boolean;
  resume(): boolean;
  status(it: unknown): boolean;
  wrap(it: unknown): boolean;
  yield(...args: Array<unknown>): boolean;
}

declare const _VERSION: string | null;

/**
 * Cast value to string.
 */
declare const tostring: (value: any) => string;

/**
 * Cast value to number.
 */
declare const tonumber: (value: any) => number;

/**
 * Get type of value.
 */
declare const type: (value: any) => string;

declare const require: (modulePath: string) => any;

declare const assert: (condition: boolean) => void;

declare const pairs: <T = any, D = any>(table: LuaIterable<T, D>) => LuaIterable<LuaMultiReturn<[T, D]>>;

declare const coroutine: ILUACoroutine;

declare const debug: ILUADebug | null;

declare const math: ILUAMath;

declare const string: ILUAString;

declare const table: ILUATable;

/**
 * This is a generic interface to the garbage collector. It performs
 * different functions according to its first argument, `opt`:
 * ---
 * **"collect"**: performs a full garbage-collection cycle. This is the default
 * option.
 * **"stop"**: stops automatic execution of the garbage collector. The
 * collector will run only when explicitly invoked, until a call to restart it.
 * **"restart"**: restarts automatic execution of the garbage collector.
 * **"count"**: returns the total memory in use by Lua in Kbytes. The value has
 * a fractional part, so that it multiplied by 1024 gives the exact number of
 * bytes in use by Lua (except for overflows).
 * **"step"**: performs a garbage-collection step. The step "size" is
 * controlled by `arg`. With a zero value, the collector will perform one basic
 * (indivisible) step. For non-zero values, the collector will perform as if
 * that amount of memory (in KBytes) had been allocated by Lua. Returns
 * **true** if the step finished a collection cycle.
 * **"setpause"**: sets `arg` as the new value for the *pause* of the collector
 * (see §2.5). Returns the previous value for *pause`.
 * **"incremental"**: Change the collector mode to incremental. This option can
 * be followed by three numbers: the garbage-collector pause, the step
 * multiplier, and the step size.
 * **"generational"**: Change the collector mode to generational. This option
 * can be followed by two numbers: the garbage-collector minor multiplier and
 * the major multiplier.
 * **"isrunning"**: returns a boolean that tells whether the collector is
 * running (i.e., not stopped).
 */
declare const collectgarbage: (operation: "count" | "collect" | "restart") => number;
