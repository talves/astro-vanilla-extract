import { createTheme, createThemeContract, style } from "@vanilla-extract/css";
import { theme, flatten, Colors } from "@/styles/theme-default";
import colors, { hexToRgb } from "@/styles/colors.css";

export const vars = createThemeContract({
  colors: {
    ...colors,
  } as Colors,
  boxShadow: {
    lowElevation: "",
    ...theme.boxShadow,
  },
  font: {
    body: ``,
  },
  fontFamily: {
    heading: ``,
    subheading: ``,
    body: ``,
  },
  fontSize: theme.fontSize,
  fontSizeLineHeight: {
    ...flatten(theme.fontSizeLineHeight),
  },
  fontWeight: { ...flatten(theme.fontWeight) },
  lineHeight: flatten(theme.lineHeight),
  fontStyle: { italic: "italic", "not-italic": "normal" },
  letterSpacing: flatten(theme.letterSpacing),
  maxHeight: { ...theme.maxHeight(theme.spacing) },
  maxWidth: { ...theme.maxWidth(theme.screens) },
  space: theme.spacing,
  radii: {
    sm: ``,
    md: ``,
    full: ``,
  },
  widths: {
    maxWidthText: ``,
    maxWidth3XL: ``,
  },
  borderRadius: flatten(theme.borderRadius),
});

const fallbackSansFonts = theme.fontFamily.sans?.toString() || "";

const commonVars = {
  font: {
    body: `${fallbackSansFonts}`,
  },
  fontFamily: {
    heading: `'Work Sans', ${fallbackSansFonts}`,
    subheading: `'Roboto Slab', ${fallbackSansFonts}`,
    body: `'Source Sans Pro', ${fallbackSansFonts}`,
  },
  widths: {
    maxWidthText: "38rem",
    maxWidth3XL: "48rem",
  },
  space: {
    ...theme.spacing,
  },
  fontSize: {
    ...theme.fontSize,
  },
  fontSizeLineHeight: {
    ...theme.fontSizeLineHeight,
  },
  fontWeight: { ...theme.fontWeight },
  lineHeight: { ...theme.lineHeight },
  letterSpacing: { ...theme.letterSpacing },
  fontStyle: { italic: "italic", "not-italic": "normal" },
  maxHeight: { ...theme.maxHeight(theme.spacing) },
  maxWidth: { ...theme.maxWidth(theme.screens) },
  radii: {
    sm: `0.2rem`,
    md: `0.4rem`,
    full: `100%`,
  },
  borderRadius: theme.borderRadius,
};

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

const lightShadowRGB = hexToRgb(colors["slate-400"]);

export const lightThemeClass = createTheme(vars, {
  colors: {
    ...colors,
    primary: colors["indigo-900"],
    secondary: colors["orange-500"],
    alternative: colors["sky-500"],
    text: colors["stone-800"],
    surface: colors["slate-50"],
    surfaceAlt: colors["slate-200"],
    body: colors["gray-700"],
    background: colors["slate-200"],
    link: colors["blue-800"],
    linkHover: colors["blue-600"],
  },
  boxShadow: {
    ...theme.boxShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.6px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34), -1.7px 1.7px 2.7px -1.2px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34), -4px 4px 6.4px -2.5px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34)`,
  },
  ...commonVars,
});

const darkShadowRGB = hexToRgb(colors["stone-800"]);

export const darkThemeClass = createTheme(vars, {
  colors: {
    ...colors,
    primary: colors["slate-300"],
    secondary: colors["stone-800"],
    alternative: colors["orange-500"],
    text: colors["slate-200"],
    surface: colors["stone-800"],
    surfaceAlt: colors["stone-700"],
    body: colors["gray-300"],
    background: colors["stone-700"],
    link: colors["blue-200"],
    linkHover: colors["blue-400"],
  },
  boxShadow: {
    ...theme.boxShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.4px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.48), -1.5px 1.5px 2.1px -1.7px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.39), -4px 4px 5.5px -3.5px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.3)`,
  },
  ...commonVars,
});
