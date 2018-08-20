const avatarSizes = {
  sm: "2rem",
  md: "4rem",
  lg: "8rem"
};

const borders = [0, "1px solid", "2px solid", "3px solid"];

const breakpoints = ["30em", "60em"];

// Color palette.
const primary = "#00609d";
const blue = "#0e6a9c";
const green = "#266f37";
const red = "#a21723";
const yellow = "#c59b25";
const gray = "#909090";
const black = "#000000";
const white = "#ffffff";

export const colors = {
  primary,
  blue,
  green,
  red,
  yellow,
  gray,
  black,
  white,
  text: black,
  background: white
};

export const colorSchemes = {
  primary: {
    bgColor: "primary",
    color: "white"
  },
  blue: {
    bgColor: "blue",
    color: "white"
  },
  green: {
    bgColor: "green",
    color: "white"
  },
  red: {
    bgColor: "red",
    color: "white"
  },
  yellow: {
    bgColor: "yellow",
    color: "black"
  },
  gray: {
    bgColor: "gray",
    color: "black"
  },
  black: {
    bgColor: "black",
    color: "white"
  },
  white: {
    bgColor: "white",
    color: "black"
  }
};

export const fonts = {
  sansSerif:
    "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
  serif: "georgia, times, serif"
};

// http://tachyons.io/docs/typography/scale/
const fontSizes = [
  0,
  "3rem",
  "2.25rem",
  "1.5rem",
  "1.25rem",
  "1rem",
  ".875rem",
  ".75rem"
];

const fontWeights = {
  bold: "bold",
  normal: "normal"
};

// https://tachyons.io/docs/layout/heights/
const heights = [0, "1rem", "2rem", "4rem", "8rem"];

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};

// http://tachyons.io/docs/layout/max-widths/
const maxWidths = [
  0,
  "1rem",
  "2rem",
  "4rem",
  "8rem",
  "16rem",
  "32rem",
  "48rem",
  "64rem",
  "96rem"
];

// http://tachyons.io/docs/layout/spacing/
const space = [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"];

// http://tachyons.io/docs/layout/widths/
const widths = [0, "1rem", "2rem", "4rem", "8rem", "16rem"];

const theme = {
  avatarSizes,
  borders,
  breakpoints,
  colors,
  colorSchemes,
  fonts,
  fontSizes,
  fontWeights,
  heights,
  lineHeights,
  maxWidths,
  space,
  widths
};

export default theme;
