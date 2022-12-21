export interface IMultiplayerGameSpy extends XR_CUIScriptWnd {}

export const MultiplayerGameSpy: IMultiplayerGameSpy = declare_xr_class(
  "MultiplayerGameSpy",
  CUIScriptWnd,
  {} as IMultiplayerGameSpy
);

/**
 * local ctrl = false
 * local focused_eb = 0
 *
 * class "gamespy_page" (CUIScriptWnd)
 * function gamespy_page:__init() super()
 *    self:InitControls()
 *    self:InitCallbacks()
 * end
 *
 * function gamespy_page:InitControls()
 *    local xml = CScriptXmlInit()
 *    xml:ParseFile("ui_mm_mp_gamespy.xml")
 *
 *    self:SetWndRect(Frect():set(0,0,1024,768))
 *    self:Enable(true)
 *    xml:InitStatic("background", self)
 *
 *    local button = nil
 *    button = xml:Init3tButton("button_create_acc", self)
 *    self:Register(button, "btn_create_acc")
 *     self.btn_create_acc = button
 *
 *     button = xml:Init3tButton("button_create", self)
 *    self:Register(button, "btn_create")
 *     self.btn_create = button
 *
 *    button = xml:Init3tButton("button_login", self)
 *    self:Register(button, "btn_login")
 *     self.btn_login = button
 *
 *    button = xml:Init3tButton("button_cancel", self)
 *    self:Register(button, "btn_cancel")
 *     self.btn_cancel = button
 * --------------------------------------------------------------------------------
 *    self.login_page = CUIWindow()
 *    xml:InitWindow("login_page", 0, self.login_page)
 *    self.login_page:SetAutoDelete(true)
 *    self:AttachChild(self.login_page)
 *
 *    self.lp_header_login = xml:InitTextWnd("login_page:cap_header_login", self.login_page)
 *
 *    xml:InitTextWnd("login_page:cap_email", self.login_page)
 *    self.lp_email = xml:InitEditBox("login_page:edit_email", self.login_page)
 *    self:Register(self.lp_email, "lp_edit_email")
 *
 *    xml:InitTextWnd("login_page:cap_password", self.login_page)
 *    self.lp_password = xml:InitEditBox("login_page:edit_password", self.login_page)
 *    self:Register(self.lp_password, "lp_edit_password")
 *
 *    button = xml:Init3tButton("login_page:button_forgot", self.login_page)
 *    self:Register(button, "lp_btn_forgot")
 *     self.lp_btn_forgot = button
 *
 *     button = xml:InitCheck("login_page:check_remember_me", self.login_page)
 *    self:Register(button, "lp_check_remember_me")
 *    button:SetCheck(true)
 *    self.lp_check_remember_me = button
 *
 *    self.lp_email:SetNextFocusCapturer(self.lp_password)
 *    self.lp_password:SetNextFocusCapturer(self.lp_email)
 * --------------------------------------------------------------------------------
 *    self.create_account_page = CUIWindow()
 *    xml:InitWindow("create_account_page", 0, self.create_account_page)
 *    self.create_account_page:SetAutoDelete(true)
 *    self:AttachChild(self.create_account_page)
 *
 *    self.ca_header_create_acc = xml:InitTextWnd("create_account_page:cap_header_create_account", self.create_account_page)
 *    self.ca_error = xml:InitTextWnd("create_account_page:cap_error", self.create_account_page)
 *
 *    xml:InitTextWnd("create_account_page:cap_email", self.create_account_page)
 *    self.ca_email = xml:InitEditBox("create_account_page:edit_email", self.create_account_page)
 *    self:Register(self.ca_email, "ca_edit_email")
 *    self.ca_st_email = xml:InitStatic("create_account_page:static_email", self.create_account_page)
 *    self.ca_email_valid = false
 *
 *    xml:InitTextWnd("create_account_page:cap_password", self.create_account_page)
 *    self.ca_password = xml:InitEditBox("create_account_page:edit_password", self.create_account_page)
 *    self:Register(self.ca_password, "ca_edit_password")
 *    self.ca_st_password = xml:InitStatic("create_account_page:static_password", self.create_account_page)
 *    self.ca_passwords_valid = false
 *
 *    xml:InitTextWnd("create_account_page:cap_confirm_password", self.create_account_page)
 *    self.ca_confirm_password = xml:InitEditBox("create_account_page:edit_confirm_password", self.create_account_page)
 *    self:Register(self.ca_confirm_password, "ca_edit_confirm_password")
 *    self.ca_st_confirm_password = xml:InitStatic("create_account_page:static_confirm_password", self.create_account_page)
 *
 *    xml:InitTextWnd("create_account_page:cap_unique_nick", self.create_account_page)
 *    self.ca_unique_nick = xml:InitEditBox("create_account_page:edit_unique_nick", self.create_account_page)
 *    self:Register(self.ca_unique_nick, "ca_edit_unique_nick")
 *    self.ca_st_unique_nick = xml:InitStatic("create_account_page:static_unique_nick", self.create_account_page)
 *    self.ca_unique_nick_valid = false
 *
 *    self.ca_combo_aval_unique_nick = xml:InitComboBox("create_account_page:combo_aval_unique_nick", self.create_account_page)
 *    self:Register(self.ca_combo_aval_unique_nick, "ca_combo_aval_unique_nick")
 *
 *    self.ca_email:SetNextFocusCapturer(self.ca_password)
 *    self.ca_password:SetNextFocusCapturer(self.ca_confirm_password)
 *    self.ca_confirm_password:SetNextFocusCapturer(self.ca_unique_nick)
 *    self.ca_unique_nick:SetNextFocusCapturer(self.ca_email)
 *
 * -- // message boxes
 *
 *    self.gs_login_mb_cancel = CUIMessageBoxEx()
 *    self:Register(self.gs_login_mb_cancel,"gs_mb_login_cancel")
 *
 *    self.gs_login_mb_profnotfound = CUIMessageBoxEx()
 *    self:Register(self.gs_login_mb_profnotfound, "gs_mb_login_profnotfound")
 *
 *    self.gs_login_mb_result = CUIMessageBoxEx()
 *    self:Register(self.gs_login_mb_result, "gs_mb_login_result")
 *
 *    self.gs_create_mb_result = CUIMessageBoxEx()
 *    self:Register(self.gs_create_mb_result, "gs_mb_create_result")
 *
 *    self.gs_mb_create_vemail_cancel = CUIMessageBoxEx()
 *    self:Register(self.gs_mb_create_vemail_cancel, "gs_mb_create_vemail_cancel")
 *
 *    self.gs_mb_create_vnick_cancel = CUIMessageBoxEx()
 *    self:Register(self.gs_mb_create_vnick_cancel, "gs_mb_create_vnick_cancel")
 *
 *    self.gs_message_box = CUIMessageBoxEx()
 *    self:Register(self.gs_message_box,"gs_message_box")
 *
 * -- ///////////////
 *
 *    self.create_account_page:Show(false)
 *
 *    self.active_page = "login_page"
 *     focused_eb = 0
 *     self:ChangeActiveEditBox()
 *     self:CheckAccCreationAbility()
 *    self.email = ""
 *    self.password = ""
 *    self.profile_name = ""
 * end
 *
 * function gamespy_page:InitCallbacks()
 *    self:AddCallback("btn_create_acc",            ui_events.BUTTON_CLICKED,        self.OnBtnShowCreateAccountPage, self)
 *    self:AddCallback("btn_create",                ui_events.BUTTON_CLICKED,        self.OnBtnCreateAccount, self)
 *
 *    self:AddCallback("btn_login",                ui_events.BUTTON_CLICKED,        self.OnBtnLogin, self)
 *    self:AddCallback("btn_cancel",                ui_events.BUTTON_CLICKED,        self.OnBtnCancel, self)
 *    self:AddCallback("lp_check_remember_me",    ui_events.BUTTON_CLICKED,        self.OnBtnRememberMe, self)
 *
 *    self:AddCallback("lp_edit_email",            ui_events.EDIT_TEXT_COMMIT,        self.OnEditLPEmailChanged, self)
 *    self:AddCallback("lp_edit_password",        ui_events.EDIT_TEXT_COMMIT,        self.OnEditLPPasswordChanged, self)
 *    self:AddCallback("lp_btn_forgot",            ui_events.BUTTON_CLICKED,        self.OnBtnLPForgotPassword, self)
 *
 *    self:AddCallback("ca_edit_email",            ui_events.EDIT_TEXT_COMMIT,        self.OnEditCAEmailChanged, self)
 *    self:AddCallback("ca_edit_password",        ui_events.EDIT_TEXT_COMMIT,        self.OnEditCAPasswordChanged, self)
 *    self:AddCallback("ca_edit_confirm_password", ui_events.EDIT_TEXT_COMMIT,    self.OnEditCAConfirmPasswordChanged, self)
 *    self:AddCallback("ca_edit_unique_nick",        ui_events.EDIT_TEXT_COMMIT,        self.OnEditCAUniqueNickChanged, self)
 *
 *    self:AddCallback("ca_combo_aval_unique_nick", ui_events.LIST_ITEM_SELECT,    self.OnUniqueNickSelect, self)
 *    self:AddCallback("ca_combo_aval_unique_nick", ui_events.WINDOW_LBUTTON_DOWN,self.OnUniqueNickSelect, self)
 *
 *    self:AddCallback("gs_mb_login_profnotfound",    ui_events.MESSAGE_BOX_YES_CLICKED,    self.LoginProfileUseExist, self)
 *    self:AddCallback("gs_mb_login_profnotfound",    ui_events.MESSAGE_BOX_NO_CLICKED,    self.LoginProfileNotFound, self)
 *    self:AddCallback("gs_mb_login_result",            ui_events.MESSAGE_BOX_OK_CLICKED,    self.OnLoginResultOk, self)
 *    self:AddCallback("gs_mb_create_result",            ui_events.MESSAGE_BOX_OK_CLICKED,    self.CreatedAccount, self);
 *
 *    self:AddCallback("gs_mb_login_cancel",            ui_events.MESSAGE_BOX_OK_CLICKED,    self.TerminateLogin, self)
 *    self:AddCallback("gs_mb_create_vemail_cancel",    ui_events.MESSAGE_BOX_OK_CLICKED,    self.TerminateVerifyEmail,    self)
 *    self:AddCallback("gs_mb_create_vnick_cancel",    ui_events.MESSAGE_BOX_OK_CLICKED,    self.TerminateVerifyNick,    self)
 * end
 *
 * function gamespy_page:ShowLoginPage()
 *    local mail = self.owner.l_mgr:get_email_from_registry()
 *    local pass = self.owner.l_mgr:get_password_from_registry()
 *
 *    if(mail~="" and pass~="") then
 *        self.lp_email:SetText        (mail)
 *        self.lp_password:SetText    (pass)
 *    end
 *
 *    self.lp_check_remember_me:SetCheck(self.owner.l_mgr:get_remember_me_from_registry())
 *
 *    self.btn_create_acc:Show        (true)
 *    self.btn_login:Show                (true)
 *    self.btn_create:Show            (false)
 *
 *    self.active_page                = "login_page"
 *    self.create_account_page:Show    (false)
 *    self.login_page:Show            (true)
 *    focused_eb                        = 0
 * --    self:ChangeActiveEditBox()
 * end
 *
 * function gamespy_page:OnBtnCancel()
 *    if (self.active_page == "create_account_page") then
 *        self:ShowLoginPage()
 *    else
 *        self:HideDialog            ()
 *        self.owner:ShowDialog    (true)
 *        self.owner:Show            (true)
 *    end
 * end
 *
 * function gamespy_page:OnBtnRememberMe()
 *    self.owner.l_mgr:save_remember_me_to_registry(self.lp_check_remember_me:GetCheck())
 * end
 *
 * function gamespy_page:CheckAccCreationAbility()
 *    self.btn_create:Enable(false)
 *    if ((self.ca_email_valid == true) and
 *        (self.ca_passwords_valid == true) and
 *        (self.ca_unique_nick_valid == true)) then
 *        self.btn_create:Enable(true)
 *    end
 * end
 *
 * function gamespy_page:OnBtnCreateAccount()
 *        self.gs_message_box:InitMessageBox    ("message_box_gs_acc_creation")
 *        self.gs_message_box:SetText            ("ui_mp_gamespy_creating_new_profile")
 *        self.gs_message_box:ShowDialog        (true)
 *        self.owner.acc_mgr:create_profile    (self.ca_email:GetText(), self.ca_unique_nick:GetText(), self.ca_email:GetText(), self.ca_password:GetText(), account_operation_cb(self, self.AccountCreationResult))
 * end
 *
 * function gamespy_page:OnBtnShowCreateAccountPage()
 *        local empty_text                    = ""
 *        self.ca_email:SetText                (empty_text)
 *        self.ca_password:SetText            (empty_text)
 *        self.ca_confirm_password:SetText    (empty_text)
 *        self.ca_unique_nick:SetText            (empty_text)
 *
 *        self.ca_email_valid                    = false
 *        self.ca_passwords_valid                = false
 *        self.ca_unique_nick_valid            = false
 *
 *        self.ca_st_email:InitTexture        ("ui_inGame2_lamp_OFF")
 *        self.ca_st_password:InitTexture        ("ui_inGame2_lamp_OFF")
 *        self.ca_st_confirm_password:InitTexture("ui_inGame2_lamp_OFF")
 *        self.ca_st_unique_nick:InitTexture    ("ui_inGame2_lamp_OFF")
 *
 *        self.ca_error:SetText                (empty_text)
 *
 *        self.btn_create_acc:Enable            (false)
 *        self.active_page                    = "create_account_page"
 *        self.create_account_page:Show        (true)
 *        self.btn_create_acc:Show            (false)
 *        self.ca_combo_aval_unique_nick:Show    (false)
 *        self.ca_combo_aval_unique_nick:ClearList()
 *        self.btn_login:Show                    (false)
 *        self.btn_create:Show                (true)
 *        self.login_page:Show                (false)
 *        focused_eb                            = 0
 *         self:ChangeActiveEditBox()
 *         self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:OnBtnLogin()
 *    self.email        = self.lp_email:GetText()
 *    self.password    = self.lp_password:GetText()
 *    self.gs_login_mb_cancel:InitMessageBox    ("message_box_gs_info")
 *    self.gs_login_mb_cancel:SetText            ("ui_mp_gamespy_getting_account_profiles")
 *     self.gs_login_mb_cancel:ShowDialog        (true)
 *     self.profile_name                        = ""
 *     self.owner.acc_mgr:search_for_email        (self.email, found_email_cb(self, self.OnLoginEmailSearchComplete))
 * end
 *
 * function gamespy_page:OnLoginEmailSearchComplete(founded, descr)
 *    if (not founded) then
 *        self.gs_login_mb_cancel:HideDialog        ()
 *        self.gs_login_mb_result:InitMessageBox    ("message_box_gs_result")
 *        if (descr=="") then
 *            descr = game.translate_string        ("mp_gp_unknown_email")
 *        end
 *        printf("Login error: %s", descr)
 *        self.gs_login_mb_result:SetText            (descr)
 *        self.gs_login_mb_result:ShowDialog        (true)
 *        return
 *    end
 *    self.owner.acc_mgr:get_account_profiles(self.email, self.password, account_profiles_cb(self, self.GetAccountProfilesResult))
 * end
 *
 * function gamespy_page:GetAccountProfilesResult(profiles_num, descr)
 *    if(profiles_num==0) then
 *        self.gs_login_mb_cancel:HideDialog()
 *        self.gs_login_mb_result:InitMessageBox("message_box_gs_result")
 *        if (descr=="") then
 *            descr = game.translate_string("mp_gp_bad_password")
 *        end
 *        printf("Login error: %s", descr)
 *        self.gs_login_mb_result:SetText            (descr)
 *        self.gs_login_mb_result:ShowDialog        (true)
 *    else
 *        for i in (self.owner.acc_mgr:get_found_profiles()) do
 *            if(self.profile_name=="") then
 *                self.profile_name = i
 *            end
 *            if(i==self.email) then
 *                self.gs_login_mb_cancel:SetText("ui_mp_gamespy_logining_to_profile")
 *                self.owner.l_mgr:login(self.email, self.email, self.password, login_operation_cb(self, self.LoginOperationResult))
 *                return
 *            end
 *        end
 *        self.gs_login_mb_cancel:HideDialog()
 *        self:LoginProfileUseExist                        ()
 *        -- self.gs_login_mb_profnotfound:InitMessageBox    ("message_box_gs_question")
 *        -- self.gs_login_mb_profnotfound:SetText        (game.translate_string("ui_mp_gamespy_use_existing_profile").." "..self.profile_name.."?")
 *        -- self.gs_login_mb_profnotfound:ShowDialog        (true)
 *    end
 * end
 *
 * function gamespy_page:LoginOperationResult(profile, descr)
 *     self.gs_login_mb_cancel:HideDialog()
 *    if(profile==nil) then
 *        self.gs_login_mb_result:InitMessageBox("message_box_gs_result")
 *        if (descr == "") then
 *            descr = "mp_gp_login_error"
 *        end
 *        self.gs_login_mb_result:SetText        (descr)
 *        self.gs_login_mb_result:ShowDialog    (true)
 *    else
 *        self.owner.gs_profile                = profile
 *        self.owner.shniaga:SetPage            (CUIMMShniaga.epi_main, "ui_mm_main.xml", "menu_main_logout")
 *        self.owner.shniaga:ShowPage            (CUIMMShniaga.epi_main)
 *         self.owner.profile_store:load_current_profile(store_operation_cb(self, self.LoadingProgress), store_operation_cb(self, self.LoadingComplete))
 *        if(self.lp_check_remember_me:GetCheck()) then
 *            self.owner.l_mgr:save_email_to_registry        (self.email)
 *            self.owner.l_mgr:save_password_to_registry    (self.password)
 *        end
 *    end
 * end
 *
 * function gamespy_page:TerminateLogin()
 *    if (self.owner.gs_profile ~= nil) then
 *        self.owner.profile_store:stop_loading();
 *        self.owner.l_mgr:logout()
 *        self.owner.shniaga:ShowPage(CUIMMShniaga.epi_new_network_game)
 *        self.owner.shniaga:SetPage(CUIMMShniaga.epi_main, "ui_mm_main.xml", "menu_main")
 *    elseif (self.profile_name == "") then
 *        self.owner.acc_mgr:stop_fetching_account_profiles()
 *    else
 *        self.owner.l_mgr:stop_login()
 *    end
 *    self.owner.gs_profile = nil
 * end
 *
 * function gamespy_page:LoginProfileUseExist()
 *    self.gs_login_mb_cancel:InitMessageBox("message_box_gs_info")
 *    self.gs_login_mb_cancel:SetText("ui_mp_gamespy_logining_to_profile")
 *     self.gs_login_mb_cancel:ShowDialog(true)
 *    self.owner.l_mgr:login(self.email, self.profile_name, self.password, login_operation_cb(self, self.LoginOperationResult))
 * end
 *
 * function gamespy_page:LoginProfileNotFound()
 *    self:OnBtnShowCreateAccountPage()
 * end
 *
 * function gamespy_page:OnLoginResultOk()
 *    if(self.owner.gs_profile) then
 *         self:HideDialog()
 *         self.owner:ShowDialog(true)
 *         self.owner:Show(true)
 *         self.owner:OnButton_multiplayer_clicked()
 *     end
 * end
 *
 * function gamespy_page:CreatedAccount()
 *    self:ShowLoginPage()
 *    self.lp_email:SetText(self.ca_email:GetText())
 *    self.lp_password:SetText(self.ca_password:GetText())
 *    --self:OnBtnLogin()
 * end
 *
 * function gamespy_page:OnMsgYes()
 *    self.gs_login_mb_cancel:InitMessageBox("message_box_gs_info")
 *     self.gs_login_mb_cancel:SetText("ui_mp_gamespy_logining_to_profile")
 *     self.gs_login_mb_cancel:ShowDialog(true)
 *     self.owner.l_mgr:login(self.email, self.profile_name, self.password, login_operation_cb(self, self.LoginOperationResult))
 * end
 *
 * function gamespy_page:OnMsgNo()
 *    self.ca_email:SetText(self.email)
 *    self.ca_st_email:InitTexture("ui_inGame2_lamp_GREEN")
 *    self.ca_password:SetText(self.password)
 *    self.ca_st_password:InitTexture("ui_inGame2_lamp_GREEN")
 *    self.ca_confirm_password:SetText(self.password)
 *    self.ca_st_confirm_password:InitTexture("ui_inGame2_lamp_GREEN")
 *    self:OnBtnShowCreateAccountPage()
 * end
 *
 * function gamespy_page:OnKeyboard(dik, keyboard_action)
 *    CUIScriptWnd.OnKeyboard(self,dik,keyboard_action)
 *
 *    local bind = dik_to_bind(dik)
 *    local console = get_console()
 *
 *    if keyboard_action == ui_events.WINDOW_KEY_RELEASED then
 *        if dik == DIK_keys.DIK_LCONTROL then
 *            ctrl = false
 *        end
 *    elseif keyboard_action == ui_events.WINDOW_KEY_PRESSED then
 *        if dik == DIK_keys.DIK_LCONTROL then
 *            ctrl = true
 *        elseif dik == DIK_keys.DIK_ESCAPE then
 *            self:OnBtnCancel()
 *        elseif dik == DIK_keys.DIK_TAB then
 *            if(ctrl) then
 *                if(self.active_page=="login_page") then
 *                    self:OnBtnShowCreateAccountPage()
 *                else
 *                    self:OnBtnLogin()
 *                end
 *            end
 *        end
 *    end
 *    return true
 * end
 *
 * function gamespy_page:OnEditLPEmailChanged()
 * --    self:OnBtnLogin()
 * end
 *
 * function gamespy_page:OnEditLPPasswordChanged()
 * --    self:OnBtnLogin()
 * end
 *
 * function gamespy_page:OnBtnLPForgotPassword()
 *    self.owner.l_mgr:forgot_password("https://login.gamespy.com/lostpassword.aspx")
 * end
 *
 * function gamespy_page:LoadingProgress(fake_bool, progress_string)
 *     if(self.gs_login_mb_cancel:IsShown()) then
 *        self.gs_login_mb_cancel:HideDialog()
 *    end
 *     self.gs_login_mb_cancel:InitMessageBox("message_box_gs_info")
 *     self.gs_login_mb_cancel:SetText(progress_string)
 *     self.gs_login_mb_cancel:ShowDialog(true)
 * end
 *
 * function gamespy_page:LoadingComplete(load_result, descr)
 *     self.gs_login_mb_cancel:HideDialog()
 *     self.gs_login_mb_result:InitMessageBox("message_box_gs_result")
 *     if(load_result == true) then
 *        local tmp_unick = self.owner.gs_profile:unique_nick()
 *        local hello_text = game.translate_string("ui_mp_gamespy_loading_rewards_hello").." "..tmp_unick.."!";
 *        if (tmp_unick == "@unregistered") then
 *            hello_text = game.translate_string("mp_gp_unique_nick_not_registred")
 *        end
 *        if (tmp_unick == "@expired") then
 *            hello_text = game.translate_string("mp_gp_unique_nick_has_expired")
 *        end
 *        self.gs_login_mb_result:SetText(hello_text)
 *
 *     else
 *        self.gs_login_mb_result:SetText(descr)
 *     end
 *     self.gs_login_mb_result:ShowDialog(true)
 * end
 *
 *
 * -- //////////////////////////////////////////////////////////////////////////////
 * function gamespy_page:ChangeActiveEditBox()
 *     self.lp_email:CaptureFocus(false)
 *     self.lp_password:CaptureFocus(false)
 *     self.ca_email:CaptureFocus(false)
 *     self.ca_password:CaptureFocus(false)
 *     self.ca_confirm_password:CaptureFocus(false)
 *     self.ca_unique_nick:CaptureFocus(false)
 *
 *     if (self.active_page=="login_page") then
 *        self.lp_email:CaptureFocus(true)
 *    else
 *        self.ca_password:CaptureFocus(true)
 *    end
 * end
 *
 * function gamespy_page:OnEditCAEmailChanged()
 * printf("EmailChanged")
 *    local email = self.ca_email:GetText()
 *    if(email~="") then
 *        if(self.owner.acc_mgr:verify_email(email)) then
 *            self.gs_mb_create_vemail_cancel:InitMessageBox("message_box_gs_info")
 *            self.gs_mb_create_vemail_cancel:SetText("ui_mp_gamespy_verify_email")
 *            self.gs_mb_create_vemail_cancel:ShowDialog(true)
 *            self.owner.acc_mgr:search_for_email(self.ca_email:GetText(), found_email_cb(self, self.OnEmailSearchComplete))
 *        else
 *            self.ca_st_email:InitTexture("ui_inGame2_lamp_RED")
 *            self.ca_error:SetText(game.translate_string(self.owner.acc_mgr:get_verify_error_descr()))
 *        end
 *    end
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:OnEditCAPasswordChanged()
 * printf("PasswordChanged")
 *    local pass = self.ca_password:GetText()
 *
 *     if(self.owner.acc_mgr:verify_password(pass)) then
 *         self.ca_st_password:InitTexture("ui_inGame2_lamp_GREEN")
 *         self.ca_error:SetText("")
 *     else
 *         self.ca_st_password:InitTexture("ui_inGame2_lamp_RED")
 *         self.ca_error:SetText(game.translate_string(self.owner.acc_mgr:get_verify_error_descr()))
 *         self.ca_passwords_valid = false
 *     end
 *
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:OnEditCAConfirmPasswordChanged()
 * printf("ConfirmPasswordChanged")
 *    local pass = self.ca_password:GetText()
 *    local conf_pass = self.ca_confirm_password:GetText()
 *
 *    if(pass==conf_pass) then
 *         if(self.owner.acc_mgr:verify_password(pass)) then
 *             self.ca_st_confirm_password:InitTexture("ui_inGame2_lamp_GREEN")
 *             self.ca_error:SetText("")
 *             self.ca_passwords_valid = true
 *         else
 *             self.ca_st_confirm_password:InitTexture("ui_inGame2_lamp_RED")
 *             self.ca_error:SetText(game.translate_string(self.owner.acc_mgr:get_verify_error_descr()))
 *             self.ca_passwords_valid = false
 *         end
 *    else
 *         self.ca_st_confirm_password:InitTexture("ui_inGame2_lamp_RED")
 *         self.ca_error:SetText(game.translate_string("ui_mp_gamespy_verify_password_error1"))
 *         self.ca_passwords_valid = false
 *    end
 *
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:OnEditCAUniqueNickChanged()
 * printf("UniqueNickChanged")
 *    local nick = self.ca_unique_nick:GetText()
 *    if (self.owner.acc_mgr:verify_unique_nick(nick)) then
 *        self.gs_mb_create_vnick_cancel:InitMessageBox("message_box_gs_info")
 *         self.gs_mb_create_vnick_cancel:SetText("ui_mp_gamespy_suggesting_unique_name")
 *         self.gs_mb_create_vnick_cancel:ShowDialog(true)
 *        self.owner.acc_mgr:suggest_unique_nicks(nick, suggest_nicks_cb(self, self.OnNickSuggestionComplete))
 *        self.ca_combo_aval_unique_nick:Show(true);
 *        self.ca_combo_aval_unique_nick:ClearList()
 *    else
 *        self.ca_st_unique_nick:InitTexture("ui_inGame2_lamp_RED")
 *        self.ca_error:SetText(game.translate_string(self.owner.acc_mgr:get_verify_error_descr()))
 *    end
 * end
 *
 * function gamespy_page:TerminateVerifyEmail()
 *    self.owner.acc_mgr:stop_searching_email()
 *    self.ca_st_email:InitTexture("ui_inGame2_lamp_RED")
 *    self.ca_email_valid = false
 * end
 *
 * function gamespy_page:OnEmailSearchComplete(founded, descr)
 *    self.gs_mb_create_vemail_cancel:HideDialog()
 *    if (founded) then
 *        self.ca_st_email:InitTexture("ui_inGame2_lamp_RED")
 *        self.ca_error:SetText(game.translate_string("ui_mp_gamespy_email_already_exist"))
 *        self.ca_email_valid = false
 *    else
 *        self.ca_st_email:InitTexture("ui_inGame2_lamp_GREEN")
 *        self.ca_error:SetText("")
 *        self.ca_email_valid = true
 *    end
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:TerminateVerifyNick()
 *    self.owner.acc_mgr:stop_suggest_unique_nicks()
 *    self.ca_st_unique_nick:InitTexture("ui_inGame2_lamp_RED")
 *    self.ca_unique_nick_valid = false
 * end
 *
 * function gamespy_page:OnNickSuggestionComplete(tmp, descr)
 *     self.gs_mb_create_vnick_cancel:HideDialog()
 *     self.btn_create_acc:Enable(false)
 *    if(tmp>0) then
 *        local num = 1
 *        for i in (self.owner.acc_mgr:get_suggested_unicks()) do
 *            if(i==self.ca_unique_nick:GetText()) then
 *                self.ca_st_unique_nick:InitTexture("ui_inGame2_lamp_GREEN")
 *                self.ca_unique_nick_valid = true
 *                self.btn_create_acc:Enable(true)
 *                self.ca_combo_aval_unique_nick:Show(false)
 *                self:CheckAccCreationAbility()
 *                return
 *            end
 *            self.ca_combo_aval_unique_nick:AddItem(i, num)
 *            num = num + 1
 *        end
 *        local first_name = self.ca_combo_aval_unique_nick:GetTextOf(0)
 *        self.ca_combo_aval_unique_nick:SetText(first_name)
 *         self.ca_st_unique_nick:InitTexture("ui_inGame2_lamp_RED")
 *         self.gs_message_box:InitMessageBox("message_box_gs_result")
 *         self.gs_message_box:SetText("ui_mp_gamespy_verify_nickname_error1")
 *         self.gs_message_box:ShowDialog(true)
 *         self.ca_unique_nick_valid = false
 *    else
 *         self.ca_st_unique_nick:InitTexture("ui_inGame2_lamp_RED")
 *         self.gs_message_box:InitMessageBox("message_box_gs_result")
 *         self.gs_message_box:SetText(descr)
 *         self.gs_message_box:ShowDialog(true)
 *         self.ca_unique_nick_valid = false
 *    end
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:OnUniqueNickSelect()
 *    self.ca_unique_nick:SetText(self.ca_combo_aval_unique_nick:GetText())
 *    self:OnEditCAUniqueNickChanged()
 *    self:CheckAccCreationAbility()
 * end
 *
 * function gamespy_page:AccountCreationResult(tmp, descr)
 *     self.gs_message_box:HideDialog()
 *    if (descr=="") then
 *         self.gs_create_mb_result:InitMessageBox("message_box_gs_result")
 *         self.gs_create_mb_result:SetText("ui_mp_gamespy_profile_created")
 *         self.gs_create_mb_result:ShowDialog(true)
 *    else
 *         self.gs_message_box:InitMessageBox("message_box_gs_result")
 *         self.gs_message_box:SetText(descr)
 *         self.gs_message_box:ShowDialog(true)
 *    end
 * end
 */
