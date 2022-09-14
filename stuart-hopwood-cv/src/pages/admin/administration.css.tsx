/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../Hooks";

const themeColors = useTheme();
export const grid = css`
  background-color: ${themeColors.white};
  grid-column: 1 / span 1;
  padding: 0;
  display: grid;
  grid-template-columns: 0.34fr 0.4fr;
  grid-template-rows: auto;
  grid-gap: 5rem;
  justify-self: stretch;
  justify-items: start;
  align-self: stretch;  
  align-items: start;

  a {
    color: ${themeColors.darkAccent};
    text-decoration: none;

    &:hover {
      color: ${themeColors.hotpink};
    }
  }
`;
