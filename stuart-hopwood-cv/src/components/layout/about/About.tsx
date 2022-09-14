/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./About.css";
import { Profile } from "./profile";
import { Fade } from "react-reveal";
import { Skills } from "./skills";
import { Badges } from "./badges";
import { TriangleDown } from "..";
import { useTheme } from "../../../Hooks";

const theme = useTheme();
export function About() {
  return (
    <div id="about" css={style}>
      <Fade left big>
        <h1>About</h1>
      </Fade>
      <Badges />
      <Profile />
      <Skills />
      <TriangleDown color={theme.white} backgroundColor={theme.primaryShades} />
    </div>
  );
};
