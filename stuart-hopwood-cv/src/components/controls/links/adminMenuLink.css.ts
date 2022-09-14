/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "../../../Hooks";
import { FontFamilies } from "../../../style";

const themeColors = useTheme();

export const style = css`   

  color: ${themeColors.text};
  font-family: ${FontFamilies.primary}  

&:hover {
}
a {
  position: relative;
  top: -0.2rem;
}
a.active {
  color: ${themeColors.hotpink};
}
svg {
  margin-right: 1rem;
}
`;
