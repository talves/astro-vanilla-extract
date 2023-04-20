import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes.css";

// globalStyle("html", {
//   display: "flex",
// });

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("h1, h2", {
  color: vars.colors.primary,
  marginTop: vars.space.lg,
  marginBottom: vars.space.md,
  fontWeight: vars.fontWeight.normal,
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize.xl,
});

globalStyle("p", {
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.space.sm,
});

globalStyle("a", {
  color: vars.colors.primary,
  textUnderlineOffset: vars.space.xs,
});

globalStyle("a:hover, a:focus", {
  textDecoration: "none",
});

globalStyle("hr", {
  color: vars.colors.alternative,
  height: vars.space.px,
  marginBlock: vars.space.xl,
});

globalStyle("ul", {
  marginBottom: vars.space.lg,
});

globalStyle("ul li", {
  marginBottom: vars.space.sm,
});

export const screenReaderText = style({
  border: 0,
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "insert(50%)",
  height: "1px",
  margin: "-1px",
  width: "1px",
  overflow: "hidden",
  position: "absolute",
  wordWrap: "normal",
});
