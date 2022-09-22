import { IconButton } from "@mui/material";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";
import { iconVariants } from "../../../layout/about/socialIcons";

export function InstagramLink({ color, size, }: SocialButtonLinkProps) {
  return <LazyMotion features={domAnimation}>
    <m.div variants={iconVariants}>
      <IconButton aria-label="Instagram Profile (Stuart Hopwood)" color={color} size={size} href="https://www.instagram.com/stoo.hopwood/">
        <FaInstagram />
      </IconButton></m.div>
  </LazyMotion>;
};
