'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { CheckIcon, TrashIcon } from '@/components/ui/icon';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@/components/ui/menu';
import type { NativeMenuProps, MenuAction } from './types';

/**
 * NativeMenu — Web implementation
 *
 * Renders using gluestack-ui's popover-based Menu component.
 * Maps the declarative `actions` array into `<MenuItem>` children.
 */
export function NativeMenu({ title, actions, onAction, children }: NativeMenuProps) {
  const renderAction = (action: MenuAction) => {
    const isSelected = action.state === 'on' || (action.selected && action.state !== 'off');
    const isMixed = action.state === 'mixed';

    return (
      <MenuItem
        key={action.id}
        textValue={action.title}
        disabled={action.disabled}
        onPress={() => onAction(action.id)}
      >
        {/* Selection checkmark or mixed dash */}
        {(action.state !== undefined || action.selected !== undefined) && (
          <Box className="w-5 mr-2 items-center justify-center">
            {isSelected && (
              <Icon as={CheckIcon} size="sm" className="text-primary-600" />
            )}
            {isMixed && (
              <Text className="text-sm font-bold text-primary-600">-</Text>
            )}
          </Box>
        )}

        {/* Icon (web: use iconComponent if provided) */}
        {action.iconComponent && (
          <Icon
            as={action.iconComponent}
            size="sm"
            style={action.imageColor ? { color: action.imageColor } : undefined}
            className={`mr-3 ${
              action.destructive ? 'text-error-600' : 'text-typography-600'
            } ${action.disabled ? 'text-typography-400' : ''}`}
          />
        )}

        {/* Label */}
        <VStack>
          <MenuItemLabel
            style={action.titleColor ? { color: action.titleColor } : undefined}
            className={
              action.destructive
                ? 'text-error-600'
                : action.disabled
                ? 'text-typography-400'
                : undefined
            }
          >
            {action.title}
          </MenuItemLabel>
          {action.subtitle && (
            <Text className="text-xs text-typography-400">{action.subtitle}</Text>
          )}
        </VStack>
      </MenuItem>
    );
  };

  return (
    <Menu
      variant="glass"
      placement="bottom"
      offset={8}
      trigger={({ ...triggerProps }) =>
        React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<any>, triggerProps)
          : children
      }
    >
      {actions.map(renderAction)}
    </Menu>
  );
}

export type { NativeMenuProps, MenuAction } from './types';
