import React from 'react';
import { Platform } from 'react-native';
import { MenuView } from '@react-native-menu/menu';
import type { NativeMenuProps, MenuAction } from './types';

// NativeMenu wrapper for native iOS/Android system menus (UIMenu / PopupMenu)
function mapActions(actions: MenuAction[]): any[] {
  return actions.map((action) => ({
    id: action.id,
    title: action.title,
    titleColor: action.titleColor,
    subtitle: action.subtitle,
    image: action.icon
      ? Platform.select({ ios: action.icon, android: action.icon })
      : undefined,
    imageColor: action.imageColor,
    attributes: {
      ...(action.destructive ? { destructive: true } : {}),
      ...(action.disabled ? { disabled: true } : {}),
    },
    state: action.state || (action.selected ? 'on' : action.selected === false ? 'off' : undefined),
    subactions: action.subactions ? mapActions(action.subactions) : undefined,
  }));
}

export function NativeMenu({
  title,
  actions,
  onAction,
  children,
}: NativeMenuProps) {
  return (
    <MenuView
      title={title}
      onPressAction={({ nativeEvent }) => {
        onAction(nativeEvent.event);
      }}
      actions={mapActions(actions)}
      shouldOpenOnLongPress={false}
    >
      {children}
    </MenuView>
  );
}

export type { NativeMenuProps, MenuAction } from './types';
