import { useCallback, useEffect, useState } from "react"
import { useWindowSize } from "../../../Hooks/"
import { useGlobalStore } from "../../../state"
import { NavBarLink, NavBarLogoutLink } from "../../controls"
import { classes } from "./navbar.css"

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const size = useWindowSize()
  const { isAuthenticated } = useGlobalStore()

  const handleScroll = useCallback(() => {
    const offset = window.scrollY
    if (offset > size.height + 55) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [size.height])

  useEffect(() => { window.addEventListener("scroll", handleScroll) }, [handleScroll, scrolled])

  let navBarScrolledStateClass
  if (scrolled) {
    navBarScrolledStateClass = "scrolled"
  } else {
    navBarScrolledStateClass = ""
  }

  return (
    <nav id="NavBar" className={`${navBarScrolledStateClass} ${classes.navbar}`}>
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
  )
}
