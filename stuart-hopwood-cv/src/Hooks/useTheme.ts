//TODO: Convert to Mui Theme
export type ThemeColors = {
  /** #c9c9c9 */
  text: string;

  /** #999999 */
  subText: string;

  /** #1e1e1e */
  textInverse: string;

  /** #8ecae6 */
  brandLight: string

  /** #219ebc */
  brandMedium: string

  /** #023047 */
  brandDark: string

  /** #fb8500 */
  brandAccentColor: string

  /** #rgba(0,16,32,1) */
  bodyBackground: string;

  /** #023047 */
  navbarBackground: string

  /** #023047 */
  navbarBackgroundScrolled: string

  /** #fb8500 */
  navbarBorder: string

  /** #222222 */
  Grey1: string;

  /** #303030 */
  Grey2: string;

  /** #404040 */
  Grey3: string;

  /** #505050 */
  Grey4: string;

  /** #606060 */
  Grey5: string;

  /** #707070 */
  Grey6: string;

  /** #808080 */
  Grey7: string;

  /** #909090 */
  Grey8: string;

  /** #a5a5a5 */
  Grey9: string;

  /** #bfbfbf */
  Grey10: string;

  /** #c0c0c0 */
  Grey11: string;

  /** #d5d5d5 */
  Grey12: string;

  /** #efefef */
  Grey13: string;

  /** #f0f0f0 */
  Grey14: string;

  /** #dddddd */
  disabledColour: string;

  /** #387D4D */
  green: string;

  /** #D20008 */
  red: string;

  /** #9c0000 */
  danger: string;

  /** #f0a800 */
  warning: string;

  /** #00acf0 */
  info: string;

  /** #ffffff */
  white: string;
  /** #000000 */
  black: string;
};

export const theme: ThemeColors = {
  text: "#c7c7c7",
  subText: '#999999',
  textInverse: "#1e1e1e",

  brandLight: '#8ecae6',
  brandMedium: '#219ebc',
  brandDark: '#023047',
  brandAccentColor: "#fb8500",

  bodyBackground: "rgba(0,16,32,1)",
  navbarBackground: '#023047',
  navbarBackgroundScrolled: '#023047',
  navbarBorder: '#fb8500',
  Grey1: "#222222",
  Grey2: "#303030",
  Grey3: "#404040",
  Grey4: "#505050",
  Grey5: "#606060",
  Grey6: "#707070",
  Grey7: "#808080",
  Grey8: "#909090",
  Grey9: "#a5a5a5",
  Grey10: "#bfbfbf",
  Grey11: "#c0c0c0",
  Grey12: "#d5d5d5",
  Grey13: "#efefef",
  Grey14: "#f0f0f0",
  disabledColour: "#dddddd",
  white: "#ffffff",
  green: "#387D4D",
  red: "#D20008",
  danger: "#9c0000",
  warning: "#f0a800",
  info: "#00acf0",
  black: "#000000",
};

export function useTheme(): ThemeColors {
  return theme;
}
