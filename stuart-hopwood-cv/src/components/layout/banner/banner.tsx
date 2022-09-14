/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import { style } from "./banner.css";

type BannerProps = {
  id: string;
  fullscreen: boolean;
  children: ReactNode
};

export function Banner({ id, fullscreen, children }: BannerProps) {
  return (
    <article id={id} css={style} className={`${fullscreen ? "fullscreen" : ""}`}>
      {children}
    </article>
  );
};
