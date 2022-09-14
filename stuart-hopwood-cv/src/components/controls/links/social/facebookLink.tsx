/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { IconButton } from "@material-ui/core";
import { FaFacebook } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../../../types";

export function FacebookLink({ color, size, }: SocialButtonLinkProps) {
  return (
    <IconButton
      aria-label="Facebook Profile (Stuart Hopwood)"
      color={color}
      size={size}
      href="https://www.facebook.com/stoo.hopwood"
    >
      <FaFacebook />
    </IconButton>
  );
};
