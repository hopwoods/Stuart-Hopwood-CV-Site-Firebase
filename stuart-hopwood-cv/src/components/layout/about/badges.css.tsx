/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";
import { FontFamilies } from "../../../style";

const themeColors = useTheme();

export const style = css`
margin-top: 5rem;
  grid-column: 1 / span 2;
  grid-row: 2 /span 1;
  padding: 1em;
  color: ${themeColors.text};
  font-size: 2rem;
  justify-self: stretch;
  align-self: stretch;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 0.25fr);
  grid-template-rows: repeat(2, 0.5fr);
  grid-row-gap: 3em;
  justify-items: center;
  align-items: center;
  font-family: ${FontFamilies.secondary};
  font-weight: 100;

`;
