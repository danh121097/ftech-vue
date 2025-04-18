import type { VueClassProp, VueStyleProp } from 'quasar';
import type { Component } from 'vue';

export declare interface NotifyOtp {
  /**
   * Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')
   */
  type?: string;
  /**
   * Color name for component from the Quasar Color Palette
   */
  color?: string;
  /**
   * Color name for component from the Quasar Color Palette
   */
  textColor?: string;
  /**
   * The content of your message
   */
  message?: string;
  /**
   * The content of your optional caption
   */
  caption?: string;
  /**
   * Render message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
   */
  html?: boolean;
  /**
   * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
   */
  icon?: string;
  /**
   * Color name for component from the Quasar Color Palette
   */
  iconColor?: string;
  /**
   * Size in CSS units, including unit name
   */
  iconSize?: string;
  /**
   * URL to an avatar/image; Suggestion: public folder
   */
  avatar?: string;
  /**
   * Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown
   */
  spinner?: boolean | Component;
  /**
   * Color name for component from the Quasar Color Palette
   */
  spinnerColor?: string;
  /**
   * Size in CSS units, including unit name
   */
  spinnerSize?: string;
  /**
   * Window side/corner to stick to
   * Default value: bottom
   */
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'center';
  /**
   * Override the auto generated group with custom one; Grouped notifications cannot be updated; String or number value inform this is part of a specific group, regardless of its options; When a new notification is triggered with same group name, it replaces the old one and shows a badge with how many times the notification was triggered
   * Default value: (message + caption + multiline + actions labels + position)
   */
  group?: boolean | string | number;
  /**
   * Color name for the badge from the Quasar Color Palette
   */
  badgeColor?: string;
  /**
   * Color name for the badge text from the Quasar Color Palette
   */
  badgeTextColor?: string;
  /**
   * Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left
   * Default value: (top-left/top-right)
   */
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * Style definitions to be attributed to the badge
   */
  badgeStyle?: VueStyleProp;
  /**
   * Class definitions to be attributed to the badge
   */
  badgeClass?: VueClassProp;
  /**
   * Show progress bar to detail when notification will disappear automatically (unless timeout is 0)
   */
  progress?: boolean;
  /**
   * Class definitions to be attributed to the progress bar
   */
  progressClass?: VueClassProp;
  /**
   * Add CSS class(es) to the notification for easier customization
   */
  classes?: string;
  /**
   * Key-value for attributes to be set on the notification
   */
  attrs?: unknown;
  /**
   * Amount of time to display (in milliseconds)
   * Default value: 5000
   */
  timeout?: number;
  /**
   * Notification actions (buttons); If a 'handler' is specified or not, clicking/tapping on the button will also close the notification; Also check 'closeBtn' convenience prop
   */
  actions?: unknown[];
  /**
   * Function to call when notification gets dismissed
   */
  onDismiss?: () => void;
  /**
   * Convenience way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label accordding to the current Quasar language
   */
  closeBtn?: boolean | string;
  /**
   * Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default
   */
  multiLine?: boolean;
  /**
   * Ignore the default configuration (set by setDefaults()) for this instance only
   */
  ignoreDefaults?: boolean;
}
