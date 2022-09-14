/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const manageSkills = css`
  grid-column: 2 / span 1;
  grid-row: 1/ span 1;
  justify-self: stretch;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 0em;
  height: fit-content;
  align-items: start;
`;
export const title = css`
  grid-column: 1 / span 1;
  grid-row: 1/ span 1;
  justify-self: stretch;
`;
export const saveButton = css`
display: block;
  margin: 1rem;
  margin-left: 0;
`;

