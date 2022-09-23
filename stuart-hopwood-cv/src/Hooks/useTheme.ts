//TODO: Convert to Mui Theme
export type ThemeColors = {
  /** #c9c9c9 */
  text: string;

  /** #999999 */
  subText: string;

  /** #1e1e1e */
  textInverse: string;

  /** #B55C53 */
  primary: string;

  /** #a74c43 */
  primaryShades: string;

  /** #F3F7FA */
  lightShades: string;

  /** #B40542 */
  lightAccent: string;

  /** #252934 */
  darkShades: string;

  /** #910035 */
  darkAccent: string;

  /** #fefefe */
  bodyBackground: string;

  /** rgba(50,50,50, 0.85) */
  navbarBackground: string

  /** rgba(32,32,32, 1) */
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

  /** #bbbbbb */
  labelColour: string;

  /** #dddddd */
  disabledColour: string;

  /** #2F855A */
  toggleColour: string;

  /** #ffffff */
  white: string;

  /** #387D4D */
  green: string;

  /** #D20008 */
  red: string;

  /** #rgba(255, 255, 255, 0.5) */
  tableBackground: string;

  /** #9c0000 */
  danger: string;

  /** #f0a800 */
  warning: string;

  /** #00acf0 */
  info: string;

  /** #000000 */
  black: string;

  /** #FD0151 */
  hotpink: string;
};

export const theme: ThemeColors = {
  text: "#c9c9c9",
  subText: '#999999',
  textInverse: "#1e1e1e",
  primary: "#B55C53",
  primaryShades: "#FD0151",
  lightShades: "#F3F7FA",
  lightAccent: "#B40542",
  darkShades: "#252934",
  darkAccent: "#910035",
  bodyBackground: "rgba(22,22,22,1)",
  navbarBackground: 'rgba(50,50,50,0.85)',
  navbarBorder: 'rgba(32,32,32,1)',
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
  labelColour: "#bbbbbb",
  disabledColour: "#dddddd",
  toggleColour: "#2F855A",
  white: "#ffffff",
  green: "#387D4D",
  red: "#D20008",
  tableBackground: "rgba(255, 255, 255, 0.5)",
  danger: "#9c0000",
  warning: "#f0a800",
  info: "#00acf0",
  black: "#000000",
  hotpink: "#FD0151",
};

export function useTheme(): ThemeColors {
  return theme;
}
