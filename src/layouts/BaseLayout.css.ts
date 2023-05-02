import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes.css";
import { sprinklesStyle } from "@/styles/sprinkles.css";

export const layoutWrapper = style({
  backgroundColor: vars.colors.surfaceAlt,
  minHeight: "100vh",
});

export const pageWrapper = sprinklesStyle({
  display: "flex",
  justifyContent: "center",
  flexDirection: {
    default: "column",
    lg: "row",
  },
  alignItems: "center",
  backgroundColor: "transparent",
  height: "screen",
});

export const pageMainWrapper = sprinklesStyle({
  marginTop: { default: "10", sm: "12", md: "16", lg: "20", xl: "28" },
  marginX: "auto",
  maxWidth: "screen-xl",
  paddingX: { default: "4", sm: "6" },
});

export const listPageWrapper = sprinklesStyle({
  maxWidth: "screen-xl",
  marginX: "auto",
  paddingX: "5",
});
export const listPageWrapperSection = sprinklesStyle({
  marginX: "auto",
  maxWidth: "screen-md",
  marginTop: "14",
});

export const bodyContainer = style({
  color: vars.colors.text,
});

export const headerSize = style({
  fontSize: vars.fontSize["3xl"],
  lineHeight: vars.fontSizeLineHeight["3xl"],
});
