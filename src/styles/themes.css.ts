import { createTheme, createThemeContract } from "@vanilla-extract/css";

const colours = {
  webOrange: "hsl(39 100% 50%)",
  azureRadiance: "hsl(202 100% 50%)",
  astronaut: "hsl(240 46% 31%)",
  shark: "hsl(216 7% 15%)",
  sharkTint10: "hsl(216 4% 23%)",
  sharkShadow: "216 7% 11%",
  solitude: "hsl(206 100% 96%)",
  solitudeTint70: "hsl(206 100% 99%)",
  solitudeShade10: "hsl(208 28% 86%)",
  solitudeShadow: "209 25% 60%",
  black: `#000`,
  white: `#fff`,
  gray50: `#f9fafb`,
  gray100: `#f3f4f6`,
  gray200: `#e5e7eb`,
  gray300: `#d1d5db`,
  gray400: `#9ca3af`,
  gray500: `#6b7280`,
  gray600: `#4b5563`,
  gray700: `#374151`,
  gray800: `#1f2937`,
  gray900: `#111827`,
  red50: `#fef2f2`,
  red100: `#fee2e2`,
  red200: `#fecaca`,
  red300: `#fca5a5`,
  red400: `#f87171`,
  red500: `#ef4444`,
  red600: `#dc2626`,
  red700: `#b91c1c`,
  red800: `#991b1b`,
  red900: `#7f1d1d`,
  green50: `#f0fdf4`,
  green100: `#dcfce7`,
  green200: `#bbf7d0`,
  green300: `#86efac`,
  green400: `#4ade80`,
  green500: `#22c55e`,
  green600: `#16a34a`,
  green700: `#15803d`,
  green800: `#166534`,
  green900: `#14532d`,
  blue50: `#eff6ff`,
  blue100: `#dbeafe`,
  blue200: `#bfdbfe`,
  blue300: `#93c5fd`,
  blue400: `#60a5fa`,
  blue500: `#3b82f6`,
  blue600: `#2563eb`,
  blue700: `#1d4ed8`,
  blue800: `#1e40af`,
  blue900: `#1e3a8a`,
};

export const vars = createThemeContract({
  colors: {
    primary: ``,
    secondary: ``,
    alternative: ``,
    body: ``,
    text: ``,
    surface: ``,
    surfaceAlt: ``,
    background: ``,
    link: ``,
    linkHover: ``,
    ...colours,
  },
  boxShadow: {
    lowElevation: "",
    sm: ``,
    md: ``,
    lg: ``,
  },
  font: {
    body: ``,
  },
  fontFamily: {
    heading: ``,
    subheading: ``,
    body: ``,
  },
  fontSize: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  fontWeight: {
    normal: ``,
    bold: ``,
  },
  lineHeight: {
    normal: ``,
    relaxed: ``,
  },
  space: {
    px: ``,
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
    zero: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    full: ``,
  },
  widths: {
    maxWidthText: ``,
    maxWidth3XL: ``,
  },
});

const commonBackShadow = {
  sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
  md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
  lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,
};

export const sans = [
  "ui-sans-serif",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];
export const serif = [
  "ui-serif",
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];
export const mono = [
  "ui-monospace",
  "SFMono-Regular",
  "Menlo",
  "Monaco",
  "Consolas",
  '"Liberation Mono"',
  '"Courier New"',
  "monospace",
];
const fallbackSansFonts = sans.toString();

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
    px: `1px`,
    xs: `0.25rem`,
    sm: `0.5rem`,
    md: `1rem`,
    lg: `1.5rem`,
    xl: `2.5rem`,
    zero: `0`,
  },
  fontSize: {
    xs: `0.8rem`,
    sm: `0.875rem`,
    md: `1rem`,
    lg: `1.25rem`,
    xl: `1.5rem`,
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
  lineHeight: {
    normal: "1.5",
    relaxed: "1.75",
  },
  radii: {
    sm: `0.2rem`,
    md: `0.4rem`,
    full: `100%`,
  },
};

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: colours.astronaut,
    secondary: colours.webOrange,
    alternative: colours.azureRadiance,
    text: colours.shark,
    surface: colours.solitudeTint70,
    surfaceAlt: colours.solitude,
    body: colours.gray700,
    background: colours.gray100,
    link: colours.blue800,
    linkHover: colours.blue600,
    ...colours,
  },
  boxShadow: {
    ...commonBackShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.6px hsl(${colours.solitudeShadow} / 0.34), -1.7px 1.7px 2.7px -1.2px hsl(${colours.solitudeShadow} / 0.34), -4px 4px 6.4px -2.5px hsl(${colours.solitudeShadow} / 0.34)`,
  },
  ...commonVars,
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: colours.solitudeShade10,
    secondary: colours.shark,
    alternative: colours.webOrange,
    text: colours.solitude,
    surface: colours.shark,
    surfaceAlt: colours.sharkTint10,
    body: colours.gray300,
    background: colours.gray800,
    link: colours.blue200,
    linkHover: colours.blue400,
    ...colours,
  },
  boxShadow: {
    ...commonBackShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.4px hsl(${colours.sharkShadow} / 0.48), -1.5px 1.5px 2.1px -1.7px hsl(${colours.sharkShadow} / 0.39), -4px 4px 5.5px -3.5px hsl(${colours.sharkShadow} / 0.3)`,
  },
  ...commonVars,
});
