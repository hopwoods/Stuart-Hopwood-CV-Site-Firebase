import { HashLink } from "react-router-hash-link";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from "@mui/material";

type ScrollToTopButtonProps = {
  color: "primary" | "secondary" | "default" | "inherit" | undefined;
};

export function ScrollToTopButton({ color }: ScrollToTopButtonProps) {
  return (
    <IconButton
      aria-label="scroll to top"
      color={color}
      size="medium"
      component={HashLink}
      to="/#top"
      smooth
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;
