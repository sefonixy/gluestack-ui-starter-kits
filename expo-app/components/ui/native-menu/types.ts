// Types for NativeMenu component

export interface MenuAction {
  /** Unique identifier returned in onAction callback */
  id: string;
  /** Display label */
  title: string;
  /** Custom text color (hex, rgb, etc.) */
  titleColor?: string;
  /** Custom icon color (hex, rgb, etc.) */
  imageColor?: string;
  /** Secondary text (iOS 15+, ignored on Android/web) */
  subtitle?: string;
  /**
   * Platform-specific icon identifier:
   * - iOS: SF Symbol name (e.g. "trash", "square.and.arrow.up", "pencil")
   * - Android: drawable resource name (e.g. "ic_menu_delete")
   * - Web: ignored (web uses gluestack Icon components via iconComponent)
   */
  icon?: string;
  /** Optional React component to render as icon on web */
  iconComponent?: React.ComponentType<any>;
  /** Renders the item in red (destructive) styling */
  destructive?: boolean;
  /** Greyed-out, non-interactive */
  disabled?: boolean;
  /** Shows a checkmark (native) or check icon (web) */
  selected?: boolean;
  /** Explicit checkmark state: 'on' (checked), 'off' (unchecked), or 'mixed' (dash) */
  state?: 'on' | 'off' | 'mixed';
  /** Nested submenu actions */
  subactions?: MenuAction[];
}

export interface NativeMenuProps {
  /** Menu title shown as header on iOS UIMenu */
  title?: string;
  /** Array of menu actions */
  actions: MenuAction[];
  /** Callback when an action is selected */
  onAction: (actionId: string) => void;
  /** The element that triggers the menu on press */
  children: React.ReactNode;
}
