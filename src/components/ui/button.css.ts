import { sprinklesStyle } from "@/styles/sprinkles.css";
import { vars } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const buttonDefault = sprinklesStyle({
  backgroundColor: "transparent",
  color: "primary",
  paddingX: { mobile: "1", tablet: "2", desktop: "3" },
  paddingY: { mobile: "0", tablet: "1", desktop: "2" },
  text: { mobile: "sm", tablet: "lg", desktop: "xl" },
  fontSize: { mobile: "sm", tablet: "lg", desktop: "xl" },
  borderRadius: "md",
  borderWidth: "border-size-2",
  borderColor: "primary",
});

export const clickable = style({
  ":hover": {
    cursor: "pointer",
    backgroundColor: vars.colors.alternative,
    color: vars.colors.secondary,
    transition: "background-color 0.3s ease-in-out",
    // outlineStyle: "solid",
    // outlineWidth: "medium",
    // outlineColor: vars.colors.alternative,
  },
});
