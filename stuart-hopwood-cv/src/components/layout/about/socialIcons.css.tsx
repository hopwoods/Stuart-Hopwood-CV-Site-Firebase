/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";

const theme = useTheme();

export const style = css`
  grid-column: 1 / span 1;
  justify-self: stretch;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(4, 5em);
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  padding: 0;
  margin: 2em 0;
  align-items: center;
  justify-items: center;
  grid-auto-flow: dense;

  .MuiIconButton-root {
    font-size: 4rem;
  }

  .MuiIconButton-colorPrimary:hover {
    background-color: ${theme.Grey6}
  }

`;
