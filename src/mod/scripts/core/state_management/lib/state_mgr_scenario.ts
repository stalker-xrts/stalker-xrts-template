import { anim, CSightParams, move } from "xray16";

import { AnyCallablesModule } from "@/mod/lib/types";
import { IStateDescriptor } from "@/mod/scripts/core/state_management/lib/state_lib";
import { IAnimationDescriptor } from "@/mod/scripts/core/state_management/lib/state_mgr_animation_list";

export function add_state_lib_scenario(): LuaTable<string, IStateDescriptor> {
  return {
    zat_b14_give_artefact_idle: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b14_give_artefact_idle"
    },

    zat_b14_give_artefact_act: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b14_give_artefact_act"
    },

    zat_b14_stay_wall: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b14_stay_wall",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b38_stalker_break_lock: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b38_stalker_break_lock",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b38_stalker_turn_on_lift: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b38_stalker_turn_on_lift",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b38_stalker_jump_tonnel: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b38_stalker_jump_tonnel",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b38_stalker_alert: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b38_stalker_alert",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b20_noah_jump: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b20_noah_jump",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a17_ice_climb: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a17_ice_climb",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a17_fall_down: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      // //--	fast_set: true,
      animstate: null,
      animation: "pri_a17_fall_down",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a17_pray_in: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a17_pray_in",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    pri_a17_pray: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a17_pray",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b22_medic_turn_idle: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b22_medic_turn_idle",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b22_medic_turn_out: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b22_medic_turn_out",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b22_medic_suicide: {
      weapon: "fire",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b22_medic_suicide",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b3_tech_drunk: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b3_tech_idle",
      animation: "zat_b3_tech_drunk",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b3_tech_drink: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b3_tech_idle",
      animation: "zat_b3_tech_drink",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b3_tech_idle: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b3_tech_idle",
      animation: "zat_b3_tech_idle_1",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b3_tech_idle_short: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b3_tech_idle",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b3_tech_surprise: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "zat_b3_tech_idle",
      animation: "zat_b3_tech_surprise",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    give_orders: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "give_orders"
    },

    bloodsucker_search: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "bloodsucker_search"
    },

    bloodsucker_panic: {
      weapon: "fire",
      movement: move.stand,
      mental: anim.danger,
      bodystate: move.standing,
      animstate: null,
      animation: "bloodsucker_panic"
    },

    suicide_animation: {
      weapon: "fire",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "suicide_animation",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b10_drunk_ravings: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b10_drunk_ravings",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pas_b400_vano_probe: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pas_b400_vano_probe"
    },

    pri_a28_kirillov_sit_high_radio: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "pri_a28_kirillov_sit_high_radio",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a18_inspert_monolit_actor: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a18_inspert_monolit_actor",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a20_colonel_radio: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "pri_a20_colonel_radio",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a21_sentry_madness: {
      weapon: "fire",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "pri_a21_sentry_madness_idle",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a21_sentry_madness_suicide: {
      weapon: "fire",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "pri_a21_sentry_madness_idle",
      animation: "pri_a21_sentry_madness_suicide",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a22_colonel_lean_on_table: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "pri_a22_colonel_lean_on_table",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a28_army_trance_out: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a28_army_trance_out",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b106_wounded_idle: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b106_wounded_idle",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b38_cop_dead: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b38_cop_dead",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b15_zulus_sit_drink: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "jup_b15_zulus_sit_idle_short",
      animation: "jup_b15_zulus_sit_drink",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b15_zulus_sit_idle: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "jup_b15_zulus_sit_idle_short",
      animation: "jup_b15_zulus_sit_idle",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    jup_b15_zulus_sit_idle_short: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "jup_b15_zulus_sit_idle_short",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b15_zulus_sit_out: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b15_zulus_sit_out",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_one: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_one_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_one_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_one_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_one_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_one_soldier: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_one_soldier",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_all: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_soldier_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_soldier_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_soldier_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_soldier_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_actor_vano_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_actor_vano_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_one: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_one_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_one_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_one_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_one_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_one_soldier: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_one_soldier",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_all: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_soldier_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_soldier_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_soldier_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_soldier_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_zulus_vano_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_zulus_vano_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_soldier_one: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_soldier_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_soldier_all: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_soldier_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_soldier_soldier_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_soldier_soldier_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_soldier_soldier_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_soldier_soldier_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_monolith_one: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_monolith_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_monolith_all: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_monolith_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_monolith_soldier_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_monolith_soldier_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_monolith_vano_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_monolith_vano_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_vano_one: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_vano_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_vano_all: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_vano_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_vano_soldier_vano: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_vano_soldier_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_vano_vano_monolith: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_vano_vano_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_one: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_one",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_one_vano: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_one_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_one_monolith: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_one_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_one_soldier: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_one_soldier",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_soldier_vano: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_soldier_vano",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_soldier_monolith: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_soldier_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_vano_monolith: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_vano_monolith",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b219_azot_all: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b219_azot_all",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b100_heli_2_serch: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b100_heli_2_serch",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b101_heli_5_serch: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b101_heli_5_serch",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    zat_b28_heli3_serch: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "zat_b28_heli3_serch",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b217_guide_stand: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b217_guide_stand",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b217_nitro_stand: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b217_nitro_stand",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b41_novikov_stand: {
      weapon: "none",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b41_novikov_stand",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_b305_actor: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_b305_actor",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_a9_cam1_actor: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_a9_cam1_actor",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_a9_cam2_actor: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_a9_cam2_actor",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_a9_cam3_actor: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_a9_cam3_actor",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    jup_b217_nitro_straight: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "jup_b217_nitro_straight",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a25_psy_medic_idle: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a25_psy_medic_idle",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    pri_a25_psy_medic_out: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: null,
      animation: "pri_a25_psy_medic_out",
      direction: CSightParams.eSightTypeAnimationDirection
    }
  } as any;
}

export function add_animation_list_scenario(): LuaTable<string, IAnimationDescriptor> {
  return {
    zat_b14_give_artefact_idle: {
      prop: {
        maxidle: 1,
        sumidle: 4,
        rnd: 100,
        moving: false
      },
      into: {
        [0]: ["zat_b14_give_artefact_ible", { a: "af_quest_b14_twisted" }]
      },
      out: null,
      idle: { [0]: "zat_b14_give_artefact_ible" },
      rnd: null
    },

    zat_b14_give_artefact_act: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: {
        [0]: ["zat_b14_give_artefact_in", { d: "af_quest_b14_twisted" }, "zat_b14_give_artefact_out"]
      },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b14_stay_wall: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["animpoint_stay_wall_in_1"] },
      out: { [0]: ["animpoint_stay_wall_out_1"] },
      idle: { [0]: "animpoint_stay_wall_idle_1" },
      rnd: null
    },

    zat_b38_stalker_break_lock: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "zat_b38_stalker_break_lock",
          {
            f: (...args: Array<any>) =>
              get_global<AnyCallablesModule>("xr_effects").zat_b38_underground_door_open(...args)
          }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b38_stalker_turn_on_lift: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "zat_b38_stalker_jump_lift_in_1",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b38_open_info(...args) },
          "zat_b38_stalker_jump_lift_in_2",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b38_switch_info(...args) },
          "zat_b38_stalker_jump_lift_in_3",
          "zat_b38_stalker_jump_lift_idle",
          "zat_b38_stalker_jump_lift_out"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b38_stalker_jump_tonnel: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "zat_b38_stalker_jump_tonnel",
          {
            f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b38_jump_tonnel_info(...args)
          }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b20_noah_jump: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["zat_b20_noah_jump"] },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b38_stalker_alert: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      idle: null,
      out: null,
      into: {
        [0]: [
          "zat_b38_stalker_alert",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").pri_a17_ice_climb_end(...args) }
        ]
      },
      rnd: null
    },

    pri_a17_ice_climb: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["pri_a17_sniper_climbing"] },
      out: null,
      idle: null,
      rnd: null
    },

    pri_a17_fall_down: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "ragdoll_sniper_body_front_2",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").pri_a17_preacher_death(...args) }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    pri_a17_pray_in: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "pri_a17_preacher_sermon_in",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").pri_a17_pray_start(...args) },
          "pri_a17_preacher_sermon_out"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    pri_a17_pray: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "pri_a17_preacher_sermon_out" },
      rnd: null
    },

    dynamite: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100
      },
      into: { [0]: ["dinamit_1"] },
      out: null,
      rnd: null,
      idle: null
    },

    bloodsucker_panic: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100
      },
      idle: { [0]: "norm_alert_attack_0" },
      out: null,
      rnd: null,
      into: null
    },

    bloodsucker_search: {
      prop: {
        maxidle: 0,
        sumidle: 0,
        rnd: 100
      },
      idle: { [0]: "norm_alert_idle_0" },
      out: { [0]: ["norm_alert_out_0"] },
      rnd: { [0]: ["norm_alert_idle_0", "norm_alert_idle_1", "norm_alert_idle_3"] },
      into: { [0]: ["norm_alert_in_0"] }
    },

    give_orders: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100
      },
      idle: null,
      out: null,
      rnd: null,
      into: { [0]: ["norm_alert_idle_0", "norm_alert_command_0"] }
    },

    zat_b22_medic_turn_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "zat_b22_medic_turn_idle" },
      rnd: null
    },

    zat_b22_medic_turn_out: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: { [0]: ["zat_b22_medic_turn_out"] },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b22_medic_suicide: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: { [0]: ["zat_b22_medic_suicide_in"] },
      out: null,
      idle: { [0]: "zat_b22_medic_suicide_idle" },
      rnd: null
    },

    zat_b3_tech_drunk: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["zat_b3_tech_drunk_in"] },
      out: {
        [0]: [
          "zat_b3_tech_drunk_out",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b3_tech_waked_up(...args) }
        ]
      },
      idle: { [0]: "zat_b3_tech_drunk_idle" },
      rnd: null
    },

    zat_b3_tech_idle_1: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "zat_b3_tech_idle_1" },
      rnd: null
    },

    zat_b3_tech_surprise: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "zat_b3_tech_surprise",
          {
            f: (...args: Array<any>) =>
              get_global<AnyCallablesModule>("xr_effects").zat_b3_tech_surprise_anim_end(...args)
          }
        ]
      },
      out: { [0]: ["zat_b3_tech_drunk_idle"] },
      idle: { [0]: "zat_b3_tech_drunk_idle" },
      rnd: null
    },

    zat_b3_tech_drink: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["zat_b3_tech_drink_in", { a: "vodka" }] },
      out: {
        [0]: [
          { d: "vodka" },
          "zat_b3_tech_drink_out",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b3_tech_drinked_out(...args) }
        ]
      },
      idle: { [0]: "zat_b3_tech_drink_idle" },
      rnd: null
    },

    jup_b10_drunk_ravings: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "zat_b3_tech_drunk_idle" },
      rnd: null
    },

    pas_b400_vano_probe: {
      prop: {
        maxidle: 0,
        sumidle: 0,
        rnd: 100
      },
      into: { [0]: ["metering_anomalys_0_draw_0", { a: "detector_elite" }, "metering_anomalys_0_draw_1"] },
      out: { [0]: ["metering_anomalys_0_hide_0", { d: "detector_elite" }, "metering_anomalys_0_hide_1"] },
      idle: { [0]: "metering_anomalys_0_idle_0" },
      rnd: null
    },

    pri_a28_kirillov_sit_high_radio: {
      prop: {
        maxidle: 0,
        sumidle: 0,
        rnd: 100,
        moving: false
      },
      into: {
        [0]: [
          "pri_a28_kirillov_radio_on_in",
          {
            f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").pri_a28_kirillov_hq_online(...args)
          }
        ]
      },
      out: { [0]: ["pri_a28_kirillov_radio_on_out"] },
      idle: { [0]: "pri_a28_kirillov_radio_on_idle" },
      rnd: null
    },

    pri_a18_inspert_monolit_actor: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: {
        [0]: [
          { a: "hand_radio_r" },
          "pri_a18_inspert_monolit_actor_in",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").pri_a18_radio_start(...args) },
          "pri_a18_inspert_monolit_actor_idle",
          "pri_a18_inspert_monolit_actor_idle",
          "pri_a18_inspert_monolit_actor_idle",
          "pri_a18_inspert_monolit_actor_out",
          { d: "hand_radio_r" }
        ]
      },
      idle: null,
      out: null,
      rnd: null
    },

    pri_a21_sentry_madness: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "pri_a21_sentry_madness_idle" },
      rnd: null
    },

    pri_a21_sentry_madness_suicide: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: { [0]: ["pri_a21_sentry_madness_suicide"] },
      out: null,
      idle: { [0]: "pri_a21_sentry_madness_suicide_idle" },
      rnd: null
    },

    pri_a22_colonel_lean_on_table_in: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["pri_a22_colonel_lean_on_tadl_in"] },
      out: null,
      idle: { [0]: "pri_a22_colonel_lean_on_tadl_idle" },
      rnd: null
    },

    pri_a22_colonel_lean_on_table_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: null,
      out: null,
      idle: { [0]: "pri_a22_colonel_lean_on_tadl_idle" },
      rnd: null
    },

    pri_a22_colonel_stand_from_table: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["pri_a22_colonel_lean_on_tadl_out"] },
      out: null,
      idle: null,
      rnd: null
    },

    pri_a28_army_trance_out: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        moving: true
      },
      into: { [0]: ["pri_a28_army_trance_out_in"] },
      out: { [0]: ["pri_a28_army_trance_out_out"] },
      idle: { [0]: "pri_a28_army_trance_out_idle" },
      rnd: null
    },

    zat_b106_wounded_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "cut_scene_0_actor_1" },
      rnd: null
    },

    zat_b38_cop_dead: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "cut_scene_0_actor",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").zat_b38_cop_dead(...args) }
        ]
      },
      out: null,
      idle: { [0]: "cut_scene_0_actor" },
      rnd: null
    },

    jup_b15_zulus_sit_drink: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b15_zulus_sit_drink_in",
          { a: "vodka" },
          "jup_b15_zulus_sit_drink_idle",
          { d: "vodka" },
          "jup_b15_zulus_sit_drink_out",
          {
            f: (...args: Array<any>) =>
              get_global<AnyCallablesModule>("xr_effects").jup_b15_zulus_drink_anim_info(...args)
          }
        ]
      },
      out: null,
      idle: { [0]: "jup_b15_zulus_sit_idle_short" },
      rnd: null
    },

    jup_b15_zulus_sit_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "jup_b15_zulus_sit_idle" },
      rnd: null
    },

    jup_b15_zulus_sit_idle_short: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "jup_b15_zulus_sit_idle_short" },
      rnd: null
    },

    jup_b15_zulus_sit_out: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: null,
      out: null,
      idle: { [0]: "jup_b15_zulus_sit_out" },
      rnd: null
    },

    jup_b219_actor_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ],
        [1]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_one_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_5",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_one_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_6",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_one_soldier: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_7",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_5",
          "jup_b219_descent_actor_6",
          "jup_b219_descent_actor_7",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_soldier_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_5",
          "jup_b219_descent_actor_7",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_soldier_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_6",
          "jup_b219_descent_actor_7",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_actor_vano_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_actor_1",
          "jup_b219_descent_actor_2",
          "jup_b219_descent_actor_3",
          "jup_b219_descent_actor_4",
          "jup_b219_descent_actor_5",
          "jup_b219_descent_actor_6",
          { s: "jup_b219_actor_ready" },
          "jup_b219_descent_actor_8",
          { f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
          "jup_b219_descent_actor_9",
          { s: "jup_b219_actor_go" },
          "jup_b219_descent_actor_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_one_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_5",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_one_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_6",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_one_soldier: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_7",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_5",
          "jup_b219_descent_duty_6",
          "jup_b219_descent_duty_7",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_soldier_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_5",
          "jup_b219_descent_duty_7",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_soldier_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_6",
          "jup_b219_descent_duty_7",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_zulus_vano_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_duty_1",
          "jup_b219_descent_duty_2",
          "jup_b219_descent_duty_3",
          { s: "jup_b219_duty_ready" },
          "jup_b219_descent_duty_4",
          "jup_b219_descent_duty_5",
          "jup_b219_descent_duty_6",
          "jup_b219_descent_duty_8",
          "jup_b219_descent_duty_9",
          "jup_b219_descent_duty_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_soldier_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_soldier_1",
          "jup_b219_descent_soldier_2",
          "jup_b219_descent_soldier_3",
          "jup_b219_descent_soldier_4",
          { s: "jup_b219_soldier_ready" },
          "jup_b219_descent_soldier_7",
          "jup_b219_descent_soldier_8",
          "jup_b219_descent_soldier_9",
          "jup_b219_descent_soldier_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_soldier_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_soldier_1",
          "jup_b219_descent_soldier_2",
          "jup_b219_descent_soldier_3",
          "jup_b219_descent_soldier_4",
          "jup_b219_descent_soldier_5",
          "jup_b219_descent_soldier_6",
          { s: "jup_b219_soldier_ready" },
          "jup_b219_descent_soldier_7",
          "jup_b219_descent_soldier_8",
          "jup_b219_descent_soldier_9",
          "jup_b219_descent_soldier_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_soldier_soldier_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_soldier_1",
          "jup_b219_descent_soldier_2",
          "jup_b219_descent_soldier_3",
          "jup_b219_descent_soldier_4",
          "jup_b219_descent_soldier_5",
          { s: "jup_b219_soldier_ready" },
          "jup_b219_descent_soldier_7",
          "jup_b219_descent_soldier_8",
          "jup_b219_descent_soldier_9",
          "jup_b219_descent_soldier_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_soldier_soldier_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_soldier_1",
          "jup_b219_descent_soldier_2",
          "jup_b219_descent_soldier_3",
          "jup_b219_descent_soldier_4",
          "jup_b219_descent_soldier_6",
          { s: "jup_b219_soldier_ready" },
          "jup_b219_descent_soldier_7",
          "jup_b219_descent_soldier_8",
          "jup_b219_descent_soldier_9",
          "jup_b219_descent_soldier_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_monolith_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_monolit_1",
          "jup_b219_descent_monolit_2",
          "jup_b219_descent_monolit_3",
          "jup_b219_descent_monolit_4",
          { s: "jup_b219_monolith_ready" },
          "jup_b219_descent_monolit_6",
          "jup_b219_descent_monolit_8",
          "jup_b219_descent_monolit_9",
          "jup_b219_descent_monolit_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_monolith_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_monolit_1",
          "jup_b219_descent_monolit_2",
          "jup_b219_descent_monolit_3",
          "jup_b219_descent_monolit_4",
          "jup_b219_descent_monolit_5",
          { s: "jup_b219_monolith_ready" },
          "jup_b219_descent_monolit_6",
          "jup_b219_descent_monolit_7",
          "jup_b219_descent_monolit_8",
          "jup_b219_descent_monolit_9",
          "jup_b219_descent_monolit_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_monolith_soldier_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_monolit_1",
          "jup_b219_descent_monolit_2",
          "jup_b219_descent_monolit_3",
          "jup_b219_descent_monolit_4",
          { s: "jup_b219_monolith_ready" },
          "jup_b219_descent_monolit_6",
          "jup_b219_descent_monolit_7",
          "jup_b219_descent_monolit_8",
          "jup_b219_descent_monolit_9",
          "jup_b219_descent_monolit_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_monolith_vano_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_monolit_1",
          "jup_b219_descent_monolit_2",
          "jup_b219_descent_monolit_3",
          "jup_b219_descent_monolit_4",
          "jup_b219_descent_monolit_5",
          { s: "jup_b219_monolith_ready" },
          "jup_b219_descent_monolit_6",
          "jup_b219_descent_monolit_8",
          "jup_b219_descent_monolit_9",
          "jup_b219_descent_monolit_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_vano_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_stalker_1",
          "jup_b219_descent_stalker_2",
          "jup_b219_descent_stalker_3",
          "jup_b219_descent_stalker_4",
          { s: "jup_b219_stalker_ready" },
          "jup_b219_descent_stalker_5",
          "jup_b219_descent_stalker_8",
          "jup_b219_descent_stalker_9",
          "jup_b219_descent_stalker_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_vano_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_stalker_1",
          "jup_b219_descent_stalker_2",
          "jup_b219_descent_stalker_3",
          "jup_b219_descent_stalker_4",
          { s: "jup_b219_stalker_ready" },
          "jup_b219_descent_stalker_5",
          "jup_b219_descent_stalker_6",
          "jup_b219_descent_stalker_7",
          "jup_b219_descent_stalker_8",
          "jup_b219_descent_stalker_9",
          "jup_b219_descent_stalker_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_vano_soldier_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_stalker_1",
          "jup_b219_descent_stalker_2",
          "jup_b219_descent_stalker_3",
          "jup_b219_descent_stalker_4",
          { s: "jup_b219_stalker_ready" },
          "jup_b219_descent_stalker_5",
          "jup_b219_descent_stalker_7",
          "jup_b219_descent_stalker_8",
          "jup_b219_descent_stalker_9",
          "jup_b219_descent_stalker_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_vano_vano_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          "jup_b219_descent_stalker_1",
          "jup_b219_descent_stalker_2",
          "jup_b219_descent_stalker_3",
          "jup_b219_descent_stalker_4",
          { s: "jup_b219_stalker_ready" },
          "jup_b219_descent_stalker_5",
          "jup_b219_descent_stalker_6",
          "jup_b219_descent_stalker_8",
          "jup_b219_descent_stalker_9",
          "jup_b219_descent_stalker_10"
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_one: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_one_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_5",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_one_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_6",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_one_soldier: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_7",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_soldier_vano: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_5",
          "jup_b219_descent_tech_7",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_soldier_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_6",
          "jup_b219_descent_tech_7",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_vano_monolith: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_5",
          "jup_b219_descent_tech_6",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b219_azot_all: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: {
        [0]: [
          { s: "jup_b219_tech_damn" },
          "jup_b219_descent_tech_1",
          { s: "jup_b219_tech_success" },
          "jup_b219_descent_tech_1_1",
          "jup_b219_descent_tech_2",
          { s: "jup_b219_tech_ready" },
          "jup_b219_descent_tech_3",
          "jup_b219_descent_tech_4",
          "jup_b219_descent_tech_5",
          "jup_b219_descent_tech_6",
          "jup_b219_descent_tech_7",
          "jup_b219_descent_tech_8",
          { s: "jup_b219_tech_opening" },
          "jup_b219_descent_tech_9",
          "jup_b219_descent_tech_10",
          { s: "jup_b219_tech_to_duty" }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    zat_b100_heli_2_serch: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: [{ a: "device_pda" }, "zat_b100_heli_2_serch"] },
      out: null,
      idle: { [0]: "zat_b100_heli_2_serch" },
      rnd: null
    },

    zat_b101_heli_5_serch: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: [{ a: "device_pda" }, "zat_b101_heli_5_serch"] },
      out: null,
      idle: { [0]: "zat_b101_heli_5_serch" },
      rnd: null
    },
    zat_b28_heli3_serch: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: [{ a: "device_pda" }, "zat_b28_heli3_serch"] },
      out: null,
      idle: { [0]: "zat_b28_heli3_serch" },
      rnd: null
    },

    jup_b217_guide_stand: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["jup_b217_guide_stand"] },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b217_nitro_stand: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["jup_b217_nitro_stand"] },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b41_novikov_stand: {
      prop: {
        maxidle: 10,
        sumidle: 8,
        rnd: 80,
        moving: true
      },
      into: { [0]: ["lead_1_in_0"] },
      out: { [0]: ["lead_1_out_0"] },
      idle: { [0]: "lead_1_idle" },
      rnd: {
        [0]: ["lead_1_idle_0", "lead_1_idle_1", "lead_1_idle_2", "lead_1_idle_3", "lead_1_idle_4", "lead_1_idle_5"]
      }
    },

    pri_b305_actor: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true
      },
      into: { [0]: ["pri_b305_actor"] },
      out: null,
      idle: null,
      rnd: null
    },

    jup_a9_cam1_actor: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: {
        [0]: [
          "poisk_8_idle_2",
          {
            f: (...args: Array<any>) => get_global<AnyCallablesModule>("xr_effects").jup_a9_cam1_actor_anim_end(...args)
          }
        ]
      },
      out: null,
      idle: null,
      rnd: null
    },

    jup_a9_cam2_actor: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: ["poisk_2_idle_1"] },
      out: null,
      idle: null,
      rnd: null
    },

    jup_a9_cam3_actor: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: ["poisk_2_idle_1"] },
      out: null,
      idle: null,
      rnd: null
    },

    jup_b217_nitro_straight: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: null,
      out: null,
      idle: { [0]: "idle_0_idle_1" },
      rnd: null
    },

    pri_a25_psy_medic_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: null, // --{	[0]	= {"psy_0_idle_0"} },
      out: null, // --{	[0]	= {"psy_0_idle_0_to_idle_0"} },
      idle: { [0]: "psy_0_idle_0" },
      rnd: null
    },

    pri_a25_psy_medic_out: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: false
      },
      into: { [0]: ["psy_0_idle_0_to_idle_0"] },
      out: null, // --{	[0]	= {"psy_0_idle_0_to_idle_0"} },
      idle: null, // --{	[0]	= "psy_0_idle_0" },
      rnd: null
    }
  } as any;
}
