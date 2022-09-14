export type ThemeColors = {
  /** #2e2e2e */
  text: string;

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

  /** #909090 */
  Grey1: string;

  /** #a5a5a5 */
  Grey2: string;

  /** #bfbfbf */
  Grey3: string;

  /** #c0c0c0 */
  Grey4: string;

  /** #d5d5d5 */
  Grey5: string;

  /** #efefef */
  Grey6: string;

  /** #f0f0f0 */
  Grey7: string;

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

const theme: ThemeColors = {
  text: "#2e2e2e",
  textInverse: "#1e1e1e",
  primary: "#B55C53",
  primaryShades: "#FD0151",
  lightShades: "#F3F7FA",
  lightAccent: "#B40542",
  darkShades: "#252934",
  darkAccent: "#910035",
  bodyBackground: "#FEFEFE",
  Grey1: "#909090",
  Grey2: "#a5a5a5",
  Grey3: "#bfbfbf",
  Grey4: "#c0c0c0",
  Grey5: "#d5d5d5",
  Grey6: "#efefef",
  Grey7: "#f0f0f0",
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
