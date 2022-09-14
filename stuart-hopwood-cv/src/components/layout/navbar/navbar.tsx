/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { jsx } from "@emotion/react";
import { NavBarLink, NavBarLogoutLink } from "../../controls";
import { style } from "./navbar.css";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../../Hooks/";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const [scrolled, setScrolled] = useState(false);
  const size = useWindowSize();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > size.height + 55) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [size.height]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll, scrolled]);

  let navBarScrolledStateClass;
  if (scrolled) {
    navBarScrolledStateClass = "scrolled";
  } else {
    navBarScrolledStateClass = "";
  }

  return (
    <nav css={style} id="NavBar" className={navBarScrolledStateClass}>
      <ul role="menubar">
        <li>
          <NavBarLink isHashLink={true} to="/#home" value="Home" />
        </li>
        <li>
          <NavBarLink isHashLink={true} to="/#about" value="About" />
        </li>
        <li>
          <NavBarLink isHashLink={true} to="/#experience" value="Experience" />
        </li>
        <li>
          <NavBarLink isHashLink={true} to="/#education" value="Education" />
        </li>
        <li>
          <NavBarLink isHashLink={true} to="/#contact" value="Contact" />
        </li>
        <li>
          {isAuthenticated
            ? <NavBarLink isHashLink={false} to="/admin" value="Admin" />
            : <NavBarLink isHashLink={false} to="/login" value="Login" />
          }
        </li>
        {isAuthenticated
          ? <li><NavBarLogoutLink value="Logout" /></li>
          : null
        }
      </ul>
    </nav>
  );
};
