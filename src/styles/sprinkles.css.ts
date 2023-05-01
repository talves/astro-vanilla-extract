import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "@/styles/themes.css";
import { theme, Colors } from "@/styles/theme-default";

const palette = vars.colors;
import { fontFamily, fontWeight, lineHeight } from "@/styles/typography.css";
import { space, position, height, width } from "@/styles/size.css";
import { borderSize, borderRadius, boxShadow } from "@/styles/border.css";
import { style } from "@vanilla-extract/css";

const mediaQuerySM = `screen and (min-width: ${theme.screens.sm})`;
const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": `screen and (min-width: ${theme.screens.md})` },
    lg: { "@media": `screen and (min-width: ${theme.screens.lg})` },
    xl: { "@media": `screen and (min-width: ${theme.screens.xl})` },
    "2xl": { "@media": `screen and (min-width: ${theme.screens["2xl"]})` },
  },
  defaultCondition: "default",
  properties: {
    display: ["none", "flex", "block", "inline", "inline-flex"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    flex: {
      "1": "1 1 0%",
      auto: "1 1 0%",
      initial: "1 1 0%",
      none: "none",
    },
    flexWrap: ["wrap", "wrap-reverse", "nowrap"],
    position: ["static", "fixed", "absolute", "relative", "sticky"],
    objectPosition: { ...theme.objectPosition },
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingBlock: space,
    marginTop: { auto: "auto", ...space },
    marginBottom: { auto: "auto", ...space },
    marginLeft: { auto: "auto", ...space },
    marginRight: { auto: "auto", ...space },
    gap: space,
    width: { ...width({ theme }) },
    height: { ...height },
    top: { ...position },
    left: { ...position },
    bottom: { ...position },
    right: { ...position },
    objectFit: ["contain", "cover", "fill", "none", "scale-down"],
    fontSize: vars.fontSize,
    lineHeight: vars.fontSizeLineHeight,
    maxWidth: vars.maxWidth,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
    inset: ["top", "left", "right", "bottom"],
    insetX: ["left", "right"],
    insetY: ["top", "bottom"],
    text: ["fontSize", "lineHeight"],
  },
});

const allColors: Colors = vars.colors;

const systemProperties = defineProperties({
  // conditions: {
  //   lightMode: {},
  //   darkMode: { "@media": "(prefers-color-scheme: dark)" },
  // },
  // defaultCondition: "lightMode",
  properties: {
    color: vars.colors,
    backgroundColor: allColors,
    borderColor: allColors,
    fontFamily: fontFamily,
    // fontSize: vars.fontSize,
    fontWeight: fontWeight,
    // lineHeight: lineHeight,
    borderRadius: borderRadius,
    borderTopWidth: borderSize,
    borderLeftWidth: borderSize,
    borderBottomWidth: borderSize,
    borderRightWidth: borderSize,
    borderWidth: borderSize,
    boxShadow: boxShadow,
    flexShrink: ["0", "1"],
  },
});

export const sprinklesStyle = createSprinkles(
  responsiveProperties,
  systemProperties
);

export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
});

export const clickable = style({
  ":hover": {
    cursor: "pointer",
  },
});

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinklesStyle>[0];
