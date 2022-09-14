/** @jsxImportSource @emotion/react */
//import React from "react";
import { jsx } from "@emotion/react";
import { IconButton } from "@material-ui/core";
import { FaInstagram } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";

export function InstagramLink({ color, size, }: SocialButtonLinkProps) {
  return (
    <IconButton aria-label="Instagram Profile (Stuart Hopwood)" color={color} size={size} href="https://www.instagram.com/stoo.hopwood/">
      <FaInstagram />
    </IconButton>
  );
};
