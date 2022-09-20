import { Fade } from "react-reveal";
import { TriangleDown } from "../components/layout";
import { Badges } from "../components/layout/about/badges";
import { Profile } from "../components/layout/about/profile";
import { Skills } from "../components/layout/about/skills";
import { useTheme } from "../Hooks";
import { materialTheme } from "../style";
import { classes } from "./About.css";

const theme = useTheme();

//TODO: Fix Animations

export function About() {
  return (
    <div id="about" className={classes.about}>
      <Fade left big>
      </Fade>
      <Badges />
      <Profile />
      <Skills />
      <TriangleDown color={materialTheme.palette.secondary.main} backgroundColor={materialTheme.palette.primary.main} />
    </div>
  );
};
