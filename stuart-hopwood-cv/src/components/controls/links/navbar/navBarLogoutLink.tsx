/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx } from "@emotion/react";
import { style } from "./navBarLogoutLink.css";

type LinkProps = {
  //Value to displayed on screen
  value: string;
};
export function NavBarLogoutLink({ value }: LinkProps) {
  //const { logout } = useAuth0();

  //TODO Use Firebase Auth to logout onclick
  return (
    <React.Fragment>
      <span css={style}>
        {value}
      </span>
    </React.Fragment>
  );
};
