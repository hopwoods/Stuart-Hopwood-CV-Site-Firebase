/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../Hooks";

const themeColors = useTheme();
export const style = css`
  background-color: ${themeColors.white};
  grid-column: 1 / span 1;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0em;
  align-self: stretch;
  justify-self: stretch;
  justify-items: center;
  align-items: start;

  a {
    color: ${themeColors.darkAccent};
    text-decoration: none;

    &:hover {
      color: ${themeColors.hotpink};
    }
  }
`;

export const content = css``;
