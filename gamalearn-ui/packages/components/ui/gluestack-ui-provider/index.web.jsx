'use client';
import { useMemo, useEffect } from 'react';
import { config, extendThemeConfig } from './config';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { setFlushStyles } from '@gluestack-ui/nativewind-utils/flush';
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
    const stringcssvars = useMemo(() => {
        const targetConfig = currentConfig[mode] || {};
        return Object.keys(targetConfig).reduce((acc, cur) => {
            acc += `${cur}:${targetConfig[cur]};`;
            return acc;
        }, '');
    }, [currentConfig, mode]);
    setFlushStyles(`:root {${stringcssvars}} `);
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const head = document.head || document.getElementsByTagName('head')[0];
            if (!head)
                return;
            let styleEl = document.getElementById('gluestack-theme-vars');
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'gluestack-theme-vars';
                head.appendChild(styleEl);
            }
            styleEl.innerHTML = `:root {${stringcssvars}} `;
        }
    }, [stringcssvars]);
    return (<OverlayProvider>
      <ToastProvider>{props.children}</ToastProvider>
    </OverlayProvider>);
}
