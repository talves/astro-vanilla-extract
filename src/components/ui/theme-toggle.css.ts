import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes.css";

// "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1"

const button = style({
  borderStyle: "none",
  backgroundColor: "transparent",
  color: vars.colors.primary,
  marginLeft: "auto",
  padding: vars.space.xs,
  //   hover: vars.colours.secondary,
});

// `w-7 h-7 fill-gray-600 dark:fill-gray-200`
const svg = style({
  width: vars.fontSize.xl,
  height: vars.fontSize.xl,
  fill: vars.colors.primary,
});

const hidden = style({
  display: "none",
});
export const themeToggle = { button, svg, hidden };
