/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./container.css";

export const Container: React.FC = ({ children }) => {
  return <div css={style}>{children}</div>;
};
