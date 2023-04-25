/*
Based on the tailwindcss default
*/

type Colors = {
  inherit: "inherit";
  current: "currentColor";
  transparent: "transparent";
  black: "#000";
  white: "#fff";
  "amber-50": "#fffbeb";
  "amber-100": "#fef3c7";
  "amber-200": "#fde68a";
  "amber-300": "#fcd34d";
  "amber-400": "#fbbf24";
  "amber-500": "#f59e0b";
  "amber-600": "#d97706";
  "amber-700": "#b45309";
  "amber-800": "#92400e";
  "amber-900": "#78350f";
  "amber-950": "#451a03";
  "blue-50": "#eff6ff";
  "blue-100": "#dbeafe";
  "blue-200": "#bfdbfe";
  "blue-300": "#93c5fd";
  "blue-400": "#60a5fa";
  "blue-500": "#3b82f6";
  "blue-600": "#2563eb";
  "blue-700": "#1d4ed8";
  "blue-800": "#1e40af";
  "blue-900": "#1e3a8a";
  "blue-950": "#172554";
  "cyan-50": "#ecfeff";
  "cyan-100": "#cffafe";
  "cyan-200": "#a5f3fc";
  "cyan-300": "#67e8f9";
  "cyan-400": "#22d3ee";
  "cyan-500": "#06b6d4";
  "cyan-600": "#0891b2";
  "cyan-700": "#0e7490";
  "cyan-800": "#155e75";
  "cyan-900": "#164e63";
  "cyan-950": "#083344";
  "emerald-50": "#ecfdf5";
  "emerald-100": "#d1fae5";
  "emerald-200": "#a7f3d0";
  "emerald-300": "#6ee7b7";
  "emerald-400": "#34d399";
  "emerald-500": "#10b981";
  "emerald-600": "#059669";
  "emerald-700": "#047857";
  "emerald-800": "#065f46";
  "emerald-900": "#064e3b";
  "emerald-950": "#022c22";
  "fuchsia-50": "#fdf4ff";
  "fuchsia-100": "#fae8ff";
  "fuchsia-200": "#f5d0fe";
  "fuchsia-300": "#f0abfc";
  "fuchsia-400": "#e879f9";
  "fuchsia-500": "#d946ef";
  "fuchsia-600": "#c026d3";
  "fuchsia-700": "#a21caf";
  "fuchsia-800": "#86198f";
  "fuchsia-900": "#701a75";
  "fuchsia-950": "#4a044e";
  "gray-50": "#f9fafb";
  "gray-100": "#f3f4f6";
  "gray-200": "#e5e7eb";
  "gray-300": "#d1d5db";
  "gray-400": "#9ca3af";
  "gray-500": "#6b7280";
  "gray-600": "#4b5563";
  "gray-700": "#374151";
  "gray-800": "#1f2937";
  "gray-900": "#111827";
  "gray-950": "#030712";
  "green-50": "#f0fdf4";
  "green-100": "#dcfce7";
  "green-200": "#bbf7d0";
  "green-300": "#86efac";
  "green-400": "#4ade80";
  "green-500": "#22c55e";
  "green-600": "#16a34a";
  "green-700": "#15803d";
  "green-800": "#166534";
  "green-900": "#14532d";
  "green-950": "#052e16";
  "indigo-50": "#eef2ff";
  "indigo-100": "#e0e7ff";
  "indigo-200": "#c7d2fe";
  "indigo-300": "#a5b4fc";
  "indigo-400": "#818cf8";
  "indigo-500": "#6366f1";
  "indigo-600": "#4f46e5";
  "indigo-700": "#4338ca";
  "indigo-800": "#3730a3";
  "indigo-900": "#312e81";
  "indigo-950": "#1e1b4b";
  "lime-50": "#f7fee7";
  "lime-100": "#ecfccb";
  "lime-200": "#d9f99d";
  "lime-300": "#bef264";
  "lime-400": "#a3e635";
  "lime-500": "#84cc16";
  "lime-600": "#65a30d";
  "lime-700": "#4d7c0f";
  "lime-800": "#3f6212";
  "lime-900": "#365314";
  "lime-950": "#1a2e05";
  "neutral-50": "#fafafa";
  "neutral-100": "#f5f5f5";
  "neutral-200": "#e5e5e5";
  "neutral-300": "#d4d4d4";
  "neutral-400": "#a3a3a3";
  "neutral-500": "#737373";
  "neutral-600": "#525252";
  "neutral-700": "#404040";
  "neutral-800": "#262626";
  "neutral-900": "#171717";
  "neutral-950": "#0a0a0a";
  "orange-50": "#fff7ed";
  "orange-100": "#ffedd5";
  "orange-200": "#fed7aa";
  "orange-300": "#fdba74";
  "orange-400": "#fb923c";
  "orange-500": "#f97316";
  "orange-600": "#ea580c";
  "orange-700": "#c2410c";
  "orange-800": "#9a3412";
  "orange-900": "#7c2d12";
  "orange-950": "#431407";
  "pink-50": "#fdf2f8";
  "pink-100": "#fce7f3";
  "pink-200": "#fbcfe8";
  "pink-300": "#f9a8d4";
  "pink-400": "#f472b6";
  "pink-500": "#ec4899";
  "pink-600": "#db2777";
  "pink-700": "#be185d";
  "pink-800": "#9d174d";
  "pink-900": "#831843";
  "pink-950": "#500724";
  "purple-50": "#faf5ff";
  "purple-100": "#f3e8ff";
  "purple-200": "#e9d5ff";
  "purple-300": "#d8b4fe";
  "purple-400": "#c084fc";
  "purple-500": "#a855f7";
  "purple-600": "#9333ea";
  "purple-700": "#7e22ce";
  "purple-800": "#6b21a8";
  "purple-900": "#581c87";
  "purple-950": "#3b0764";
  "red-50": "#fef2f2";
  "red-100": "#fee2e2";
  "red-200": "#fecaca";
  "red-300": "#fca5a5";
  "red-400": "#f87171";
  "red-500": "#ef4444";
  "red-600": "#dc2626";
  "red-700": "#b91c1c";
  "red-800": "#991b1b";
  "red-900": "#7f1d1d";
  "red-950": "#450a0a";
  "rose-50": "#fff1f2";
  "rose-100": "#ffe4e6";
  "rose-200": "#fecdd3";
  "rose-300": "#fda4af";
  "rose-400": "#fb7185";
  "rose-500": "#f43f5e";
  "rose-600": "#e11d48";
  "rose-700": "#be123c";
  "rose-800": "#9f1239";
  "rose-900": "#881337";
  "rose-950": "#4c0519";
  "sky-50": "#f0f9ff";
  "sky-100": "#e0f2fe";
  "sky-200": "#bae6fd";
  "sky-300": "#7dd3fc";
  "sky-400": "#38bdf8";
  "sky-500": "#0ea5e9";
  "sky-600": "#0284c7";
  "sky-700": "#0369a1";
  "sky-800": "#075985";
  "sky-900": "#0c4a6e";
  "sky-950": "#082f49";
  "slate-50": "#f8fafc";
  "slate-100": "#f1f5f9";
  "slate-200": "#e2e8f0";
  "slate-300": "#cbd5e1";
  "slate-400": "#94a3b8";
  "slate-500": "#64748b";
  "slate-600": "#475569";
  "slate-700": "#334155";
  "slate-800": "#1e293b";
  "slate-900": "#0f172a";
  "slate-950": "#020617";
  "stone-50": "#fafaf9";
  "stone-100": "#f5f5f4";
  "stone-200": "#e7e5e4";
  "stone-300": "#d6d3d1";
  "stone-400": "#a8a29e";
  "stone-500": "#78716c";
  "stone-600": "#57534e";
  "stone-700": "#44403c";
  "stone-800": "#292524";
  "stone-900": "#1c1917";
  "stone-950": "#0c0a09";
  "teal-50": "#f0fdfa";
  "teal-100": "#ccfbf1";
  "teal-200": "#99f6e4";
  "teal-300": "#5eead4";
  "teal-400": "#2dd4bf";
  "teal-500": "#14b8a6";
  "teal-600": "#0d9488";
  "teal-700": "#0f766e";
  "teal-800": "#115e59";
  "teal-900": "#134e4a";
  "teal-950": "#042f2e";
  "violet-50": "#f5f3ff";
  "violet-100": "#ede9fe";
  "violet-200": "#ddd6fe";
  "violet-300": "#c4b5fd";
  "violet-400": "#a78bfa";
  "violet-500": "#8b5cf6";
  "violet-600": "#7c3aed";
  "violet-700": "#6d28d9";
  "violet-800": "#5b21b6";
  "violet-900": "#4c1d95";
  "violet-950": "#2e1065";
  "yellow-50": "#fefce8";
  "yellow-100": "#fef9c3";
  "yellow-200": "#fef08a";
  "yellow-300": "#fde047";
  "yellow-400": "#facc15";
  "yellow-500": "#eab308";
  "yellow-600": "#ca8a04";
  "yellow-700": "#a16207";
  "yellow-800": "#854d0e";
  "yellow-900": "#713f12";
  "yellow-950": "#422006";
  "zinc-50": "#fafafa";
  "zinc-100": "#f4f4f5";
  "zinc-200": "#e4e4e7";
  "zinc-300": "#d4d4d8";
  "zinc-400": "#a1a1aa";
  "zinc-500": "#71717a";
  "zinc-600": "#52525b";
  "zinc-700": "#3f3f46";
  "zinc-800": "#27272a";
  "zinc-900": "#18181b";
  "zinc-950": "#09090b";
};

type FontSize = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  "8xl": string;
  "9xl": string;
};
type FontSizeLineHeight = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  "8xl": string;
  "9xl": string;
};
type FontWeight = {
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
  black: string;
};
type Flex = {
  1: string;
  auto: string;
  initial: string;
  none: string;
};
type Spacing = {
  px: "1px";
  0: "0px";
  0.5: "0.125rem";
  1: "0.25rem";
  1.5: "0.375rem";
  2: "0.5rem";
  2.5: "0.625rem";
  3: "0.75rem";
  3.5: "0.875rem";
  4: "1rem";
  5: "1.25rem";
  6: "1.5rem";
  7: "1.75rem";
  8: "2rem";
  9: "2.25rem";
  10: "2.5rem";
  11: "2.75rem";
  12: "3rem";
  14: "3.5rem";
  16: "4rem";
  20: "5rem";
  24: "6rem";
  28: "7rem";
  32: "8rem";
  36: "9rem";
  40: "10rem";
  44: "11rem";
  48: "12rem";
  52: "13rem";
  56: "14rem";
  60: "15rem";
  64: "16rem";
  72: "18rem";
  80: "20rem";
  96: "24rem";
};
interface FlexBasis extends Spacing {
  auto: string;
  "1/2": "50%";
  "1/3": "33.333333%";
  "2/3": "66.666667%";
  "1/4": "25%";
  "2/4": "50%";
  "3/4": "75%";
  "1/5": "20%";
  "2/5": "40%";
  "3/5": "60%";
  "4/5": "80%";
  "1/6": "16.666667%";
  "2/6": "33.333333%";
  "3/6": "50%";
  "4/6": "66.666667%";
  "5/6": "83.333333%";
  "1/12": "8.333333%";
  "2/12": "16.666667%";
  "3/12": "25%";
  "4/12": "33.333333%";
  "5/12": "41.666667%";
  "6/12": "50%";
  "7/12": "58.333333%";
  "8/12": "66.666667%";
  "9/12": "75%";
  "10/12": "83.333333%";
  "11/12": "91.666667%";
  full: "100%";
}
type FlexGrow = {
  DEFAULT: string;
  0: string;
};
type FlexShrink = {
  DEFAULT: string;
  0: string;
};
interface Gap extends Spacing {}
type GrayScale = {
  0: "0";
  DEFAULT: "100%";
};
type GridColumn = {
  auto: "auto";
  "span-1": "span 1 / span 1";
  "span-2": "span 2 / span 2";
  "span-3": "span 3 / span 3";
  "span-4": "span 4 / span 4";
  "span-5": "span 5 / span 5";
  "span-6": "span 6 / span 6";
  "span-7": "span 7 / span 7";
  "span-8": "span 8 / span 8";
  "span-9": "span 9 / span 9";
  "span-10": "span 10 / span 10";
  "span-11": "span 11 / span 11";
  "span-12": "span 12 / span 12";
  "span-full": "1 / -1";
};
type GridColumnEnd = {
  auto: "auto";
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
  7: "7";
  8: "8";
  9: "9";
  10: "10";
  11: "11";
  12: "12";
  13: "13";
};
type GridColumnStart = {
  auto: "auto";
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
  7: "7";
  8: "8";
  9: "9";
  10: "10";
  11: "11";
  12: "12";
  13: "13";
};
type GridRow = {
  auto: "auto";
  "span-1": "span 1 / span 1";
  "span-2": "span 2 / span 2";
  "span-3": "span 3 / span 3";
  "span-4": "span 4 / span 4";
  "span-5": "span 5 / span 5";
  "span-6": "span 6 / span 6";
  "span-full": "1 / -1";
};
type GridRowEnd = {
  auto: "auto";
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
  7: "7";
};
type GridRowStart = {
  auto: "auto";
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
  7: "7";
};
type GridTemplateColumns = {
  none: "none";
  1: "repeat(1, minmax(0, 1fr))";
  2: "repeat(2, minmax(0, 1fr))";
  3: "repeat(3, minmax(0, 1fr))";
  4: "repeat(4, minmax(0, 1fr))";
  5: "repeat(5, minmax(0, 1fr))";
  6: "repeat(6, minmax(0, 1fr))";
  7: "repeat(7, minmax(0, 1fr))";
  8: "repeat(8, minmax(0, 1fr))";
  9: "repeat(9, minmax(0, 1fr))";
  10: "repeat(10, minmax(0, 1fr))";
  11: "repeat(11, minmax(0, 1fr))";
  12: "repeat(12, minmax(0, 1fr))";
};
type GridTemplateRows = {
  none: "none";
  1: "repeat(1, minmax(0, 1fr))";
  2: "repeat(2, minmax(0, 1fr))";
  3: "repeat(3, minmax(0, 1fr))";
  4: "repeat(4, minmax(0, 1fr))";
  5: "repeat(5, minmax(0, 1fr))";
  6: "repeat(6, minmax(0, 1fr))";
};
interface Height extends Spacing {
  auto: "auto";
  "1/2": "50%";
  "1/3": "33.333333%";
  "2/3": "66.666667%";
  "1/4": "25%";
  "2/4": "50%";
  "3/4": "75%";
  "1/5": "20%";
  "2/5": "40%";
  "3/5": "60%";
  "4/5": "80%";
  "1/6": "16.666667%";
  "2/6": "33.333333%";
  "3/6": "50%";
  "4/6": "66.666667%";
  "5/6": "83.333333%";
  full: "100%";
  screen: "100vh";
  min: "min-content";
  max: "max-content";
  fit: "fit-content";
}
type HueRotate = {
  0: "0deg";
  15: "15deg";
  30: "30deg";
  60: "60deg";
  90: "90deg";
  180: "180deg";
};
interface Inset extends Spacing {
  auto: "auto";
  "1/2": "50%";
  "1/3": "33.333333%";
  "2/3": "66.666667%";
  "1/4": "25%";
  "2/4": "50%";
  "3/4": "75%";
  full: "100%";
}
type Invert = {
  0: "0";
  DEFAULT: "100%";
};
type LetterSpacing = {
  tighter: "-0.05em";
  tight: "-0.025em";
  normal: "0em";
  wide: "0.025em";
  wider: "0.05em";
  widest: "0.1em";
};
type LineHeight = {
  none: string;
  tight: string;
  snug: string;
  normal: string;
  relaxed: string;
  loose: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
};
type ListStyleType = {
  none: string;
  disc: string;
  decimal: string;
};
type ListStyleImage = {
  none: string;
};
interface Margin extends Spacing {
  auto: "auto";
}
type LineClamp = {
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
};
interface MaxHeight extends Spacing {
  none: "none";
  full: "100%";
  screen: "100vh";
  min: "min-content";
  max: "max-content";
  fit: "fit-content";
}
type MinHeight = {
  0: "0px";
  full: "100%";
  screen: "100vh";
  min: "min-content";
  max: "max-content";
  fit: "fit-content";
};
type MinWidth = {
  0: "0px";
  full: "100%";
  min: "min-content";
  max: "max-content";
  fit: "fit-content";
};
type ObjectPosition = {
  bottom: "bottom";
  center: "center";
  left: "left";
  "left-bottom": "left bottom";
  "left-top": "left top";
  right: "right";
  "right-bottom": "right bottom";
  "right-top": "right top";
  top: "top";
};
type Opacity = {
  0: "0";
  5: "0.05";
  10: "0.1";
  20: "0.2";
  25: "0.25";
  30: "0.3";
  40: "0.4";
  50: "0.5";
  60: "0.6";
  70: "0.7";
  75: "0.75";
  80: "0.8";
  90: "0.9";
  95: "0.95";
  100: "1";
};
type Order = {
  first: "-9999";
  last: "9999";
  none: "0";
  1: "1";
  2: "2";
  3: "3";
  4: "4";
  5: "5";
  6: "6";
  7: "7";
  8: "8";
  9: "9";
  10: "10";
  11: "11";
  12: "12";
};
interface Translate extends Spacing {
  "1/2": "50%";
  "1/3": "33.333333%";
  "2/3": "66.666667%";
  "1/4": "25%";
  "2/4": "50%";
  "3/4": "75%";
  full: "100%";
}
interface Width extends Spacing {
  auto: string;
  "1/2": string;
  "1/3": string;
  "2/3": string;
  "1/4": string;
  "2/4": string;
  "3/4": string;
  "1/5": string;
  "2/5": string;
  "3/5": string;
  "4/5": string;
  "1/6": string;
  "2/6": string;
  "3/6": string;
  "4/6": string;
  "5/6": string;
  "1/12": string;
  "2/12": string;
  "3/12": string;
  "4/12": string;
  "5/12": string;
  "6/12": string;
  "7/12": string;
  "8/12": string;
  "9/12": string;
  "10/12": string;
  "11/12": string;
  full: string;
  screen: string;
  min: string;
  max: string;
  fit: string;
}
type Sepia = {
  0: string;
  DEFAULT: string;
};
type Skew = {
  0: "0deg";
  1: "1deg";
  2: "2deg";
  3: "3deg";
  6: "6deg";
  12: "12deg";
};
type Screens = Record<"sm" | "md" | "lg" | "xl" | "2xl" | string, string>;
type TextUnderlineOffset = Record<"auto" | "0" | "1" | "2" | "4" | "8", string>;
type TransformOrigin = Record<
  | "center"
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "top-left",
  string
>;
type TransitionDelay = Record<
  "0" | "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000",
  string
>;
type TransitionDuration = Record<
  | "DEFAULT"
  | "0"
  | "75"
  | "100"
  | "150"
  | "200"
  | "300"
  | "500"
  | "700"
  | "1000",
  string
>;
type TransitionProperty = {
  none: "none";
  all: "all";
  DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter";
  colors: "color, background-color, border-color, text-decoration-color, fill, stroke";
  opacity: "opacity";
  shadow: "box-shadow";
  transform: "transform";
};
type TransitionTimingFunction = {
  DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)";
  linear: "linear";
  in: "cubic-bezier(0.4, 0, 1, 1)";
  out: "cubic-bezier(0, 0, 0.2, 1)";
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
};

type ThemeProps = {
  theme: Theme;
};

type AnyRecord = Record<any, string>;
type FlattenedRecord = Record<string, string | null>;
type ThemeFunc<T, U = AnyRecord> = (props: T) => U;

type Theme = {
  accentColor: ThemeFunc<ThemeProps>;
  animation: AnyRecord;
  aria: AnyRecord;
  aspectRatio: AnyRecord;
  backdropBlur: ThemeFunc<ThemeProps>;
  backdropBrightness: ThemeFunc<ThemeProps>;
  backdropContrast: ThemeFunc<ThemeProps>;
  backdropGrayscale: ThemeFunc<ThemeProps>;
  backdropHueRotate: ThemeFunc<ThemeProps>;
  backdropInvert: ThemeFunc<ThemeProps>;
  backdropOpacity: ThemeFunc<ThemeProps>;
  backdropSaturate: ThemeFunc<ThemeProps>;
  backdropSepia: ThemeFunc<ThemeProps>;
  backgroundColor: ThemeFunc<AnyRecord>;
  backgroundImage: AnyRecord;
  backgroundOpacity: ThemeFunc<ThemeProps>;
  backgroundPosition: AnyRecord;
  backgroundSize: AnyRecord;
  blur: AnyRecord;
  borderColor: ThemeFunc<AnyRecord>;
  borderOpacity: ThemeFunc<ThemeProps>;
  borderRadius: AnyRecord;
  borderSpacing: ThemeFunc<ThemeProps>;
  borderWidth: AnyRecord;
  boxShadow: AnyRecord;
  boxShadowColor: ThemeFunc<AnyRecord>;
  brightness: AnyRecord;
  caretColor: ThemeFunc<AnyRecord>;
  colors: ThemeFunc<{ colors: Colors }, Colors>;
  columns: AnyRecord;
  container: AnyRecord;
  content: AnyRecord;
  contrast: AnyRecord;
  cursor: AnyRecord;
  divideColor: ThemeFunc<AnyRecord>;
  divideOpacity: ThemeFunc<ThemeProps>;
  divideWidth: ThemeFunc<ThemeProps>;
  dropShadow: AnyRecord | Record<string, string | string[]>;
  fill: ThemeFunc<ThemeProps>;
  flex: Flex;
  flexBasis: ThemeFunc<ThemeProps, FlexBasis>;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  fontFamily: AnyRecord | Record<string, string[]>;
  fontSize: FontSize;
  fontSizeLineHeight: FontSizeLineHeight;
  fontWeight: FontWeight;
  gap: ThemeFunc<ThemeProps, Gap>;
  gradientColorStops: ThemeFunc<AnyRecord>;
  gradientColorStopPositions: AnyRecord;
  grayscale: GrayScale;
  gridAutoColumns: AnyRecord;
  gridAutoRows: AnyRecord;
  gridColumn: GridColumn;
  gridColumnEnd: GridColumnEnd;
  gridColumnStart: GridColumnStart;
  gridRow: GridRow;
  gridRowEnd: GridRowEnd;
  gridRowStart: GridRowStart;
  gridTemplateColumns: GridTemplateColumns;
  gridTemplateRows: GridTemplateRows;
  height: ThemeFunc<ThemeProps, Height>;
  hueRotate: HueRotate;
  inset: ThemeFunc<ThemeProps, Inset>;
  invert: Invert;
  keyframes: AnyRecord;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  listStyleType: ListStyleType;
  listStyleImage: AnyRecord;
  margin: ThemeFunc<ThemeProps, Margin>;
  lineClamp: LineClamp;
  maxHeight: ThemeFunc<ThemeProps, MaxHeight>;
  maxWidth: ThemeFunc<ThemeProps>;
  minHeight: MinHeight;
  minWidth: MinWidth;
  objectPosition: ObjectPosition;
  opacity: Opacity;
  order: Order;
  outlineColor: ThemeFunc<Colors, Colors>;
  outlineOffset: AnyRecord;
  outlineWidth: AnyRecord;
  padding: ThemeFunc<ThemeProps>;
  placeholderColor: ThemeFunc<Colors, Colors>;
  placeholderOpacity: ThemeFunc<ThemeProps>;
  ringColor: ThemeFunc<AnyRecord>;
  ringOffsetColor: ThemeFunc<AnyRecord>;
  ringOffsetWidth: AnyRecord;
  ringOpacity: ThemeFunc<ThemeProps>;
  ringWidth: AnyRecord;
  rotate: AnyRecord;
  saturate: AnyRecord;
  scale: AnyRecord;
  screens: Screens;
  scrollMargin: ThemeFunc<Spacing, Spacing>;
  scrollPadding: ThemeFunc<Spacing, Spacing>;
  sepia: Sepia;
  skew: Skew;
  space: ThemeFunc<ThemeProps>;
  spacing: Spacing;
  stroke: ThemeFunc<ThemeProps>;
  strokeWidth: AnyRecord;
  supports: AnyRecord;
  data: AnyRecord;
  textColor: ThemeFunc<AnyRecord>;
  textDecorationColor: ThemeFunc<AnyRecord>;
  textDecorationThickness: AnyRecord;
  textIndent: ThemeFunc<Spacing, Spacing>;
  textOpacity: ThemeFunc<Opacity, Opacity>;
  textUnderlineOffset: TextUnderlineOffset;
  transformOrigin: TransformOrigin;
  transitionDelay: TransitionDelay;
  transitionDuration: TransitionDuration;
  transitionProperty: TransitionProperty;
  transitionTimingFunction: TransitionTimingFunction;
  translate: ThemeFunc<ThemeProps, Translate>;
  width: ThemeFunc<ThemeProps, Width>;
  willChange: AnyRecord;
  zIndex: AnyRecord;
};

export const flatten = (
  items: AnyRecord,
  val: string = ""
): FlattenedRecord => {
  const returnVal: Record<any, any> = {};
  const keys = Object.keys(items);
  keys.forEach((element) => {
    returnVal[`${element}`] = `${val}`;
  });
  return returnVal;
};
const breakpoints = (screens: Screens, prefix: string) => {
  const returnVal: Record<string, string> = {};
  const keys = Object.keys(screens);
  keys.forEach((element) => {
    returnVal[`${prefix}-${element}`] = screens[element];
  });
  return returnVal;
};

export const theme: Theme = {
  accentColor: ({ theme }: ThemeProps) => ({
    ...theme.colors,
    auto: "auto",
  }),
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
  },
  aria: {
    checked: 'checked="true"',
    disabled: 'disabled="true"',
    expanded: 'expanded="true"',
    hidden: 'hidden="true"',
    pressed: 'pressed="true"',
    readonly: 'readonly="true"',
    required: 'required="true"',
    selected: 'selected="true"',
  },
  aspectRatio: {
    auto: "auto",
    square: "1 / 1",
    video: "16 / 9",
  },
  backdropBlur: ({ theme }: ThemeProps) => theme.blur,
  backdropBrightness: ({ theme }: ThemeProps) => theme.brightness,
  backdropContrast: ({ theme }: ThemeProps) => theme.contrast,
  backdropGrayscale: ({ theme }: ThemeProps) => theme.grayscale,
  backdropHueRotate: ({ theme }: ThemeProps) => theme.hueRotate,
  backdropInvert: ({ theme }: ThemeProps) => theme.invert,
  backdropOpacity: ({ theme }: ThemeProps) => theme.opacity,
  backdropSaturate: ({ theme }: ThemeProps) => theme.saturate,
  backdropSepia: ({ theme }: ThemeProps) => theme.sepia,
  backgroundColor: (colors) => colors,
  backgroundImage: {
    none: "none",
    "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
    "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
    "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
    "gradient-to-br":
      "linear-gradient(to bottom right, var(--tw-gradient-stops))",
    "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
    "gradient-to-bl":
      "linear-gradient(to bottom left, var(--tw-gradient-stops))",
    "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
    "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
  },
  backgroundOpacity: ({ theme }: ThemeProps) => theme.opacity,
  backgroundPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top",
  },
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain",
  },
  blur: {
    0: "0",
    none: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  borderColor: (colors) => ({
    ...colors,
    DEFAULT: colors["gray-200"] || "currentColor",
  }),
  borderOpacity: ({ theme }: ThemeProps) => theme.opacity,
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  borderSpacing: ({ theme }: ThemeProps) => ({
    ...theme.spacing,
  }),
  borderWidth: {
    DEFAULT: "1px",
    0: "0px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },
  boxShadowColor: (colors) => colors,
  brightness: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  caretColor: (colors) => colors,
  colors: ({ colors }) => colors,
  columns: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    "3xs": "16rem",
    "2xs": "18rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
  },
  container: {},
  content: {
    none: "none",
  },
  contrast: {
    0: "0",
    50: ".5",
    75: ".75",
    100: "1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  cursor: {
    auto: "auto",
    default: "default",
    pointer: "pointer",
    wait: "wait",
    text: "text",
    move: "move",
    help: "help",
    "not-allowed": "not-allowed",
    none: "none",
    "context-menu": "context-menu",
    progress: "progress",
    cell: "cell",
    crosshair: "crosshair",
    "vertical-text": "vertical-text",
    alias: "alias",
    copy: "copy",
    "no-drop": "no-drop",
    grab: "grab",
    grabbing: "grabbing",
    "all-scroll": "all-scroll",
    "col-resize": "col-resize",
    "row-resize": "row-resize",
    "n-resize": "n-resize",
    "e-resize": "e-resize",
    "s-resize": "s-resize",
    "w-resize": "w-resize",
    "ne-resize": "ne-resize",
    "nw-resize": "nw-resize",
    "se-resize": "se-resize",
    "sw-resize": "sw-resize",
    "ew-resize": "ew-resize",
    "ns-resize": "ns-resize",
    "nesw-resize": "nesw-resize",
    "nwse-resize": "nwse-resize",
    "zoom-in": "zoom-in",
    "zoom-out": "zoom-out",
  },
  divideColor: (colors) => theme.borderColor(colors),
  divideOpacity: ({ theme }: ThemeProps) => theme.borderOpacity({ theme }),
  divideWidth: ({ theme }: ThemeProps) => theme.borderWidth,
  dropShadow: {
    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
    DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
    md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
    lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
    xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
    none: "0 0 #0000",
  },
  fill: ({ theme }: ThemeProps) => ({
    none: "none",
    ...theme.colors,
  }),
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none",
  },
  flexBasis: ({ theme }) => ({
    auto: "auto",
    ...theme.spacing,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
  }),
  flexGrow: {
    0: "0",
    DEFAULT: "1",
  },
  flexShrink: {
    0: "0",
    DEFAULT: "1",
  },
  fontFamily: {
    sans: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
    mono: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontSizeLineHeight: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.75rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.5rem",
    "5xl": "1",
    "6xl": "1",
    "7xl": "1",
    "8xl": "1",
    "9xl": "1",
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  gap: ({ theme }) => theme.spacing,
  gradientColorStops: (colors) => colors,
  gradientColorStopPositions: {
    "0%": "0%",
    "5%": "5%",
    "10%": "10%",
    "15%": "15%",
    "20%": "20%",
    "25%": "25%",
    "30%": "30%",
    "35%": "35%",
    "40%": "40%",
    "45%": "45%",
    "50%": "50%",
    "55%": "55%",
    "60%": "60%",
    "65%": "65%",
    "70%": "70%",
    "75%": "75%",
    "80%": "80%",
    "85%": "85%",
    "90%": "90%",
    "95%": "95%",
    "100%": "100%",
  },
  grayscale: {
    0: "0",
    DEFAULT: "100%",
  },
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  },
  gridColumn: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-7": "span 7 / span 7",
    "span-8": "span 8 / span 8",
    "span-9": "span 9 / span 9",
    "span-10": "span 10 / span 10",
    "span-11": "span 11 / span 11",
    "span-12": "span 12 / span 12",
    "span-full": "1 / -1",
  },
  gridColumnEnd: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
  },
  gridColumnStart: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
  },
  gridRow: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-full": "1 / -1",
  },
  gridRowEnd: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
  },
  gridRowStart: {
    auto: "auto",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
  },
  gridTemplateColumns: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))",
  },
  gridTemplateRows: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
  },
  height: ({ theme }: ThemeProps) => ({
    auto: "auto",
    ...theme.spacing,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }),
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg",
  },
  inset: ({ theme }) => ({
    auto: "auto",
    ...theme.spacing,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  }),
  invert: {
    0: "0",
    DEFAULT: "100%",
  },
  keyframes: {
    // spin: {
    //   to: {
    //     transform: "rotate(360deg)",
    //   },
    // },
    // ping: {
    //   "75%, 100%": {
    //     transform: "scale(2)",
    //     opacity: "0",
    //   },
    // },
    // pulse: {
    //   "50%": {
    //     opacity: ".5",
    //   },
    // },
    // bounce: {
    //   "0%, 100%": {
    //     transform: "translateY(-25%)",
    //     animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
    //   },
    //   "50%": {
    //     transform: "none",
    //     animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
    //   },
    // },
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal",
  },
  listStyleImage: {
    none: "none",
  },
  margin: ({ theme }) => ({
    auto: "auto",
    ...theme.spacing,
  }),
  lineClamp: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
  },
  maxHeight: ({ theme }) => ({
    ...theme.spacing,
    none: "none",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }),
  maxWidth: ({ theme }) => ({
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch",
    ...breakpoints(theme.screens, "max-w"),
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  objectPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top",
  },
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
  },
  outlineColor: (colors) => colors,
  outlineOffset: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  outlineWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  padding: ({ theme }: ThemeProps) => theme.spacing,
  placeholderColor: (colors) => colors,
  placeholderOpacity: ({ theme }: ThemeProps) => theme.opacity,
  ringColor: (colors) => ({
    DEFAULT: colors["blue-100"] || "#3b82f6",
    ...colors,
  }),
  ringOffsetColor: (colors) => colors,
  ringOffsetWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  ringOpacity: ({ theme }: ThemeProps) => ({
    DEFAULT: "0.5",
    ...theme.opacity,
  }),
  ringWidth: {
    DEFAULT: "3px",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  rotate: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg",
    45: "45deg",
    90: "90deg",
    180: "180deg",
  },
  saturate: {
    0: "0",
    50: ".5",
    100: "1",
    150: "1.5",
    200: "2",
  },
  scale: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  scrollMargin: (spacing) => spacing,
  scrollPadding: (spacing) => spacing,
  sepia: {
    0: "0",
    DEFAULT: "100%",
  },
  skew: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg",
  },
  space: ({ theme }: ThemeProps) => ({
    ...theme.spacing,
  }),
  spacing: {
    px: "1px",
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  stroke: ({ theme }) => ({
    none: "none",
    ...theme.colors,
  }),
  strokeWidth: {
    0: "0",
    1: "1",
    2: "2",
  },
  supports: {},
  data: {},
  textColor: (colors) => colors,
  textDecorationColor: (colors) => colors,
  textDecorationThickness: {
    auto: "auto",
    "from-font": "from-font",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  textIndent: (spacing) => spacing,
  textOpacity: (opacity) => opacity,
  textUnderlineOffset: {
    auto: "auto",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  transformOrigin: {
    center: "center",
    top: "top",
    "top-right": "top right",
    right: "right",
    "bottom-right": "bottom right",
    bottom: "bottom",
    "bottom-left": "bottom left",
    left: "left",
    "top-left": "top left",
  },
  transitionDelay: {
    0: "0s",
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  transitionDuration: {
    DEFAULT: "150ms",
    0: "0s",
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  translate: ({ theme }) => ({
    ...theme.spacing,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  }),
  width: ({ theme }: ThemeProps) => ({
    auto: "auto",
    ...theme.spacing,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screen: "100vw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  }),
  willChange: {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform",
  },
  zIndex: {
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
  },
};
