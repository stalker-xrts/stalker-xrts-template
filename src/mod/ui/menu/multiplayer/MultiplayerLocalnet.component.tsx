import { JSXXML, JSXNode } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <background x="0" y="0" width="1024" height="768">
        <auto_static x="102" y="0" width="819" height="768" stretch="1">
          <texture>ui_inGame2_mp_background</texture>
        </auto_static>
        <auto_static x="100" y="256" width="243" height="512" stretch="1">
          <texture width="302" height="512">
            ui\video_bochka
          </texture>
        </auto_static>

        <auto_static x="0" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_panel_left</texture>
        </auto_static>
        <auto_static x="921" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_panel_right</texture>
        </auto_static>
        <auto_static x="419" y="288" width="394" height="363" stretch="1">
          <texture>ui_inGame2_main_window_small</texture>
        </auto_static>
        <auto_static x="8" y="698" width="104" height="30" stretch="1">
          <texture>ui_inGame2_GameSpy_logo</texture>
        </auto_static>
      </background>

      <button_login x="562" y="619" width="108" height="26" stretch="1">
        <text font="letterica16" r="200" g="200" b="200" align="c">
          ui_st_mp_login
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text_color>
          <e r="200" g="200" b="200" />
        </text_color>
      </button_login>
      <button_cancel x="674" y="619" width="108" height="26" stretch="1">
        <text font="letterica16" r="200" g="200" b="200" align="c">
          mm_mp_cancel
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text_color>
          <e r="200" g="200" b="200" />
        </text_color>
      </button_cancel>
      <login_page x="419" y="288" width="394" height="363">
        <cap_header_login x="116" y="40" width="160" height="30">
          <text font="graffiti32" align="c" r="220" g="220" b="220">
            ui_st_mp_local_network_login_page
          </text>
        </cap_header_login>

        <cap_nickname x="80" y="135" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_nickname
          </text>
        </cap_nickname>

        <edit_nickname x="144" y="135" width="194" height="30" max_symb_count="21">
          <text x="6" width="239" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_nickname>

        <check_remember_me x="252" y="235" width="35" height="29" stretch="1">
          <texture>ui_inGame2_checkbox</texture>
          <text x="-10" font="letterica16" r="170" g="170" b="170">
            ui_st_mp_remember_me
          </text>
          <text_color>
            <e r="200" g="200" b="200" />
          </text_color>
        </check_remember_me>
      </login_page>
    </w>
  );
}
