import { IconButton } from "@mui/material";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";
import { iconVariants } from "../../../layout/about/socialIcons";

export function FacebookLink({ color, size, }: SocialButtonLinkProps) {
  return <LazyMotion features={domAnimation}>
    <m.div variants={iconVariants}>
      <IconButton
        aria-label="Facebook Profile (Stuart Hopwood)"
        color={color}
        size={size}
        href="https://www.facebook.com/stoo.hopwood"
      >
        <FaFacebook />
      </IconButton></m.div>
  </LazyMotion>;
};
