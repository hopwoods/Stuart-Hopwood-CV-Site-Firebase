/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";

const themeColors = useTheme();
export const style = css`
  grid-column: 1 / span 1;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-gap: 0em;
  height: fit-content;
  justify-items: start;
  justify-self: end;
  align-items: center;

  a {
    color: ${themeColors.darkAccent};
    text-decoration: none;

    &:hover {
      color: ${themeColors.hotpink};
    }
  }
`;

export const drawerStyle = css`
  grid-column: 1 / span 1;  
  height: fit-content;
  width: 100%;
  justify-self: center;    
`;
