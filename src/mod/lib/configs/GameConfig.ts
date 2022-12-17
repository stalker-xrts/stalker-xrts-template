/**
 * Global-level configuration for configs/scripts/forms.
 * Used to define some dev flags/features.
 */
export const gameConfig = {
  DEBUG: {
    /**
     * Enable debugging log modules.
     */
    IS_LOG_ENABLED: true,
    /**
     * Is resolving debug enabled.
     * Printing messages each time logger instance is created.
     * Based on DEBUG_LOG setting.
     */
    IS_RESOLVE_LOG_ENABLED: true,
    /**
     * Global prefix for lua debug logger in project.
     */
    GLOBAL_LOG_PREFIX: "[XRTS-DL]"
  },
  /**
   * Whether game intros are enabled.
   */
  ARE_INTRO_VIDEOS_ENABLED: false
};
