/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { style } from "./adminMenuLink.css";
type LinkProps = {
  to: string
  value: string
  children: ReactNode
};

export function AdminMenuLink({ to, value, children }: LinkProps) {
  return (
    <span css={style}>
      {children}
      <NavLink to={to}>{value}</NavLink>
    </span>
  );
};
