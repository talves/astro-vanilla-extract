/*
Based on the tailwindcss default
*/

export type Colors = {
  inherit: string;
  current: string;
  transparent: string;
  black?: string;
  white: string;
  [key: `amber-${string}`]: string;
  [key: `blue-${string}`]: string;
  [key: `cyan-${string}`]: string;
  [key: `emerald-${string}`]: string;
  [key: `fuchsia-${string}`]: string;
  [key: `gray-${string}`]: string;
  [key: `green-${string}`]: string;
  [key: `indigo-${string}`]: string;
  [key: `lime-${string}`]: string;
  [key: `neutral-${string}`]: string;
  [key: `orange-${string}`]: string;
  [key: `pink-${string}`]: string;
  [key: `purple-${string}`]: string;
  [key: `red-${string}`]: string;
  [key: `rose-${string}`]: string;
  [key: `sky-${string}`]: string;
  [key: `slate-${string}`]: string;
  [key: `stone-${string}`]: string;
  [key: `teal-${string}`]: string;
  [key: `violet-${string}`]: string;
  [key: `yellow-${string}`]: string;
  [key: `zinc-${string}`]: string;
};
interface BackgroundColor extends Colors {}
interface BoxShadowColor extends Colors {}
interface BorderColor extends Colors {
  DEFAULT: string;
}
interface AccentColor extends Colors {
  auto: string;
}
interface FillColor extends Colors {
  none: string;
}
interface CaretColor extends Colors {}
interface DivideColor extends Colors {}
interface OutlineColor extends Colors {}
interface PlaceholderColor extends Colors {}
interface RingOffsetColors extends Colors {}
interface GradientColorStops extends Colors {}
interface TextColor extends Colors {}
interface TextDecorationColor extends Colors {}
interface Stroke extends Colors {
  none: string;
}
type AnimationType = Record<
  "none" | "spin" | "ping" | "pulse" | "bounce",
  string
>;
type Aria = Record<
  | "checked"
  | "disabled"
  | "expanded"
  | "hidden"
  | "pressed"
  | "readonly"
  | "required"
  | "selected",
  string
>;
type BackgroundSize = Record<"auto" | "cover" | "contain", string>;

type Blur = {
  0: string;
  none: string;
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
};
interface BackdropBlur extends Blur {}
type Brightness = {
  0: string;
  50: string;
  75: string;
  90: string;
  95: string;
  100: string;
  105: string;
  110: string;
  125: string;
  150: string;
  200: string;
};
interface BackdropBrightness extends Brightness {}
type Contrast = {
  0: string;
  50: string;
  75: string;
  100: string;
  125: string;
  150: string;
  200: string;
};
type Cursor = {
  auto: string;
  default: string;
  pointer: string;
  wait: string;
  text: string;
  move: string;
  help: string;
  "not-allowed": string;
  none: string;
  "context-menu": string;
  progress: string;
  cell: string;
  crosshair: string;
  "vertical-text": string;
  alias: string;
  copy: string;
  "no-drop": string;
  grab: string;
  grabbing: string;
  "all-scroll": string;
  "col-resize": string;
  "row-resize": string;
  "n-resize": string;
  "e-resize": string;
  "s-resize": string;
  "w-resize": string;
  "ne-resize": string;
  "nw-resize": string;
  "se-resize": string;
  "sw-resize": string;
  "ew-resize": string;
  "ns-resize": string;
  "nesw-resize": string;
  "nwse-resize": string;
  "zoom-in": string;
  "zoom-out": string;
};
interface BackdropContrast extends Contrast {}
interface BackdropGrayscale extends GrayScale {}
interface BackdropHueRotate extends HueRotate {}
interface BackdropInvert extends Invert {}
interface BackdropOpacity extends Opacity {}
interface BackdropSaturate extends Saturate {}
interface BackdropSepia extends Sepia {}
type StrokeWidth = Record<"0" | "1" | "2", string>;
type AspectRatio = Record<"auto" | "square" | "video", string>;
type BackgroundImage = {
  none: string;
  "gradient-to-t": string;
  "gradient-to-tr": string;
  "gradient-to-r": string;
  "gradient-to-br": string;
  "gradient-to-b": string;
  "gradient-to-bl": string;
  "gradient-to-l": string;
  "gradient-to-tl": string;
};
type BackgroundPosition = {
  bottom: string;
  center: string;
  left: string;
  "left-bottom": string;
  "left-top": string;
  right: string;
  "right-bottom": string;
  "right-top": string;
  top: string;
};
type Content = Record<"none", string>;
type Columns = {
  auto: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  "3xs": string;
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
};
type DropShadow = Record<
  "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "none",
  string | string[]
>;
type GradientColorStopPositions = {
  "0%": string;
  "5%": string;
  "10%": string;
  "15%": string;
  "20%": string;
  "25%": string;
  "30%": string;
  "35%": string;
  "40%": string;
  "45%": string;
  "50%": string;
  "55%": string;
  "60%": string;
  "65%": string;
  "70%": string;
  "75%": string;
  "80%": string;
  "85%": string;
  "90%": string;
  "95%": string;
  "100%": string;
};
type FontSize = Record<
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl",
  string
>;
type FontSizeLineHeight = Record<
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl",
  string
>;
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
type Spacing = Record<
  | "px"
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96",
  string
>;
interface Padding extends Spacing {}
interface ScrollMargin extends Spacing {}
interface ScrollPadding extends Spacing {}
interface Space extends Spacing {}
interface BorderSpacing extends Spacing {}
interface FlexBasis extends Spacing {
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
}
type FontFamily = Record<"sans" | "serif" | "mono", string[]>;
type FlexGrow = {
  DEFAULT: string;
  0: string;
};
type FlexShrink = {
  DEFAULT: string;
  0: string;
};
interface Gap extends Spacing {}
type GrayScale = Record<"0" | "DEFAULT", string>;
type GridAutoColumns = Record<"auto" | "min" | "max" | "fr", string>;
type GridAutoRows = Record<"auto" | "min" | "max" | "fr", string>;
type GridColumn = {
  auto: string;
  "span-1": string;
  "span-2": string;
  "span-3": string;
  "span-4": string;
  "span-5": string;
  "span-6": string;
  "span-7": string;
  "span-8": string;
  "span-9": string;
  "span-10": string;
  "span-11": string;
  "span-12": string;
  "span-full": string;
};
type GridColumnEnd = {
  auto: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
};
type GridColumnStart = {
  auto: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
};
type GridRow = {
  auto: string;
  "span-1": string;
  "span-2": string;
  "span-3": string;
  "span-4": string;
  "span-5": string;
  "span-6": string;
  "span-full": string;
};
type GridRowEnd = {
  auto: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
};
type GridRowStart = {
  auto: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
};
type GridTemplateColumns = {
  none: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
};
type GridTemplateRows = {
  none: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
interface Height extends Spacing {
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
  full: string;
  screen: string;
  min: string;
  max: string;
  fit: string;
}
type HueRotate = {
  0: string;
  15: string;
  30: string;
  60: string;
  90: string;
  180: string;
};
interface Inset extends Spacing {
  auto: string;
  "1/2": string;
  "1/3": string;
  "2/3": string;
  "1/4": string;
  "2/4": string;
  "3/4": string;
  full: string;
}
type Invert = {
  0: string;
  DEFAULT: string;
};
type LetterSpacing = {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
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
  auto: string;
}
type LineClamp = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
interface MaxHeight extends Spacing {
  none: string;
  full: string;
  screen: string;
  min: string;
  max: string;
  fit: string;
}
type MinHeight = {
  0: string;
  full: string;
  screen: string;
  min: string;
  max: string;
  fit: string;
};
type MinWidth = {
  0: string;
  full: string;
  min: string;
  max: string;
  fit: string;
};
type MaxWidth = {
  none: string;
  0: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  full: string;
  min: string;
  max: string;
  fit: string;
  prose: string;
  [key: `max-w-${string}`]: string;
};
type ObjectPosition = {
  bottom: string;
  center: string;
  left: string;
  "left-bottom": string;
  "left-top": string;
  right: string;
  "right-bottom": string;
  "right-top": string;
  top: string;
};
type OutlineOffset = Record<0 | 1 | 2 | 4 | 8, string>;
type OutlineWidth = Record<0 | 1 | 2 | 4 | 8, string>;
type Opacity = {
  0: string;
  5: string;
  10: string;
  20: string;
  25: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  75: string;
  80: string;
  90: string;
  95: string;
  100: string;
};
interface BorderOpacity extends Opacity {}
interface BackgroundOpacity extends Opacity {}
interface DivideOpacity extends Opacity {}
interface PlaceholderOpacity extends Opacity {}
interface RingOpacity extends Opacity {
  DEFAULT: string;
}
type BorderRadius = {
  none: string;
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string;
};
type BorderWidth = Record<"DEFAULT" | 0 | 2 | 4 | 8, string>;
interface DivideWidth extends BorderWidth {}
type BoxShadow = Record<
  "DEFAULT" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none",
  string
>;
type Order = Record<
  "first" | "last" | "none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  string
>;
interface RingColor extends Colors {
  DEFAULT: string;
}
type RingOffsetWidth = {
  0: string;
  1: string;
  2: string;
  4: string;
  8: string;
};
interface RingWidth extends RingOffsetWidth {
  DEFAULT: string;
}
type Rotate = Record<
  "0" | "1" | "2" | "3" | "6" | "12" | "45" | "90" | "180",
  string
>;
type Saturate = {
  0: string;
  50: string;
  100: string;
  150: string;
  200: string;
};
type Scale = {
  0: string;
  50: string;
  75: string;
  90: string;
  95: string;
  100: string;
  105: string;
  110: string;
  125: string;
  150: string;
};
interface Translate extends Spacing {
  "1/2": string;
  "1/3": string;
  "2/3": string;
  "1/4": string;
  "2/4": string;
  "3/4": string;
  full: string;
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
type Skew = Record<"0" | "1" | "2" | "3" | "6" | "12", string>;
type Screens = Record<"sm" | "md" | "lg" | "xl" | "2xl" | string, string>;
type TextDecorationThickness = Record<
  "auto" | "from-font" | 0 | 1 | 2 | 4 | 8,
  string
>;
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
  none: string;
  all: string;
  DEFAULT: string;
  colors: string;
  opacity: string;
  shadow: string;
  transform: string;
};
type TransitionTimingFunction = {
  DEFAULT: string;
  linear: string;
  in: string;
  out: string;
  "in-out": string;
};
type WillChange = Record<"auto" | "scroll" | "contents" | "transform", string>;
type ZIndex = Record<"auto" | 0 | 10 | 20 | 30 | 40 | 50, string>;

type ThemeProps = {
  theme: Theme;
};

type AnyRecord = Record<any, string>;
type FlattenedRecord = Record<string, string | null>;
type ThemeFunc<T, U = AnyRecord> = (props: T) => U;

type Theme = {
  accentColor: ThemeFunc<Colors, AccentColor>;
  animation: AnimationType;
  aria: Aria;
  aspectRatio: AspectRatio;
  backdropBlur: ThemeFunc<Blur, BackdropBlur>;
  backdropBrightness: ThemeFunc<Brightness, BackdropBrightness>;
  backdropContrast: ThemeFunc<Contrast, BackdropContrast>;
  backdropGrayscale: ThemeFunc<GrayScale, BackdropGrayscale>;
  backdropHueRotate: ThemeFunc<HueRotate, BackdropHueRotate>;
  backdropInvert: ThemeFunc<Invert, BackdropInvert>;
  backdropOpacity: ThemeFunc<Opacity, BackdropOpacity>;
  backdropSaturate: ThemeFunc<Saturate, BackdropSaturate>;
  backdropSepia: ThemeFunc<Sepia, BackdropSepia>;
  backgroundColor: ThemeFunc<Colors, BackgroundColor>;
  backgroundImage: BackgroundImage;
  backgroundOpacity: ThemeFunc<Opacity, BackgroundOpacity>;
  backgroundPosition: BackgroundPosition;
  backgroundSize: BackgroundSize;
  blur: Blur;
  borderColor: ThemeFunc<Colors, BorderColor>;
  borderOpacity: ThemeFunc<Opacity, BorderOpacity>;
  borderRadius: BorderRadius;
  borderSpacing: ThemeFunc<Spacing, BorderSpacing>;
  borderWidth: BorderWidth;
  boxShadow: BoxShadow;
  boxShadowColor: ThemeFunc<Colors, BoxShadowColor>;
  brightness: Brightness;
  caretColor: ThemeFunc<Colors, CaretColor>;
  colors: ThemeFunc<{ colors: Colors }, Colors>;
  columns: Columns;
  container: {};
  content: Content;
  contrast: Contrast;
  cursor: Cursor;
  divideColor: ThemeFunc<Colors, DivideColor>;
  divideOpacity: ThemeFunc<ThemeProps, DivideOpacity>;
  divideWidth: ThemeFunc<BorderWidth, DivideWidth>;
  dropShadow: DropShadow;
  fill: ThemeFunc<Colors, FillColor>;
  flex: Flex;
  flexBasis: ThemeFunc<ThemeProps, FlexBasis>;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontSizeLineHeight: FontSizeLineHeight;
  fontWeight: FontWeight;
  gap: ThemeFunc<ThemeProps, Gap>;
  gradientColorStops: ThemeFunc<Colors, GradientColorStops>;
  gradientColorStopPositions: GradientColorStopPositions;
  grayscale: GrayScale;
  gridAutoColumns: GridAutoColumns;
  gridAutoRows: GridAutoRows;
  gridColumn: GridColumn;
  gridColumnEnd: GridColumnEnd;
  gridColumnStart: GridColumnStart;
  gridRow: GridRow;
  gridRowEnd: GridRowEnd;
  gridRowStart: GridRowStart;
  gridTemplateColumns: GridTemplateColumns;
  gridTemplateRows: GridTemplateRows;
  height: ThemeFunc<Spacing, Height>;
  hueRotate: HueRotate;
  inset: ThemeFunc<ThemeProps, Inset>;
  invert: Invert;
  keyframes: {};
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  listStyleType: ListStyleType;
  listStyleImage: ListStyleImage;
  margin: ThemeFunc<Spacing, Margin>;
  lineClamp: LineClamp;
  maxHeight: ThemeFunc<Spacing, MaxHeight>;
  maxWidth: ThemeFunc<ThemeProps, MaxWidth>;
  minHeight: MinHeight;
  minWidth: MinWidth;
  objectPosition: ObjectPosition;
  opacity: Opacity;
  order: Order;
  outlineColor: ThemeFunc<Colors, OutlineColor>;
  outlineOffset: OutlineOffset;
  outlineWidth: OutlineWidth;
  padding: ThemeFunc<Spacing, Padding>;
  placeholderColor: ThemeFunc<Colors, PlaceholderColor>;
  placeholderOpacity: ThemeFunc<Opacity, PlaceholderOpacity>;
  ringColor: ThemeFunc<Colors, RingColor>;
  ringOffsetColor: ThemeFunc<Colors, RingOffsetColors>;
  ringOffsetWidth: RingOffsetWidth;
  ringOpacity: ThemeFunc<Opacity, RingOpacity>;
  ringWidth: RingWidth;
  rotate: Rotate;
  saturate: Saturate;
  scale: Scale;
  screens: Screens;
  scrollMargin: ThemeFunc<Spacing, ScrollMargin>;
  scrollPadding: ThemeFunc<Spacing, ScrollPadding>;
  sepia: Sepia;
  skew: Skew;
  space: ThemeFunc<Spacing, Space>;
  spacing: Spacing;
  stroke: ThemeFunc<Colors, Stroke>;
  strokeWidth: StrokeWidth;
  supports: {};
  data: {};
  textColor: ThemeFunc<Colors, TextColor>;
  textDecorationColor: ThemeFunc<Colors, TextDecorationColor>;
  textDecorationThickness: TextDecorationThickness;
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
  willChange: WillChange;
  zIndex: ZIndex;
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
  accentColor: (colors) => {
    return {
      ...colors,
      auto: "auto",
    };
  },
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
  backdropBlur: (blur) => {
    return { ...blur };
  },
  backdropBrightness: (brightness) => {
    return { ...brightness };
  },
  backdropContrast: (contrast) => {
    return { ...contrast };
  },
  backdropGrayscale: (grayscale) => {
    return { ...grayscale };
  },
  backdropHueRotate: (hueRotate) => {
    return { ...hueRotate };
  },
  backdropInvert: (invert) => {
    return { ...invert };
  },
  backdropOpacity: (opacity) => ({ ...opacity }),
  backdropSaturate: (saturate) => ({ ...saturate }),
  backdropSepia: (sepia) => {
    return { ...sepia };
  },
  backgroundColor: (colors) => ({ ...colors }),
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
  backgroundOpacity: (opacity) => opacity,
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
  borderOpacity: (opacity) => ({ ...opacity }),
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
  borderSpacing: (spacing) => ({
    ...spacing,
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
  boxShadowColor: (colors) => ({ ...colors }),
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
  caretColor: (colors) => ({ ...colors }),
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
  divideColor: (colors) => {
    return { ...theme.borderColor(colors) };
  },
  divideOpacity: (opacity) => {
    return { ...theme.borderOpacity(theme.opacity) };
  },
  divideWidth: (borderWidth) => ({ ...borderWidth }),
  dropShadow: {
    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
    DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
    md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
    lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
    xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
    none: "0 0 #0000",
  },
  fill: (colors) => ({
    none: "none",
    ...colors,
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
  gradientColorStops: (colors) => ({ ...colors }),
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
  height: (spacing) => ({
    auto: "auto",
    ...spacing,
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
  margin: (spacing) => ({
    auto: "auto",
    ...spacing,
  }),
  lineClamp: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
  },
  maxHeight: (spacing) => ({
    ...spacing,
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
  outlineColor: (colors) => ({ ...colors }),
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
  padding: (spacing) => {
    return { ...spacing };
  },
  placeholderColor: (colors) => ({ ...colors }),
  placeholderOpacity: (opacity) => ({ ...opacity }),
  ringColor: (colors) => ({
    DEFAULT: colors["blue-100"] || "#3b82f6",
    ...colors,
  }),
  ringOffsetColor: (colors) => ({ ...colors }),
  ringOffsetWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  ringOpacity: (opacity) => ({
    DEFAULT: "0.5",
    ...opacity,
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
  space: (spacing) => spacing,
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
  stroke: (colors) => ({
    none: "none",
    ...colors,
  }),
  strokeWidth: {
    0: "0",
    1: "1",
    2: "2",
  },
  supports: {},
  data: {},
  textColor: (colors) => ({ ...colors }),
  textDecorationColor: (colors) => ({ ...colors }),
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
