/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontFamilies } from "../../typeography/font-families";

export const form = css`
  grid-column: 1 / span 1;
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 0em;
  height: fit-content;
  justify-self: stretch;
  justify-items: start;
  align-items: center;

  .Toastify__toast {
    font-family: ${FontFamilies.primary}
    font-size: 1rem;
  }
`;
