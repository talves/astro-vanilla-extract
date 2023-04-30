import { sprinklesStyle } from "@/styles/sprinkles.css";
import { vars } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const buttonDefault = sprinklesStyle({
  backgroundColor: "transparent",
  color: "primary",
  paddingX: { sm: "1", md: "2", lg: "3" },
  paddingY: { sm: "0", md: "1", lg: "2" },
  text: { sm: "sm", md: "lg", lg: "xl" },
  fontSize: { sm: "sm", md: "lg", lg: "xl" },
  borderRadius: "md",
  borderWidth: "border-size-2",
  borderColor: "primary",
});

export const clickable = style({
  ":hover": {
    cursor: "pointer",
    backgroundColor: vars.colors.alternative,
    opacity: 0.8,
    color: vars.colors.secondary,
    transition: "background-color 0.3s ease-in-out",
    // outlineStyle: "solid",
    // outlineWidth: "medium",
    // outlineColor: vars.colors.alternative,
  },
});
