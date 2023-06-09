import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes.css";
import { sprinklesStyle } from "@/styles/sprinkles.css";

export const mainContainer = sprinklesStyle({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "transparent",
  height: "screen",
  // fontSize: {
  //   desktop: "4xl",
  //   mobile: "base",
  //   tablet: "2xl",
  // },
  text: {
    lg: "4xl",
    sm: "base",
    md: "2xl",
  },
  flex: "1",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  marginBlock: vars.space[0],
  color: vars.colors.text,
  maxWidth: "100%",
  alignItems: "center",
});

export const contentWrapper = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: vars.space["0.5"],
  paddingLeft: vars.space[5],
  paddingRight: vars.space[5],
  maxWidth: "100%",
  "@media": {
    "(min-width: 48rem)": {
      maxWidth: vars.widths.maxWidthText,
      paddingLeft: vars.space[0],
      paddingRight: vars.space[0],
    },
  },
});

export const wrapper = style({
  paddingBlock: vars.space[5],
  marginBlock: vars.space[8],
  backgroundColor: vars.colors.surface,
  boxShadow: vars.boxShadow.lowElevation,
  "@media": {
    "(min-width: 48rem)": {
      width: vars.widths.maxWidth3XL,
    },
  },
});

export const intro = style({
  color: vars.colors.primary,
  fontFamily: vars.fontFamily.subheading,
  fontSize: vars.fontSize["2xl"],
});

export const footer = style({
  selectors: {
    [`${wrapper} &`]: {
      fontSize: vars.fontSize.lg,
    },
  },
});
