import { ReactNode } from "react";
import { classes } from "./banner.css";

type BannerProps = {
  id: string;
  fullscreen: boolean;
  children: ReactNode
};

export function Banner({ id, fullscreen, children }: BannerProps) {
  return (
    <article id={id} className={`${fullscreen ? classes.fullscreen : undefined} ${classes.banner}`}>
      {children}
    </article>
  );
};
