/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";

const theme = useTheme();

export const contentStyle = css`
  grid-area: content;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 0em;
  min-height: 64.6vh;  
  justify-self: stretch;
  background-color: ${theme.primaryShades}

`;
