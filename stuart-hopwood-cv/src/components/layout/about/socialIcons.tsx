/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./socialIcons.css";
import {
  FacebookLink,
  GithubLink,
  InstagramLink,
  LinkedInLink,
} from "../../controls";

export const SocialIcons: React.FC = () => {
  return (
    <div className="socialIcons" css={style}>
      <FacebookLink color="primary" size="medium" />
      <GithubLink color="primary" size="medium" />
      <LinkedInLink color="primary" size="medium" />
      <InstagramLink color="primary" size="medium" />
    </div>
  );
};
