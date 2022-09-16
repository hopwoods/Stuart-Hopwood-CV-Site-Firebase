import { ReactNode } from "react";
import { classes } from "./footer.css";

export function Footer({ children }: { children?: ReactNode }) {
  const GetYear = () => {
    var date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className={classes.footer}>
      &copy; Stuart Hopwood {GetYear()}
      {children}
    </footer>
  );
};
