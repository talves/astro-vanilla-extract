import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  marginBlock: vars.space.lg,
  backgroundColor: vars.colors.surfaceAlt,
  color: vars.colors.text,
  maxWidth: "100%",
});

export const wrapper = style({
  paddingBlock: vars.space.sm,
  marginBlock: vars.space.lg,
  backgroundColor: vars.colors.surface,
  boxShadow: vars.boxShadow.lowElevation,
  "@media": {
    "(min-width: 48rem)": {
      width: vars.widths.maxWidth3XL,
    },
  },
});

export const contentWrapper = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: vars.space.xs,
  paddingLeft: vars.space.sm,
  paddingRight: vars.space.sm,
  maxWidth: "100%",
  "@media": {
    "(min-width: 48rem)": {
      maxWidth: vars.widths.maxWidthText,
      paddingLeft: vars.space.zero,
      paddingRight: vars.space.zero,
    },
  },
});

export const intro = style({
  color: vars.colors.primary,
  fontFamily: vars.fontFamily.subheading,
  fontSize: vars.fontSize.lg,
});

export const footer = style({
  selectors: {
    [`${wrapper} &`]: {
      fontSize: vars.fontSize.lg,
    },
  },
});
