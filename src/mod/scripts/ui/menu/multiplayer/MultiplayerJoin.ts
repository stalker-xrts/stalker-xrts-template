export interface IMultiplayerJoin extends XR_CUIWindow {}

export const MultiplayerJoin: IMultiplayerJoin = declare_xr_class("MultiplayerJoin", CUIWindow, {} as IMultiplayerJoin);

/**
 * -- file:        UI_MM_MP_JOIN.SCRIPT
 * -- description:        join tab in mm_mp
 * -- created:        16.05.2005
 * -- author:        Serge Vynnychenko
 * -- mail:        narrator@gsc-game.kiev.ua
 * --
 * -- Copyright 2005 GSC Game World
 *
 *
 * class "mp_join" (CUIWindow)
 *
 * function mp_join:__init(online_mode) super()
 *    self.online = online_mode
 * end
 *
 * function mp_join:__finalize()
 * end
 *
 * function mp_join:InitControls(x, y, xml, handler)
 *    self:SetAutoDelete        (true)
 *
 *    xml:InitWindow            ("tab_client:main", 0, self)
 * --    self.bk = xml:InitFrame    ("frame", self)
 * --    xml:InitFrameLine        ("tab_client:vert_separator",self)
 *
 *    handler.server_list = xml:InitServerList("tab_client:server_list", self)
 *
 * --    xml:InitStatic("tab_client:cap_network_connection", self)
 *    xml:InitStatic("tab_client:cap_server_list", self)
 *    xml:InitStatic("tab_client:cap_filters",self)
 *
 * --    xml:InitStatic("tab_client:rust_00",self)
 * --    xml:InitStatic("tab_client:rust_01",self)
 *
 *
 *    local btn = xml:Init3tButton("tab_client:btn_direct_ip", self)
 *    handler:Register(btn, "btn_direct_ip")
 *    handler.btn_direct_ip = btn
 *    handler.filters = {}
 *
 *    local btn = xml:InitCheck("tab_client:check_empty", self)
 *    handler:Register(btn, "check_empty")
 *    handler.filters.btn_check_empty = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:InitCheck("tab_client:check_full", self)
 *    handler:Register(btn, "check_full")
 *    handler.filters.btn_check_full = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:InitCheck("tab_client:check_with_pass", self)
 *    handler:Register(btn, "check_with_pass")
 *    handler.filters.btn_check_with_pass = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:InitCheck("tab_client:check_without_pass", self)
 *    handler:Register(btn, "check_without_pass")
 *    handler.filters.btn_check_without_pass = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:InitCheck("tab_client:check_without_ff", self)
 *    handler:Register(btn, "check_without_ff")
 *    handler.filters.btn_check_without_ff = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:InitCheck("tab_client:check_listen_servers", self)
 *    handler:Register(btn, "check_listen_servers")
 *    handler.filters.btn_check_listen_servers = btn
 *    btn:SetCheck(true)
 *
 *    btn = xml:Init3tButton("tab_client:btn_refresh", self)
 *    handler:Register(btn, "btn_refresh")
 *
 *    btn = xml:Init3tButton("tab_client:btn_quick_refresh", self)
 *    handler:Register(btn,"btn_quick_refresh")
 *
 *
 *    btn = xml:Init3tButton("tab_client:btn_server_info", self)
 *    handler:Register(btn, "btn_server_info")
 *
 * end
 */
