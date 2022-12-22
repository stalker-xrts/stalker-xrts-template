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
      <button_create_acc x="450" y="619" width="108" height="26" stretch="1">
        <text font="letterica16" align="c">
          ui_st_mp_create_new_account
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text_color>
          <e r="200" g="200" b="200" />
        </text_color>
      </button_create_acc>
      <button_create x="562" y="619" width="108" height="26" stretch="1">
        <text font="letterica16" r="200" g="200" b="200" align="c">
          ui_st_mp_create
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text_color>
          <e r="200" g="200" b="200" />
        </text_color>
      </button_create>
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
            ui_st_mp_gamespy_login_page
          </text>
        </cap_header_login>

        <cap_email x="80" y="135" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_email
          </text>
        </cap_email>
        <edit_email x="144" y="135" width="194" height="30" stretch="1" max_symb_count="51">
          <text x="2" width="239" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_email>

        <cap_password x="80" y="170" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_password
          </text>
        </cap_password>
        <edit_password x="144" y="170" width="194" height="30" max_symb_count="31" password="1" stretch="1">
          <text x="2" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_password>

        <button_forgot x="242" y="210" width="96" height="24" stretch="1">
          <text font="letterica16" r="200" g="200" b="200" align="c">
            ui_st_mp_forgot_password
          </text>
          <texture>ui_inGame2_button</texture>
          <text_color>
            <e r="200" g="200" b="200" />
          </text_color>
        </button_forgot>

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
      <create_account_page x="419" y="288" width="394" height="363">
        <cap_header_create_account x="116" y="40" width="160" height="30">
          <text font="graffiti32" align="c" r="220" g="220" b="220">
            ui_st_mp_gamespy_account_creation
          </text>
        </cap_header_create_account>

        <cap_error x="116" y="80" width="160" height="15">
          <text font="letterica16" align="c" r="255" g="0" b="0" />
        </cap_error>

        <cap_email x="80" y="100" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_email
          </text>
        </cap_email>
        <edit_email x="144" y="100" width="194" height="30" stretch="1" max_symb_count="51">
          <text x="2" width="239" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_email>
        <static_email x="340" y="100" width="29" height="25" stretch="1">
          <texture>ui_inGame2_lamp_OFF</texture>
        </static_email>

        <cap_password x="80" y="135" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_password
          </text>
        </cap_password>
        <edit_password x="144" y="135" width="194" height="30" max_symb_count="31" password="1" stretch="1">
          <text x="2" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_password>
        <static_password x="340" y="135" width="29" height="25" stretch="1">
          <texture>ui_inGame2_lamp_OFF</texture>
        </static_password>

        <cap_confirm_password x="80" y="170" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_confirm_password
          </text>
        </cap_confirm_password>
        <edit_confirm_password x="144" y="170" width="194" height="30" max_symb_count="31" password="1" stretch="1">
          <text x="2" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_confirm_password>
        <static_confirm_password x="340" y="170" width="29" height="25" stretch="1">
          <texture>ui_inGame2_lamp_OFF</texture>
        </static_confirm_password>

        <cap_unique_nick x="80" y="205" width="60" height="30">
          <text font="letterica18" align="r" vert_align="c" r="170" g="170" b="170">
            ui_st_mp_unique_nickname
          </text>
        </cap_unique_nick>
        <edit_unique_nick x="144" y="205" width="194" height="30" max_symb_count="21" stretch="1">
          <text x="2" font="letterica16" complex_mode="0" vert_align="c" r="200" g="200" b="200" />
          <texture>ui_inGame2_edit_box_2</texture>
        </edit_unique_nick>
        <static_unique_nick x="340" y="205" width="29" height="25" stretch="1">
          <texture>ui_inGame2_lamp_OFF</texture>
        </static_unique_nick>

        <combo_aval_unique_nick x="178" y="240" width="160" height="20" always_show_scroll="1" stretch="1">
          <options_item entry="unique_nicks" group="gs_group" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
          </text_color>
        </combo_aval_unique_nick>
        <auto_static x="80" y="280" width="60" height="20">
          <text font="letterica16" complex_mode="0">
            ui_st_you_cannot_delete_profile_after_creation
          </text>
        </auto_static>
      </create_account_page>
    </w>
  );
}
