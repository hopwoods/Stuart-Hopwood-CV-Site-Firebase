import { Fade } from "react-reveal";
import { TriangleDown } from "..";
import { useTheme } from "../../../Hooks";
import { materialTheme } from "../../../style";
import { classes } from "./About.css";
import { Badges } from "./badges";
import { Profile } from "./profile";
import { Skills } from "./skills";

const theme = useTheme();

//TODO: Fix Animations
//TODO: Fix Fonts
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
