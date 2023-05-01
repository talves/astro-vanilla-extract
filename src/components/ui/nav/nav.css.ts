import { sprinklesStyle } from "@/styles/sprinkles.css";
import { vars } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  backgroundColor: vars.colors.surface, // TODO: use backgroundColor
});

export const barWrapper = sprinklesStyle({
  marginX: "auto",
  maxWidth: "3xl",
  paddingX: "2",
});
export const barWrapperPadding = sprinklesStyle({
  paddingX: { sm: "6", lg: "8" },
});

export const barFlexWrapper = sprinklesStyle({
  position: "relative",
  display: "flex",
  height: "16",
  alignItems: "center",
  justifyContent: "space-between",
});

export const barMain = sprinklesStyle({
  display: "flex",
  flex: "1",
  alignItems: { default: "center", sm: "stretch" },
  justifyContent: { default: "center", sm: "flex-start" },
});

export const barRightContainer = sprinklesStyle({
  position: "absolute",
  insetY: "0",
  right: "0",
  display: "flex",
  alignItems: "center",
  paddingRight: "2",
});

export const barLogoWrapper = sprinklesStyle({
  display: "flex",
  flexShrink: "0",
  alignItems: "center",
});

export const barImageLogo = sprinklesStyle({
  height: "8",
  width: "auto",
});
export const hiddenOnLarge = sprinklesStyle({
  display: {
    default: "block",
    lg: "none",
  },
});
export const showOnLarge = sprinklesStyle({
  display: {
    default: "none",
    lg: "block",
  },
});

export const barMenuWrapper = sprinklesStyle({
  display: {
    default: "none",
    sm: "block",
  },
  marginLeft: {
    sm: "6",
  },
});

export const barButtonItemsWrapper = sprinklesStyle({
  display: "flex",
  gap: "4",
});
export const barMobileButtonWrapper = sprinklesStyle({
  display: {
    default: "block",
    sm: "none",
  },
});
export const barMobileMenuItemsWrapper = sprinklesStyle({
  paddingX: "2",
  paddingBottom: "3",
  paddingTop: "2",
});

export const barButtonMobile = style({
  backgroundColor: vars.colors.background,
  color: vars.colors.primary,
  display: "block",
  ":hover": {
    backgroundColor: vars.colors.alternative,
    color: vars.colors.white,
    cursor: "pointer",
  },
  fontWeight: vars.fontWeight.medium,
});
export const barButtonMobileExtra = sprinklesStyle({
  text: "sm",
  paddingX: "3",
  paddingY: "2",
});

export const barButton = style({
  backgroundColor: vars.colors.background,
  color: vars.colors.primary,
  ":hover": {
    backgroundColor: vars.colors.alternative,
    color: vars.colors.white,
    cursor: "pointer",
  },
  borderRadius: vars.borderRadius.md,
  fontWeight: vars.fontWeight.medium,
});

export const barButtonExtra = sprinklesStyle({
  text: "base",
  paddingX: "3",
  paddingY: "2",
});
