import { DebugLogger } from "@/mod/scripts/debug_tools/DebugLogger";

const base: string = "menu/SaveDialog.component.xml";
const log: DebugLogger = new DebugLogger("SaveDialog");

interface ISaveItem extends XR_CUIListBoxItem {
  fn: XR_CUITextWnd;
}

const SaveItem = declare_xr_class("SaveItem", CUIListBoxItem, {
  __init(height: number): void {
    xr_class_super(height);

    this.SetTextColor(GetARGB(255, 170, 170, 170));
    this.fn = this.GetTextItem();
    this.fn.SetFont(GetFontLetterica18Russian());
    this.fn.SetEllipsis(true);
  },
  __finalize(): void {}
} as ISaveItem);

export interface ISaveDialog extends XR_CUIScriptWnd {
  InitControls(): void;
  InitCallBacks(): void;
  FillList(): void;
  OnListItemClicked(): void;
  OnMsgYes(): void;
  OnButton_del_clicked(): void;
  delete_selected_file(): void;
  OnButton_ok_clicked(): void;
  OnButton_cancel_clicked(): void;
  AddItemToList(): void;
  SaveFile(): void;
}

export const SaveDialog: ISaveDialog = declare_xr_class("SaveDialog", CUIScriptWnd, {
  __init(): void {
    xr_class_super();

    log.info("Init");

    this.InitControls();
    this.InitCallBacks();
    this.FillList();
  },
  __finalize(): void {},
  FillList(): void {
    /**
     * function save_dialog:FillList()
     *    self.list_box:RemoveAll()
     *    local flist = getFS():file_list_open_ex("$game_saves$",FS.FS_ListFiles,"*"..saved_game_extension)
     *    local f_cnt = flist:Size()
     *
     *    flist:Sort(FS.FS_sort_by_modif_down)
     *
     *    for    it=0, f_cnt-1    do
     *        local file        =    flist:GetAt(it)
     *        local file_name = string.sub(file:NameFull(), 0, (string.len(file:NameFull()) - string.len(saved_game_extension)))
     *        local date_time = "[" .. file:ModifDigitOnly() .. "]"
     *        --menu_item =  ..
     *        self:AddItemToList(file_name, date_time)
     *    end
     * end
     */
  },
  InitControls(): void {
    /**
     * function save_dialog:InitControls()
     *    self:SetWndRect(Frect():set(0,0,1024,768))
     *
     *    self.list_file_font = GetFontMedium()
     *    self.list_date_font = GetFontMedium()
     *
     *    local xml = CScriptXmlInit()
     *    xml:ParseFile("ui_mm_save_dlg.xml")
     *
     *    local ctrl
     *
     *    xml:InitWindow                    ("background", 0, self)
     *
     *    ctrl                            = CUIWindow()
     *    xml:InitWindow                    ("file_item:main", 0, ctrl)
     *
     *    self.file_item_main_sz            = vector2():set(ctrl:GetWidth(),ctrl:GetHeight())
     *
     *    xml:InitWindow                    ("file_item:fn",0,ctrl)
     *    self.file_item_fn_sz            = vector2():set(ctrl:GetWidth(),ctrl:GetHeight())
     *
     *    xml:InitWindow                    ("file_item:fd",0,ctrl)
     *    self.file_item_fd_sz            = vector2():set(ctrl:GetWidth(),ctrl:GetHeight())
     *
     *
     *    self.form = xml:InitStatic        ("form", self)
     *
     *    xml:InitTextWnd                    ("form:caption", self.form)
     *
     *    self.editbox                    = xml:InitEditBox("form:edit", self.form)
     *    self:Register                    (self.editbox, "edit_filename")
     *
     *    xml:InitFrame                    ("form:list_frame", self.form)
     *
     *    self.list_box = xml:InitListBox    ("form:list", self.form)
     *    self.list_box:ShowSelectedItem    (true)
     *    self:Register                    (self.list_box, "list_window")
     *
     *    ctrl = xml:Init3tButton            ("form:btn_save", self.form)
     *    self:Register                    (ctrl, "button_ok")
     *
     *    ctrl = xml:Init3tButton            ("form:btn_delete",    self.form)
     *    self:Register                    (ctrl, "button_del")
     *
     *    ctrl = xml:Init3tButton            ("form:btn_cancel",    self.form)
     *    self:Register                    (ctrl, "button_cancel")
     *
     *    self.message_box                = CUIMessageBoxEx()
     *    self:Register                    (self.message_box,"message_box")
     *
     *    self.mbox_mode                    = 0
     * end
     */
  },
  InitCallBacks(): void {
    /**
     * function save_dialog:InitCallBacks()
     *     -- main frame buttons
     *    self:AddCallback("button_ok",     ui_events.BUTTON_CLICKED,            self.OnButton_ok_clicked,        self)
     *    self:AddCallback("button_cancel", ui_events.BUTTON_CLICKED,            self.OnButton_cancel_clicked,    self)
     *    self:AddCallback("button_del",      ui_events.BUTTON_CLICKED,             self.OnButton_del_clicked,    self)
     *
     *    self:AddCallback("message_box", ui_events.MESSAGE_BOX_YES_CLICKED,        self.OnMsgYes,             self)
     *    self:AddCallback("list_window", ui_events.LIST_ITEM_CLICKED,            self.OnListItemClicked,        self)
     * end
     */
  },

  OnListItemClicked(): void {
    /**
     *
     * function save_dialog:OnListItemClicked()
     *    if self.list_box:GetSize()==0 then return end
     *
     *    local item            = self.list_box:GetSelectedItem()
     *
     *    if item==nil then return end
     *
     *    local item_text            = item.fn:GetText()
     *    self.editbox:SetText    (item_text)
     * end
     */
  },
  OnMsgYes(): void {
    /**
     * function save_dialog:OnMsgYes()
     *    if self.mbox_mode == 1 then
     *        self:SaveFile(self.new_save)
     *
     *        self.owner:ShowDialog(true)
     *        self:HideDialog()
     *        self.owner:Show(true)
     *
     *    elseif self.mbox_mode == 2 then
     *        self:delete_selected_file()
     *    end
     * end
     */
  },
  OnButton_del_clicked(): void {
    /**
     * function save_dialog:OnButton_del_clicked()
     *    if self.list_box:GetSize()==0 then return end
     *
     *    local item    = self.list_box:GetSelectedItem()
     *    if item == nil then return end
     *
     *    self.mbox_mode = 2
     *    self.message_box:InitMessageBox("message_box_delete_file_name")
     *    self.message_box:ShowDialog(true)
     * end
     */
  },
  delete_selected_file(): void {
    /**
     * function save_dialog:delete_selected_file()
     *    if self.list_box:GetSize()==0 then return end
     *
     *    local index = self.list_box:GetSelectedIndex()
     *
     *    if index == -1 then return end
     *
     *    local item        = self.list_box:GetItemByIndex(index)
     *    local filename    = item.fn:GetText()
     *
     *    ui_load_dialog.delete_save_game(filename)
     *
     *    self.list_box:RemoveItem(item)
     *    self:OnListItemClicked()
     * end
     */
  },
  OnButton_ok_clicked(): void {
    /**
     *
     * function save_dialog:OnButton_ok_clicked()
     *    -- prepare message box
     *
     *    -- Get file name
     *    self.new_save        = self.editbox:GetText()
     *
     *    -- check for empty name
     *    if string.len(self.new_save) == 0 then
     *        self.mbox_mode = 0
     *        self.message_box:InitMessageBox("message_box_empty_file_name")
     *        self.message_box:ShowDialog(true)
     *        return
     *    end
     *
     *    -- check for match name
     *    local f = getFS()
     *    local flist = f:file_list_open("$game_saves$",FS.FS_ListFiles)
     *    local file_struct = f:exist("$game_saves$", self.new_save .. saved_game_extension )
     *
     *    if file_struct ~= nil then
     *        self.mbox_mode = 1
     *        self.message_box:InitMessageBox("message_box_file_already_exist")
     *        self.message_box:ShowDialog(true)
     *
     *        flist:Free()
     *        return
     *    end
     *    flist:Free()
     *    self:SaveFile(self.new_save)
     *
     *    self.owner:ShowDialog(true)
     *    self:HideDialog()
     *    self.owner:Show(true)
     * end
     */
  },
  OnButton_cancel_clicked(): void {
    /**
     * function save_dialog:OnButton_cancel_clicked()
     *    self.owner:ShowDialog(true)
     *    self:HideDialog()
     *    self.owner:Show(true)
     * end
     */
  },
  OnKeyboard(key: TXR_DIK_key, event: TXR_ui_event): boolean {
    CUIScriptWnd.OnKeyboard(this, key, event);

    const bind: number = dik_to_bind(key);

    if (bind === key_bindings.kQUIT) {
      this.OnButton_cancel_clicked();
    } else {
      if (key == DIK_keys.DIK_RETURN && event == ui_events.WINDOW_KEY_PRESSED) {
        this.OnButton_ok_clicked();
      }
    }

    return true;
  },
  AddItemToList(): void {
    /**
     * function save_dialog:AddItemToList(file_name, date_time)
     *    local _itm            = save_item(self.file_item_main_sz.y)
     *    _itm:SetWndSize        (self.file_item_main_sz)
     *
     *    _itm.fn:SetWndPos    (vector2():set(0,0))
     *    _itm.fn:SetWndSize    (self.file_item_fn_sz)
     *    _itm.fn:SetText        (file_name)
     *
     *    _itm.fage            = _itm:AddTextField(date_time, self.file_item_fd_sz.x)
     *    _itm.fage:SetFont    (GetFontLetterica16Russian())
     *    _itm.fage:SetWndPos    (vector2():set(self.file_item_fn_sz.x+4, 0))
     *
     *    self.list_box:AddExistingItem(_itm)
     * end
     */
  },
  SaveFile(filename: string): void {
    if (filename !== null) {
      const console: XR_CConsole = get_console();

      console.execute("save " + filename);
    }
  }
} as ISaveDialog);
