declare module "xray16" {
  /**
   * C++ class alife_simulator {
   * @customConstructor alife_simulator
   */
  export class XR_alife_simulator {
    public set_interactive(this: void, value1: number, value2: boolean): unknown;
    public switch_distance(this: void): unknown;
    public switch_distance(this: void, value: number): unknown;
    public set_switch_online(this: void, value1: number, value2: boolean): unknown;
    public set_switch_offline(this: void, value1: number, value2: boolean): unknown;
    public remove_all_restrictions(
      this: void,
      value: number,
      type: unknown /* enum RestrictionSpace::ERestrictorTypes */
    ): unknown;

    /**
     * Methods.
     */

    public add_in_restriction(
      monster: unknown /* cse_alife_monster_abstract */,
      value: number
    ): unknown;

    public remove_in_restriction(
      monster: unknown /* cse_alife_monster_abstract */,
      value: number
    ): unknown;

    public level_name(value: number): unknown;

    public dont_has_info(value: number, str: string): unknown;

    public create_ammo(
      str:string,
      vector: XR_vector2,
      value1: number,
      value2: number,
      value3: number,
      value4: number
    ): XR_cse_abstract;

    public add_out_restriction(
      monster: unknown /* cse_alife_monster_abstract */,
      value: number
    ): unknown;

    public level_id(life: XR_alife_simulator): unknown;

    public valid_object_id(value: number): unknown;

    public remove_out_restriction(
      life: XR_alife_simulator,
      monster: unknown /* cse_alife_monster_abstract */,
      value: number
    ): unknown;

    public kill_entity(cse_alife_monster_abstract: any, value: number): unknown;
    public kill_entity(cse_alife_monster_abstract: any): unknown;
    public kill_entity(
      this: void,
      monster1: unknown /* cse_alife_monster_abstract */,
      value: number,
      monster2: unknown /* cse_alife_monster_abstract */
    ): unknown;

    public has_info(objectId: number, infoId: string): boolean;

    public object(id: number): XR_cse_alife_object | null;
    public object(id: number, value2: boolean): XR_cse_alife_object | null;

    public actor(): XR_cse_alife_creature_actor;

    public story_object(value: number): XR_cse_alife_object;

    public spawn_id(value: number): unknown;

    public release(cse_abstract: XR_cse_alife_object | null, value: boolean): unknown;

    public create(value: number): XR_cse_alife_object;
    public create(
      value1: string,
      vector: XR_vector,
      value2: number,
      value3: number,
      value4: number
    ): XR_cse_alife_object;
    public create(
      value1: string | number,
      vector: XR_vector,
      value2: number,
      value3: number
    ): XR_cse_alife_object;

  }

  /**
   * C++ class CALifeSmartTerrainTask {
   * @customConstructor CALifeSmartTerrainTask
   */
  export class XR_CALifeSmartTerrainTask {
    public constructor (a: string);
    public constructor (a: string, b: number);
    public constructor (a: number, b: number);

    public level_vertex_id(): number;
    public position(): XR_vector;
    public game_vertex_id(): number;
  }

  /**
   C++ class danger_object {
    const attack_sound = 1;
    const attacked = 5;
    const bullet_ricochet = 0;
    const enemy_sound = 7;
    const entity_attacked = 2;
    const entity_corpse = 4;
    const entity_death = 3;
    const grenade = 6;
    const hit = 2;
    const sound = 1;
    const visual = 0;

    function type() const;

    function time() const;

    operator ==(const danger_object&, danger_object);

    function position(const danger_object*);

    function object(const danger_object*);

    function perceive_type() const;

    function dependent_object(const danger_object*);

   */
  // todo;

  /**
   C++ class hit {
    const burn = 0;
    const chemical_burn = 2;
    const dummy = 12;
    const explosion = 7;
    const fire_wound = 8;
    const light_burn = 11;
    const radiation = 3;
    const shock = 1;
    const strike = 5;
    const telepatic = 4;
    const wound = 6;

    property direction;
    property draftsman;
    property impulse;
    property power;
    property type;

    hit ();
    hit (const hit*);

    function bone(string);

  };
   */

  // todo;
}