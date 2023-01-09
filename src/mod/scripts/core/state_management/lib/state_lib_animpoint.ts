import { anim, CSightParams, move } from "xray16";

import { IStateDescriptor } from "@/mod/scripts/core/state_management/lib/state_lib";

export function add_state_lib_animpoint(): LuaTable<string, IStateDescriptor> {
  return {
    animpoint_stay_wall: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_eat_bread: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_eat_bread",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_stay_wall_eat_kolbasa: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_eat_kolbasa",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_eat_bread: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_eat_bread",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_stay_table_eat_kolbasa: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_eat_kolbasa",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_eat_bread: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_eat_bread",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_high_eat_kolbasa: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_eat_kolbasa",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_eat_bread: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_eat_bread",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_normal_eat_kolbasa: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_eat_kolbasa",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_eat_bread: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_eat_bread",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_low_eat_kolbasa: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_eat_kolbasa",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_drink_vodka: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_drink_vodka",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_stay_wall_drink_energy: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_drink_energy",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_drink_vodka: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_drink_vodka",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_stay_table_drink_energy: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_drink_energy",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_drink_vodka: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_drink_vodka",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_high_drink_energy: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_drink_energy",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_drink_vodka: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_drink_vodka",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_normal_drink_energy: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_drink_energy",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_drink_vodka: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_drink_vodka",
      direction: CSightParams.eSightTypeAnimationDirection
    },
    animpoint_sit_low_drink_energy: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_drink_energy",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_guitar: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_guitar",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_guitar: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_guitar",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_guitar: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_guitar",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_guitar: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_guitar",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_guitar: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_guitar",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_harmonica: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: "animpoint_stay_wall_harmonica",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_harmonica: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: "animpoint_stay_table_harmonica",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_harmonica: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: "animpoint_sit_high_harmonica",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_harmonica: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: "animpoint_sit_normal_harmonica",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_harmonica: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: "animpoint_sit_low_harmonica",
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_weapon: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall_weapon",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_weapon: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table_weapon",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_weapon: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high_weapon",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_weapon: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal_weapon",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_weapon: {
      weapon: "unstrapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low_weapon",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_wall_no_rnd: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_wall",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_stay_table_no_rnd: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_stay_table",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_high_no_rnd: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_high",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_normal_no_rnd: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_normal",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    },

    animpoint_sit_low_no_rnd: {
      weapon: "strapped",
      movement: move.stand,
      mental: anim.free,
      bodystate: move.standing,
      animstate: "animpoint_sit_low",
      animation: null,
      direction: CSightParams.eSightTypeAnimationDirection
    }
  } as any;
}
