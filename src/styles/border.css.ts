import { theme } from "@/styles/theme-default";
import colors, { hexToHsl } from "@/styles/colors.css";

export const borderSize = {
  "border-size-1": "1px",
  "border-size-2": "2px",
  "border-size-3": "5px",
  "border-size-4": "10px",
  "border-size-5": "25px",
};

export const borderSpacing = theme.borderSpacing;

export const borderRadius = theme.borderRadius;

const shadowRGB = hexToHsl(theme.colors({ colors })["slate-400"]);
const shadowColor = `${shadowRGB.h} ${shadowRGB.s}% ${shadowRGB.l}% `;
const shadowStrength = "100%";

const extraShadow = {
  "shadow-1": `0 1px 2px -1px hsl(${shadowColor} / calc(${shadowStrength} + 9%))`,
  "shadow-2": `0 3px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 7px 14px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%))`,
  "shadow-3": `0 -1px 3px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)), 0 1px 2px -5px hsl(${shadowColor} / calc(${shadowStrength} + 2%)), 0 2px 5px -5px hsl(${shadowColor} / calc(${shadowStrength} + 4%)), 0 4px 12px -5px hsl(${shadowColor} / calc(${shadowStrength} + 5%)), 0 12px 15px -5px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
  "shadow-4": `0 -2px 5px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)), 0 1px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 2px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)), 0 9px 9px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)), 0 16px 16px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%))`,
  "shadow-5": `0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)), 0 2px 1px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 5px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 10px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)), 0 20px 20px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)), 0 40px 40px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
  "shadow-6": `0 -1px 2px 0 hsl(${shadowColor} / calc(${shadowStrength} + 2%)), 0 3px 2px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 7px 5px -2px hsl(${shadowColor} / calc(${shadowStrength} + 3%)), 0 12px 10px -2px hsl(${shadowColor} / calc(${shadowStrength} + 4%)), 0 22px 18px -2px hsl(${shadowColor} / calc(${shadowStrength} + 5%)), 0 41px 33px -2px hsl(${shadowColor} / calc(${shadowStrength} + 6%)), 0 100px 80px -2px hsl(${shadowColor} / calc(${shadowStrength} + 7%))`,
};
export const boxShadow = { ...theme.boxShadow, ...extraShadow };
