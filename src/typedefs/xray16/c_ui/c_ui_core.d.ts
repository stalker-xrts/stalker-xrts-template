export {};

declare global {
  /**
   *    C++ class COptionsManager {
   *     COptionsManager ();
   *
   *     function SendMessage2Group(string, string);
   *
   *     function UndoGroup(string);
   *
   *     function SaveBackupValues(string);
   *
   *     function IsGroupChanged(string);
   *
   *     function SaveValues(string);
   *
   *     function SetCurrentValues(string);
   *
   *     function NeedSystemRestart();
   *
   *     function NeedVidRestart();
   *
   *     function OptionsPostAccept();
   *
   *   };
   *
   *  @customConstructor COptionsManager
   */
  class XR_COptionsManager {
    public SendMessage2Group(group: string, message: string): void;

    public UndoGroup(group: string): void;

    public SaveBackupValues(group: string): void;

    public IsGroupChanged(group: string): boolean;

    public SaveValues(group: string): void;

    public SetCurrentValues(group: string): void;

    public NeedSystemRestart(): boolean;

    public NeedVidRestart(): boolean;

    public OptionsPostAccept(): void;

  }

  /**
   *   C++ class CMainMenu {
   *     function GetCDKey();
   *
   *     function GetAccountMngr();
   *
   *     function GetDemoInfo(string);
   *
   *     function GetPatchProgress();
   *
   *     function GetProfileStore();
   *
   *     function GetGSVer();
   *
   *     function CancelDownload();
   *
   *     function GetLoginMngr();
   *
   *     function ValidateCDKey();
   *
   *     function GetPlayerName();
   *
   *   };
   *
   *   @customConstructor CMainMenu
   */

  class XR_CMainMenu {
    public GetCDKey(): string;

    public GetAccountMngr(): XR_account_manager;

    public GetDemoInfo(fileName: string): unknown;

    public GetPatchProgress(): XR_Patch_Dawnload_Progress;

    public GetProfileStore(): XR_profile_store;

    public GetGSVer(): string;

    public CancelDownload(): void;

    public GetLoginMngr(): XR_login_manager;

    public ValidateCDKey(): boolean;

    public GetPlayerName(): string;
  }

  /**
   C++ class CUIGameCustom {
    function HidePdaMenu();

    function HideActorMenu();

    function AddDialogToRender(CUIWindow*);

    function RemoveDialogToRender(CUIWindow*);

    function show_messages();

    function GetCustomStatic(string);

    function AddCustomStatic(string, boolean);

    function hide_messages();

    function RemoveCustomStatic(string);

  };
   */
  // todo;

  /**
   *    C++ class profile {
   *     function unique_nick() const;
   *
   *     function online() const;
   *
   *   };
   */
  class XR_profile {
    public unique_nick(): unknown;

    public online(): boolean;
  }
}
