import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/themes.css";

// "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1"

const button = style({
  borderStyle: "none",
  backgroundColor: "transparent",
  color: theme.colours.primary,
  marginLeft: "auto",
  padding: theme.spacing.size2,
  //   hover: theme.colours.secondary,
});

// `w-7 h-7 fill-gray-600 dark:fill-gray-200`
const svg = style({
  width: theme.fontSize.size3,
  height: theme.fontSize.size3,
  fill: theme.colours.primary,
});

const hidden = style({
  display: "none",
});
export const themeToggle = { button, svg, hidden };
