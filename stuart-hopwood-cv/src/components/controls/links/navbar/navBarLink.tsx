
import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { classes } from "./navBarLink.css";

export type LinkProps = {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;

  //Is this a link to a component page or a hashlink (section on a page)?
  isHashLink: boolean;
};

export function NavBarLink({ to, value, isHashLink }: LinkProps) {
  return (
    <React.Fragment>
      <span className={classes.navBar}>
        {isHashLink ? (
          <NavHashLink smooth to={to}>
            {value}
          </NavHashLink>
        ) : (
          <NavLink to={to}>{value}</NavLink>
        )}
      </span>
    </React.Fragment>
  );
};
