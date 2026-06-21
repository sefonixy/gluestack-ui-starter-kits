import { useMemo } from 'react';
import { config, extendThemeConfig } from './config';
import { View } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
export function GluestackUIProvider({ mode = 'light', customTheme, ...props }) {
    const currentConfig = useMemo(() => {
        if (customTheme) {
            try {
                return extendThemeConfig(customTheme);
            }
            catch (e) {
                console.error("Error extending Gluestack theme:", e);
            }
        }
        return config;
    }, [customTheme]);
    return (<View style={[
            currentConfig[mode],
            { flex: 1, height: '100%', width: '100%' },
            // @ts-ignore
            props.style,
        ]}>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>);
}
