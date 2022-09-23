
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
      <span className={classes.navBarLink}>
        {isHashLink ? (
          <HashLink smooth to={to}>
            {value}
          </HashLink >
        ) : (
          <NavLink to={to}>{value}</NavLink>
        )}
      </span>
    </React.Fragment>
  );
};
