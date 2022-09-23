import { TriangleDown } from "../components/layout";
import { Badges } from "../components/layout/about/badges";
import { Profile } from "../components/layout/about/profile";
import { Skills } from "../components/layout/about/skills";
import { materialTheme } from "../style";
import { classes } from "./About.css";

export function About() {
  return (
    <div id="about" className={classes.about}>
      <h1>About</h1>
      <Badges />
      <Profile />
      <Skills />
      <TriangleDown color={materialTheme.palette.secondary.main} backgroundColor={materialTheme.palette.primary.main} />
    </div>
  );
};
