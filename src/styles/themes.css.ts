import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { theme } from "./theme";
import colors from "@/styles/colors";

// const colours = {
//   // webOrange: "hsl(39 100% 50%)",
//   // azureRadiance: "hsl(202 100% 50%)",
//   // astronaut: "hsl(240 46% 31%)",
//   // shark: "hsl(216 7% 15%)",
//   // sharkTint10: "hsl(216 4% 23%)",
//   // sharkShadow: "216 7% 11%",
//   // solitude: "hsl(206 100% 96%)",
//   // solitudeTint70: "hsl(206 100% 99%)",
//   // solitudeShade10: "hsl(208 28% 86%)",
//   // solitudeShadow: "209 25% 60%",
//   ...colors,
// };

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
    ...colors,
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

const fallbackSansFonts = theme.fontFamily.sans.toString();

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

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

const lightShadowRGB = hexToRgb(colors.slate["400"]);

export const lightThemeClass = createTheme(vars, {
  colors: {
    primary: colors.indigo["900"],
    secondary: colors.orange["500"],
    alternative: colors.sky["500"],
    text: colors.stone["800"],
    surface: colors.slate["50"],
    surfaceAlt: colors.slate["200"],
    body: colors.gray["700"],
    background: colors.gray["100"],
    link: colors.blue["800"],
    linkHover: colors.blue["600"],
    ...colors,
  },
  boxShadow: {
    ...commonBackShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.6px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34), -1.7px 1.7px 2.7px -1.2px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34), -4px 4px 6.4px -2.5px rgb(${lightShadowRGB.r} ${lightShadowRGB.g} ${lightShadowRGB.b} / 0.34)`,
  },
  ...commonVars,
});

const darkShadowRGB = hexToRgb(colors.stone["800"]);

export const darkThemeClass = createTheme(vars, {
  colors: {
    primary: colors.slate["300"],
    secondary: colors.stone["800"],
    alternative: colors.orange["500"],
    text: colors.slate["200"],
    surface: colors.stone["800"],
    surfaceAlt: colors.stone["700"],
    body: colors.gray["300"],
    background: colors.gray["800"],
    link: colors.blue["200"],
    linkHover: colors.blue["400"],
    ...colors,
  },
  boxShadow: {
    ...commonBackShadow,
    // CREDIT: https://www.joshwcomeau.com/shadow-palette/
    lowElevation: `-1px 1px 1.4px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.48), -1.5px 1.5px 2.1px -1.7px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.39), -4px 4px 5.5px -3.5px rgb(${darkShadowRGB.r} ${darkShadowRGB.g} ${darkShadowRGB.b} / 0.3)`,
  },
  ...commonVars,
});
