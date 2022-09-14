/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";
import { FontFamilies } from "../../../style";

const themeColors = useTheme();
export const style = css`
grid-area: footer;
justify-self: stretch;
background-color: ${themeColors.Grey1};
border-top: 3px solid ${themeColors.darkShades};
color: ${themeColors.white};
padding: 0.4em;
font-size: 0.9em;
font-family: ${FontFamilies.primary}
font-weight: 300;
`;
