import { JSXNode, JSXXML } from "jsx-xml";

export function OptionsControls(): JSXNode {
  return (
    <tab_controls>
      <cap_mousesens x="12" y="3" width="108" height="24">
        <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
          ui_mm_mouse_sense
        </text>
      </cap_mousesens>
      <track_mousesens x="140" y="6" width="188" height="16" step="0.01">
        <options_item entry="mouse_sens" group="mm_opt_controls" />
      </track_mousesens>
      <cap_check_mouseinvert x="12" y="33" width="108" height="24">
        <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
          ui_mm_invert_mouse
        </text>
      </cap_check_mouseinvert>
      <check_mouseinvert x="129" y="30" width="35" stretch="1" height="29">
        <texture>ui_inGame2_checkbox</texture>
        <options_item entry="mouse_invert" group="mm_opt_controls" />
      </check_mouseinvert>

      <cap_keyboardsetup x="0" y="65" width="344" height="15">
        <texture a="150">ui_inGame2_servers_list_button</texture>
        <auto_static x="8" y="0" width="108" height="15">
          <text r="170" g="170" b="170" font="letterica16" vert_align="c">
            ui_mm_keyboard_setup
          </text>
        </auto_static>
      </cap_keyboardsetup>

      <key_binding x="0" y="85" width="344" height="240">
        <header_1 x="0" y="0" width="176" height="15">
          <texture a="150">ui_inGame2_servers_list_button</texture>
          <auto_static x="2" y="0" width="176" height="15">
            <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
              ui_mm_action
            </text>
          </auto_static>
        </header_1>
        <header_2 x="176" y="0" width="84" height="15">
          <texture a="150">ui_inGame2_servers_list_button</texture>
          <auto_static x="2" y="0" width="84" height="15">
            <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
              ui_mm_key
            </text>
          </auto_static>
        </header_2>
        <auto_frameline x="260" y="0" width="84" height="15">
          <texture>ui_inGame2_servers_list_button</texture>
        </auto_frameline>
        <header_3 x="260" y="0" width="68" height="15">
          <texture a="150">ui_inGame2_empty_frameline_15</texture>
          <auto_static x="2" y="0" width="68" height="15">
            <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
              ui_mm_alternative
            </text>
          </auto_static>
        </header_3>

        <frame x="0" y="15" width="343" height="215">
          <texture>ui_inGame2_servers_list_frame</texture>
        </frame>

        <scroll_view x="2" y="17" width="341" height="211" always_show_scroll="1" vert_interval="3">
          <item_group x="0" y="0" width="160" height="25">
            <text r="230" g="230" b="230" font="letterica18" />
          </item_group>

          <item_key x="0" y="0" width="331" height="18">
            <text r="170" g="170" b="170" font="letterica16" />
          </item_key>
        </scroll_view>
      </key_binding>

      <btn_default x="270" y="322" width="86" height="24" stretch="1">
        <text align="c" font="letterica16">
          ui_mm_default
        </text>
        <texture>ui_inGame2_button</texture>
        <text_color>
          <e r="210" g="210" b="210" />
        </text_color>
      </btn_default>
    </tab_controls>
  );
}
