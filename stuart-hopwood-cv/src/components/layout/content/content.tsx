/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import { contentStyle } from "./content.css";

export function Content({ children }: { children: ReactNode }) {
  return <article css={contentStyle}>{children}</article>;
};
