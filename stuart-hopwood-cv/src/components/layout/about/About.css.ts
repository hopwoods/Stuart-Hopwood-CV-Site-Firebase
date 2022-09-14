/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";
import { FontFamilies } from "../../typeography/font-families";

const theme = useTheme();
export const style = css`
  grid-column: 1 / span 2;
  margin: 0;
  padding-top: 7em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  min-height: 100vh;
  height: fit-content;
  justify-self: stretch;
  place-self: start center;
  justify-items: center;
  background-color: ${theme.white};

  h1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    align-self: center;
    justify-self: center;
  }

  h2 {
    font-family: ${FontFamilies.primary}
  }

  div#profile {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;    
  }

  div#skills {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }
`;
