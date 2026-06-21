"use client";

import React, { useMemo } from "react";
import { createIcon } from "@gluestack-ui/icon";

/**
 * Checkpoint V2.0 — Domain-Specific Icon Set
 * 
 * These icons match the Figma Design System → Page 6 "Tabler Icons"
 * Each icon follows the same stroke-based, 24x24 viewBox pattern
 * as the built-in gluestack icons.
 * 
 * Usage:
 *   import { ScenarioIcon, HintIcon } from "./checkpoint-icons";
 *   <Icon as={ScenarioIcon} size="lg" className="text-primary-500" />
 */

// Minimal SVG root for web (matches gluestack pattern)
const Svg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ style, className, ...props }, ref) => {
    return <svg ref={ref} {...props} className={className} />;
  }
);
Svg.displayName = "Svg";

/* ─── Scenario (clipboard with list) ─── */
export const ScenarioIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H11C10.4696 7 9.96086 6.78929 9.58579 6.41421C9.21071 6.03914 9 5.53043 9 5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 16H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
ScenarioIcon.displayName = "ScenarioIcon";

/* ─── Desc (document with lines) ─── */
export const DescIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2V8H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 13H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
DescIcon.displayName = "DescIcon";

/* ─── Hint (lightbulb/settings gear) ─── */
export const HintIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M9 18H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22H14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C8.68629 2 6 4.68629 6 8C6 10.22 7.21 12.16 9 13.2V15C9 15.5523 9.44772 16 10 16H14C14.5523 16 15 15.5523 15 15V13.2C16.79 12.16 18 10.22 18 8C18 4.68629 15.3137 2 12 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
HintIcon.displayName = "HintIcon";

/* ─── Calc (calculator) ─── */
export const CalcIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 6H16V10H8V6Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14H8.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14H16.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 18H8.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 18H16.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
CalcIcon.displayName = "CalcIcon";

/* ─── Ruler ─── */
export const RulerIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H5C3.89543 11 3 10.1046 3 9V5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 3V7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 3V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3V7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 3V7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
RulerIcon.displayName = "RulerIcon";

/* ─── Protractor (arc with angle lines) ─── */
export const ProtractorIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 12L3 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L21 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L5.63604 5.63604" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12L18.364 5.63604" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
ProtractorIcon.displayName = "ProtractorIcon";

/* ─── Media (image/photo) ─── */
export const MediaIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15L16 10L5 21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
MediaIcon.displayName = "MediaIcon";

/* ─── Reset (trash/bin) ─── */
export const ResetIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path d="M3 6H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 11V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
ResetIcon.displayName = "ResetIcon";

/* ─── Review (bookmark/flag) ─── */
export const ReviewIcon = createIcon({
  Root: Svg,
  viewBox: "0 0 24 24",
  path: (
    <>
      <path
        d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
ReviewIcon.displayName = "ReviewIcon";
