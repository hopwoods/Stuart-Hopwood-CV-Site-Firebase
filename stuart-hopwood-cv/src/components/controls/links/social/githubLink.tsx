/** @jsxImportSource @emotion/react */
//import React from "react";
import { jsx } from "@emotion/react";
import { IconButton } from "@material-ui/core";
import { FaGithub } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";

export function GithubLink({ color, size, }: SocialButtonLinkProps) {
  return (
    <IconButton aria-label="GitHub Profile (Stuart Hopwood)" color={color} size={size} href="https://github.com/hopwoods">
      <FaGithub />
    </IconButton>
  );
};
