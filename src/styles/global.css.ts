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
  fontWeight: vars.fontWeight.normal,
  fontFamily: vars.fontFamily.heading,
});

globalStyle("h1", {
  marginTop: vars.space[10],
  marginBottom: vars.space[5],
});

globalStyle("h2", {
  marginTop: vars.space[8],
  marginBottom: vars.space[3],
});

globalStyle("p", {
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.space[2],
});

globalStyle("a", {
  color: vars.colors.primary,
  textUnderlineOffset: vars.space[1],
});

globalStyle("a:hover, a:focus", {
  textDecoration: "none",
});

globalStyle("hr", {
  color: vars.colors.alternative,
  height: vars.space.px,
  marginBlock: vars.space[10],
});

globalStyle("ul", {
  marginBottom: vars.space[5],
});

globalStyle("ul li", {
  marginBottom: vars.space[3],
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
