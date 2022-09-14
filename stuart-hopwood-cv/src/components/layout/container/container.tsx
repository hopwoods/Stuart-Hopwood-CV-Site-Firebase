/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { style } from "./container.css";

export function Container({ children }: { children?: ReactNode }) {
  return <div css={style}>{children}</div>;
};
