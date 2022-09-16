import { ReactNode } from "react";
import { classes } from "./container.css";

export function Container({ children }: { children?: ReactNode }) {
  return <div className={classes.container}>{children}</div>;
};
