/** @jsxImportSource @emotion/react */
//import React from "react";
import { jsx } from "@emotion/react";
import { IconButton } from "@material-ui/core";
import { FaLinkedin } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";

export function LinkedInLink({ color, size }: SocialButtonLinkProps) {
  return (
    <IconButton aria-label="LinkedIn Profile (Stuart Hopwood)" color={color} size={size} href="https://www.linkedin.com/in/stuart-hopwood">
      <FaLinkedin />
    </IconButton>
  );
};
